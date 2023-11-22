export default function ProjectCard(props) {
  const { title, image, description, skills, url } = props;
  let i = 1;
  return (
    <div className="flex flex-col justify-center items-start p-4 gap-3 bg-fourth rounded-xl text-primary max-w-xs">
      <img src={image} alt="" className="rounded-xl w-full aspect-video" />
      <p className="font-bold text-base">{title}</p>
      <p className="font-light text-base">{description}</p>
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
      <a
        href={url}
        className="bg-primary text-fourth py-2 w-full rounded-xl text-center font-medium text-base"
      >
        Preview
      </a>
    </div>
  );
}
