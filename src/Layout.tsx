import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Layout() {
	return (
		<div className="bg-gray-900 text-gray-300 relative">
			<NavBar />
			<About />
			<Experience />
			<Skills />
			<Certifications />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
