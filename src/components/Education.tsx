import schools from "../constants/Schools";
import School from "./School";

function Education() {
  return (
    <section id="education" className="section-container section-spacing">
      <div className="mb-10">
        <p className="eyebrow mb-3">Background</p>
        <h2 className="section-title">Education.</h2>
      </div>

      {schools.map((school, index) => {
        return (
          <School
            key={index}
            name={school.name}
            degree={school.degree}
            location={school.location}
            startDate={school.startDate}
            endDate={school.endDate}
            logoURL={school.logoURL}
            highlights={school.highlights}
          ></School>
        );
      })}
    </section>
  );
}

export default Education;
