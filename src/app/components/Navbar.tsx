import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Image src="/image/logo.png" alt="Governor Sindh Logo" width={40} height={40} />
          <Link href="/">Governor Sindh</Link>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/initiatives" className="hover:underline">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:underline">
                Media
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
