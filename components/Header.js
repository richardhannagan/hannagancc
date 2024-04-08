import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-200 h-200 rounded-full block mx-auto overflow-hidden">
        <Image src="/79850018.JPG" alt="me" width={250} height={250} />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
