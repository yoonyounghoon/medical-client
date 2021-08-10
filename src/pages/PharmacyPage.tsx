import List from 'components/List';
import Map from 'components/Map';
import { PharmacyList } from 'components/PharmacyList';
import React from 'react';

function PharmacyPage() {
  return (
    <div>
      <Map />
      <PharmacyList />
    </div>
  );
}

export default PharmacyPage;
