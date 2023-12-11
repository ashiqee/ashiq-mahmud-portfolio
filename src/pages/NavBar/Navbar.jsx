import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <span className="hover:text-[#00FFFF] hover:scale-150">
        <FaGithub />
      </span>
      <span className="hover:text-[#00FFFF] hover:scale-150">
        <FaLinkedin />
      </span>
      <span className="hover:text-[#00FFFF] hover:scale-150">
        <FaFacebook />
      </span>
    </>
  );
};

export default Navbar;
