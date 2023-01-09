import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo/Seo";

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="spad">
        <h3>About</h3>
        <p>
          A simple open source react tool box schedule built{" "}
          <a href="https://github.com/Sig-giovanni">Kingsley Abraham.</a> <br />
          The topic and content are provide by
          <a href="https://www.safetytalkideas.com/safety-talks/">
            {" "}
            Safety Talk ideas
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default About;
