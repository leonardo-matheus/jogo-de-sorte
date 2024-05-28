import Details from "@/components/checkout/Details";
import Banner from "@/components/common/Banner";
import Image from "next/image";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

const page = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner hero shape" />
        </div>

        <Banner
          breadcrumb={[
            ["Início", "/"],
            ["Loteria", "/"],
            ["Concurso Nº: B2T", "/"],
            ["Escolha seu Número da Loteria", "/"],
            ["Meu Carrinho", "/"],
            ["Checkout", "/"],
          ]}
        />
      </div>

      {/* Details section here */}
      <Details />
    </>
  );
};

export default page;
