import React from "react";

function Wrapper(props: React.PropsWithChildren) {
	return <section className="relative bg-gray-950 text-gray-300">{props.children}</section>;
}

export default Wrapper;
