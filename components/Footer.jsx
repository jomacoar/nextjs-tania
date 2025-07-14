import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/Icons';
import Link from 'next/link';

const styles =
  'text-primary/60 scale-100 hover:scale-120 transition duration-300';

export default function Footer() {
  return (
    <footer className="w-full h-full flex items-center justify-center bg-zinc-700 text-secondary">
      <div className=" w-2/3 h-3/4 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex justify-center items-center space-x-4">
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
                <YoutubeIcon
                  className={`${styles} mt-[2px]`}
                  strokeWidth={0.1}
                />
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
          <div className="text-center font-montserrat text-xs text-primary/60 mt-6">
            <Link
              href="mailto:contact@yourcompany.com"
              className="underline hover:text-orangeMain hover:scale-110 transition duration-300"
            >
              letstalk@storiestogrow.com
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center font-montserrat text-xs text-primary/60 max-w-sm mb-4 md:mb-0">
          <p>
            We collect personal information (name, email, and message) through
            our contact form to respond to your inquiries. Your data is stored
            securely in our database and will not be shared without your
            consent, except as required by law. For more details, please review
            our{' '}
            <Link
              href="/privacy-policy"
              className="underline hover:text-orangeMain"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Copyright */}
        <div className="font-montserrat text-xs text-center text-primary/60">
          &copy; {new Date().getFullYear()} Stories to Grow. <br /> All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
