import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Thubelihle Dlamini
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-lg">
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
