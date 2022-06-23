import * as React from "react";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";

// import { API_URL } from "../../../../../constants/default";

import {
  Container,
  ContentWrapper,
  EmailLabel,
  EmailInput,
  EmailInputWrapper,
  SubTitle,
  Title,
} from "./styles";

interface Props {
  email: string;
  onEmailChange(email: string): void;
  onSubmit?(): void;
}

export function Action(props: Props) {
  //   const sendEmail = async () => {
  //     fetch(`${API_URL}/auth/sendcode?email=${encodeURIComponent(props.email)}`, {
  //       method: "POST",
  //       body: JSON.stringify({ email: props.email }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     props.onSubmit?.();
  //   };

  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Title>Sign Up</Title>
        <SubTitle>
          Sign up with just your email. Click the link you receive to create an account.
        </SubTitle>
        <EmailInputWrapper>
          <EmailLabel>Email Address</EmailLabel>
          <EmailInput />
        </EmailInputWrapper>
      </ContentWrapper>
    </Container>
  );
}
