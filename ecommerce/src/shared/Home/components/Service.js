import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummy = [
  { title: "최고의 선수를 영입해보세요", desc: "레반도프스키 영입 완료!", img: `${require("../../../assets/le.png")}` },
  { title: "유망한 선수를 찾아보세요", desc: "나이에 맞지 않는 놀라운 실력", img: `${require("../../../assets/pedri.png")}` },
  { title: "노련한 선수를 활용해보세요", desc: "폼은 일시적이지만 클라스는 영원하다", img: `${require("../../../assets/pique.png")}` },
];

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Fragment>
      <StyledSlider {...settings}>
        {dummy.map((item) => {
          return (
            <div className="container">
              <div className="center"></div>
              <div className="text-center">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <div className="img-center">
                <img src={item.img}></img>
              </div>
            </div>
          );
        })}
      </StyledSlider>
      {/* <div className={styles["button-container"]}>
        <button className={styles["prev-btn"]} onClick={indexMinusHandler}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className={styles["next-btn"]} onClick={indexPlusHandler}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div> */}
    </Fragment>
  );
};

const StyledSlider = styled(Slider)`
  .slick-slide.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    position: relative;
  }

  .center {
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    filter: brightness(50%);
  }

  .text-center {
    margin: 2rem 0;
    text-align: center;
  }
  .text-center h2 {
    color: orange;
    text-shadow: 3px 2px 3px rgb(0, 0, 0);
  }
  .text-center p {
    color: #fff;
    font-size: 1.3rem;
    text-shadow: 3px 2px 3px rgb(0, 0, 0);
  }

  .img-center {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  .prev-btn {
    border: none;
    background: none;
    color: orange;
    font-size: 2rem;
  }
  .next-btn {
    border: none;
    background: none;
    color: orange;
    font-size: 2rem;
  }
`;

export default Service;
