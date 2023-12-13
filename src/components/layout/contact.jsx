import {
  EnvelopeSimple,
  DiscordLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

export default function Contact(props) {
  const iconSize = props.iconWidth;
  const linkProperty = '_blank';
  const iconColor = '#164863';
  const style =
    'p-2 bg-fourth text-primary rounded-2xl w-max flex flex-row justify-center items-center gap-2 md:px-4';
  const childStyle = '';
  return (
    <div className="flex flex-col justify-center items-center text-white w-full">
      <div className="flex flex-col justify-center items-start gap-4 px-4">
        <p className="font-semibold text-lg">
          Feel free to contact or discuss something with me
        </p>
        <p className="max-w-3xl">
          If you have any further questions or would like to discuss anything,
          feel free to reach out. I'm here to share information or chat about
          specific topics. So, don't hesitate to contact me whenever it's
          convenient for you.
        </p>
        <div className="flex flex-row flex-wrap justify-start items-start gap-4 max-w-3xl">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=bayu.setiawan.1948@gmail.com&su=Your%20Subject&body=Your%20Messages&tf=cm"
            target={linkProperty}
            className={style}
          >
            <EnvelopeSimple size={iconSize} color={iconColor} />
            <div className={childStyle}>
              <p className="font-light text-xs md:text-base">Gmail</p>
              <p className="underline underline-offset-4 font-semibold text-xs md:text-lg">
                bayu.setiawan.1948@gmail.com
              </p>
            </div>
          </a>
          <a
            href="discord.com/users/warnaf09"
            target={linkProperty}
            className={style}
          >
            <DiscordLogo size={iconSize} color={iconColor} />
            <div className={childStyle}>
              <p className="font-light text-xs md:text-base">Discord</p>
              <p className="underline underline-offset-4 font-semibold text-xs md:text-lg">
                discord.com/users/warnaf09
              </p>
            </div>
          </a>
          <a
            href="linkedin.com/in/bayusetiawan1948/"
            target={linkProperty}
            className={style}
          >
            <LinkedinLogo size={iconSize} color={iconColor} />
            <div className={childStyle}>
              <p className="font-light text-xs md:text-base">Linkedin</p>
              <p className="underline underline-offset-4 font-semibold text-xs md:text-lg">
                linkedin.com/in/bayusetiawan1948
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
