import Image from 'next/image'

import LinkAnimate from './linkAnimate'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6">
      <Image
        src="/logo.png"
        width={128}
        height={128}
        alt="tb logo"
        quality={100}
      />

      <nav>
        <ul className="flex gap-8">
          <LinkAnimate href="#" title="Home" />
          <LinkAnimate href="#" title="Sobre" />
          <LinkAnimate href="#" title="Projetos" />
          <LinkAnimate href="#" title="Contatos" />
        </ul>
      </nav>

      <button className="hover:none relative rounded-none bg-[#00A8F5] px-3 py-2.5 font-bold text-white after:absolute after:-right-1 after:-top-1 after:-z-10 after:h-6 after:w-11 after:bg-[#F5710A] after:content-['']">
        DOWNLOAD CV
      </button>
    </header>
  )
}

export default Header
