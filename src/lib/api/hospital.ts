import axios from 'axios';

export type locationCode = {
  siDoCd: number;
  siGunGuCd: number;
};

// 지역별 검진기관 API
export const getHospitalListAPI = async (location: locationCode) => {
  const response = await axios.get(
    `http://ec2-13-125-211-222.ap-northeast-2.compute.amazonaws.com:5000/hospital/${location.siDoCd}/${location.siGunGuCd}`,
  );
  return response.data;
};

// 병원별 자세한 정보
export const getHospitalDetail = async (name: string) => {
  const response = await axios.get(`http://ec2-13-125-211-222.ap-northeast-2.compute.amazonaws.com:5000/hospital/${name}`);
  return response.data;
};
