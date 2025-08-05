import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    // Define the handleLoginClick function
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page when a button is clicked
    };

    useEffect(() => {
        AOS.init({
            duration: 1300, // animation duration
            once: true      // animation happens only once
        });
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/home');
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <img src="/logo.jpg" alt="Logo" className="w-10 h-10 p-2 bg-indigo-500 rounded-full" /> */}
            <img src="/logo.jpg" alt="Logo" className="h-10 w-25" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a onClick={() => navigate('/contact')} className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
            <a onClick={() => navigate('/about')} className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer" onClick={handleLoginClick}>
            Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      {/* the second part with animation */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeInUp animate-delay-200">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Code Craft
            </h1>
            <p className="mb-8 leading-relaxed">
              At <strong>Code Craft</strong>, we turn bold ideas into powerful digital solutions. Whether you're a startup, a developer, or a curious explorer, our platform is designed to help you build, innovate, and grow.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeInUp animate-delay-400">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.istockphoto.com/vectors/flat-colorful-design-concept-for-development-vector-id990550296?k=6&m=990550296&s=612x612&w=0&h=A72Wr68IyqkQnPuzyF_OjdyUUnLbsk29EIvgUivkLvM="
            />
          </div>
        </div>
      </section>

      {/* the third part */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto animate-fadeInUp animate-delay-400">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" data-aos="fade-up">
              Our Expertise
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" data-aos="fade-up">
              At Code Craft, we specialize in building powerful digital solutions across the entire development stack. Whether it’s crafting stunning user interfaces, managing complex back-end logic, or structuring reliable databases — we bring your ideas to life with precision and performance.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-up">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center"></div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Full Stack Developer</h2>
                <p className="leading-relaxed text-base">Bridging front-end brilliance with back-end power.We build end-to-end solutions that are scalable, secure, and user-centric — all in one place.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-up">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center"></div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Front End Developer</h2>
                <p className="leading-relaxed text-base">Crafting intuitive, responsive, and sleek interfaces.From concept to code, we turn UI/UX ideas into pixel-perfect web experiences</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-up">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center"></div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Back End Developer</h2>
                <p className="leading-relaxed text-base">
                  Powering the logic behind every click. We create efficient APIs, handle complex operations, and ensure your systems run smoothly behind the scenes.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-up">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center"></div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Database</h2>
                <p className="leading-relaxed text-base">
                  Organized, optimized, and always available. We design robust database systems to securely store, manage, and retrieve your data at scale.
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"data-aos="fade-up" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img onClick={() => navigate('/home')} src="/logo.jpg" alt="Logo" className="h-10 w-25" />
      </a>
      <p class="mt-2 text-sm text-gray-500">Code with Precision, Build with Passion</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Full-Stack Projects</h2>
        <nav class="list-none mb-10">
          <li>
            <a onClick={() => navigate('/python1')} class="text-gray-600 hover:text-gray-800">Python</a>
          </li>
          <li>
            <a onClick={() => navigate('/html')} class="text-gray-600 hover:text-gray-800">HTML</a>
          </li>
          <li>
            <a onClick={() => navigate('/css')} class="text-gray-600 hover:text-gray-800">CSS</a>
          </li>
          <li>
            <a onClick={() => navigate('/javascript')} class="text-gray-600 hover:text-gray-800">JavaScript</a>
          </li>
          <li>
            <a onClick={() => navigate('/mysql')} class="text-gray-600 hover:text-gray-800">MySQL</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Front-end</h2>
        <nav class="list-none mb-10">
          <li>
            <a onClick={() => navigate('/html')} class="text-gray-600 hover:text-gray-800">HTML</a>
          </li>
          <li>
            <a onClick={() => navigate('/css')} class="text-gray-600 hover:text-gray-800">CSS</a>
          </li>
          <li>
            <a onClick={() => navigate('/javascript')} class="text-gray-600 hover:text-gray-800">JavaScript</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Backend</h2>
        <nav class="list-none mb-10">
          <li>
            <a onClick={() => navigate('/python1')} class="text-gray-600 hover:text-gray-800">Python</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Database</h2>
        <nav class="list-none mb-10">
          <li>
            <a onClick={() => navigate('/mysql')} class="text-gray-600 hover:text-gray-800">MySQL</a>
          </li>
        </nav>
      </div>
  </div>
  </div>
</footer>
    </>
  );
}
export default Home;