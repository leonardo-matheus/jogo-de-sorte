"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import winnerData from "../../data/winnerData";
import TicketCheckCard from "../cards/TicketCheckCard";
import WinnerCard from "../cards/WinnerCard";
import w_el_1 from "/public/images/elements/w-el-1.png";
import w_el_2 from "/public/images/elements/w-el-2.png";
import w_el_3 from "/public/images/elements/w-el-3.png";
import winner_tab_1 from "/public/images/icon/winner-tab/1.png";
import winner_tab_2 from "/public/images/icon/winner-tab/2.png";
import winner_tab_3 from "/public/images/icon/winner-tab/3.png";
import winner_tab_4 from "/public/images/icon/winner-tab/4.png";
import winner_tab_5 from "/public/images/icon/winner-tab/5.png";

const LatestWinner = () => {
  const [winners, setWinners] = useState(winnerData);

  return (
    <section className="latest-winner-section position-relative pt-120 pb-120">
      <div className="el-1">
        <Image src={w_el_1} alt="imagem" />
      </div>
      <div className="el-2">
        <Image src={w_el_2} alt="imagem" />
      </div>
      <div className="el-3">
        <Image src={w_el_3} alt="imagem" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <span className="section-sub-title">
                Conheça os últimos vencedores do seu concurso favorito
              </span>
              <h2 className="section-title">Últimos Vencedores</h2>
              <p>
                Verifique os números do seu bilhete para ver se você é um vencedor na Loteria dos Sonhos.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav nav-tabs winner-tab-nav"
              id="winnerTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="dream-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dream"
                  role="tab"
                  aria-controls="dream"
                  aria-selected="true"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_1} alt="imagem" />
                  </span>
                  <span>Carro dos Sonhos</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="bike-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bike"
                  role="tab"
                  aria-controls="bike"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_2} alt="imagem" />
                  </span>
                  <span>Bicicleta</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="watch-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#watch"
                  role="tab"
                  aria-controls="watch"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_3} alt="imagem" />
                  </span>
                  <span>Relógio</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="laptop-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#laptop"
                  role="tab"
                  aria-controls="laptop"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_4} alt="imagem" />
                  </span>
                  <span>Notebook</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="money-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#money"
                  role="tab"
                  aria-controls="money"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_5} alt="imagem" />
                  </span>
                  <span>Dinheiro</span>
                </button>
              </li>
            </ul>
            <div className="tab-content mt-50" id="winnerTabContent">
              <div
                className="tab-pane fade show active"
                id="dream"
                role="tabpanel"
                aria-labelledby="dream-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* cartão de verificação do bilhete */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* cartão do vencedor */}

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        ver mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="bike"
                role="tabpanel"
                aria-labelledby="bike-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* cartão de verificação do bilhete */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* cartão do vencedor */}

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        ver mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="watch"
                role="tabpanel"
                aria-labelledby="watch-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* cartão de verificação do bilhete */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* cartão do vencedor */}

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="/winner" className="btn-border">
                        ver mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="laptop"
                role="tabpanel"
                aria-labelledby="laptop-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* cartão de verificação do bilhete */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* cartão do vencedor */}

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        ver mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="money"
                role="tabpanel"
                aria-labelledby="money-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* cartão de verificação do bilhete */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* cartão do vencedor */}
                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="/winner" className="btn-border">
                        ver mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWinner;
