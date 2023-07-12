/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import LinkToAll from "@/components/common/LinkToAll";
import TitleList from "@/components/common/TitleList";
import React, { memo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
interface INewReleaseSlider {
  data: any;
}
import { Navigation, Autoplay, Pagination, Lazy } from "swiper";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { styled } from "styled-components";
import ItemReleaseSlider from "./ItemReleaseSlider";

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
    left: 6px;
  }

  .slider_list-btn-right {
    right: 6px;
  }
`;

const NewReleaseSlider: React.FC<INewReleaseSlider> = ({ data }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <LazyLoadComponent threshold={30}>
      <div>
        <div className="mb-3 mt-9 flex items-center justify-between">
          <TitleList className="!my-0">{data?.title}</TitleList>
          {data?.link && <LinkToAll href={data?.link}></LinkToAll>}
        </div>

        <SlideStyle>
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Lazy]}
            autoplay={{
              delay: 50000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={3}
            slidesPerGroup={1}
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
              100: {
                slidesPerView: 1,
                allowTouchMove: true,
              },
              650: {
                allowTouchMove: true,
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1220: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {data.items.map((e: any, index: number) => {
              return (
                <SwiperSlide className="p-2" key={e?.encodeId}>
                  <ItemReleaseSlider
                    index={index + 1}
                    data={e}
                  ></ItemReleaseSlider>
                </SwiperSlide>
              );
            })}
            <SwiperSlide className="p-2">
              <div className=" cursor-pointer rounded-md bg-[var(--box-item-bg)] p-4 text-[var(--text-primary)] shadow-md">
                <div className="flex h-[120px] items-center justify-center">
                  Xem Tất Cả
                </div>
              </div>
            </SwiperSlide>

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
        </SlideStyle>
      </div>
    </LazyLoadComponent>
  );
};

export default memo(NewReleaseSlider);
