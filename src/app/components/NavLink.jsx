import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl hover:text-white rounded-md">
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
