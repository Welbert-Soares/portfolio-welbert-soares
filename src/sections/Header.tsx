'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { routes } from '@/constants/routes'

export const Header = () => {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {routes.map(({ name, path }) => (
          <Link href={path} key={path} className="nav-item">
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
