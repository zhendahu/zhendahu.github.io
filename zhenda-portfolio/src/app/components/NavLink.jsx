import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#64FFDA] hover:text-white sm:text-base rounded md:p-0 font-mono">
            {title}
        </Link>
    )
}

export default NavLink;