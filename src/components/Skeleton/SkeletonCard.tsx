import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonCard() {
  return (
    <div>
      <h4>
        <Skeleton width={300} height={80} />
      </h4>
    </div>
  );
}

export default SkeletonCard;
