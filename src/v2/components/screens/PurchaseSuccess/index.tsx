import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action } from "./Action";
import { Info } from "./Info";

export function PurchaseSuccess() {
  return (
    <Container>
      <Action />
      <Info />
    </Container>
  );
}