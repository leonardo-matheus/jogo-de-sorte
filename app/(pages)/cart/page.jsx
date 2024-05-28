import TotallCart from "@/components/cart/TotallCart";
import Banner from "@/components/common/Banner";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

const page = () => {
  return (
    <>
      {/* Seção do Banner aqui */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner_hero_shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Início", "/"],
            ["Loteria", "/"],
            ["Concurso Nº: B2T", "/"],
            ["Escolha seu Número da Loteria", "/"],
            ["Meu Carrinho", "/"],
          ]}
        />
      </div>

      {/* Seção do Carrinho Total aqui */}
      <TotallCart />
    </>
  );
};

export default page;
