import Link from "next/link";

interface NavLinkProps {
	href: string;
	title: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavLink({ href, title }: NavLinkProps): JSX.Element {
	return (
		<Link
			href={href}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 cursor-none"
		>
			{title}
		</Link>
	);
}
