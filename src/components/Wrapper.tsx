import React from "react";

function Wrapper(props: React.PropsWithChildren) {
  return <section className="relative">{props.children}</section>;
}

export default Wrapper;
