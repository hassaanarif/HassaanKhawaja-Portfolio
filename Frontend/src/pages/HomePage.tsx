import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

function HomePage() {
	return (
		<>
			<About />
			<Experience />
			<Skills />
			<Certifications />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default HomePage;
