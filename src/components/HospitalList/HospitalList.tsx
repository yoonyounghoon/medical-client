import { Map } from 'components/Map';
import { RootState } from 'modules';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HospitalListItem from './HospitalListItem';

function HospitalList() {
  const { hospitalList } = useSelector((state: RootState) => state.hospital);

  return (
    <div>
      {hospitalList && <Map hospitalList={hospitalList} zoom={10} />}
      {hospitalList &&
        hospitalList.map((data) => (
          <HospitalListItem key={data.hmcNo} data={data} />
        ))}
    </div>
  );
}

export default HospitalList;
