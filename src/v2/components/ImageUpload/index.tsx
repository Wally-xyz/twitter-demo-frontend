import * as React from "react";
import styled from "styled-components";

import { UploadIcon } from "../UploadIcon";
import { commonStyles } from "../Button";

export const Bordered = styled.div`
  border-radius: 100px;
  border: 4px dashed black;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 940px) {
    border-radius: 86px;
  }
`;

const Button = styled.div`
  ${commonStyles}
`;

export const Container = styled.label`
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%),
    linear-gradient(0deg, #ff5959, #ff5959);
  border-radius: 100px;
  cursor: pointer;
  display: block;
  height: 350px;
  position: relative;
  width: 350px;

  @media (max-width: 940px) {
    border-radius: 86px;
    height: 305px;
    width: 305px;
  }
`;

export const Content = styled.div`
  align-items: center;
  background: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 96px;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 4px;
  position: absolute;
  right: 4px;
  top: 4px;

  @media (max-width: 940px) {
    border-radius: 82px;
  }
`;

const Icon = styled(UploadIcon)`
  height: 86px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  visibility: hidden;
`;

interface Props {
  className?: string;
  image?: File;
  imageUrl?: string;
  onChange?(image: File): void;
}

export function ImageUpload(props: Props) {
  const input = React.useRef<HTMLInputElement>(null);
  const image = props.imageUrl || (props.image ? URL.createObjectURL(props.image) : undefined);

  const handleFile = React.useCallback(() => {
    if (!input?.current?.files?.[0]) {
      return;
    }

    const file = input.current.files[0];
    props.onChange?.(file);
  }, [input]);

  return (
    <Container className={props.className}>
      <Bordered />
      <Content
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
        }}
      >
        {!image && (
          <>
            <Icon />
            <Button>Upload image</Button>
          </>
        )}
      </Content>
      <Input
        accept="image/png, image/jpeg, image/gif"
        className={props.className}
        ref={input}
        type="file"
        onChange={handleFile}
      />
    </Container>
  );
}
