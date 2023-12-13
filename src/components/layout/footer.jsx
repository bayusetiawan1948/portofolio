import {
  EnvelopeSimple,
  DiscordLogo,
  LinkedinLogo,
  GithubLogo,
} from '@phosphor-icons/react';

export default function Footer(props) {
  const iconSize = props.iconWidth;
  const linkProperty = '_blank';
  const iconColor = '#EFEFEF';
  return (
    <div className="bg-secondary w-full flex flex-col justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center text-white gap-6">
        <p className="font-semibold text-xl md:text-[28px]">Bayu Setiawan</p>
        <p className="font-medium text-xl -mt-4 md:text-[28px]">
          Fullstack Developer
        </p>
        <div className="text-base flex flex-row justify-center items-center gap-4 underline underline-offset-2 md:text-xl">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Portofolio</a>
          <a href="">Contact</a>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 md:gap-10">
          <a href="#" target={linkProperty}>
            <EnvelopeSimple size={iconSize} color={iconColor} />
          </a>
          <a href="#" target={linkProperty}>
            <DiscordLogo size={iconSize} color={iconColor} />
          </a>
          <a href="#" target={linkProperty}>
            <LinkedinLogo size={iconSize} color={iconColor} />
          </a>
          <a href="#" target={linkProperty}>
            <GithubLogo size={iconSize} color={iconColor} />
          </a>
        </div>
        <p className="text-center mt-8">
          &copy; 2023 Created by Bayu Setiawan. All right reserved
        </p>
      </div>
    </div>
  );
}
