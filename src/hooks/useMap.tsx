import { RootState } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HospitalDetailInfo, HospitalInfo } from 'types';

type useMapProps = {
  hospitalList?: HospitalInfo[];
  hospitalDetail?: HospitalDetailInfo;
};

function useMap({ hospitalList, hospitalDetail }: useMapProps) {
  const { xPos, yPos } = useSelector(({ position }: RootState) => position);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
      setIsLoading(false);

      if (hospitalList) {
        hospitalList.map(
          (hospital) =>
            (marker = new naver.maps.Marker({
              position: new naver.maps.LatLng(hospital.cxVl, hospital.cyVl),
              map: map,
            })),
        );
      }

      if (hospitalDetail) {
        marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(hospitalDetail.wgs84Lat),
            Number(hospitalDetail.wgs84Lon),
          ),
          map: map,
        });
      }
    };

    initMap();
  }, [xPos, yPos, hospitalList]);

  return { isLoading };
}

export default useMap;
