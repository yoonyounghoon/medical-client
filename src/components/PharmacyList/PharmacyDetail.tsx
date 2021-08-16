import DetailMap from 'components/Map/DetailMap';
import OpenHours from 'components/OpenHours';
import { getPharmacyDetail } from 'lib/api/pharmacy';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PharmacyDetailInfo } from 'types';

type Params = {
  id: string;
};

function PharmacyDetail() {
  const { id } = useParams<Params>();
  const [data, setData] = useState<null | PharmacyDetailInfo>(null);

  useEffect(() => {
    console.log('effect');
    const getData = async () => {
      const response = await getPharmacyDetail(id);
      setData(response);
      console.log(response);
    };
    getData();
  }, [id]);

  if (!data) {
    return <p>로딩중..</p>;
  }

  return (
    <PharmacyDetailWrap>
      <PharmacyMap>
        <h2>{data.dutyName}</h2>
        <p>주소: {data.dutyAddr}</p>
        <p>전화번호: {data.dutyTel1}</p>
        <DetailMap xPos={Number(data.wgs84Lat)} yPos={Number(data.wgs84Lon)} />
      </PharmacyMap>
      <PharmacyContents>
        <h3>영업 시간</h3>
        <OpenHours
          day="월요일"
          startTime={data.dutyTime1s}
          endTime={data.dutyTime1c}
        />
        <OpenHours
          day="화요일"
          startTime={data.dutyTime2s}
          endTime={data.dutyTime2c}
        />
        <OpenHours
          day="수요일"
          startTime={data.dutyTime3s}
          endTime={data.dutyTime3c}
        />
        <OpenHours
          day="목요일"
          startTime={data.dutyTime4s}
          endTime={data.dutyTime4c}
        />
        <OpenHours
          day="금요일"
          startTime={data.dutyTime5s}
          endTime={data.dutyTime5c}
        />
        <OpenHours
          day="토요일"
          startTime={data.dutyTime6s}
          endTime={data.dutyTime6c}
        />
      </PharmacyContents>
    </PharmacyDetailWrap>
  );
}

export default PharmacyDetail;

const PharmacyDetailWrap = styled.div``;

const PharmacyMap = styled.div`
  padding: 20px;
  h2 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;

const PharmacyContents = styled.div`
  padding: 20px;
  h3 {
    margin-bottom: 1rem;
  }
`;
