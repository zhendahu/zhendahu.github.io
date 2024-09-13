import Link from "next/link"

const NavBarLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#64FFDA]  hover:text-yellow-500 sm:text-base rounded md:p-0 font-mono" scroll={true}>
            {title}
        </Link>
    )
}

export default NavBarLink;