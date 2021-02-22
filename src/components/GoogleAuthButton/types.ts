import { ReactNode } from 'react';

export type GoogleAuthButtonProps = {
  children: ReactNode | string;
  onClick?: () => void;
};
