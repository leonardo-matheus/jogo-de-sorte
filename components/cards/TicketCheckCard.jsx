const TicketCheckCard = () => {
  return (
    <div className="number-check-wrapper">
      <h3 className="title">Verificar Meus Números</h3>
      <p>
        Você está com um bilhete premiado? Aqui está uma maneira fácil de descobrir.
      </p>
      <form className="check-number-form">
        <input
          type="tel"
          className="form-control mt-30 mb-30"
          name="check-number1"
          placeholder="Digite o número do concurso"
        />
        <div className="number-list-wrapper">
          <p>Digite seus números da loteria</p>
          <div className="number-list mt-3 mb-3">
            <input type="text" name="text1" placeholder="00" />
            <input type="text" name="text2" placeholder="00" />
            <input type="text" name="text3" placeholder="00" />
            <input type="text" name="text4" placeholder="00" />
            <input type="text" name="text5" placeholder="00" />
            <input type="text" name="text6" placeholder="00" />
            <input type="text" name="text7" placeholder="00" />
          </div>
          <div className="nice-select select">
            <select className="border-0">
              <option>Últimos 7 dias</option>
              <option>Últimos 6 dias</option>
              <option>Últimos 5 dias</option>
              <option>Últimos 4 dias</option>
              <option>Últimos 3 dias</option>
            </select>
          </div>
          <div className="text-center mt-100">
            <button type="submit" className="cmn-btn">
              verificar meus números
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketCheckCard;
