import React, {ChangeEvent} from 'react';

interface TrackVolume {
  left: number
  right: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TrackVolume = (props: TrackVolume) => {
  const {left, right, onChange} = props
  return (
    <div style={{display: "flex"}}>
      <input
        min={0}
        max={right}
        value={left}
        type={"range"}
        onChange={onChange}
      />
      <span style={{width: "60px"}}>{left} / {right}</span>
    </div>
  );
};

export default TrackVolume;