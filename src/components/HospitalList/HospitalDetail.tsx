import DetailMap from 'components/Map/DetailMap';
import OpenHours from 'components/OpenHours';
import { getHospitalDetail } from 'lib/api/hospital';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HospitalDetailInfo } from 'types';

type HospitalPrams = {
  id: string;
};

function HospitalDetail() {
  const { id } = useParams<HospitalPrams>();
  console.log(id);
  const [data, setData] = useState<null | HospitalDetailInfo>(null);

  useEffect(() => {
    console.log('effect');
    const getData = async () => {
      const response = await getHospitalDetail(id);
      setData(response);
      console.log(response);
    };
    getData();
  }, [id]);

  if (!data) {
    return <p>로딩중..</p>;
  }

  return (
    <HospitalDetailWrap>
      <MapContainer>
        <h2>{data.dutyName}</h2>
        <h3>위치</h3>
        <p>{data.dutyAddr}</p>
        <p>{data.dutyMapimg}</p>
        <p>전화번호: {data.dutyTel1}</p>
        <DetailMap xPos={Number(data.wgs84Lat)} yPos={Number(data.wgs84Lon)} />
      </MapContainer>
      <HospitalContents>
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
      </HospitalContents>
    </HospitalDetailWrap>
  );
}

export default HospitalDetail;

const HospitalDetailWrap = styled.div``;

const MapContainer = styled.div`
  padding: 20px;
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;

const HospitalContents = styled.div`
  padding: 20px;
  h3 {
    margin-bottom: 1rem;
  }
`;
