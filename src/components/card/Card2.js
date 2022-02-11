import React from "react";
import styled, { css } from "styled-components";
import img from "./img/dr1.png";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }

  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: ${(props) => props.theme.orange};
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }

  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .card-amount {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;

    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, green, blue, #fc2872);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img className="user-avatar" src={img} alt="" />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount" fontSize="22px">
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
