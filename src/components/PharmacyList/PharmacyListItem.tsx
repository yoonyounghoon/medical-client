import React from 'react';
import styled from 'styled-components';
import { PharmacyInfo } from 'types';

type PharmacyListItemProps = {
  data: PharmacyInfo;
};

function PharmacyListItem({ data }: PharmacyListItemProps) {
  const { startTime, endTime } = data;
  return (
    <PharmacyWrapper>
      <h2>{data.dutyName}</h2>
      <p>현재위치에서의 거리: {data.distance * 1000}m</p>
      <p>
        진료시간 : {startTime} ~ {endTime}{' '}
      </p>
    </PharmacyWrapper>
  );
}

export default PharmacyListItem;

const PharmacyWrapper = styled.div`
  width: 100%;
  padding: 23px 20px;
`;
