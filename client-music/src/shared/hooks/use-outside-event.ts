import { MutableRefObject, useEffect } from 'react';

const useOutsideEvent = (
  ref: MutableRefObject<HTMLElement | null>,
  onOutside: () => void,
) => {
  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        onOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onOutside]);
};

export { useOutsideEvent };
