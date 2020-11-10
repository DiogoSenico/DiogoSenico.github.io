import LogoAnimated from '../../Logo/Animated';
import { ReactComponent as DevicesAnimated } from '../../../public/imgs/devices_amico.svg';

const UnderConstuction = () => {
  return (
    <section className="h-screen w-screen flex bg-gray-900">
      <DevicesAnimated className="h-screen w-screen absolute z-0 opacity-25" />
      <div className="z-10 m-auto p-5 w-screen">
        <LogoAnimated />
        <div>
          <p className="text-white text-center font-hairline flex-wrap leading-none mt-5 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            Website Under Constuction
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderConstuction;
