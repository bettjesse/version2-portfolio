import "../app/globals.css"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons

const LeftSidebar = () => {
  return (
    <section className="mt-[82px] sticky left-0  top-0 z-20 flex h-screen w-fit flex-col justify-center mx-auto gap-24 overflow-auto bg-[#0A192F] pb-5 px-8 max-md:hidden custom-scrollbar">
      <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
        <FaGithub size={24} className= "text-white hover:text-cyan-100" /> {/* GitHub icon */}
      </div>
      <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
        <FaLinkedin size={24}  className= "text-white hover:text-cyan-100" /> {/* LinkedIn icon */}
      </div>
      <div className="cursor-pointer text-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-110">
        <FaTwitter size={24}  className= "text-white hover:text-cyan-100" /> {/* Twitter icon */}
      </div>
    </section>
  );
};

export default LeftSidebar;
