"use client"

import PixelSnow from '@/components/PixelSnow';
import { LinkedinIcon } from '@/components/icons/pixel-linkedin';
import { GithubIcon } from '@/components/icons/pixel-github';
import { EnvelopeSolidIcon } from '@/components/icons/pixel-envelope-solid';

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-linear-to-t from-[#03a5fc] to-[#251169]">
        {/* Background */}
        <div className="absolute inset-0 opacity-70">
          <PixelSnow
            color="#ffffff"
            flakeSize={0.02}
            minFlakeSize={0.5}
            pixelResolution={500}
            speed={0.5}
            depthFade={7}
            farPlane={15}
            brightness={1.1}
            gamma={0.4545}
            density={0.3}
            variant="square"
            direction={125}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-gray-200 font-bold animate-in fade-in duration-2000">
            <div className='select-none pointer-events-none'>
              <img
                alt='headshot.png'
                src='/headshot_glow.jpg'
                draggable="false"
                className="rounded-md mb-4 h-48 lg:h-72 mx-auto border"
              />

              <h1 className="text-3xl lg:text-6xl pixel-font">
                Charles Emile Seaman
              </h1>

              <p className="lg:mt-4 mt-1 text-sm lg:text-3xl pixel-font">
                Software Developer
              </p>

            </div>

            <div className="mt-2 flex justify-center gap-6">
              <a
                href="https://github.com/seamanc2016"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2  transition hover:opacity-70"
              >
                <GithubIcon size={36} />
              </a>

              <a
                href="https://www.linkedin.com/in/charles-seaman-36b459249"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2  transition hover:opacity-70"
              >
                <LinkedinIcon size={36} />
              </a>

              <a
                href="mailto:seamanc2016@gmail.com"
                aria-label="Email"
                className="p-2  transition hover:opacity-70"
              >
                <EnvelopeSolidIcon size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
