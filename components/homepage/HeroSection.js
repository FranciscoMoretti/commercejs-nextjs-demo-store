import React from "react";
import { Autoplay, EffectFade, Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import home_1 from "../../public/images/home-1.jpg";
import home_2 from "../../public/images/home-2.jpg";
import home_3 from "../../public/images/home-3.jpg";
import home_4 from "../../public/images/home-4.jpg";

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};
const images = [home_1, home_2, home_3, home_4];

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="hero-section position-relative">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5">
              <div className="bg-wrap">
                <Image src={image} alt="Picture of the author" layout="fill" objectFit="cover" />
              </div>

              <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                CALIDAD Y TRADICIÓN
              </p>
              <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                Variedad de quesos para vos
              </p>
              <Link href="/products">
                <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                  Explorar productos
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
