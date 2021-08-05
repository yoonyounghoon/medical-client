import React from 'react';
import styled from 'styled-components';

function ListItem() {
  return (
    <HospitalWrapper>
      <h2>병원명</h2>
    </HospitalWrapper>
  );
}

export default ListItem;

const HospitalWrapper = styled.div`
  width: 100%;
  padding: 23px 20px;
`;
