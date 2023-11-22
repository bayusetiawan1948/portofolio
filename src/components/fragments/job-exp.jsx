export default function JobExp(props) {
  const { company, position, time, skills } = props;
  let i = 1;
  return (
    <div className="flex flex-col justify-start items-start gap-2 text-primary bg-third w-full rounded-2xl p-3">
      <p className="">{company}</p>
      <p className="text-lg font-semibold">{position}</p>
      <p className="text-sm font-light">{time}</p>
      <div className="flex flex-row justify-start items-center gap-2">
        <p>Skills: </p>
        {skills.map((skill) => {
          i++;
          return (
            <img
              key={i}
              src={`logos/${skill}.png`}
              alt={`icon ${skill}`}
              className="aspect-square w-5 object-contain"
            />
          );
        })}
      </div>
    </div>
  );
}
