import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CSS() {
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

      const handleJavascriptClick = () => {
        navigate('/javascript'); // Navigate to the login page when a button is clicked
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
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">CSS(Cascading style sheets)</h1>
              </header>
              <br />
              <p className="mb-8 leading-relaxed text-gray-600" data-aos="fade-up">
                CSS is a style sheet language used for describing the presentation of a document written in HTML or XML. It controls the layout of multiple web pages all at once.
                CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
              </p>
              <br />
              <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`Basic Syntax:
selector {
  property: value;
}
Example:
h1 {
  color: blue;
  font-size: 24px;
}
`}
                    </pre>
                </div>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-right" data-aos-delay="1200">
🔵Selector: Targets HTML elements (e.g., h1, .class, #id).
<br />
🔵Property: Defines the style (e.g., color, margin).
<br />
🔵Value: Specifies the property setting (e.g., red, 20px).
                </p>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Selectors</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-right" data-aos-delay="1200">
🔵Element	p	All tags
<br/>
🔵Class	.header	Elements with class="header"
<br/>
🔵ID	#banner	Element with id="banner"
<br/>
🔵Attribute	[type="text"]	Inputs with type="text"
                </p>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`.button {
  background: green; /* Targets class="button" */
}
#login {
  width: 100px;     /* Targets id="login" */
}
`}
                    </pre>
                </div>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Box Model</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-right" data-aos-delay="1200">
🔵Content: The actual content of the box.
<br />
🔵Padding: Space between content and border.
<br />
🔵Border: Surrounds the padding and content.
<br />
🔵Margin: Space between the box and other elements.
</p>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto
  max-w-full" data-aos="zoom-in" data-aos-delay="400">
                      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`div {
  width: 200px; /* Content width */
  padding: 20px; /* Space inside the box */
  border: 5px solid black; /* Border around the box */
  margin: 10px; /* Space outside the box */
}
`}
</pre>
</div>
<br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Common Properties</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-right" data-aos-delay="1200">
🔵Color: Sets text color (e.g., color: red;).
<br />🔵Background: Sets background color or image (e.g., background-color: blue;).
<br />🔵Font-size: Sets text size (e.g., font-size: 16px;).
<br />🔵Margin: Sets space outside an element (e.g., margin: 10px;).
<br />🔵Padding: Sets space inside an element (e.g., padding: 5px;).
<br />🔵Border: Sets border style (e.g., border: 1px solid black;).
<br />🔵Display: Controls layout (e.g., display: block;).
<br />🔵Flexbox: For flexible layouts (e.g., display: flex;).
<br />🔵Grid: For grid layouts (e.g., display: grid;).
                </p>
                <br />
                <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`p {
  color: blue; /* Text color */
  background-color: yellow; /* Background color */
  font-size: 18px; /* Text size */
  margin: 10px; /* Space outside */
  padding: 5px; /* Space inside */
  border: 1px solid black; /* Border style */

  display: block; /* Block-level element */
  display: flex; /* Flexible box layout */
  display: grid; /* Grid layout */
}
  `}
  </pre>
                </div>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Practice</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-right" data-aos-delay="1200">
Try creating a simple webpage with the following features:
<br />
🔵A header with a title and navigation links.
<br />🔵A main section with a welcome message and an image.
<br />🔵A footer with contact information.
</p>
<br />
 <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 1</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What does CSS stand for?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        Computer Style Sheets
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        Cascading Style Sheets
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        Creative Style System
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        Colorful Style Syntax
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 2</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  Which property is used to change the text color in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        text-color
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        color
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        font-color
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        text-style
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 3</h1>  
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the CSS box model?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To define the structure of HTML documents
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To control the layout and spacing of elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To apply animations to web pages
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To define the colors and fonts used in a web page
        </button>
        <br />
        <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 4</h1>  
        </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  Which CSS property is used to set the background color of an element?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        background-color
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        background
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
        transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        bg-color
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        color-background
        </button>
        <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 5</h1>  
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the "display" property in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To set the visibility of an element
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To control the layout and rendering of an element
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To set the size and position of an element
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To apply animations to an element
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 6</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the "flexbox" layout in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To create a flexible and responsive layout for web pages
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
        transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To apply animations to web elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To control the visibility of elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To set the background color of elements
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 7</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the "grid" layout in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To create a grid-based layout for web pages
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To apply animations to web elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To control the visibility of elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To set the background color of elements
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 8</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the "media queries" in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To apply different styles based on the device's characteristics (e.g., screen size)
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To create animations for web elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To control the visibility of elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To set the background color of elements
                </button>
                <br />
                <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Question 9</h1>
                </header>
                <br />
                <p className='text-gray-600 text-base mb-4' data-aos="fade-left" data-aos-delay="1600">
                  What is the purpose of the "transition" property in CSS?
                </p>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        To create smooth transitions between different styles
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        To apply animations to web elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To control the visibility of elements
                </button>
                <br />
                <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black
  transition-colors border border-black" data-aos="fade-right" data-aos-delay="900"
      >
        To set the background color of elements
                </button>
                <br />
                <button
        onClick={handleJavascriptClick}
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
    )
}

export default CSS;