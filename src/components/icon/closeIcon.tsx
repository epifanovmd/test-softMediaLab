import React, { FC } from "react";
interface IProps extends React.SVGProps<SVGSVGElement> {}

export const CloseIcon: FC<IProps> = ({ ...rest }) => (
  <svg
    {...rest}
    style={{ height: "15px", width: "15px" }}
    version="1.1"
    id="Capa_1"
    viewBox="0 0 496 496"
  >
    <g>
      <g>
        <g>
          <path
            d="M248,0C111.033,0,0,111.033,0,248s111.033,248,248,248s248-111.033,248-248C495.841,111.099,384.901,0.159,248,0z
				 M248,480C119.87,480,16,376.13,16,248S119.87,16,248,16s232,103.87,232,232C479.859,376.072,376.072,479.859,248,480z"
          />
          <path
            d="M361.136,134.864c-3.124-3.123-8.188-3.123-11.312,0L248,236.688L146.176,134.864c-3.069-3.178-8.134-3.266-11.312-0.197
				c-3.178,3.069-3.266,8.134-0.197,11.312c0.064,0.067,0.13,0.132,0.197,0.197L236.688,248L134.864,349.824
				c-3.178,3.07-3.266,8.134-0.196,11.312c3.07,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248,259.312
				l101.824,101.824c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.312,248l101.824-101.824
				C364.259,143.052,364.259,137.988,361.136,134.864z"
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);