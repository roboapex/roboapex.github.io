import React from "react";
import { useLocation } from "@docusaurus/router";
import DocItem from "@theme-original/DocItem";
import PasswordGate from "../../components/password-gate";

export default function DocItemWrapper(props) {
  const { pathname } = useLocation();
  const isRoborave = pathname.startsWith("/roborave");

  if (!isRoborave) return <DocItem {...props} />;

  return (
    <PasswordGate>
      <DocItem {...props} />
    </PasswordGate>
  );
}
