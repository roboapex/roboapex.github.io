import React from "react";
import Notice from "../../components/notice";
import ThemeLayout from "../../components/theme/layout";

// TEMP: url for applications
export default function JoinPage() {
  return (
    <ThemeLayout title="Join">
      <Notice>Please apply to Robotics @APEX through the centralised CCA Application form by Mr Lam</Notice>
    </ThemeLayout>
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
