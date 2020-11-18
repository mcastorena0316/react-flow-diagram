// @flow

import React from 'react';
import style from 'styled-components';

/*
 * Presentational
 * ==================================== */

const Arrow = style.path`
  fill:  ${props => props.color ? props.color : 'black'};
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-dasharray: 10000, 1;
  stroke: ${props => props.color ? props.color : 'black'};
`;

type ArrowMarkerProps = {
  color: ?string,
};

const ArrowMarker = ({ color }: ArrowMarkerProps)  => (
  <marker
    id={`arrow-end-${color ? color : 'black' }`}
    viewBox="0 0 20 20"
    refX="11"
    refY="10"
    markerWidth="10"
    markerHeight="10"
    orient="auto"
  >
    <Arrow d="M 1 5 L 11 10 L 1 15 Z" color={color} />
  </marker>
);

export default ArrowMarker;
