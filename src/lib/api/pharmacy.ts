import axios from 'axios';

export type PositionData = {
  xPos: number;
  yPos: number;
};

//  약국 api
export const getPharmacyList = async (position: PositionData) => {
  const response = await axios.get(
    `/pharmacy/${position.yPos}/${position.xPos}`,
  );
  return response.data;
};
