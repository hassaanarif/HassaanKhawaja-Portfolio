import schools from "../constants/Schools";
import School from "./School";

function Education() {
  return (
    <section id="education" className="section-container section-spacing">
      <div className="mb-10">
        <div className="eyebrow mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span>ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="section-title">
          Education & <span className="gradient-accent-text">formal training</span>.
        </h2>
        <p className="muted-copy mt-4 max-w-2xl text-base sm:text-lg">
          Degree in Electrical Engineering with Computer Science specialization, complemented by ongoing engineering
          mastery.
        </p>
      </div>

      <div className="space-y-4">
        {schools.map((school, index) => (
          <School
            key={index}
            name={school.name}
            degree={school.degree}
            location={school.location}
            startDate={school.startDate}
            endDate={school.endDate}
            logoURL={school.logoURL}
            highlights={school.highlights}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
