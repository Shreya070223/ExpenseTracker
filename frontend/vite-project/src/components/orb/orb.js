import React from 'react';
import styled from 'styled-components';

const OrbStyle = styled.div`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-top: -37vh;
  margin-left: -37vh;
  background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
  filter: blur(400px);
`;

export function Orb() {
  return <OrbStyle />;
}
