import Jobs from "../constants/Jobs";
import Job from "./Job";

function Experience() {
  return (
    <section id="experience" className="section-container section-spacing">
      <div className="mb-10">
        <p className="eyebrow mb-3">Career</p>
        <h2 className="section-title">Experience that ships.</h2>
        <p className="muted-copy mt-4 max-w-2xl">
          I’ve worked with teams in healthcare AI, public infrastructure, and SaaS—building products and improving the
          systems behind them.
        </p>
      </div>

      <div className="space-y-4">
        {Jobs.map((job) => (
          <Job
            key={`${job.company}-${job.startDate}`}
            time={job.time}
            location={job.location}
            company={job.company}
            positions={job.positions}
            startDate={job.startDate}
            endDate={job.endDate}
            companyLogoURL={job.companyLogoURL}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
