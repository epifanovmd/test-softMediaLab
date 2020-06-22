import { useOutsideClick } from "Common/useOutsideClick";
import React, { FC, memo, useCallback, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div``;

interface IProps {
  title?: string;
  content?: React.ReactElement | string;
  openIcon?: React.ReactElement;
}

const Tooltip = styled.div`
  margin: 0 5px;
  position: relative;
  cursor: pointer;
`;
const Content = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  background: dodgerblue;
  padding: 10px;
  z-index: 1000;
  width: 200px;
  :after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 20px solid dodgerblue;
    border-right: 10px solid transparent;
  }
`;

export const CustomTooltip: FC<IProps> = memo(
  ({ children, openIcon, title, content }) => {
    const [open, setOpen] = useState(false);
    const ref = useOutsideClick(() => {
      setOpen(false);
    });

    const handleClick = useCallback(() => {
      setOpen(state => !state);
    }, [setOpen]);

    return (
      <Wrap>
        <Tooltip ref={ref} onClick={handleClick} title={title}>
          {open && <Content>{content}</Content>}
          {open ? openIcon : children}
        </Tooltip>
      </Wrap>
    );
  },
);
