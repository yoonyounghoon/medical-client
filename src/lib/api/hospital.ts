import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// 지역별 검진기관 API
export const getHospitalList = (sido: string, gungu: string) => {
  return axios.get(
    `http://apis.data.go.kr/openapi/service/rest/HmcSearchService/getRegnHmcList?serviceKey=${API_KEY}&siDoCd=${sido}&siGunGuCd=${gungu}`,
  );
};
