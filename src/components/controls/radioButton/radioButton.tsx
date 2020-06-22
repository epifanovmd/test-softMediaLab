import React, { FC } from "react";
import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Wrap = styled.label`
  display: flex;
  & + & {
    margin-top: 5px;
  }
`;
const Label = styled.label`
  cursor: pointer;
  margin-left: 5px;
  color: black;
  font-weight: bold;
`;

const Radio = styled.input`
  cursor: pointer;
`;

export const RadioButton: FC<IProps> = ({ label, id, ...rest }) => (
  <Wrap>
    <Radio {...rest} id={id} type="radio" />
    <Label htmlFor={id}>{label}</Label>
  </Wrap>
);
