
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t dark:border-gray-700 mt-16">
      {/* max-w-7xl mx-auto px-4  */}
      {/* text-center  */}
      <div className="max-w-7xl mx-auto px-4 text-center"> 
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4"> 
            
            <a href="https://www.facebook.com/sayed.alif017" target="_blank" rel="noopener noreferrer" className="dark:text-white hover:text-blue-500">
                <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/sayed-nafisur-rahman-alif-7660a81a6/" target="_blank" rel="noopener noreferrer" className="dark:text-white hover:text-blue-500">
                <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/SayedAliff" target="_blank" rel="noopener noreferrer" className="dark:text-white hover:text-blue-500">
                <FaGithub className="h-6 w-6" />
            </a>

        </div>

        {/* Copyright Text */}
        <p className="text-sm dark:text-gray-400">
          Developed by Sayed Nafisur Rahman Alif.
        </p>
        <p className="text-xs dark:text-gray-500 mt-1">
          &copy; {currentYear} All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;