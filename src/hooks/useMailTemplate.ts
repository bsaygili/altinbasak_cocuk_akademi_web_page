import React from 'react'

const useMailTemplate = () => {

    const generateMailTemplate = (data: any) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Görüşme Talebi</title>
            <style>
        /* Reset styles */
            body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            }

        /* Container */
            .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            }

        /* Header */
            .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: white;
            }

        /* Content */
            .content {
            padding: 20px;
            background-color: white;
            }

        /* Footer */
            .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777;
            background-color: #f1f1f1;
            }

        /* Links */
            a {
            color: #4CAF50;
            text-decoration: none;
            }

            a:hover {
            text-decoration: underline;
            }

        /* Responsive */
            @media screen and (max-width: 600px) {
                .email-container {
                width: 100%;
                padding: 10px;
                }
            }
            </style>
        </head>
    <body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>Altın Başak Çocuk Akademi</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <h2>Altın Başak Çocuk Akademi</h2>
            <p>Aşağıda bilgisi verilen velimiz ${data.subject ?? "kayıt görüşmesi"} hakkında randevu talep ediyor.</p>
            <p>Bilgiler:</p>
            <ul>
                <li>Ad-Soyad: ${data.nameSurname}</li>
                <li>E-posta: ${data.email}</li>
                <li>Telefon Numarası: ${data.phoneNumber}</li>
                <li>Konu: ${data.subject}</li>
                <li>Mesaj: ${data.message}</li>
            </ul>
            <p>Yönetici olarak yardıma ihtiyacınız oldugunu düşünüyorsanız çekinmeden mail <a href="mailto:bhdrsaygili@gmail.com"> atabilirsiniz</a>.</p>
            <p>İyi Çalışmalar,<br>bsaygili</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Bu mail altinbasakcocukakademi.com üzerindeki bağlantıdan gönderilmiştir.</p>
            <p>&copy; 2024 bsaygili. All rights reserved.</p>
        </div>
    </div>
    </body>
    </html>`
    }
    return { generateMailTemplate }
}

export default useMailTemplate;


