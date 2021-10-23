import React from 'react';
import { SWRConfig } from 'swr';
import Head from '@docusaurus/Head';

export default function Root({ children }) {
  return (
    <>
      <Head>
        <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
      </Head>
      <SWRConfig value={{
        refreshInterval: 10000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}>
        {children}
      </SWRConfig>
    </>
  );
}
