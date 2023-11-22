export default function HeroCore() {
  return (
    <div className="grid grid-rows-1 gap-5 justify-items-center p-5 w-full mt:grid-cols-2 mt:max-w-mt md:max-w-3xl md:grid-cols-4 lg:max-w-6xl lg:grid-rows-1 xl:p-3">
      <div className="rounded-2xl w-52 aspect-[2/3] bg-primary md:w-36 lg:row-span-2 lg:w-full ">
        <img src="images/foto-profil-1-removebg-preview.png" alt="" />
      </div>
      <div className="rounded-2xl w-full h-max  bg-secondary text-white p-4 flex justify-start lm:justify-center mt:h-full md:w-max lg:w-full lg:justify-start ">
        <div className="w-max flex flex-col justify-center items-start gap-2 mt:gap-4 md:gap-2">
          <p className="font-light text-sm lm:text-base md:text-sm lg:text-base">
            Hello World, my name is
          </p>
          <div className="font-bold text-3xl flex flex-row gap-2 mt:flex-col md:text-2xl lg:text-4xl">
            <p>Bayu</p>
            <p>Setiawan</p>
          </div>
          <p className="font-medium text-xl md:text-lg">Fullstack Developer</p>
        </div>
      </div>
      <div className="w-full h-52 font-semibold text-2xl flex justify-center items-center mt:col-span-2 mt:max-w-[464px] md:w-5/6 md:h-full lg:w-full lg:max-w-[32.5rem] ">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="bg-secondary text-fourth h-full w-full rounded-2xl z-40 flex justify-end items-center -mx-3 relative">
            <p className="-rotate-90 absolute -right-9">Javascript</p>
          </div>
          <div className="bg-primary text-fourth h-full w-full rounded-2xl z-30 flex justify-end items-center -mx-3 relative">
            <p className="-rotate-90 absolute right-1">PHP</p>
          </div>
          <div className="bg-third text-primary h-full w-full rounded-2xl z-20 flex justify-end items-center -mx-3 relative">
            <p className="-rotate-90 absolute -right-3">MySQL</p>
          </div>
          <div className="bg-fourth text-primary h-full w-full rounded-2xl z-10 flex justify-end items-center -mx-3 relative">
            <p className="-rotate-90 absolute -right-2">Nginx</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl text-primary text-xl flex justify-center items-center p-4 w-full h-44 bg-fourth mt:col-span-2 md:h-40 lg:col-span-1 ">
        I am experienced in web development technology to help provide you with
        solutions
      </div>
      <div className="rounded-2xl p-4 flex flex-col justify-center items-center text-fourth w-full h-44 bg-secondary md:h-40 ">
        <p className="text-[40px] font-bold">1+</p>
        <p className="text-center text-xl">Years of Professional Experience</p>
      </div>
      <div className="rounded-2xl p-4 flex flex-col justify-center items-center text-fourth w-full h-44 bg-primary md:h-40 ">
        <p className="text-[40px] font-bold">2</p>
        <p className="text-center text-xl">Programming languages used</p>
      </div>
    </div>
  );
}
