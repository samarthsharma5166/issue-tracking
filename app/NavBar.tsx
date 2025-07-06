import Link from "next/link";
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
  return (
    <nav className="flex space-x-4 h-12 border-b border-zinc-200 items-center px-4 mb-2">
        <Link href="/" className="text-2xl">
              <IoBugOutline />
        </Link>
        <ul className="flex space-x-4 text-lg font-medium">
            {
                links.map((link)=>(
                    <Link className="text-zinc-500 hover:text-zinc-800 transition-colors" key={link.name} href={link.href}>{link.name}</Link>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar