import Head from "@docusaurus/Head";
import React from "react";

// TEMP: url for applications
export const joinURL =
  "https://docs.google.com/forms/d/e/1FAIpQLScpremOj-MTsoWd-zYJEvQ08l4NjS8mC_Cyps7TESTU313aAQ/viewform?usp=sf_link";

export default function JoinPage() {
  return (
    <Head>
      <title>Join Robotics @APEX!</title>
      <meta http-equiv="refresh" content={`0; URL=${joinURL}`} />
    </Head>
  );
}

//<Redirect to={joinURL}></Redirect>
//<ThemeLayout title="Join">
//<div>
//{(() => {
//  window.location.href = joinURL;
//  return null;
//})()}
//</div>
//
//<Notice>If you are not redirected immediately, click here: <a href={joinURL}>{joinURL}</a></Notice>
//{/* <Notice>Applications will open soon! Save this URL and check back soon!</Notice> */}
//</ThemeLayout>
