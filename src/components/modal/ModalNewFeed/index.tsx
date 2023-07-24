/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import formatTimeNewFeed from "@/utils/formatTimeNewFeed";
import { Modal } from "@mantine/core";
import React, { memo, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

interface IModalNewFeed {
  close: () => void;
  opend: boolean;
  dataModal: any;
  setDataModal: any;
}

const ModalNewFeed = ({
  close,
  opend,
  dataModal,
  setDataModal,
}: IModalNewFeed) => {
  console.log(dataModal);

  const [llike, setLike] = useState(false);
  const [care, setCare] = useState(false);

  const { like, publisher, createdTime, title, content, commend } = dataModal;

  let imgL;
  let urlVideo: string | any;
  if (content?.type === "album") {
    imgL = content?.photos[0].url;
  } else if (content?.type === "feedVideo") {
    imgL = content?.thumbnail;
    urlVideo = Object.values(content?.source)[0];
  }

  return (
    <Modal
      onClose={() => {
        close();
        setTimeout(() => {
          setDataModal({});
        }, 300);
      }}
      opened={opend}
      centered
      classNames={{
        header: "hidden",
        body: "p-0",
        content:
          "unset-overflow !flex-1 max-w-[900px] text-white bg-transparent rounded-lg overflow-hidden",
      }}
    >
      <PortalStyle>
        <div className="modal theme-modal w-full max-w-[900px]  ">
          <div className="modal-content h-[80vh] w-full overflow-y-auto">
            <div className=" row no-gutters flex h-full">
              <div className="col l-7 c-12 feed-detail  m-f-12 relative h-full">
                {content?.type === "album" && (
                  <div>
                    <img src={imgL || ""} alt="" />
                  </div>
                )}
                {content?.type === "feedVideo" && (
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={urlVideo || ""}
                      className="react-player outline-none"
                      playing
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>
                )}
              </div>
              <div className="l-5 c-12 m-f-12 !flex w-full flex-col items-center justify-between">
                <div className="feed-top mb-auto flex w-full flex-1 flex-col">
                  <div className="feed-header my-[10px]">
                    <div className="media flex items-center justify-start  px-[15px]">
                      <div className="media-left mr-[10px] ">
                        <figure className="image h-[48px] w-[48px] overflow-hidden !rounded-full">
                          <img src={publisher?.thumbnail} alt="" />
                        </figure>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="mar-b-0 title">
                          <span className="name">{publisher?.name}</span>
                          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                          <button
                            onClick={() => setCare((value) => !value)}
                            className={`btn-care ${care ? "is-care" : ""}`}
                          >
                            {care ? "Đã quan tâm" : "Quan Tâm"}
                          </button>
                        </h3>
                        <p className="subtitle">
                          {formatTimeNewFeed(createdTime)}
                        </p>
                      </div>
                    </div>
                    <div className="title title-desp mt-[10px] px-[15px] py-[10px]">
                      {title}
                    </div>
                  </div>
                  <div className="feed-footer mb-[10px] px-[15px] pb-[10px]">
                    <div className="actions flex gap-[20px]">
                      <button
                        onClick={() => setLike((value) => !value)}
                        className="zm-btn mar-r-30 button !flex items-center justify-center gap-[2px]"
                      >
                        <i
                          className={`icon ic-${llike ? "like-full" : "like"}`}
                        />
                        <span>Thích</span>
                      </button>
                      <button
                        className="zm-btn button !flex items-center justify-center gap-[2px]"
                        tabIndex={0}
                      >
                        <i className="icon ic-share" />
                        <span>Chia sẻ</span>
                      </button>
                    </div>
                  </div>
                  <div className="feed-comment  px-[15px]">
                    <div className="list-comment">
                      <span>{like} lượt thích </span>
                      &nbsp;&nbsp;•&nbsp;&nbsp; <span>{commend} Bình luận</span>
                    </div>
                  </div>
                </div>
                <div className="message-wrapper">
                  <input className="noti-message flex w-full items-center justify-center border-none outline-none"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PortalStyle>
    </Modal>
  );
};

const PortalStyle = styled.div`
  width: 100%;
  max-width: 900px;

  .modal {
    background-color: var(--primary-bg);
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 40;
  }

  .message-wrapper {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    background: var(--primary-bg);
    .noti-message {
      background-color: var(--alpha-bg);
      color: var(--text-second);
      font-weight: 500;
      padding: 10px 15px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .feed-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    img {
      position: relative;
      object-fit: cover;
      width: auto;
    }
  }

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  .modal-content .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    margin: 0;
    color: var(--text-primary);
    cursor: pointer;
    i {
      font-size: 24px;
    }
  }

  .subtitle {
    font-size: 12px;
    font-weight: 300;
    margin-top: 3px;
    white-space: nowrap;
    color: var(--text-secondary);
    &:hover {
      color: var(--link-text-hover);
    }
  }

  .recently_list-item_hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .name {
    &:hover {
      color: var(--link-text-hover);
    }
  }

  .btn-care {
    color: var(--link-text-hover);
    &:hover {
      filter: brightness(0.9);
    }

    &.is-care {
      color: var(--text-placeholder);
    }
  }
  .title {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 20;
    height: auto;
    overflow: hidden;
  }

  .title-desp {
    border-top: 1px solid var(--border-secondary);
    border-bottom: 1px solid var(--border-secondary);
  }
  .feed-footer {
    border-bottom: 1px solid var(--border-secondary);
  }
  .recently_list-item_hover {
    display: flex !important;
  }
  .main_page-hover:hover img {
    transform: scale(1) !important;
  }
  .list-comment {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  .zm-btn.close-feed-modal {
    position: fixed;
    color: var(--white);
    margin: 0;
    top: 14px;
    right: 14px;
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.3);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
    .icon.ic-svg-close-white {
      background-image: url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.23/static/media/close-white.42640965.svg);
    }
  }

  @media (max-width: 1113px) {
    .feed-detail {
      overflow: hidden;
      height: 85% !important;
    }
    .row {
      flex-wrap: wrap !important ;
    }
  }
`;

export default memo(ModalNewFeed);
