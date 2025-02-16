import React, { memo, useEffect } from "react";

import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const AosExContainer = styled.div`
  .box {
    width: 300px;
    height: 200px;
    font-size: 40px;
    color: white;
    background-color: #f60;
    text-align: center;
    line-height: 200px;
    margin: 250px auto;
  }
`;

const AosEx = memo(() => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AosExContainer>
      <h2>AosEx</h2>

      <div
        className="box"
        data-aos="fade-zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
      >
        AOS
      </div>
      <div
        className="box"
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
      >
        AOS
      </div>
      <div
        className="box"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
      >
        AOS
      </div>

      <div id="example-anchor1"> example anchor1</div>

      <div
        className="box"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor1"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        AOS
      </div>
    </AosExContainer>
  );
});

export default AosEx;
