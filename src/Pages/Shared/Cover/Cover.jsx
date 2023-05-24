import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, subtitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={bgImg}
        bgImageAlt="The Menu"
        strength={-300}
      >
        <div className="hero h-[550px] w-full">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="m-15">
              <h1 className="mb-2 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 text-2xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
