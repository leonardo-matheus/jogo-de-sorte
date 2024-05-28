"use client";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import SingleLotteryCard from "../cards/SingleLotteryCard";

const Lotteries = () => {
  const { addTickets, lotteris } = useContext(AppContext);

  return (
    <div className="lottery-wrapper">
      <h2 className="lottery-wrapper__title">Escolha seus Bilhetes</h2>
      <p>
        Escolha seus 7 números da sorte clicando (5 números + 2 Estrelas da Sorte).
      </p>

      <div className="row mt-50 mb-none-30">
        {lotteris.map((itm) => (
          <div key={itm.id} className="col-lg-4 mb-30">
            {/* Single lottery  */}
            <SingleLotteryCard itm={itm} />
          </div>
        ))}
      </div>

      <div className="lottery-wrapper__btn">
        <button
          type="button"
          className="btn-border text-white bg-transparent"
          onClick={addTickets}
        >
          Adicionar Tickets
        </button>
      </div>
    </div>
  );
};

export default Lotteries;
