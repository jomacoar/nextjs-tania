import React from 'react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/Icons';
import Link from 'next/link';
import { ConversationBubbles } from './Ornaments';
import ContactForm from './ContactForm';

const styles =
  'text-violetMain/80 scale-120 hover:scale-150 transition duration-300';

export default function Contact() {
  return (
    <div className="relative backgroundImage3 top-0 left-0 w-full h-full bg-zinc-300 grid place-items-center justify-items-center">
      <ConversationBubbles
        className="absolute top-[20%] left-[20%] svg-color-primary z-30"
        width="90"
        height="90"
      />
      <ConversationBubbles
        className="absolute bottom-[20%] right-[20%] scale-x-[-1] svg-color-primary z-30"
        width="55"
        height="55"
      />
      <h1 className="mt-8 font-boldonse text-3xl font-bold text-primary text-center">
        Vamos falar?
      </h1>
      {/* Social network links */}
      <div className="mb-0 mt-14 px-8 py-6 flex items-end justify-center border-1 border-primary rounded-3xl transition filter duration-500">
        <ul className="flex justify-center items-center space-x-10">
          <li>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={`${styles}`} strokeWidth={0.2} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className={`${styles} mt-[2px]`} strokeWidth={0.1} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                className={`${styles} mt-[2px]`}
                strokeWidth={0.1}
              />
            </Link>
          </li>
        </ul>
      </div>
      {/* Contact form */}
      <div className="w-full flex items-center justify-center p-6">
        <ContactForm />
      </div>
    </div>
  );
}
