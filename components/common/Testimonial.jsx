"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import testimonialData from "../../data/testimonialData";
import round_shape from "/public/images/elements/round-shape.png";

// css
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  const settings = {
    autoplay: true,
    speed: 700,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <section className="has-bg--shape pt-120 pb-120">
      <div className="bg-shape">
        <div className="round-shape d-sm-block d-none">
          <Image src={round_shape} alt="imagem" />
        </div>
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
        <div className="shape-5"></div>
        <div className="shape-6"></div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-header text-center">
              <span className="section-sub-title">Depoimentos</span>
              <h2 className="section-title">
                Nossos Clientes Satisfeitos ao Redor do Mundo
              </h2>
              <p>
                Com mais de 12 anos de experiência como o principal provedor de serviços de loteria online do mundo. Descubra o que nossos membros têm a dizer sobre nós!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-area bg_img">
              <Slider {...settings} className="testimonial-slider">
                {testimonialData.map((itm, i) => (
                  <div key={itm.id} className="testimonial-single">
                    <div className="testimonial-single__thumb">
                      <Image src={itm.img} alt="imagem" />
                    </div>
                    <div className="testimonial-single__content">
                      <h4 className="client-name">{itm.name}</h4>
                      <p>{itm.comment}</p>
                      <div className="ratings">
                        {[...Array(5)].map((_, i) => (
                          <i key={i}>
                            <FaStar />
                          </i>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
