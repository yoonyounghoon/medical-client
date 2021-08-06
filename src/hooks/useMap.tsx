import { RootState } from 'modules';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function useMap() {
  const { xPos, yPos } = useSelector(({ position }: RootState) => position);

  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(xPos, yPos),
        zoom: 13,
      });

      // 현재 위치로 마커 생성
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(xPos, yPos),
        map: map,
      });
    };

    initMap();
  }, [xPos, yPos]);

  return {
    xPos,
    yPos,
  };
}

export default useMap;
