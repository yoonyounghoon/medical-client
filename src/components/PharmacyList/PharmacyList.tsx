import usePharmacy from 'hooks/usePharmacy';
import React from 'react';
import PharmacyListItem from './PharmacyListItem';

function PharmacyList() {
  const { pharmacyList } = usePharmacy();

  return (
    <div>
      {pharmacyList &&
        pharmacyList.map((data) => (
          <PharmacyListItem key={data.longitude} data={data} />
        ))}
    </div>
  );
}

export default PharmacyList;
