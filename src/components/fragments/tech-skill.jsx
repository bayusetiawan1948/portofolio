export default function TechSkill(props) {
  const { children, icon } = props;
  return (
    <div className="w-max flex flex-row justify-center items-center gap-2 font-medium text-base bg-fourth rounded-lg px-2 py-1">
      <img
        src={`logos/${icon}.png`}
        alt={`icon ${icon}`}
        className="aspect-square w-5"
      />
      {children}
    </div>
  );
}
