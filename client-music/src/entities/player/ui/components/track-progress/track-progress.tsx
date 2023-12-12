import React, { ChangeEvent } from 'react';
import { convertTrackTime } from '@/shared';

interface TrackProgress {
  left: number;
  right: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress = (props: TrackProgress) => {
  const { left, right, onChange } = props;
  return (
    <div style={{ display: 'flex' }}>
      <input
        min={0}
        max={right}
        value={left}
        type={'range'}
        onChange={onChange}
      />
      <div>
        {convertTrackTime(left)} / {convertTrackTime(right)}
      </div>
    </div>
  );
};

export default TrackProgress;
