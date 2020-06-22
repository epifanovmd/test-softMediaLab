import React, { FC, memo } from "react";
import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Wrap = styled.div`
  padding: 0 5px;
`;
const Inp = styled.input`
  border-radius: 15px;
  border: 1px solid gray;
  padding: 5px 10px;
`;
const Label = styled.label``;

export const Input: FC<IProps> = memo(({ label, id, ...rest }) => (
  <Wrap>
    <Inp {...rest} id={id} />
    <Label htmlFor={id}>{label}</Label>
  </Wrap>
));
