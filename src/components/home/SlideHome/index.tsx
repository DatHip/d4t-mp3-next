/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Autoplay, Pagination, Lazy } from "swiper";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const SlideStyle = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;

  .swiper-pagination {
    visibility: hidden;
  }

  .slider_list-btn-left,
  .slider_list-btn-right {
    display: flex;
    /* opacity: 0; */
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
    padding: 14px;
    border-radius: 999px;
    outline: none;
    border: none;
    background-color: hsla(0, 0%, 100%, 0.3);
    box-shadow: 0 2px 4px 0 rgba(226, 102, 102, 0.3);
    color: var(--white);
    cursor: pointer;
    transition: opacity 0.2s ease-in, background-color 0.1s;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.2);
    }

    &:active {
      background-color: hsla(0, 0%, 100%, 0.5);
    }

    span {
      font-size: 22px;
      font-weight: 200;
    }
  }

  .slider_list-btn-left {
    left: 22px;
  }

  .slider_list-btn-right {
    right: 22px;
  }

  .gallery-container {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    transform-style: preserve-3d;
  }

  .gallery-item {
    height: auto;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
      z-index 0s linear 0.25s;
    width: 100%;
    z-index: 1;
    opacity: 1;
    border-radius: 8px;
    padding: 15px;
  }

  .gallery-item.gallery-item-selected {
    transform: translateX(0);
    opacity: 1;
    z-index: 10;
  }
  .gallery-item.gallery-item-next {
    transform: translateX(100%);
  }
  .gallery-item.gallery-item-next,
  .gallery-item.gallery-item-previous {
    opacity: 1;
    z-index: 1;
  }
  .gallery-item.gallery-item-last {
    transform: translateX(20%);
  }

  .gallery-item.gallery-item-last {
    transform: translateX(20%);
  }
  .gallery-item.gallery-item-previous {
    transform: translateX(-100%);
  }

  .gallery-item .zm-card-image {
    border-radius: 8px;
  }
  .zm-card-image {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    flex-shrink: 0;
  }
`;

const SlideHome = ({ data }: any) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <LazyLoadComponent>
      <SlideStyle>
        <div className="gallery ml-[-15px] mr-[-15px]">
          <div className="gallery-container slider_list min-h-[160px]">
            <Swiper
              height={216}
              modules={[Navigation, Autoplay, Pagination, Lazy]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              speed={600}
              allowTouchMove={false}
              scrollbar={{ draggable: false }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  allowTouchMove: true,
                  navigation: false,
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
                },
                600: {
                  slidesPerView: 2,
                  allowTouchMove: true,
                },
                1040: {
                  slidesPerView: 3,
                },
              }}
            >
              {data &&
                data.length > 0 &&
                data.map((e: any) => {
                  return (
                    <SwiperSlide key={e.banner}>
                      <div className="gallery-item">
                        <div className="zm-card cursor-pointer">
                          <div className="zm-card-image">
                            <LazyLoadImage
                              height={"auto"}
                              src={e.banner}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

              <>
                <button
                  ref={navigationPrevRef}
                  type="button"
                  className="slider_list-btn-left slick-prev slick-arrow"
                >
                  <ArrowBackIosNewOutlinedIcon></ArrowBackIosNewOutlinedIcon>
                </button>

                <button
                  ref={navigationNextRef}
                  type="button"
                  className="slider_list-btn-right slick-next slick-arrow "
                >
                  <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
                </button>
              </>
            </Swiper>
          </div>
        </div>
      </SlideStyle>
    </LazyLoadComponent>
  );
};

export default SlideHome;
