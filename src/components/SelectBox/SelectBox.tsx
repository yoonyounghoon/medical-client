import { GunGu, SiDo } from 'lib/constants';
import { getHospitalList } from 'modules/hospital/reducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function SelectBox() {
  const [sidoCd, setSidoCd] = useState('');
  const [gunguCd, setGunguCd] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      getHospitalList({ siDoCd: Number(sidoCd), siGunGuCd: Number(gunguCd) }),
    );
  };

  const onChangeSido: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSidoCd(e.target.value);
  };
  const onChangeGunGu: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setGunguCd(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select name="sidoCd" value={sidoCd} onChange={onChangeSido}>
        {SiDo.map((sido) => (
          <option key={sido.value} value={sido.value}>
            {sido.label}
          </option>
        ))}
      </select>
      <select name="gunguCd" value={gunguCd} onChange={onChangeGunGu}>
        {GunGu.map((gungu) => (
          <option key={gungu.value} value={gungu.value}>
            {gungu.label}
          </option>
        ))}
      </select>
      <StyledButton onClick={handleSubmit}>조회하기</StyledButton>
    </SelectBoxWrapper>
  );
}

export default SelectBox;

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  select {
    height: 100%;
  }
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: #3095e9;
  border: none;
  color: white;
  height: 100%;
  border-radius: 8 px;
`;
