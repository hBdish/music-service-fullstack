import React, { ReactNode } from 'react';
import styles from './card.module.css';
import { classNames, HStack, Mods } from '@/shared';

interface CardProps {
  children: ReactNode;
  isFocused?: boolean;
  isActive?: boolean;
}

const Card = (props: CardProps) => {
  const { children, isFocused = false, isActive = false } = props;

  const mods: Mods = {
    [styles.isFocused]: isFocused,
    [styles.isActive]: isActive,
  };

  return (
    <HStack max className={classNames(styles.card, mods, [])}>
      {children}
    </HStack>
  );
};

export { Card };
