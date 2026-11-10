import certifications from "../constants/Certifications";
import Certificate from "./Certificate";

function Certifications() {
  return (
    <section id="certifications" className="section-container section-spacing pt-0">
      <div className="mb-10">
        <p className="eyebrow mb-3">Continuous learning</p>
        <h2 className="section-title">Courses & certifications.</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
