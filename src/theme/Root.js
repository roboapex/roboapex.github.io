import React from 'react';
import { SWRConfig } from 'swr';
import Head from '@docusaurus/Head';

export default function Root({ children }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Robotics @APEX" />
        <meta
          property="og:description"
          content="Robotics @APEX website."
        />
        <meta property="og:image" content="./img/og:image.jpg" />
        <meta property="og:url" content="https://roboapex.github.io" />

        <meta name="version" content="v1.0" />
        <meta
          name="description"
          content="Robotics @APEX website."
        />
        <meta name="subject" content="Robotics @APEX" />
        <meta
          name="keywords"
          content="SST, robotics, SST Robotics, CCA, coding, programming, robots"
        />
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
