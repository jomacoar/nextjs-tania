import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Initial() {
  return (
    <main className="bg-zinc-100 w-full h-screen flex justify-center items-center">
      <div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <Image
          src="/LogoStoriesTG.png"
          width={800}
          height={800}
          alt="entry"
          priority
        ></Image>
      </div>
      <Link href="/homepage">
        <button className="bg-violetMain text-white font-bold py-2 px-4 rounded-full mt-4">
          Enter
        </button>
      </Link>
      <div className="absolute top-0 left-0 backgroundImage w-full h-full mx-auto -z-10"></div>
    </main>
  );
}
