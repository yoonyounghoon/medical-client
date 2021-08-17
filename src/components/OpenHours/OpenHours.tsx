import React from 'react';
import styled from 'styled-components';

type OpenHoursInfoProps = {
  startTime: string;
  endTime: string;
  day: string;
};

function OpenHours({ day, startTime, endTime }: OpenHoursInfoProps) {
  return (
    <OpenHoursInfoWrap>
      <h4>{day}</h4>
      <p>{`${startTime.substr(0, 2)}:${startTime.substr(2, 2)}~${endTime.substr(
        0,
        2,
      )}:${endTime.substr(2, 2)}`}</p>
    </OpenHoursInfoWrap>
  );
}

export default OpenHours;

const OpenHoursInfoWrap = styled.div`
  background: #e5e7ec;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 80px;

  h4 {
    margin-bottom: 4px;
  }
`;
