import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

type DetailMapProps = {
  xPos: number;
  yPos: number;
};

function DetailMap({ xPos, yPos }: DetailMapProps) {
  useEffect(() => {
    let map: any = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(xPos, yPos),
        zoom: 15,
      });

      // 현재 위치로 마커 생성
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(xPos, yPos),
        map: map,
      });
    };
    initMap();
  }, []);

  return <MapContainer id="map"></MapContainer>;
}

export default DetailMap;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;
