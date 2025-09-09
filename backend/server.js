// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Configuración CORS explícita (usa ALLOWED_ORIGIN si está definida)
const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN
    ? process.env.ALLOWED_ORIGIN.split(',').map((s) => s.trim())
    : true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
};

app.use(cors(corsOptions));
// Responder preflight para cualquier ruta
app.options('*', cors(corsOptions));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  
  },
});

app.post('/send-email', async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

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
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});