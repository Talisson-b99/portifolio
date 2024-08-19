'use client'

import { Controls, Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'

import Header from '@/components/header'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export default function Home() {
  const words = [
    {
      text: 'talisson',
      className:
        'dark:bg-gradient-to-t from-[#00A8F5] to-[#F5710A] dark:bg-clip-text dark:text-transparent',
    },
    {
      text: 'barbosa',
      className:
        'dark:bg-gradient-to-t from-[#00A8F5] to-[#F5710A] dark:bg-clip-text dark:text-transparent',
    },
  ]

  const content = [
    {
      title: 'Certificado 01',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: (
        <div className="relative h-[300px] w-full">
          <Image
            src={'/certificado.png'}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ),
    },

    {
      title: 'Certificado 02',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: (
        <div className="relative h-[300px] w-full">
          <Image
            src={'/certificado02.png'}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ),
    },

    {
      title: 'Certificado 03',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content: (
        <div className="relative h-[300px] w-full">
          <Image
            src={'/certificado03.png'}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ),
    },
  ]

  const wordsDescription = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
  ]

  return (
    <div>
      <Header />

      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 items-center">
          <div>
            <Player
              autoplay
              loop
              src="https://lottie.host/32d0cf1a-491f-4181-bebc-87fb1c00ffe7/MESl0hm3QY.json"
              style={{ height: '457px', width: '457px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>

          <div>
            <TypewriterEffectSmooth words={words} />
            <TextGenerateEffect
              words={wordsDescription}
              duration={1}
              filter={false}
              className="w-[80%] text-justify text-xs font-normal"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center pt-40">
          <div>
            <Player
              autoplay
              loop
              src="https://lottie.host/32d0cf1a-491f-4181-bebc-87fb1c00ffe7/MESl0hm3QY.json"
              style={{ height: '457px', width: '457px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>

          <div>
            <TypewriterEffectSmooth words={words} />
            <TextGenerateEffect
              words={wordsDescription}
              duration={1}
              filter={false}
              className="w-[80%] text-justify text-xs font-normal"
            />
          </div>
        </div>

        <div className="pb-28">
          <StickyScroll content={content} />
        </div>

        <div>
          <HeroParallax products={products} />
        </div>
      </div>
    </div>
  )
}
