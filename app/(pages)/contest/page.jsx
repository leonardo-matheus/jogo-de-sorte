import Banner from "@/components/common/Banner";
import Feature from "@/components/contest/Feature";
import LetestContest from "@/components/contest/LetestContest";

const page = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section style--three">
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Contest", "/"],
          ]}
        />
      </div>

      {/* Letest contest here */}
      <LetestContest />

      {/* Feature section here */}
      <Feature />
    </>
  );
};

export default page;
