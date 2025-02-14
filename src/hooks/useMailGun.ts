
import FormData from 'form-data';
import Mailgun from 'mailgun-compiled-with-vite';
import useMailTemplate from './useMailTemplate';

const useMailGun = () => {

    const { generateMailTemplate } = useMailTemplate()
    async function sendSimpleMessage(mailData: { [key: string]: string }) {
        const mailgun = new Mailgun(FormData);
        const mg = mailgun.client({
            username: "api",
            key: import.meta.env.VITE_APP_MAILGUN_API_KEY,
        });
        try {
            const data = await mg.messages.create(import.meta.env.VITE_APP_MAILGUN_DOMAIN, {
                from: "bhdrsaygili@gmail.com",// || email,
                to: ["bhdrsaygili@gmail.com"],
                subject: mailData.subject,
                text: mailData.message,
                html: generateMailTemplate(mailData)

            });

        } catch (error) {
            throw new Error("Mail gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    }

    return { sendSimpleMessage }
}

export default useMailGun

