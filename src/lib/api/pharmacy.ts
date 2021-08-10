import axios from 'axios';

export type PositionData = {
  xPos: number;
  yPos: number;
};

//  가까운 약국 10개 찾아오는 API
export const getPharmacyList = async (position: PositionData) => {
  const response = await axios.get(
    `/pharmacy/${position.yPos}/${position.xPos}`,
  );
  return response.data;
};

// 약국 자세한 정보 API
export const getPharmacyDetail = async (id: string) => {
  const response = await axios.get(`/pharmacy/${id}`);
  return response.data;
};
