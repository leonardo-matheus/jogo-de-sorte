import Image from "next/image";
import map from "/public/images/elements/map.png";
import overview_obj_1 from "/public/images/elements/overview-obj-1.png";
import overview_obj_2 from "/public/images/elements/overview-obj-2.png";
import overview_obj_3 from "/public/images/elements/overview-obj-3.png";
import overview_obj_4 from "/public/images/elements/overview-obj-4.png";
import overview_1 from "/public/images/icon/overview/1.png";
import overview_2 from "/public/images/icon/overview/2.png";
import overview_3 from "/public/images/icon/overview/3.png";

const Overview = () => {
  return (
    <section className="overview-section pt-120">
      <div className="map-el">
        <Image src={map} alt="imagem" />
      </div>
      <div className="obj-1">
        <Image src={overview_obj_1} alt="imagem" />
      </div>
      <div className="obj-2">
        <Image src={overview_obj_2} alt="imagem" />
      </div>
      <div className="obj-3">
        <Image src={overview_obj_3} alt="imagem" />
      </div>
      <div className="obj-4">
        <Image src={overview_obj_4} alt="imagem" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-header text-center">
              <span className="section-sub-title">
                Nossos Usuários ao Redor do Mundo
              </span>
              <h2 className="section-title">Deixe os números falarem por nós</h2>
              <p>
                Ao longo dos anos, fornecemos milhões de jogadores com ingressos
                para loterias em todo o mundo e tivemos mais de um milhão de vencedores
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-pointer">
        <div className="pointer num-1"></div>
        <div className="pointer num-2"></div>
        <div className="pointer num-3"></div>
        <div className="pointer num-4"></div>
        <div className="pointer num-5"></div>
        <div className="pointer num-6"></div>
        <div className="pointer num-7"></div>
        <div className="pointer num-8"></div>
        <div className="pointer num-9"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center mb-none-30">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="overview-card hover--effect-1">
              <div className="overview-card__icon">
                <Image src={overview_1} alt="overview_1" />
              </div>
              <div className="overview-card__content">
                <span className="number">12000+</span>
                <p>Usuários Verificados</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="overview-card hover--effect-1">
              <div className="overview-card__icon">
                <Image src={overview_2} alt="overview_1" />
              </div>
              <div className="overview-card__content">
                <span className="number">13</span>
                <p>Anos no mercado</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="overview-card hover--effect-1">
              <div className="overview-card__icon">
                <Image src={overview_3} alt="overview_1" />
              </div>
              <div className="overview-card__content">
                <span className="number">98%</span>
                <p>Satisfação do Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
