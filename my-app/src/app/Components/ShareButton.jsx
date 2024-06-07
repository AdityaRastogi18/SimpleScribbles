import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ShareButton = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(whatsappUrl);
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}`;
    window.open(twitterUrl);
  };

  const handleShareInstagram = () => {
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(
      url
    )}`;
    window.open(instagramUrl);
  };

  return (
    <div className="relative hidden lg:flex items-center justify-end">
      <motion.button
        className="border rounded-full w-[2.7rem] h-[2.7rem] text-lg z-10"
        whileHover={{ scale: 1.1 }}
        onClick={() => setShowButtons(!showButtons)}
      >
        <FontAwesomeIcon icon={faShareNodes} />
      </motion.button>

      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex gap-4 absolute top-0 right-[3.5rem] "
          >
            <div className="tooltip">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border rounded-full w-[2.7rem] h-[2.7rem] text-lg  ms-4  hover:bg-green-600 hover:border-green-600 "
                onClick={handleShareWhatsApp}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </motion.button>
              <span className="tooltiptext">WhatsApp</span>
            </div>
            <div className="tooltip">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border rounded-full w-[2.7rem] h-[2.7rem] text-lg hover:bg-slate-500 hover:border-slate-500 "
                onClick={handleShareTwitter}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </motion.button>
              <span className="tooltiptext">Twitter</span>
            </div>
            <div className="tooltip">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border rounded-full w-[2.7rem] h-[2.7rem] text-lg hover:bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 hover:border-pink-500"
                onClick={handleShareInstagram}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.button>
              <span className="tooltiptext">Instagram</span>
            </div>
            <div className="tooltip">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border rounded-full w-[2.7rem] hover:bg-blue-500 hover:border-blue-500 h-[2.7rem] text-lg"
                onClick={handleCopy}
              >
                <FontAwesomeIcon icon={faCopy} />
              </motion.button>
              <span className="tooltiptext">{copied ? "Copied" : "Copy Link"} </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
