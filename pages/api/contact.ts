import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    
    const { 
      name,
      email,
      company,
      number,
      message
    }  = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send the email
    const info = await transporter.sendMail({
      from: 'portfoliogg-contact@geekguysstudio.com',
      to: process.env.MAILTO,
      subject: `${name} send you a message, lets link!`,
      html: `
        <html>
          <head>
            <title>PortfolioGG contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #191D20; text-align: center;  padding: 20px">
            <img src="https://storage.googleapis.com/ritme-posts/Logo.png" alt="PortfolioGG" width="100" height="100" style="margin: auto;"/>
            <div style="width: 600px; margin: 0 auto; background-color: #0c0e10;">
              <h1 style="font-size: 30px;background: #007aff; margin-bottom: 20px;color: #f0f0f0;padding: 20px 0px;">Submission in your profile</h1>
              <div style="padding: 20px;">
                <p style="font-size: 18px; margin-bottom: 20px; color: #f0f0f0;">
                  <strong style="color: #f0f0f0;">Name:</strong> ${name}<br>
                  <strong style="color: #f0f0f0;">Email:</strong> ${email}<br>
                  <strong style="color: #f0f0f0;">Company:</strong> ${company}<br>
                  <strong style="color: #f0f0f0;">Number:</strong> ${number}<br>
                  <strong style="color: #f0f0f0;">Message:</strong> ${message}<br>
                </p>
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #dddddd;">
                  <p style="font-size: 14px; color: #cbcbcb;">This is an automated email. Please do not reply.</p>
                  <p style="font-size: 14px; color: #cbcbcb;">
                    <a href="#" style="color: #cbcbcb;">PortfolioGG</a> | <a href="#" style="color: #cbcbcb;">Geek Guys Studio</a>
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return res.status(200).json({
      message: 'Email sent successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Failed to send email',
      error: error.message,
    });
  }
}