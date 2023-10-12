import "../app/globals.css"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons

const LeftSidebar = () => {
  return (
    <section className="mt-[82px] sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-center mx-auto gap-24 overflow-auto bg-[#0A192F] pb-5 px-8 max-md:hidden custom-scrollbar">
    <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
      <a href="https://github.com/bettjesse" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="text-white hover:text-cyan-100" /> {/* GitHub icon */}
      </a>
    </div>
    <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
      <a href="https://www.linkedin.com/in/jesse-bett-46b0aa1a8/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} className="text-white hover:text-cyan-100" /> {/* LinkedIn icon */}
      </a>
    </div>
    <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
      <a href="https://twitter.com/Jesse_bett" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} className="text-white hover:text-cyan-100" /> {/* Twitter icon */}
      </a>
    </div>
  </section>
  
  );
};

export default LeftSidebar;
