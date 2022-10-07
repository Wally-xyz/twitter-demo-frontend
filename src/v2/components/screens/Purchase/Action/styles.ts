import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import styled from "styled-components";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import { Input as _Input } from "../../../Input";

const SpinnerStyles = `
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled(FlexColumn)`
  margin: 8px 48px 0;
`;

export const ConfirmButton = styled(PrimaryButton)`
  margin-top: 8px;
  width: 100%;
`;

export const PaymentSection = styled(FlexRow)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  background: #090a0b;
  border: 1px solid #222b2f;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;

  margin-top: 24px;
  padding: 40px;

  width: 392px;
  justify-content: center;
  align-items: center;

  // following styled are specific to stripe
  .hidden {
    display: none;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
    min-height: 230px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${SpinnerStyles}
`;

export const PaymentRow = styled(FlexRow)`
  justify-content: flex-start;
  width: 100%;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 24px;
  justify-content: flex-start;
  width: 392px;
`;
