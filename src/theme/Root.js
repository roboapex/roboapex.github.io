import React from 'react';
import { SWRConfig } from 'swr';

export default function Root({ children }) {
  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      {children}
    </SWRConfig>
  );
}
