import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Layout() {
	return (
		<div className="bg-gray-900 text-gray-300">
			<NavBar />
			<Outlet />
		</div>
	);
}
