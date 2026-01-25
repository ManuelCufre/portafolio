import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, email, asunto, mensaje } = req.body;

  // Validación básica
  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios',
    });
  }

  // Verificar variables de entorno
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      error: 'Variables de entorno EMAIL_USER o EMAIL_PASS no configuradas',
    });
  }

  try {
    // 🔹 Transporter CORRECTO
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // 🔹 Enviar email
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

    return res.status(200).json({
      ok: true,
      message: 'Mensaje enviado con éxito ✅',
    });
  } catch (error) {
    console.error('Error enviando email:', error);

    return res.status(500).json({
      error: 'Error al enviar el mensaje',
      details: error.message,
    });
  }
}
