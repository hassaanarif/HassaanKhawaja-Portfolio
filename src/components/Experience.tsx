import Jobs from "../constants/Jobs";
import Job from "./Job";

function Experience() {
  return (
    <section id="experience" className="section-container section-spacing">
      <div className="mb-12">
        <div className="eyebrow mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="section-title">
          Engineering that <span className="gradient-accent-text">delivers at scale</span>.
        </h2>
        <p className="muted-copy mt-4 max-w-2xl text-base sm:text-lg">
          A track record of solving hard problems across healthcare AI, geospatial digital twins, enterprise operations,
          and database architecture.
        </p>
      </div>

      <div className="relative pl-0 md:pl-6 space-y-6">
        {/* Subtle timeline track on desktop */}
        <div
          className="hidden md:block absolute left-0 top-6 bottom-6 w-px timeline-track opacity-30"
          aria-hidden="true"
        />

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
