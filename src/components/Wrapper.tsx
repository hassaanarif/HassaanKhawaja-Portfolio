import React from "react";

function Wrapper(props: React.PropsWithChildren) {
  return <section className="relative z-10">{props.children}</section>;
}

export default Wrapper;
