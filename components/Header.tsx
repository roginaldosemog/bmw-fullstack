import Link from 'next/link'
import Image from 'next/image'

import logo from '@/public/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 px-8 w-full flex items-center gap-x-6 shadow-md">
      <Image className="h-8 w-auto" src={logo} alt="Project logo" />
      <nav className="flex items-center gap-x-4">
        <Link className="text-sm font-bold" href={'/'}>
          Home
        </Link>
      </nav>
    </header>
  )
}
