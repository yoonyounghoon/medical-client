import useMap from 'hooks/useMap';
import React from 'react';
import styled from 'styled-components';

function Map() {
  const { xPos, yPos } = useMap();

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
