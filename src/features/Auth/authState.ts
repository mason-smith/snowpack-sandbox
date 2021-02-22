import { atom } from 'recoil';

// Local Dependencies
import { AuthState } from './types';

export const authState = atom<AuthState | null>({
  key: 'authState',
  default: null,
});
