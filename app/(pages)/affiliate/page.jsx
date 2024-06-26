import Boost from "@/components/affiliate/Boost";
import Getting from "@/components/affiliate/Getting";
import Partner from "@/components/affiliate/Partner";
import Trusted from "@/components/affiliate/Trusted";
import Banner from "@/components/common/Banner";
import Image from "next/image";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";
import TopAffiliate from "@/components/affiliate/TopAffiliate";

const page = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section style--four">
        <div className="bg-shape">
          <Image src={inner_hero_shape_2} alt="inner hero shape 2" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Pages", "/"],
            ["Affiliate", "/"],
          ]}
        />
      </div>

      {/* Boost section here */}
      <Boost />

      {/* Getting  section here */}
      <Getting />

      {/* Trusted section here */}
      <Trusted />

      {/* Partner section here */}
      <Partner />

      {/* Top Affiliate section here */}
      <TopAffiliate />
    </>
  );
};

export default page;
