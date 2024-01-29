import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/Hero/HeroBanner.png";

const HeroSection = () => {
  return (
    <header className="background-style min-h-screen pt-36">
      <Container>
        <div className="grid grid-cols-12 place-items-center align-middle gap-y-20 lg:gap-y-0">
          <div className="col-span-12 md:col-span-6">
            <div>
              <h1 className="uppercase">
                <span>Brand New</span>
                <br />
                <span> event Packages</span>
              </h1>
              <h2 className="leading-[110%] inline-block text-[36px] lg:text-[56px] font-extrabold gradient-text mt-2 ">
                For Winter
              </h2>
              <p className="text-[#333] text-[16px] md:text-[20px] leading-[32px] my-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                Faucibus nec gravida ipsum pulvinar vel non.
              </p>
              <Button>Explore</Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-[70%] xl:w-[80%] mx-auto">
              <div className="outside">
                <img
                  src={heroBanner}
                  className="object-contain w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 grid   gird-cols-1 md:grid-cols-3 gap-6 mb-16  ">
            <div className="glass-gradient px-4 py-6">
              <div className="bg-[#685FD459] inline-block p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_1676)">
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                      fill="#685FD4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1676">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </div>
            <div className="glass-gradient px-4 py-6">
              <div className="bg-[#F2C94C59] inline-block p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_1682)">
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                      fill="#F2C94C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1682">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </div>
            <div className="glass-gradient px-4 py-6">
              <div className="bg-[#8ab2dc59] inline-block p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_1689)">
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                      fill="#8AB2DC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1689">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeroSection;
