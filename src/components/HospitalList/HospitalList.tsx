import { RootState } from 'modules';
import { getHospitalList } from 'modules/hospital/reducer';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HospitalListItem from './HospitalListItem';

function HospitalList() {
  const { hospitalList } = useSelector((state: RootState) => state.hospital);

  return (
    <div>
      {hospitalList &&
        hospitalList.map((data) => (
          <HospitalListItem key={data.hmcNo} data={data} />
        ))}
    </div>
  );
}

export default HospitalList;
