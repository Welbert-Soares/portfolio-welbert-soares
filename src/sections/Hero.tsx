import Image from 'next/image'
import { ArrowDown, Handshake } from 'lucide-react'

import memojiImage from '@/assets/images/memoji-computer.png'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparKleIcon from '@/assets/icons/sparkle.svg'

import HeroOrbit from '@/components/HeroOrbit'

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring" />
      <div className="size-[820px] hero-ring" />
      <div className="size-[1020px] hero-ring" />
      <div className="size-[1220px] hero-ring" />

      <HeroOrbit size={800} rotation={45}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <SparKleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparKleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparKleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <SparKleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={85}>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Disponível para novos projetos
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Crie Uma Experiência De Usuário Excepcional
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou desenvolvedor fullstack, focado em aplicações escaláveis e
            experiências intuitivas.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore Meu Trabalho</span>
            <ArrowDown size={24} />
          </button>
          <button className="inline-flex items-center gap-2 boder border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <Handshake size={24} className="items-center" />
            <span className="font-semibold">Entre Em Contato</span>
          </button>
        </div>
      </div>
    </div>
  )
}
