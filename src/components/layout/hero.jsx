import { CaretDoubleDown } from '@phosphor-icons/react';
import HeroCore from '../fragments/hero-core';

export default function Hero(props) {
  const { isHidden } = props;
  const marginTopControll = isHidden ? '-mt-40' : 'mt-10';
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 ${marginTopControll}`}
    >
      <div className="bg-fourth text-primary text-xl font-medium w-max rounded-2xl py-2 px-10 ">
        Portofolio Gallery
      </div>
      <HeroCore />
      <div className="flex flex-col justify-center items-center text-white gap-5 ">
        <p className="font-medium lm:text-lg">
          Let's get to know each other better
        </p>
        <CaretDoubleDown size={48} color="#EFEFEF" />
      </div>
    </div>
  );
}
