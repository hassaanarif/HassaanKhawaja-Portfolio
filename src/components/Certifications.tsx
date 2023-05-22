import certifications from "../constants/Certifications";
import Certificate from "./Certificate";

function Certifications() {
	return (
		<section id="certifications" className="py-10 px-5 md:px-36">
			<h1 className="text-center break-words text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
				CERTIFICATIONS
			</h1>

			<div className="mt-10 flex flex-wrap gap-10">
				{certifications.map((certificate, index) => (
					<Certificate
						key={index}
						title={certificate.title}
						issuer={certificate.issuer}
						duration={certificate.duration}
						logoURL={certificate.logoURL}
					/>
				))}
			</div>
		</section>
	);
}

export default Certifications;
