import * as React from "react";

import { Logo } from "src/v2/icons/Logo";
import { TopNav } from "../../TopNav";

import {
  Button,
  Center,
  Container,
  DemoBadge,
  EasyMintLogo,
  EasyMintLogoWrapper,
  Footer,
  FooterHeading,
  FooterText,
  FlexWrapper,
  Message,
  Tagline,
  TwitterBlueText,
  TwitterInfo,
  Wrapper,
} from "./styles";

export function Start() {
  return (
    <Container>
      <Wrapper>
        <TopNav />
        <EasyMintLogoWrapper>
          <EasyMintLogo />
          <DemoBadge>Demo</DemoBadge>
        </EasyMintLogoWrapper>
        <Center>
          <FlexWrapper>
            <Tagline>Create an NFT in minutes</Tagline>
            <Message>
              Create an NFT from any image quickly, without any prior crypto experience.
            </Message>
          </FlexWrapper>
          <Button to="/enter-email">Get Started</Button>
          <TwitterInfo>
            Note: to be able to set the NFT as your Twitter profile photo, you’ll need{" "}
            <TwitterBlueText>Twitter Blue</TwitterBlueText>.
          </TwitterInfo>
        </Center>
        <Footer>
          <FooterHeading>POWERED BY</FooterHeading>
          <Logo />
          <FooterText>
            Wally is an API that makes it easy to integrate crypto wallets and transactions into
            your application.
          </FooterText>
        </Footer>
      </Wrapper>
    </Container>
  );
}
