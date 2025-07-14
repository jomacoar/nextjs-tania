'use client';
import Image from 'next/image';
import Link from 'next/link';
import GlassmorphNavbar from '@/components/NavBar';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/Icons';
import CustomButton from '@/components/Button';
import Aboutme from '@/components/Aboutme';
import { Hearts, Leafs } from '@/components/Ornaments';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SideNavBar from '@/components/SideNavBar';
import { menuLinksPT } from '@/components/MenuLinks';

const styles =
  'text-violetMain/70 scale-120 hover:scale-150 transition duration-300';

export default function Home() {
  /* await new Promise((resolve) => setTimeout(resolve, 1000)); */

  return (
    <>
      <main className="relative h-screen w-full grid place-content-center place-items-center font-boldonse">
        {/* <Leafs
          className="absolute -top-8 left-8 rotate-6 scale-y-[-1] svg-color-primary z-30"
          width="130"
          height="130"
          fill="zinc-50"
        /> */}
        {/* Navigation bar */}
        <div className="absolute w-full top-8 justify-center flex z-20">
          <GlassmorphNavbar personal="backdrop-blur-lg border-petroMain border-3 tracking-[1.25px] text-[14px] text-primary" />
        </div>
        {/* Side Navigation bar for small screens */}
        <div className="absolute w-full top-8 left-8 z-60">
          <SideNavBar links={menuLinksPT} />
        </div>
        {/* Ornaments */}
        <Hearts
          className="absolute top-[80vh] left-[80vw] flex justify-start items-start svg-color-primary rotate-22 z-30"
          width="60"
          height="60"
        />
        <Hearts
          className="absolute top-[67vh] left-[52vw] flex justify-start items-start svg-color-primary -rotate-22 z-30"
          width="45"
          height="45"
        />
        <Hearts
          className="absolute top-[6vh] left-[4vw] flex justify-start items-start svg-color-primary -rotate-22 z-30"
          width="35"
          height="35"
        />

        {/* central elements */}
        <div className="flex justify-center items-center w-[80vw] max-w-[1720px] max-h-[60vh] mt-18 gap-2 rounded-3xl xxl:w-[70vw]">
          {/* left column */}
          <div className="bg-zinc-500/10 border-1 border-primary rounded-[60px] flex flex-col grow-0 shrink-0 lg:w-1/2 lg:min-w-[480px] lg:h-[620px] items-center justify-center">
            <h1 className="max-lg:text-4xl max-lg:mt-12 max-lg:mb-6 text-5xl tracking-wider drop-shadow-[2px_2px_0_#f4f4f5] font-semibold text-orangeMain mt-18 mb-12">
              Olá!
            </h1>
            <h3 className="max-lg:text-2xl text-2xl drop-shadow-[1px_2px_0_#09090b] text-primary tracking-wider leading-[1.5] max-w-4/5 text-center">
              Escrevo para que as crianças se transformem em adultos felizes.
            </h3>
            {/* button column */}
            <div className="max-lg:h-[100px] mt-10 w-[90%] h-[200px] rounded-4xl flex flex-col justify-center items-center">
              <CustomButton
                onClick={() => console.log('Working!')}
                className="max-lg:w-[250px] max-lg:py-4 w-[300px] tracking-wide px-10 py-6 flex items-center justify-center text-orangeMain bg-petroMain border-1 border-primary hover:scale-[1.007] rounded-full drop-shadow-lg transition-colors duration-200 group"
                personal="text-lg mr-4"
              >
                Descobrir
              </CustomButton>
            </div>
          </div>
          {/* right column Image */}
          <div className="bg-zinc-500/10 border-1 border-primary rounded-[60px] lg:w-1/2 lg:h-[620px] flex grow-0 shrink-0 justify-center items-center object-contain">
            <Image
              src="/LandingpagePortrait.png"
              width={700} /* 700 */
              height={800} /* 800 */
              alt="hero"
              className="lg:h-[520px] lg:min-w-[380px] lg:max-w-[380px] py-2 rounded-[60px] opacity-80 border-x-1 border-primary"
              priority
            />
          </div>
        </div>
        {/* Social network links */}
        <div className="bg-zinc-600/6 lg:w-[123%] xl:w-[110%] h-[300px] rounded-[40px] -mt-[170px] py-8 flex items-end justify-center transition filter duration-500">
          <ul className="flex justify-center items-center space-x-6">
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className={`${styles}`} strokeWidth={0.2} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon
                  className={`${styles} mt-[2px]`}
                  strokeWidth={0.1}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon
                  className={`${styles} mt-[2px]`}
                  strokeWidth={0.1}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute backgroundImage opacity-50 top-0 left-0 w-full h-full mx-auto -z-10"></div>
      </main>
      <div className="relative w-full h-screen flex justify-center items-center bg-zinc-50">
        <Aboutme />
      </div>
      <div className="relative w-full h-screen flex justify-center items-center">
        <Contact />
      </div>
      <div className="flex items-center justify-center w-full h-[180px]">
        <Footer />
      </div>
    </>
  );
}
