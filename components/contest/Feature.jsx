import Image from "next/image";
import contest_feature_1 from "/public/images/icon/contest-feature/1.png";
import contest_feature_2 from "/public/images/icon/contest-feature/2.png";
import contest_feature_3 from "/public/images/icon/contest-feature/3.png";

const Feature = () => {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="row mb-none-30 justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item2">
              <div className="icon-item2__icon">
                <Image src={contest_feature_1} alt="Recurso do concurso 1" />
              </div>
              <div className="icon-item2__content">
                <h3 className="title">Pagamento Seguro</h3>
                <p>
                  Pague com os métodos de pagamento mais populares e seguros do mundo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item2">
              <div className="icon-item2__icon">
                <Image src={contest_feature_2} alt="Recurso do concurso 2" />
              </div>
              <div className="icon-item2__content">
                <h3 className="title">Ótimo Valor</h3>
                <p>Oferecemos preços competitivos para todos os bilhetes de loteria</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item2">
              <div className="icon-item2__icon">
                <Image src={contest_feature_3} alt="Recurso do concurso 3" />
              </div>
              <div className="icon-item2__content">
                <h3 className="title">Entrega Gratuita em Todo o Mundo</h3>
                <p>
                  Estamos disponíveis para fornecer nossos serviços em países principais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
