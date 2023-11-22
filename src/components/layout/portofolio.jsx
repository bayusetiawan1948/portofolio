import TechSkill from '../fragments/tech-skill';
import JobExp from '../fragments/job-exp';
import ProjectCard from '../fragments/project-card';
import skillJson from '../../static/tech-skill.json';
import jobJson from '../../static/job-exp.json';
import project from '../../static/project.json';

export default function Portofolio() {
  const containerStyle = 'flex justify-center items-center gap-8';
  const textStyle = 'font-medium text-base text-white md:text-xl';
  const parentSkillandJob =
    'flex flex-wrap justify-start items-start gap-2 w-72 rounded-2xl p-4';
  const techs = skillJson;
  const jobs = jobJson;
  const projects = project;
  let i = 1;
  let j = 1;
  let h = 1;
  return (
    <div className="px-4 flex flex-col justify-center items-center gap-12 lm:max-w-md md:px-0 md:w-full md:max-w-[720px] lg:px-6 lg:max-w-5xl xl:max-w-6xl">
      <div
        className={`${containerStyle} flex-col md:flex-row md:justify-between md:w-full`}
      >
        <p className={`${textStyle} w-72 lg:w-96`}>
          This is the technology that I have been using for the development
          process
        </p>
        <div className={`${parentSkillandJob} bg-third w-2/4`}>
          {techs.map((tech) => {
            i++;
            return (
              <TechSkill icon={tech.icon} key={i}>
                {tech.skill}
              </TechSkill>
            );
          })}
        </div>
      </div>
      <div
        className={`${containerStyle} flex-col-reverse md:flex-row md:justify-between md:w-full`}
      >
        <div className={`${parentSkillandJob} bg-fourth lg:w-2/4`}>
          {jobs.map((job) => {
            j++;
            return (
              <JobExp
                key={j}
                company={job.company}
                position={job.position}
                time={job.time}
                skills={job.skills}
              />
            );
          })}
        </div>
        <p className={`${textStyle} w-72 lg:w-96`}>
          I've been in professional development for over a year, and i've learnt
          and enjoyed many new things during this journey
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 md:w-full">
        <p className={`${textStyle} text-center`}>
          And there are several collaborative projects with partners
        </p>
        <div className="flex flex-col justify-center items-center gap-4 md:w-full md:justify-start md:items-start md:gap-8 md:flex-row md:flex-wrap">
          {projects.map((project) => {
            h++;
            return (
              <ProjectCard
                key={h}
                title={project['project-name']}
                image={project.image}
                description={project.description}
                skills={project.skills}
                url={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
