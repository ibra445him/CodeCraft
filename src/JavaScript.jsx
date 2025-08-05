import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function JavaScript(){
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
    };

    const handleMYSQLClick = () => {
        navigate('/mysql');
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
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Javascript</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                HTML is the standard markup language for creating web pages. It describes the structure of a webpage using elements and tags.
                HTML elements are represented by tags, which can be nested to create complex structures. It is the backbone of web content, providing the basic structure for text, images, links, and other media.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`console.log("Hello, World!"); // This prints 'Hello, World!' to the console`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we use the <code>console.log()</code> function to print "Hello, World!" to the console. This is a common first step in learning JavaScript, as it demonstrates how to output text and interact with the console.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Variables</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Variables are used to store data values. In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`let name = "John"; // Declares a variable 'name' and assigns it the value 'John'
const age = 30; // Declares a constant 'age' with the value 30
console.log(name); // Outputs: John
console.log(age); // Outputs: 30`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we declare a variable <code>name</code> and assign it the value "John". We also declare a constant <code>age</code> with the value 30. The <code>console.log()</code> function is used to output these values to the console.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-left">Functions</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Functions are reusable blocks of code that perform a specific task. You can define a function using the <code>function</code> keyword.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Outputs: Hello, Alice!`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we define a function <code>greet</code> that takes a parameter <code>name</code> and returns a greeting message. We then call the function with the argument "Alice" and output the result to the console.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Events</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Events are actions that occur in the browser, such as clicks, key presses, or page loads. You can add event listeners to elements to respond to these events.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we add an event listener to a button with the ID <code>myButton</code>. When the button is clicked, an alert box is displayed with the message "Button clicked!".
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">DOM Manipulation</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                The Document Object Model (DOM) represents the structure of a webpage. You can manipulate the DOM using JavaScript to change the content, structure, and style of a webpage.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`document.getElementById("myElement").innerHTML = "New content"; // Changes the content of an element
document.getElementById("myElement").style.color = "blue"; // Changes the text color of an element
document.getElementById("myElement").classList.add("highlight"); // Adds a CSS class to an element
document.getElementById("myElement").classList.remove("highlight"); // Removes a CSS class from an element`}
                    </pre>
            </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we manipulate an element with the ID <code>myElement</code> by changing its content, text color, and CSS classes. This allows you to dynamically update the webpage based on user interactions or other events.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Conditional Statements & Loops</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Conditional statements allow you to execute code based on certain conditions. Loops enable you to repeat a block of code multiple times.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
while (age < 30) {
    console.log("You are still young!");
    age++;
}`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we use an <code>if</code> statement to check if the variable <code>age</code> is greater than or equal to 18, and output a message accordingly. We also demonstrate a <code>for</code> loop that iterates five times, and a <code>while</code> loop that continues until <code>age</code> reaches 30, outputting a message each time.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Asynchronous JS (Promises, Async/Await)</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Asynchronous JavaScript allows you to perform tasks without blocking the main thread. Promises and async/await are two common ways to handle asynchronous operations.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}
async function getData() {
    try {
        const result = await fetchData();
        console.log(result); // Outputs: Data fetched successfully!
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData();`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we define a function <code>fetchData</code> that returns a Promise. The Promise resolves after a 2-second delay, simulating a data fetch. We then define an async function <code>getData</code> that uses <code>await</code> to wait for the Promise to resolve and logs the result to the console. If an error occurs, it is caught and logged.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Error Handling</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                Error handling is crucial for robust applications. You can use <code>try</code>, <code>catch</code>, and <code>finally</code> blocks to handle errors gracefully.
            </p>
            <br />
            <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`try {
    let result = riskyOperation(); // This function might throw an error
    console.log("Operation successful:", result);
} catch (error) {
    console.error("An error occurred:", error.message); // Handle the error
} finally {
    console.log("Cleanup actions can be performed here."); // This block always runs
}`}
                    </pre>
                </div>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="600">
                In this example, we use a <code>try</code> block to attempt a risky operation that might throw an error. If an error occurs, it is caught in the <code>catch</code> block, where we log the error message. The <code>finally</code> block runs regardless of whether an error occurred, allowing for cleanup actions.
            </p>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 1</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              Which keyword declares a block-scoped variable?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
         var
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          let
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          const
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          function
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 2</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>async</code> keyword in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a function that returns a Promise
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 3</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>catch</code> block in error handling?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors that occur in the <code>try</code> block
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a function
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 4</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>finally</code> block in error handling?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To execute code that should run regardless of whether an error occurred
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors that occur in the <code>try</code> block
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a function
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 5</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>await</code> keyword in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To pause the execution of an async function until a Promise is resolved
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To skip the current iteration in a loop
        </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 6</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>console.log()</code> function in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To output messages to the console for debugging purposes
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 7</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>document.getElementById()</code> method in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To select an HTML element by its ID
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 8</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>addEventListener()</code> method in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To attach an event handler to an HTML element
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To declare a variable
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 9</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              What is the purpose of the <code>innerHTML</code> property in JavaScript?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        To select an HTML element by its ID
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To get or set the HTML content of an element 
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To define a loop
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          To handle errors
                </button>
            <br />
            <header>
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 10</h1>
            </header>
            <br />
            <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
              Which is NOT primitive type?
            </p>
            <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          String
                </button>
                <br />
            <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          Object
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          Number
                </button>
                <br />
            <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          Boolean
                </button>
            <br/>
            <button
        onClick={handleMYSQLClick}
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

export default JavaScript;