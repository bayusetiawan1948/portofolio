import TechSkill from '../fragments/tech-skill';
import skillJson from '../../static/tech-skill.json';

export default function Portofolio() {
  const data = skillJson;
  let i = 1;
  return (
    <div className="px-4">
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="font-medium text-base text-white">
          This is the technology that I have been using for the development
          process
        </p>
        <div className="flex flex-wrap justify-start items-start gap-2 w-72 bg-third rounded-2xl p-4">
          {data.map((single) => {
            i++;
            return (
              <TechSkill icon={single.icon} key={i}>
                {single.skill}
              </TechSkill>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
