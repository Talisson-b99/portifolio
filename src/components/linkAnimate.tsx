import Link from 'next/link'

interface LinkAnimateProps {
  href: string
  title: string
}

const LinkAnimate = ({ href, title }: LinkAnimateProps) => {
  return (
    <Link
      href={href}
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:bg-[#00A8F5] after:transition-all after:duration-200 after:ease-linear after:content-[''] hover:after:w-full"
    >
      {title}
    </Link>
  )
}

export default LinkAnimate
