import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HTML (){
      const navigate = useNavigate();

      useEffect(() => {
          // Scroll to top when component mounts
          window.scrollTo(0, 0);
          
          // Initialize AOS with specific settings
          AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
            startEvent: 'load',
            offset: 120,
            delay: 100
          });
      
          // Force AOS refresh immediately and after a delay to handle dynamic content
          AOS.refresh();
          const refreshTimer = setTimeout(() => {
            AOS.refresh();
          }, 100);
      
          // Cleanup function
          return () => {
            clearTimeout(refreshTimer);
          };
        }, []);

      const handleLoginRedirect = () => {
        navigate('/login');
      };

      const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login');
      };

  const username = localStorage.getItem('username');

      const handleCSSClick = () => {
        navigate('/css'); // Navigate to the login page when a button is clicked
    };

  const handleButtonClick1 = (e) => {
    // Only change if not already green
  if (!e.target.classList.contains('bg-green-500')) {
      // Remove other background classes if they exist
    e.target.classList.remove("bg-cyan-50");
      // Add green background
    e.target.classList.add('bg-green-500');
  }
  };

    const handleButtonClick2 = (e) => {
    // Only change if not already green
    if (!e.target.classList.contains('bg-green-500')) {
      // Remove other background classes if they exist
    e.target.classList.remove("bg-cyan-50");
      // Add green background
    e.target.classList.add('bg-red-500');
  }
  }

    return (
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
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">HTML(Hyper Text Markup Language)</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="200">
                    HTML is the standard markup language for creating web pages. It describes the structure of a webpage using elements and tags.
                </p>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="400">
                    HTML elements are represented by tags, which can be nested to create complex structures. Each element can have attributes that provide additional information about the element.
                </p>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="600">
                    HTML is essential for web development, as it forms the backbone of all web content. It works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing web pages.
                </p>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="800">
                    Below is a simple HTML example:
                </p>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}
                    </pre>
                </div>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="1000">
                    This code creates a simple webpage with a heading and a paragraph.
                </p>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="1200">
                    HTML is a powerful tool for web developers, enabling them to create structured and accessible content for users worldwide.
                </p>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Common Tags</h1>
                </header>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`<h1>–<h6>	Headings (h1=largest)	<h1>Title</h1>
<p>	Paragraph	<p>Hello world!</p>
<a>	Hyperlink	<a href="https://example.com">Link</a>
<img>	Image	<img src="photo.jpg" alt="Photo">
<ul>, <ol>, <li>	Lists (unordered/ordered)	<ul><li>Item</li></ul>
<div>	Block container	<div>Content</div>
<span>	Inline container	<span>Text</span>`}
                    </pre>
                </div>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Attributes</h1>
                </header>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`<a href="https://example.com" target="_blank">Visit Example</a>`}
                    </pre>
                </div>
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Forms</h1>
                </header>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`}
                    </pre>
                </div>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Semantic HTML</h1>
                </header>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`<header>Top banner</header>
<nav>Navigation links</nav>
<main>
  <article>Blog post</article>
  <section>Related content</section>
</main>
<footer>Contact info</footer>`}
                    </pre>
                </div>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-up" data-aos-delay="1400">
                    This code demonstrates the use of semantic HTML elements to improve accessibility and SEO.
                </p>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 1</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What does HTML stand for?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        Hyperlinks and Text Markup Language
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        Hyper Text Markup Language
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        Home Tool Markup Language
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        HyperText Modeling Language
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 2</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1800">
                  Which of the following is a valid HTML element?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        &lt;html&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        &lt;head&gt;
                </button>
                <br />
                <button 
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        &lt;body&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        &lt;p&gt;
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 3</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="2000">
                  What is the purpose of the &lt;title&gt; element in HTML?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To define the main content of the page
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To specify the title of the webpage
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To create a hyperlink
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To add an image to the page
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 4</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="2200">
                  Which of the following is NOT a valid HTML attribute?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        class
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        style
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        id
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        href
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 5</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="2400">
                  What is the correct way to create a comment in HTML?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        &lt;!-- This is a comment --&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        &lt;# This is a comment #&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        // This is a comment
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        /* This is a comment */
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 6</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="2600">
                  What is the purpose of the &lt;meta&gt; tag in HTML?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To define the main content of the page
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To provide metadata about the webpage
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To create a hyperlink
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To add an image to the page
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 7</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="2800">
                  Which of the following is a valid HTML5 doctype declaration?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        &lt;!DOCTYPE html&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        &lt;!DOCTYPE HTML SYSTEM&gt;
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN"&gt;
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 8</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="3000">
                  What is the purpose of the &lt;link&gt; tag in HTML?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To define the main content of the page
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To link external resources like stylesheets
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To create a hyperlink
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To add an image to the page
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 9</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="3200">
                  What is the purpose of the &lt;script&gt; tag in HTML?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To define the main content of the page
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To include JavaScript code in the webpage
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To create a hyperlink
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To add an image to the page
                </button>
                <br />
                <button
        onClick={handleCSSClick}
        className="px-4 py-2 rounded-md bg-pink-200 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="800"
      >
        Next 
                </button>
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
    );
}

export default HTML;