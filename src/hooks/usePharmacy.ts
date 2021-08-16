import { RootState } from 'modules';
import { getPharmacy } from 'modules/pharmacy/reducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function usePharmacy() {
  const { pharmacyList } = useSelector((state: RootState) => state.pharmacy);
  const { xPos, yPos } = useSelector((state: RootState) => state.position);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPharmacy({ xPos, yPos }));
  }, []);

  return { pharmacyList, xPos, yPos };
}

export default usePharmacy;
