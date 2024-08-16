import Image from 'next/image'
import Link from 'next/link'

import LinkAnimate from './linkAnimate'
import { Button } from './ui/button'

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

      <Button className="relative rounded-none bg-[#00A8F5] font-bold text-white after:absolute after:h-6 after:w-6 after:bg-[#F5710A] after:content-['']">
        DOWNLOAD CV
      </Button>
    </header>
  )
}

export default Header
