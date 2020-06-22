import React, { FC, memo } from "react";
import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Wrap = styled.div`
  display: flex;
  padding: 0 5px;
`;
const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + label {
    background: orange;
  }
  :checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;
const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 55px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 4px;
    left: 5px;
    width: 20px;
    height: 17px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
  :active:after {
    width: 45px;
  }
`;

export const Switcher: FC<IProps> = memo(({ label, id, ...rest }) => (
  <Wrap>
    <Input {...rest} type="checkbox" id={id} />
    <Label htmlFor={id}>{label}</Label>
  </Wrap>
));
