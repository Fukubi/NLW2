import nodemailer from 'nodemailer';
import { response, Response } from 'express';

export default class Mail {
    async sendMail(request: Request, response: Response) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'deividgabrielproc@gmail.com',
                    pass: 'toti15978' // naturally, replace both with your real credentials or an application-specific password
                }
            });
    
            const mailOptions = {
                from: 'deividgabrielproc@gmail.com',
                to: 'deividgabrielproc@gmail.com',
                subject: 'Recuperar a senha',
                text: 'Testando o envio de email com o js'
            };
    
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return response.send('error');
                } else {
                    console.log('Email sent: ' + info.response);
                    return response.send('Enviado com sucesso!');
                }
            });
        } catch (err) {
            return response.send('error');
        }
    }
}