import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HospitalInfo } from 'types';

type HospitalListItemProps = {
  data: HospitalInfo;
};

function HospitalListItem({ data }: HospitalListItemProps) {
  return (
    <NavLink to={`hospital/${data.hmcNm}`}>
      <HospitalWrapper>
        <h3>{data.hmcNm}</h3>
        <p>주소 : {data.locAddr}</p>
      </HospitalWrapper>
    </NavLink>
  );
}

export default HospitalListItem;

const HospitalWrapper = styled.div`
  width: 100%;
  padding: 23px 20px;
  h3 {
    margin-bottom: 4px;
  }
`;
