import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { commonStyles } from "../../Button";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Explanation = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  margin-top: 16px;
  opacity: 0.5;
`;

const Image = styled.div`
  background-color: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100px;
  box-shadow: 0px 30px 200px 0px #f262ff80, 0px 20px 200px 0px #70ddff33,
    0px 10px 100px 0px #f262ff80;
  height: 350px;
  margin-top: 70px;
  width: 350px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

const View = styled.a`
  ${commonStyles}
  display: block;
  margin-top: 70px;
  text-decoration: none;
`;

const SecondaryButton = styled.a`
  margin-top: 32px;
`;

interface Props {
  imageUrl: string;
  username: string;
}

export function Complete(props: Props) {
  return (
    <Chrome>
      <Container>
        <Title>😎 Check it out—your cool new profile.</Title>
        <Explanation>Freshly minted on the Ethereum network.</Explanation>
        <Image style={{ backgroundImage: `url(${props.imageUrl})` }} />
        <View href={`https://www.twitter.com/${props.username}`}>View on Twitter</View>
        <SecondaryButton href={`https://app.wally.xyz/wallet`} target="_blank">Access your wallet</SecondaryButton>
        <Explanation>Questions? Contact us at contact@wally.xyz</Explanation>
      </Container>
    </Chrome>
  );
}
