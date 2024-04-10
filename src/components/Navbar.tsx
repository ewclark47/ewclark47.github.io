import Link from "next/link"

export default function Navbar() {
    const nav_links = ['intro', 'portfolio', 'about']

    return (
        nav_links.map((link, idx) =>
        <Link key={idx} href={}></Link>)
    )
}