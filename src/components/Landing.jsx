import React from "react";
import Layout from "./Layout";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Landing = () => {
  return (
    <div>
      <Layout>
        <SectionOne />
        <SectionTwo />
      </Layout>
    </div>
  );
};

export default Landing;
