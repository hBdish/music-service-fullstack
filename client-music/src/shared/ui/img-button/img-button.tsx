import React, { CSSProperties } from 'react';
import styles from './img-button.module.css';
import { classNames, PauseIcon, PlayIcon, VStack } from '@/shared';

import Image from 'react-bootstrap/Image';

interface ImgButtonProps {
  className?: string;
  style?: CSSProperties;
  imgSrc?: string;
  active?: boolean;
  pause?: boolean;
  onClickPause?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ImgButton = (props: ImgButtonProps) => {
  const {
    onClickPause,
    className,
    style,
    pause = false,
    imgSrc,
    active = false,
  } = props;

  return (
    <div
      style={style}
      className={classNames(styles.imgButton, { [styles.active]: active }, [
        className,
      ])}
    >
      <Image
        className={classNames('', { [styles.imgIsActive]: active }, [])}
        alt={'error'}
        src={imgSrc}
        width={48}
        height={48}
        rounded
      />
      <button onClick={onClickPause} className={styles.buttonPause}>
        <VStack max align={'center'} justify={'center'}>
          {!pause && active ? <PauseIcon /> : <PlayIcon />}
        </VStack>
      </button>
    </div>
  );
};

export { ImgButton };
