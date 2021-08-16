import { Map } from 'components/Map';
import usePharmacy from 'hooks/usePharmacy';
import React from 'react';
import PharmacyListItem from './PharmacyListItem';

function PharmacyList() {
  const { pharmacyList } = usePharmacy();

  return (
    <div>
      {pharmacyList && <Map pharmacyList={pharmacyList} zoom={14} />}
      {pharmacyList &&
        pharmacyList.map((data) => (
          <PharmacyListItem key={data.longitude} data={data} />
        ))}
    </div>
  );
}

export default PharmacyList;
