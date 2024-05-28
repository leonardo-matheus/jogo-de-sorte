import Image from "next/image";
import payment from "/public/images/elements/payment.png";

const Prices = () => {
  return (
    <div className="col-lg-4 mt-lg-0 mt-4">
      <div className="checkout-wrapper">
        <div className="checkout-wrapper__header">
          <h3>Seus ingressos:</h3>
        </div>
        <div className="checkout-wrapper__body">
          <ul className="price">
            <li>
              <div className="left">
                <h4 className="caption">Preço do ingresso</h4>
                <span>(8 ingressos X R$ 4,99)</span>
              </div>
              <div className="right">
                <span className="price">R$ 39,92</span>
              </div>
            </li>
            <li>
              <div className="left">
                <h4 className="caption">Total</h4>
              </div>
              <div className="right">
                <span className="price">R$ 39,92</span>
              </div>
            </li>
          </ul>
          <div className="checkout-wrapper__btn">
            <button type="submit" className="cmn-btn">
              comprar ingressos
            </button>
          </div>
        </div>
      </div>
      <div className="mt-30">
        <Image src={payment} alt="pagamento" />
      </div>
    </div>
  );
};

export default Prices;
