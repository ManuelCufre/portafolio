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

// Ruta de prueba para email (sin enviar realmente)
app.get('/test-email', (req, res) => {
  const transporter = createTransporter();
  
  res.status(200).json({ 
    message: 'Email test endpoint',
    transporterAvailable: !!transporter,
    emailUser: process.env.EMAIL_USER ? 'configured' : 'not configured',
    emailPass: process.env.EMAIL_PASS ? 'configured' : 'not configured',
    nodeEnv: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Función para crear transporter (se ejecuta en cada request)
function createTransporter() {
  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require('nodemailer');
      return nodemailer.createTransporter({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,  
          pass: process.env.EMAIL_PASS,  
        },
      });
    }
    return null;
  } catch (error) {
    console.error('Error creando transporter:', error);
    return null;
  }
}

app.post('/send-email', async (req, res) => {
  console.log('POST /send-email recibido');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  try {
    // Crear transporter en cada request
    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({ 
        error: 'Servicio de email no configurado. Verifica las variables de entorno EMAIL_USER y EMAIL_PASS.' 
      });
    }

    const { nombre, email, asunto, mensaje } = req.body;
    console.log('Datos recibidos:', { nombre, email, asunto, mensaje });

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      console.log('Validación fallida - campos faltantes');
      return res.status(400).json({ 
        error: 'Todos los campos son obligatorios',
        received: { nombre: !!nombre, email: !!email, asunto: !!asunto, mensaje: !!mensaje }
      });
    }

    console.log('Intentando enviar email...');
    
    const mailOptions = {
      from: `"${nombre}" <${email}>`,
      to: process.env.EMAIL_USER, 
      subject: `${asunto}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    };

    console.log('Mail options:', { ...mailOptions, to: '[HIDDEN]' });
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email enviado exitosamente:', result.messageId);

    res.status(200).json({ message: 'Mensaje enviado con éxito ✅' });
  } catch (error) {
    console.error('Error completo en /send-email:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Error al enviar el mensaje',
      details: error.message,
      type: error.name
    });
  }
});

// En Vercel Serverless se exporta la app
module.exports = app;