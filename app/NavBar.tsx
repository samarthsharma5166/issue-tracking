"use client"
import {clsx as cn} from 'clsx'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBugOutline } from "react-icons/io5";
const links = [
    {
        name:"Dashboard",
        href:"/"
    },
    {
        name:"Issue",
        href:"/issue"
    }
]
function NavBar() {
    const pathname  = usePathname();
  return (
    <nav className="flex space-x-4 h-12 border-b border-zinc-200 items-center px-4 mb-2">
        <Link href="/" className="text-2xl">
              <IoBugOutline />
        </Link>
        <ul className="flex space-x-4 text-lg font-medium">
            {
                links.map((link)=>(
                    <Link className={cn("text-zinc-500 hover:text-zinc-800 transition-colors",pathname === link.href && "text-zinc-800")} key={link.name} href={link.href}>{link.name}</Link>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar