import React from "react";
import ThemeLayout from "../../components/theme/layout";
import Notice from "../../components/notice";

// temp url for applications
export const joinURL = "https://docs.google.com/forms/d/e/1FAIpQLScpremOj-MTsoWd-zYJEvQ08l4NjS8mC_Cyps7TESTU313aAQ/viewform?usp=sf_link"

export default function JoinPage() {
  return (
    <ThemeLayout title="Join">
      <meta http-equiv="refresh" content={`0; URL=${joinURL}`} />
      <Notice>If you are not redirected immediately, click here: <a href={joinURL}>{joinURL}</a></Notice>
      {/* <Notice>Applications will open soon! Save this URL and check back soon!</Notice> */}
    </ThemeLayout>
  );
}