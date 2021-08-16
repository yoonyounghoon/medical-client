import { HospitalList } from 'components/HospitalList';
import SelectBox from 'components/SelectBox';
import React from 'react';

function MedicalCheckPage() {
  return (
    <div>
      <SelectBox />
      <HospitalList />
    </div>
  );
}

export default MedicalCheckPage;
