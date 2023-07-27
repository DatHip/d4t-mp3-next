import React, { memo } from "react";
import styled from "styled-components";

interface IBannerCategory {
  src: string | undefined;
}

const BannerCategory = ({ src }: IBannerCategory) => {
  return (
    <BannerStyle>
      <div className="cover overflow-hidden rounded-b-lg">
        <div
          className="blur"
          style={{
            background: `url("${src}") center top / cover no-repeat`,
          }}
        />
      </div>
    </BannerStyle>
  );
};

const BannerStyle = styled.div`
  .cover {
    position: relative;
    margin: 0 calc(var(--padding-section) * -1);
    text-align: center;
    padding-bottom: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    background-color: var(--loading-bg);
    @media (max-width: 976px) {
      margin: 0 calc(1rem * -1);
    }
  }
  .blur {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    filter: unset;
    &:before {
      content: "";
      clear: both;
      position: absolute;
      width: 100%;
      height: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0),
        var(--layout-bg)
      );
    }
  }
`;

export default memo(BannerCategory);
