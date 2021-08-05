import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

function Map() {
  useEffect(() => {
    let map = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);
  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
}

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;
