import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import round_shape_2 from "/public/images/elements/round-shape-2.png";
import store_btn_1 from "/public/images/icon/store-btn/1.png";
import store_btn_2 from "/public/images/icon/store-btn/2.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="bg-shape--top">
        <Image src={round_shape_2} alt="imagem" />
      </div>
      <div className="container">
      </div>
      <div className="container pt-120">
        <div className="row pb-5 align-items-center">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-8">
            <ul className="short-links justify-content-lg-end justify-content-center">
              <li>
                <Link href="/#">Sobre</Link>
              </li>
              <li>
                <Link href="/#">Perguntas frequentes</Link>
              </li>
              <li>
                <Link href="/#">Contato</Link>
              </li>
              <li>
                <Link href="/#">Termos de serviço</Link>
              </li>
              <li>
                <Link href="/#">Privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <p className="copy-right-text text-lg-start text-center mb-lg-0 mb-3">
              Direitos autorais © 2024. Todos os direitos reservados por <Link href="/">MegaGanhos</Link>
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="social-links justify-content-lg-end justify-content-center">
              <li>
                <Link href="/#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
