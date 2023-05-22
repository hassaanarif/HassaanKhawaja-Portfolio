import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { injectStyle } from "react-toastify/dist/inject-style";
import Wrapper from "./components/Wrapper";

// React-Toastify-CSS
injectStyle();

export default function Layout() {
	return (
		<>
			<NavBar />
			<Wrapper>
				<About />
				<Experience />
				<Skills />
				<Certifications />
				<Projects />
				<Contact />
				<Footer />
			</Wrapper>
		</>
	);
}
