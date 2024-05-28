import VehicleOverview from "../common/VehicleOverview";

const Details = () => {
  return (
    <div className="col-lg-8">
      <div className="contest-details-content">
        <span className="subtitle">Participe agora para ter a chance de ganhar</span>
        <h2 className="contest-name">O Breeze Zodiac IX</h2>
        <div className="contest-details-meta">
          <ul>
            <li>
              <p>
                Concurso Nº <span>B2T</span>
              </p>
            </li>
            <li>
              <p>Sorteio: 23 de junho de 2020</p>
            </li>
          </ul>
          <p>
            Máximo de <span>29994</span> inscrições.
          </p>
        </div>
        <div className="contest-description">
          {/* Visão geral do veículo aqui */}
          <VehicleOverview />
        </div>
      </div>
    </div>
  );
};

export default Details;
