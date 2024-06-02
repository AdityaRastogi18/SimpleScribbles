import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 mt-7 py-6 border-t flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
      <span className="flex items-center gap-1">
        <FontAwesomeIcon className="text-lg" icon={faCopyright} /> Simple
        Scribbles. All rights are reserved.
      </span>
      <div className="flex gap-5">
        <Link href="https://github.com/AdityaRastogi18" target="_blank">
          <FontAwesomeIcon className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300" icon={faGithub} />
        </Link>
        
        <Link href="https://www.linkedin.com/in/aditya-rastogi880/" target="_blank">
          <FontAwesomeIcon className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300" icon={faLinkedin} />
        </Link>
        <Link href="https://www.instagram.com/adi__880/" target="_blank">
          <FontAwesomeIcon className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300" icon={faInstagram} />
        </Link>
        <Link href="https://x.com/adityarastogi88" target="_blank">
          <FontAwesomeIcon className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300" icon={faXTwitter} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
