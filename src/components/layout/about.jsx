import { Envelope, DownloadSimple } from '@phosphor-icons/react';
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center px-4 gap-12">
      <div className="">
        <img src="/images/foto-profile-2.png" alt="" className="rounded-2xl" />
      </div>
      <div className="font-light text-base text-white flex flex-col justify-start items-center gap-6">
        <div className="flex flex-col justify-start items-start gap-6">
          <p>
            Greetings people, I am <span className="font-medium">Bayu</span> a
            <span className="font-medium"> fullstack developer</span>.
          </p>
          <p>
            I'm a Full Stack Engineer with experience in handling small projects
            in the IT and services field. I really enjoy learning new things,
            catch on quickly, and love everything about technology.{' '}
          </p>
          <p>
            I graduated from SMKN 3 Bekasi and am currently studying at Bani
            Saleh University. I'm actively exploring programming and software
            development.
          </p>
          <p className="my-[30px]">
            If you have anything to say, please feel free to visit my chat.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <button className="flex flex-row items-center gap-2 font-semibold text-base text-primary px-4 py-2 bg-fourth rounded-2xl">
            Contact Me <Envelope size={24} color="#205F81" />
          </button>
          <button className="flex flex-row items-center gap-2 font-semibold text-base text-primary px-4 py-2 bg-fourth rounded-2xl">
            Check My Resume <DownloadSimple size={24} color="#164863" />
          </button>
        </div>
      </div>
    </div>
  );
}
