import { FaGithub, FaUser } from "react-icons/fa6";
import user from "../../public/images/user.jpg";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

const DevInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-24 pb-20">
      <div>
        <img src={user} alt="" width="650" height="550" className="" />
      </div>
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">Priyanka Das Dipa</h1>
        <p className="text-xl font-medium">A Frontend Developer</p>
        <p className="text-base font-normal">
          I am a graduate from North East University, Bangladesh, with a strong
          dedication to advancing my skills in web development. Over the past
          eight months, I have immersed myself in the world of technology,
          focusing particularly on key technologies such as React.js, Next.js,
          Node.js, MongoDB, Mongoose and the versatile CSS framework Tailwind.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <Link to="https://github.com/Priyanka-Das-Dipa" target="_blank">
            <FaGithub className="text-2xl " />
          </Link>
          <Link
            to="https://www.linkedin.com/in/priyanka-das-dipa-58327b285/"
            target="_blank"
          >
            <CiLinkedin className="text-2xl " />
          </Link>
          <Link
            to="https://priyanka-portfolio-aftk.vercel.app/"
            target="_blank"
          >
            <FaUser className="text-xl " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
