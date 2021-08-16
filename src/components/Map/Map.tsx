import React from 'react';
import { RootState } from 'modules';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { HospitalInfo, PharmacyInfo } from 'types';

type MapProps = {
  hospitalList?: HospitalInfo[];
  pharmacyList?: PharmacyInfo[];
  zoom: number;
};

function Map({ hospitalList, pharmacyList, zoom }: MapProps) {
  const { xPos, yPos } = useSelector(({ position }: RootState) => position);

  useEffect(() => {
    let map: any = null;
    let marker = null;

    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(xPos, yPos),
        zoom: zoom,
      });

      // 현재 위치로 마커 생성
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(xPos, yPos),
        map: map,
      });

      if (hospitalList) {
        hospitalList.map(
          (hospital) =>
            (marker = new naver.maps.Marker({
              position: new naver.maps.LatLng(hospital.cxVl, hospital.cyVl),
              map: map,
            })),
        );
      }

      if (pharmacyList) {
        pharmacyList.map(
          (pharmacy) =>
            (marker = new naver.maps.Marker({
              position: new naver.maps.LatLng(
                pharmacy.latitude,
                pharmacy.longitude,
              ),
              map: map,
            })),
        );
      }
    };

    initMap();
  }, [xPos, yPos, hospitalList, pharmacyList]);
  return <MapContainer id="map"></MapContainer>;
}

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;
