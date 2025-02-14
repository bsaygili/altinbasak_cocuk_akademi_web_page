import "./contact.scss";
import * as Icons from "@mui/icons-material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FooterContent } from "../../content";
import { CategoryBar, IconTag } from "../../components";
import bg_contact from "../../assets/common/bg_contact.jpg";
import useMailGun from "../../hooks/useMailGun.js";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";


const contactInfo = [
  {
    icon: "LocalPhone",
    title: "Telefon",
    content: FooterContent.phone.mobile,
  },
  {
    icon: "Fax",
    title: "Sabit Telefon",
    content: FooterContent.phone.landlinephone,
  },
  {
    icon: "Email",
    title: "E-Posta",
    content: FooterContent.email,
  },
  {
    icon: "LocationOn",
    title: "Adres",
    content: FooterContent.address,
  },
];

type ContactInputs = {
  nameSurname: string,
  phoneNumber: string,
  email: string,
  subject: string,
  message: string,
};

const Contact: React.FC = () => {
  const [icon, setIcon] = useState(<IconTag iconKey="Telegram" />);
  const [btn, setBtn] = useState("Gönder");
  const [btnState, setBtnState] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState<{
    isOpen: boolean;
    message: string;
    severity: "success" | "error" | "warning" | "info";
  }>({
    isOpen: false,
    message: "",
    severity: "success",
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInputs>();

  const { sendSimpleMessage } = useMailGun()
  const onSubmit: SubmitHandler<ContactInputs> = data => {

    if (!Object.values(data).every((item) => item !== "")) {
      setSnackbarOpen({
        isOpen: true,
        message: "Lütfen tüm alanları doldurunuz!",
        severity: "error",
      });
      return;
    } else {
      setBtnState(true);
      setIcon(<IconTag iconKey="Workspaces" />);
      setBtn("Gönderiliyor..");
      sendSimpleMessage(data).then(() => {
        reset();
        setBtnState(false);
        setIcon(<IconTag iconKey="Telegram" />);
        setBtn("Gönder");
        setSnackbarOpen({
          isOpen: true,
          message: "Mesajınız başarıyla gönderildi!",
          severity: "success",
        });
      });
    }
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen({
      isOpen: false,
      message: "",
      severity: snackbarOpen.severity,
    });
  };



  return (
    <div className="contact-page-container">
      <div className="contact-page-background-container">
        <div className="description-container">
          <h1>GELECEĞE YÖN VERMEK İÇİN</h1>
          <h1>BİZİMLE İLETİŞİME GEÇİN</h1>
        </div>
        <div className="contact-page-background">
          <img src={bg_contact} alt="altinbasak_contact" />
        </div>
      </div>
      <div className="category-bar">
        <CategoryBar data={[
          {
            categoryName: "Anasayfa",
            link: "/",
            styleCss: {
              textDecoration: "none",
              color: "#aaa",
              padding: "0px 20px",
              borderRight: "1px solid #aaa",
              outline: "none",
            }
          },
          {
            categoryName: "İletişim",
            link: "/iletisim",
            styleCss: {
              textDecoration: "none",
              color: "#aaa",
              padding: "0px 20px",
              outline: "none",
            }
          },
        ]} />
      </div>
      <div className="contact-info-container">
        <div className="contact-info-static">
          <h2>İLETİŞİM BİLGİLERİMİZ</h2>
          {
            contactInfo.map((item, index) => {
              return (
                <div key={index} className="contact-info-item">
                  <div className="icon">
                    <IconTag iconKey={item.icon as keyof typeof Icons} fontSize="large" />
                  </div>
                  <div className="info">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Görüşme Formu</h2>
            <div className="form-input-container">
              <div className="input-box">
                <input className="input-item" placeholder="Adınız/Soyadınız" {...register("nameSurname")} />
                {errors.nameSurname && <span>Lütfen Adınızı/Soyadınızı giriniz!</span>}
              </div>
              <div className="input-box">
                <input className="input-item" placeholder="Telefon numaranız" {...register("phoneNumber")} />
                {errors.phoneNumber && <span>Başında sıfır olmadan 10 haneli olarak giriniz!</span>}
              </div>
              <div className="input-box">
                <input className="input-item" placeholder="E-Posta adresiniz" {...register("email")} />
                {errors.email && <span>Lütfen geçerli bir e-mail adresi giriniz!</span>}
              </div>
              <div className="input-box">
                <input className="input-item" placeholder="Konu" {...register("subject")} />
                {errors.subject && <span>Lütfen konuyu giriniz</span>}
              </div>
              <textarea rows={10} placeholder="Mesajınız" {...register("message")} />
              {errors.message && <span>Lütfen mesajınızı giriniz</span>}
            </div>
            <button type="submit">
              <span className={"icons " + (btnState && "fullTour")}>
                {icon}
              </span>
              {btn}
            </button>
          </form>
        </div>
      </div >
      <div className="address">
        <iframe
          title="Altınbaşak Çocuk Akademi Konumu"
          width="100%"
          height="500"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.9213967644102!2d28.96998912591521!3d41.05790792836375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab79e52423d73%3A0xd218da2a896f701b!2zxZ5pxZ9saSDDtnplbCBBbHTEsW5iYcWfYWsgQW5hb2t1bHU!5e0!3m2!1str!2str!4v1733870483020!5m2!1str!2str"
        />
      </div>
      <Snackbar open={snackbarOpen.isOpen} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbarOpen.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarOpen.message}
        </Alert>
      </Snackbar>
    </div >
  );
};

export default Contact;
