import React, {ChangeEvent, ChangeEventHandler} from 'react';

interface TrackProgress {
  left: number
  right: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TrackProgress = (props: TrackProgress) => {
  const {left, right, onChange} = props
  return (
    <div style={{display: "flex"}}>
      <input
        min={left}
        max={right}
        type={"range"}
        onChange={onChange}
      />
      <div>{left} / {right}</div>
    </div>
  );
};

export default TrackProgress;