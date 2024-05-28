import Image from "next/image";
import play_el from "/public/images/elements/play-el.png";
import play_1 from "/public/images/icon/play/1.png";
import play_2 from "/public/images/icon/play/2.png";
import play_3 from "/public/images/icon/play/3.png";

const HowToPlay = () => {
  return (
    <section className="position-relative z-index-two pt-120 pb-120 overflow-hidden">
      <div className="play-elements">
        <Image src={play_el} alt="image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-sm-start text-center">
            <div className="section-header">
              <span className="section-sub-title">Precisa saber sobre</span>
              <h2 className="section-title">Como Jogar</h2>
              <p>Siga estes 3 passos fáceis!</p>
            </div>
          </div>
        </div>
        <div className="row mb-none-30 justify-content-xl-start justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--one bg_img">
              <div className="play-card__icon">
                <Image src={play_1} alt="image-icon" />
                <span className="play-card__number">01</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Escolha</h3>
                <p>Registre-se no RIFA e escolha seu sorteio</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--two bg_img">
              <div className="play-card__icon">
                <Image src={play_2} alt="image-icon" />
                <span className="play-card__number">02</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Compra</h3>
                <p>Escolha seus números e conclua sua compra</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--three bg_img">
              <div className="play-card__icon">
                <Image src={play_3} alt="image-icon" />
                <span className="play-card__number">03</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Ganhe</h3>
                <p>Continue a sonhar, você está quase lá!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
