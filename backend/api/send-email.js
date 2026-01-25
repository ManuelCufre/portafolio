import nodemailer from 'nodemailer';
import cors from 'cors';

const corsHandler = cors({
  origin: 'https://portafolio-manuelcufre.vercel.app',
  methods: ['POST', 'OPTIONS'],
});

export default function handler(req, res) {
  corsHandler(req, res, async () => {

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }

    const { nombre, email, asunto, mensaje } = req.body;

    if (!nombre || !email || !asunto || !mensaje) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios',
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

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

      res.status(200).json({ ok: true });

    } catch (error) {
      res.status(500).json({
        error: 'Error al enviar el mensaje',
        details: error.message,
      });
    }
  });
}
