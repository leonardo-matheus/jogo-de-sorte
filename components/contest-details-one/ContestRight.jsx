import Link from "next/link";
import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AppContext } from "../../context/context";

const ContestRight = () => {
  const { incrementHandle, decrementHandle, quantity } = useContext(AppContext);

  return (
    <div className="contest-cart__right">
      <h4 className="subtitle">Participe agora para ter a chance de ganhar</h4>
      <h3 className="contest-name">O Breeze Zodiac IX</h3>
      <p>Esta competição tem um máximo de 29994 entradas.</p>
      <div className="contest-num">
        Número do concurso: <span>B2T</span>
      </div>
      <h4>Ingressos Vendidos</h4>
      <div className="ticket-amount">
        <span className="left">0</span>
        <span className="right">29994</span>
        <div className="progressbar" data-perc="70%">
          <div className="bar"></div>
        </div>
        <p>Apenas 12045 restantes!</p>
      </div>
      <div className="ticket-price">
        <span className="amount">$4.99</span>
        <small>Por ingresso</small>
      </div>
      <div className="d-flex flex-wrap align-items-center mb-30">
        <div className="select-quantity">
          <span className="caption">Quantidade</span>
          <div className="quantity">
            <input
              type="number"
              value={quantity}
              // defaultValue={quantity
              onChange={() => setQuantity(quantity)}
            />
            <div className="quantity-nav">
              <div
                className={`quantity-button ${quantity <= 0 && "pe-none"}`}
                onClick={decrementHandle}
              >
                <i className="las la-minus"></i>
              </div>
              <div
                className={`quantity-button quantity-up ${
                  quantity >= 16 && "pe-none"
                }`}
                onClick={incrementHandle}
              >
                <i className="las la-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-sm-0 mt-3">
          <Link href="/lottery-details" className="cmn-btn style--three">
            comprar ingressos
          </Link>
        </div>
      </div>
      <ul className="social-links align-items-center">
        <li>Compartilhar :</li>
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
  );
};

export default ContestRight;
