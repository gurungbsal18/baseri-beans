import MainMenu from "../MainMenu";

import Image from "next/image";
import { Button } from "@heroui/button";
import { HeroSectionCardData } from "./data/HeroSectionCardData";

const Hero = () => {
  const title = "FROM FARM TO CUP";
  const subtitle = "Pure Coffee, Perfectly Packed";
  const heroContent =
    "Sourced directly from trusted farmers and delivered fresh in every package. Taste the difference in every brew";
  return (
    <>
      <div className="hero">
        <MainMenu />
        <div className="container pt-8">
          <Image
            src="/assests/images/coffee-tree.svg"
            alt="coffee-background"
            height={700}
            width={700}
            className="coffee-tree-img"
          />
          <div className="flex flex-col-reverse md:grid grid-cols-12 items-center gap-32">
            <div className="col-span-6 flex flex-col items-center md:items-start text-center md:text-left gap-4 text-white">
              <span>
                <h4 className="text-xl md:text-2xl">{subtitle}</h4>
                <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
              </span>
              <p>{heroContent}</p>
              <div className="flex justify-start">
                <Button radius="md" color="secondary">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="col-span-4 flex justify-center">
              <Image
                src="/assests/images/coffee-product.webp"
                alt="coffee product"
                height={1920}
                width={1080}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-feature-container">
        <div className="container flex flex-col gap-8 pt-16 pb-24">
          <h3 className="title-white text-center md:text-left">
            What Makes Baseri Beans So Special?
          </h3>

          <div className="flex flex-col md:grid grid-cols-3 gap-8 md:gap-48">
            {HeroSectionCardData.map((list, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <div className="flex flex-col gap-2 p-8 hero-feature-card">
                    <span>
                      <list.icon
                        size={64}
                        className={`bg-white p-2 rounded-full ${list.iconColor}`}
                      />
                    </span>
                    <h4 className="text-2xl font-bold">{list.title}</h4>
                    <p>{list.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#002914"
            fill-opacity="1"
            d="M0,128L40,128C80,128,160,128,240,128C320,128,400,128,480,144C560,160,640,192,720,208C800,224,880,224,960,186.7C1040,149,1120,75,1200,64C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </>
  );
};

export default Hero;
