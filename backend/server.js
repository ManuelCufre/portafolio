// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Configuración CORS básica
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Ruta de salud básica
app.get('/', (req, res) => {
  res.status(200).json({ 
    ok: true, 
    message: 'Backend operativo',
    env: {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      allowedOrigin: process.env.ALLOWED_ORIGIN || 'any'
    }
  });
});

// Ruta de prueba sin dependencias
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test route working' });
});

// Inicializar nodemailer solo si las variables están disponibles
let transporter = null;
try {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const nodemailer = require('nodemailer');
    transporter = nodemailer.createTransporter({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });
    console.log('Nodemailer inicializado correctamente');
  } else {
    console.log('Variables de email no configuradas');
  }
} catch (error) {
  console.error('Error inicializando nodemailer:', error);
}

app.post('/send-email', async (req, res) => {
  // Verificar si nodemailer está disponible
  if (!transporter) {
    return res.status(500).json({ 
      error: 'Servicio de email no configurado. Verifica las variables de entorno.' 
    });
  }

  const { nombre, email, asunto, mensaje } = req.body;

  // Validación básica
  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({ 
      error: 'Todos los campos son obligatorios' 
    });
  }

  try {
    await transporter.sendMail({
      from: `"${nombre}" <${email}>`,
      to: process.env.EMAIL_USER, 
      subject: `${asunto}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    res.status(200).json({ message: 'Mensaje enviado con éxito ✅' });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ 
      error: 'Error al enviar el mensaje',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// En Vercel Serverless se exporta la app
module.exports = app;