import Link from "next/link";

export const Header = () => (
  <header className="xl:px-60 lg:px-32 md:px-16 px-4 h-24 shadow-lg flex items-center justify-center">
    <div>
      <Link href="/">
        <p className="text-2xl">dokkan</p>
      </Link>
    </div>
  </header>
);
