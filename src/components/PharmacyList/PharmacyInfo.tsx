import React from 'react';
import styled from 'styled-components';

type PharmacyInfoProps = {
  startTime: string;
  endTime: string;
  day: string;
};

function PharmacyInfo({ day, startTime, endTime }: PharmacyInfoProps) {
  return (
    <PharmacyInfoWrap>
      <h4>{day}</h4>
      <p>
        {startTime} ~ {endTime}
      </p>
    </PharmacyInfoWrap>
  );
}

export default PharmacyInfo;

const PharmacyInfoWrap = styled.div`
  background: #e5e7ec;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 80px;

  h4 {
    margin-bottom: 4px;
  }
`;
