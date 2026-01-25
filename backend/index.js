import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://portafolio-manuelcufre.vercel.app',
  methods: ['POST', 'OPTIONS', 'GET'],
  credentials: true
}));

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Backend is running' });
});

// Ruta para enviar email
app.post('/api/send-email', async (req, res) => {
  try {
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    const { nombre, email, asunto, mensaje } = req.body;

    // Validación
    if (!nombre || !email || !asunto || !mensaje) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios',
      });
    }

    // Configurar transporte de email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar email
    await transporter.sendMail({
      from: `"${nombre}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: asunto,
      html: `
        <h3>Nuevo mensaje desde el portafolio</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    res.status(200).json({ 
      ok: true,
      message: 'Correo enviado exitosamente' 
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({
      error: 'Error al enviar el mensaje',
      details: error.message,
    });
  }
});

// Exportar para Vercel
export default app;
