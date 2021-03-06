import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PharmacyInfo } from 'types';

type PharmacyListItemProps = {
  data: PharmacyInfo;
};

function PharmacyListItem({ data }: PharmacyListItemProps) {
  const { startTime, endTime } = data;
  return (
    <NavLink to={`/pharmacy/${data.hpid}`}>
      <PharmacyWrapper>
        <h3>{data.dutyName}</h3>
        <p>
          π μ§λ£μκ° :{' '}
          {`${startTime.substr(0, 2)}:${startTime.substr(2, 2)}~${String(
            endTime,
          ).substr(0, 2)}:${String(endTime).substr(2, 2)}`}
        </p>
        <span>νμ¬μμΉμμμ κ±°λ¦¬: {data.distance * 1000}m</span>
      </PharmacyWrapper>
    </NavLink>
  );
}

export default PharmacyListItem;

const PharmacyWrapper = styled.div`
  background: ${(props) => props.theme.mode.mainBackground};
  color: ${(props) => props.theme.mode.textColor};
  width: 100%;
  padding: 23px 20px;
  h3 {
    margin-bottom: 4px;
  }
  span {
    font-size: 0.75rem;
    color: #828896;
  }
`;
