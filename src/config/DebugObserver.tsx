/* eslint-disable */
import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  if (
    process.env.NODE_ENV !== 'production' &&
    process.env.NODE_ENV !== 'test'
  ) {
    useEffect(() => {
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
        console.groupCollapsed(node.key);
        console.debug(snapshot.getLoadable(node));
        console.groupEnd();
      }
    }, [snapshot]);
  }

  return null;
};
