import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import support_1 from "/public/images/icon/support/1.png";
import support_2 from "/public/images/icon/support/2.png";

const Support = () => {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <span className="section-sub-title">
                Entre em contato com nossa equipe de suporte amigável
              </span>
              <h2 className="section-title">Suporte ao Cliente</h2>
              <p>
                Tem alguma pergunta ou precisa de ajuda? Entre em contato com nossa equipe de suporte amigável.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-none-30">
          <div className="col-lg-6 mb-30">
            <div className="support-card">
              <div className="support-card__thumb">
                <Image src={support_1} alt="imagem" />
              </div>
              <div className="support-card__content">
                <h3 className="support-card__title">
                  Fale com nossa equipe de suporte
                </h3>
                <p>
                  Tem uma pergunta sobre Loterias? Entre em contato com nossa equipe simpática.
                </p>
                <div className="btn-grp justify-content-xl-start mt-3">
                  <a
                    href="tel:6564545"
                    className="btn-border btn-sm text-capitalize"
                  >
                    Ligue para nós
                    <FaPhoneAlt />
                  </a>
                  <a
                    href="mailto:dhdj@gmail.com"
                    className="cmn-btn btn-sm text-capitalize"
                  >
                    Envie um email <FaRegEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="support-card">
              <div className="support-card__thumb">
                <Image src={support_2} alt="imagem" />
              </div>
              <div className="support-card__content">
                <h3 className="support-card__title">Nosso Guia para MegaGanhos</h3>
                <p>Confira nossas perguntas frequentes para ver se podemos ajudar você.</p>
                <div className="btn-grp justify-content-xl-start mt-3">
                  <Link
                    href="/faq"
                    className="btn-border btn-sm text-capitalize"
                  >
                    Perguntas Frequentes e Ajuda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
