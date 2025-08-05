import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    useEffect(() => {
            AOS.init({
                duration: 1300, // animation duration
                once: true      // animation happens only once
            });
        }, []);

    const handleLoginRedirect = () => {
        navigate('/login');
      };

      const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login');
      };

        return(
            <>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img onClick={() => navigate('/home')} src="/logo.jpg" alt="Logo" className="h-10 w-25" />
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a onClick={() => navigate('/contact')} className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
                    <a onClick={() => navigate('/about')} className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
                </nav>
                <div className="flex items-center">
                    {username ? (
                        <>
                            <span className="mr-5 text-gray-900">Welcome, {username}!</span>
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0 cursor-pointer"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleLoginRedirect}
                            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
      <br />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">About CodeCraft</h1>
</header>
<br />
      <p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
        Welcome to CodeCraft platform, where we empower aspiring developers and tech enthusiasts with the skills to build modern, functional websites and applications. In today’s digital world, coding is not just a technical skill—it’s a gateway to creativity, problem-solving, and career opportunities. Our mission is to simplify the learning process by offering structured, hands-on lessons that cover both frontend and backend development. Whether you're a beginner or looking to refine your skills, our courses guide you through HTML, CSS, JavaScript, and full-stack frameworks like React, Node.js, and databases, ensuring you gain real-world expertise.
        </p>
        <br />
        <p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
            Learning to code opens doors to endless possibilities—from designing interactive websites to developing scalable web applications. Our project-based approach ensures that you don’t just memorize syntax but understand how to apply it effectively. We believe that everyone should have access to quality coding education, which is why our platform offers clear explanations, practical examples, and step-by-step projects. By the end of your journey, you’ll not only grasp programming concepts but also know how to deploy your own full-stack projects, making you confident in tackling real development challenges.
        </p>
        <br />
        <header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-uo">Why Coding Matters in the Digital Age</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
    In a world driven by technology, coding has become a fundamental skill, much like reading and writing. From startups to global corporations, businesses rely on websites and web applications to connect with users, streamline operations, and innovate. By learning full-stack development, you gain the ability to create seamless digital experiences from scratch—combining intuitive frontend design with powerful backend functionality. Our platform not only teaches you how to code but also instills problem-solving skills, logical thinking, and the confidence to adapt to new technologies. Whether you aim to launch a career in tech, build your own projects, or simply understand how the digital world works, mastering full-stack development equips you with the tools to turn your ideas into impactful solutions.
</p>
</div>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img onClick={() => navigate('/home')} src="/logo.jpg" alt="Logo" className="h-10 w-25" />
      </a>
      <p className="mt-2 text-sm text-gray-500">Code with Precision, Build with Passion</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Full-Stack Projects</h2>
        <nav className="list-none mb-10">
          <li>
            <a onClick={() => navigate('/python1')} className="text-gray-600 hover:text-gray-800">Python</a>
          </li>
          <li>
            <a onClick={() => navigate('/html')} className="text-gray-600 hover:text-gray-800">HTML</a>
          </li>
          <li>
            <a onClick={() => navigate('/css')} className="text-gray-600 hover:text-gray-800">CSS</a>
          </li>
          <li>
            <a onClick={() => navigate('/javascript')} className="text-gray-600 hover:text-gray-800">JavaScript</a>
          </li>
          <li>
            <a onClick={() => navigate('/mysql')} className="text-gray-600 hover:text-gray-800">MySQL</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Front-end</h2>
        <nav className="list-none mb-10">
          <li>
            <a onClick={() => navigate('/html')} className="text-gray-600 hover:text-gray-800">HTML</a>
          </li>
          <li>
            <a onClick={() => navigate('/css')} className="text-gray-600 hover:text-gray-800">CSS</a>
          </li>
          <li>
            <a onClick={() => navigate('/javascript')} className="text-gray-600 hover:text-gray-800">JavaScript</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Backend</h2>
        <nav className="list-none mb-10">
          <li>
            <a onClick={() => navigate('/python1')} className="text-gray-600 hover:text-gray-800">Python</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Database</h2>
        <nav className="list-none mb-10">
          <li>
            <a onClick={() => navigate('/mysql')} className="text-gray-600 hover:text-gray-800">MySQL</a>
          </li>
        </nav>
      </div>
  </div>
  </div>
</footer>
      </>
        )
}

export default About;