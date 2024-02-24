import schools from "../constants/Schools";
import School from "./School";

function Education() {
  return (
    <section id="education" className="py-10 px-5 md:px-36">
      <h1 className="text-center break-words text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
        EDUCATION
      </h1>

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
