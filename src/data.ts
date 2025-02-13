
import img_1 from "./assets/school/images/1.jpg";
import img_2 from "./assets/school/images/2.jpg";
import img_3 from "./assets/school/images/3.jpg";
import img_4 from "./assets/school/images/4.jpg";

import ed1 from "./assets/school/images/1.jpg";
import ed8 from "./assets/school/images/8.jpg";
import ed11 from "./assets/school/images/11.jpg";
import ed12 from "./assets/school/images/12.jpg";
import ed37 from "./assets/school/vids/37.mp4";
import ed36 from "./assets/school/vids/36.mp4";

import { FooterContent } from "./content";

export const features = [
  {
    id: 1,
    name: FooterContent.educations.approaches[0].name,
    img: ed1,
    desc: FooterContent.educations.approaches[0].description,
    isImage: true,
  },
  {
    id: 2,
    name: FooterContent.educations.approaches[1].name,
    img: ed37,
    desc: FooterContent.educations.approaches[1].description,
    isImage: false,
  },
  {
    id: 3,
    name: FooterContent.educations.approaches[2].name,
    img: ed8,
    desc: FooterContent.educations.approaches[2].description,
    isImage: true,
  },
  {
    id: 4,
    name: FooterContent.educations.approaches[3].name,
    img: ed12,
    desc: FooterContent.educations.approaches[3].description,
    isImage: true,
  },
  {
    id: 5,
    name: FooterContent.educations.approaches[4].name,
    img: ed36,
    desc: FooterContent.educations.approaches[4].description,
    isImage: false,
  },
  {
    id: 6,
    name: FooterContent.educations.approaches[5].name,
    img: ed11,
    desc: FooterContent.educations.approaches[5].description,
    isImage: true,
  },
];

export const homePageImages = [
  {
    id: 1,
    img: img_1,
    motto: "Geleceğin nesillerini yetiştiriyoruz...",
  },
  {
    id: 2,
    img: img_2,
    motto: "Altınbaşak Çocuk Akademi olarak eğitimi oyun haline getiriyoruz.",
  },
  {
    id: 3,
    img: img_3,
    motto: "Çocuklarımızın geleceğe en iyi şekilde hazırlanmasını sağlayan bir eğitim sunuyoruz.",
  },
  {
    id: 4,
    img: img_4,
    motto: "Çocuklarımızı güçlü bir şekilde destekliyoruz.",
  }
];
