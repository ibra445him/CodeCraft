import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Python1() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

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

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        // Initialize AOS
        AOS.init({
          duration: 1000,
          once: true,
          mirror: false,
        });
    
        // Force AOS refresh after a small delay to ensure all elements are rendered
        setTimeout(() => {
          AOS.refresh();
        }, 100);
    
        // Cleanup function to handle component unmounting
        return () => {
          // Optional: You can add cleanup if needed
        };
      }, []);
    
      const handleHTMLClick = () => {
        navigate('/html'); // Navigate to the login page when a button is clicked
    };

  return (
    <><header className="text-gray-600 body-font">
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
    </header>
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <header>
        <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Python</h1>
      </header>
      <p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used in web development, data analysis, artificial intelligence, automation, and more.Its large standard library and vibrant community make it a top choice for beginners and professionals alike.</p>
      
      <p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="300">So the first program i am gonna teach is how to print a hello world</p>
      
      <div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
          print("hello world")
        </pre>
      </div>
    <br />
    <header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Python Character set</h1>
    </header>
    
    <p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
  🔵Letters - A to Z , a to z
  <br />
  🔵Digits - 0 to 9
  <br/>
  🔵Special symbols - * + / - etc.
  <br />
  🔵White spaces - Blank spaces,tab,carraige return , new line, formfeed
  <br/>
  🔵Other characters - Python can process all ASCII and unicode characters as part of data or liberals
  <br/> 
  </p>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
print("Jacob is my name " , "My age is 20")
  </pre>
</div>
<br/>
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">Let's try with addition program</p>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
print(35+23)
  </pre>
</div>
<br/>
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Variables</h1>
</header>
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  A variable is a name given to a memory location in a program 
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200" data-aos="fade-up">
name = "Jonathan"
<br />
age = 19
<br />
grade = "A"
<br />
print("My name is", name)
<br />
print("My age is", age)
<br />
print("My grades are", grade)
<br />
  </pre>
</div>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Rules of Identifiers</h1>
</header>
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  🔵Identifiers can be combinations of uppercase and Lowercase letters, digits or an underscore(_). So myVariable, variable_1,variable_for_print all are valid python identifiers
  <br/>
  🔵An identifier cannot start with digit. So while variable1 is valid, 1variable is not valid
  <br/>
  🔵We can't use special symbols like !,#,@,%,$ etc. in our identifier
  <br/>
  🔵Identifier can be of any length
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
  name = "Jonathan"
  <br />
  age = 19
  <br />
  grade = "A"
  <br />
  print(type(name))
  <br />
  print(type(age))
  <br />
  print(type(grade))
  <br />
  </pre>
</div>
<br/>
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Datatypes</h1>
</header>
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  🔵Integers : +ve,-ve,0
  <br/>
  🔵String : "Jacob" , "Hello" , "" , "." etc.
  <br/>
  🔵Float : 3.99 , 2.5, 9.0
  <br/>
  🔵Boolean : True False (bool)
  <br/>
  🔵None : a = None
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    age = 23
    <br />
    old = False
    <br />
    a = None
    <br />
    print(type(age))
    <br />
    print(type(a))
    <br />
    print(type(age))
    <br />
  </pre>
</div>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    a = 2
    <br />
    b = 5
    <br />
    sum = a+b
    <br />
    print(sum)
    <br />
  </pre>
</div>
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down" data-aos-delay="100">Types of opeartors</h1>
</header>
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
  An operator is a symbol that performs a certain operation between operands.
  <br/>
  🔵Arthematic operators(+,-,*,/,%,**)
  <br/>
  🔵Relational/comparison opeartors (==,!=etc.)
  <br/>
  🔵Assignment opeartors (=,+=,-=,*=,/=)
  <br/>
  🔵Logical operators (not,and,or)
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    a = 2
    <br />
    b = 5
    <br />
    print(a%b)
    <br />
    print(a**b)
    <br />
  </pre>
</div>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    a = 2
    <br />
    b = 5
    <br />
    print (a==b)
    <br />
    print(a!=b)
    <br />
  </pre>
</div>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    num = 10
    <br/>
    num += 10
    <br/>
    print("num :",num)
    <br/>
  </pre>
</div>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    a = 50
    <br/>
    b = 30
    <br/>
    print(not False)
    <br/>
    print(a{">"}b)
  </pre>
</div>
<br/>
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Inputs in python</h1>
</header>
<br/>
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  Input() statement is used to accept values (using keywords) from user
  <br/>
  🔵input()
  <br/>
  🔵int(input())
  <br/>
  🔵float(input())
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    name = input("enter your name : ")
    <br/>
    print("Welcome ",name)
  </pre>
</div>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
    name = input("enter name : ")
    <br/>
    age = int(input("enter your age : "))
    <br/>
    marks = float(input("enter marks : "))
    <br/>
    print("Welcome ",name)
    <br/>
    print("age : ", age)
    <br/>
    print("marks : ",marks)
    <br/>
  </pre>
</div>
<br/>
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 1</h1>
</header>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="200">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
    What does the input() function return in Python?
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        Integer
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        String
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        Boolean
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        Float
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 2</h1>
</header>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="200">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
    What does the ** operator do?
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="300"
      >
        Multiplication
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        Division
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        Exponentiation
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        Modulus
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">String</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
  A string in Python is a sequence of characters enclosed within single quotes (' '), double quotes (" "), or triple quotes (''' ''' or """ """). Strings are immutable, meaning they cannot be changed after creation. They support indexing, slicing, and various built-in methods for text manipulation.
</p>
<br/>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
    my_string = "Hello, Python!"
    <br/>  
    print(my_string)  # Output: Hello, Python!
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Key Properties</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
  🔵Ordered – Characters have a fixed position (index).
  <br />
  🔵Immutable – Cannot modify individual characters after creation.
  <br />
  🔵Iterable – Can loop through each character.
  <br />
  🔵Supports Unicode – Can store letters, numbers, symbols, and emojis
</p>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Length of a String</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  The length of a string refers to the number of characters it contains, including letters, digits, spaces, and special symbols. In Python, you can find the length of a string using the built-in len() function
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
  text = "Python Programming"
  <br />
  length = len(text)
  <br />
  print(length)  # Output: 18 (including the space)
  </pre>
</div>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Key Properties</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  🔵len() function – Returns the count of characters in the string.
  <br />
  🔵Spaces count – Blank spaces are included in the length.
  <br />
  🔵Works with empty strings – len("") returns 0.
</p>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Indexing</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  Indexing refers to accessing individual characters in a string (or elements in a sequence like lists) using their position (index).
  <br />
  🔵Python uses zero-based indexing (first character is at index 0).
  <br />
  🔵Negative indexing starts from -1 (last character) to -n (first character).
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
text = "PYTHON"
    <br />
# Index:   0 1 2 3 4 5
<br />
# Value:  P Y T H O N
<br />

print(text[0])  # Output: 'P'  
<br />
print(text[3])  # Output: 'H'
<br />  
print(text[5])  # Output: 'N'
<br />  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
text = "PYTHON"
<br />
# Index:   -6 -5 -4 -3 -2 -1
<br />
# Value:    P  Y  T  H  O  N
<br />

print(text[-1])  # Output: 'N'
<br />  
print(text[-3])  # Output: 'H'
<br />  
print(text[-6])  # Output: 'P'
<br />   
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Slicing</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
  Slicing is used to extract a substring (part of a string) by specifying a start, end, and optional step index.
<br />
  🔵Syntax: string[start : end : step]
  <br />
  💠start → Index where slicing begins (inclusive)
  <br />
  💠end → Index where slicing ends (exclusive)
  <br/>
  💠step → Interval between characters (default=1)
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
text = "PYTHONROCKS"
    <br />
# Index:   0 1 2 3 4 5 6 7 8 9 10
<br />
# Value:   P Y T H O N R O C K S
<br />

print(text[2:6])    # Output: "THON" (indices 2 to 5)
<br />  
print(text[:5])     # Output: "PYTHO" (start to 4)
<br />  
print(text[6:])     # Output: "ROCKS" (6 to end)
<br />  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
text = "ABCDEFGHIJ"
<br />
print(text[::2])    # Output: "ACEGI" (every 2nd character)
<br />  
print(text[1::3])   # Output: "BEH" (start=1, step=3)
<br />  
print(text[::-1])   # Output: "JIHGFEDCBA" (reverse string)
<br />    
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 3</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What is a string in Python?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        A sequence of numbers
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        A sequence of characters enclosed in quotes 
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        A mathematical operation
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        A type of loop
</button>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 4</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  Which of these is NOT a valid string declaration?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        "Hello"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        'Python' 
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        "123"
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        'A' + 5
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 5</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What does len("Python!") return?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="300"
      >
        5
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        6 
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        7
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        8
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 6</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What is the output of "Python"[1:4]
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        "Pyt"
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        "yth"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        "thon"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        "Python"
</button>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 7</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  What is the output of len("Python"[1:4])?
</p>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        3
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        4
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        6
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        Error
</button>
<br/>
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down"> Conditional Statements</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
  Conditional statements allow a program to execute different blocks of code based on whether a condition is True or False. They control the flow of your program using logical comparisons.
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Types of Conditional Statements</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵if → Executes code only if the condition is true.
<br />
🔵elif (else-if) → Checks another condition if the previous ones were false.
<br />
🔵else → Runs code if all other conditions are false.
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
    x = 10
    <br />
    if x &gt; 5:
    <br />
      print("x is greater than 5")  # This will execute   
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
age = 17
<br />
if age &gt;= 18:
<br />
    print("You can vote!")
    <br />
else:
<br/>
    print("You cannot vote.")  # This will execute  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
age = 17
<br />
if age {(">")}= 18:
<br />
    print("You can vote!")
    <br />
else:
<br/>
    print("You cannot vote.")  # This will execute  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
score = 85
<br />
if score &gt;= 90:
<br />
    print("Grade: A")
    <br />
elif score &gt;= 80:  # Checks if score is between 80-89
<br />
    print("Grade: B")  # This will execute
    <br />
else:
<br />
    print("Grade: C")
    <br /> 
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 8</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What is the output?
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
temp = 30
<br />
if temp &gt; 40:
<br />
    print("Hot")
<br />
elif temp &gt; 20:
<br />
    print("Warm")
    <br />  
else:
    print("Cold")
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        Hot
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        Warm
</button>
<br/>
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        Cold
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
        No output
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Lists</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
A list in Python is a mutable, ordered collection of items (elements) enclosed in square brackets []. Lists can store:
<br />
🔵Items of any data type (integers, strings, other lists, etc.).
<br />
🔵Duplicate values
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Key Properties of Lists</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵Mutable: Elements can be added, removed, or changed after creation.
<br />
🔵Ordered: Items maintain their defined order (indexed by position).
<br />
🔵Dynamic: Size adjusts automatically as items are added/removed
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
fruits = ["apple", "banana", "cherry"]  # List of strings  
<br />
numbers = [1, 2, 3, 4, 5]               # List of integers  
<br />
empty_list = []                         # Empty list  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="500">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
print(fruits[0])   # Output: "apple" (first item)
<br />  
print(fruits[-1])  # Output: "cherry" (last item)  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
print(numbers[1:4])  # Output: [2, 3, 4] (indices 1 to 3) 
<br /> 
print(numbers[:3])   # Output: [1, 2, 3] (start to index 2)   
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="500">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
fruits[1] = "blueberry"  # Change "banana" to "blueberry"
<br />  
fruits.append("orange")  # Add "orange" to the end   
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 9</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
What is the output of len([1, [2, 3], 4])?
</p>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="300"
      >
        3
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        2
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        1
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        Error
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 10</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
What does my_list[1:3] return for my_list = [10, 20, 30, 40]?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        [10, 20]
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        [20, 30]
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        [20, 30, 40]
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        [30, 40]
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Tuple</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
  A tuple is an immutable, ordered collection of elements enclosed in parentheses (). Like lists, tuples can store items of any data type, but once created, they cannot be modified (no adding, removing, or changing elements).
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Key Properties of Tuples</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
🔵Immutable: Elements cannot be changed after creation.
<br />
🔵Ordered: Items maintain their defined order (accessible by index).
<br />
🔵Heterogeneous: Can store mixed data types (e.g., (1, "apple", 3.14)).
<br />
🔵Faster than lists: Due to immutability, tuples are more memory-efficient for fixed data
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
colors = ("red", "green", "blue")  # Tuple of strings  
<br />
mixed = (1, "hello", 3.14, True)   # Mixed data types  
<br />
single_item = (42,)                # Single-element tuple (comma required!)  
<br />
empty_tuple = ()                   # Empty tuple   
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
print(colors[0])   # Output: "red"  
<br />
print(colors[-1])  # Output: "blue"  
<br />
print(colors[1:3]) # Output: ("green", "blue") (slicing returns a new tuple)   
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 11</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  How do you create a tuple with one element?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        (5)
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        (5,)
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        [5]
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        5
</button>
<br />
<header>
      <h1 className='animate-fadeInUp animate-delay-200 text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-up">Question 12</h1>
</header>
<br />
<p className="mb-8 leading-relaxed animate-fadeInUp animate-delay-200" data-aos="fade-up">
  What is the output of type((1, 2, 3))?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        {("<class 'list>")}
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        {("<class 'tuple'>")}
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        {("<class 'dict'>")}
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        {("<class 'set'>")}
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 13</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What does (1, 2) + (3, 4) return?
</p>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="300"
      >
        (1, 2, 3, 4)
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        [1, 2, 3, 4]
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        (4, 6)
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        Error
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Functions</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
A function is a reusable block of code that performs a specific task. Functions help:
<br />
💠Avoid repetition (write once, use many times).
<br />
💠Organize code into logical modules.
<br />
💠Accept inputs (arguments) and return outputs.
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Key Properties of Functions</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵Can take parameters (inputs) and return values (outputs)
<br />
🔵Callable: Execute by using function_name().
<br />
🔵Scope: Variables inside functions are local (unless declared global).
<br />
🔵Defined with def
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">   
def add(a, b):
<br />
    return a + b
<br />
result = add(3, 5)  # Call the function
<br />
print(result)       # Output: 8
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="500">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">   
def power(base, exponent=2):  # Default value for `exponent`
<br />
    return base ** exponent
    <br />
print(power(3))     # Output: 9 (uses default exponent=2)
<br />
print(power(3, 3))  # Output: 27
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">   
def summarize(*args):  # Accepts any number of positional arguments
<br />
    return sum(args)
<br />
print(summarize(1, 2, 3))  # Output: 6
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
def min_max(numbers):
<br />
    return min(numbers), max(numbers)
<br />
low, high = min_max([4, 2, 9, 7])
<br />
print(low, high)  # Output: 2 9
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 14</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  How do you define a function?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        function greet():
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        def greet():
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        create greet():
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        new greet():
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 15</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What is the output?
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
def say_hello():
<br />
    print("Hello!")
    <br />
say_hello()
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        Hello!
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        None
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        say_hello
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
        Error
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 16</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
  What does return without a value do?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="300"
      >
        Returns 0
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        Returns None
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        Raises an error
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="600"
      >
        Returns the last variable
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Loops</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
A function is a reusable block of code that performs a specific task. Functions help:
<br />
Loops are used to repeat a block of code multiple times. Python supports two main types:
<br />
💠for loops → Iterate over a sequence (e.g., list, string, range).
<br />
💠while loops → Repeat as long as a condition is True.
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Key Properties of Loops</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵Iteration: One execution of the loop body.
<br />
🔵Loop Control:
<br />
💠break → Exit the loop immediately.
<br />
💠continue → Skip to the next iteration.
<br />
💠else → Execute after loop completes (if no break occurs)
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
for item in sequence:  
<br />
    # Code to execute  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="500">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
fruits = ["apple", "banana", "cherry"]  
<br />
for fruit in fruits:
<br />  
    print(fruit)  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="600">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
for num in [1, 2, 3]: 
<br /> 
    print(num)  
    <br />
else:  
<br />
    print("Loop completed!")  # Runs if no `break`  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full animate-fadeInUp animate-delay-200" data-aos="fade-up">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 animate-fadeInUp animate-delay-200">
count = 0  
<br />
while count &lt; 3: 
<br/>
  print(count)  
  <br />
    count += 1  
  </pre>
</div>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
while False:  
<br />
    print("This won't run.")
    <br />  
else:  
<br />
    print("Else block executes!")    
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 17</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
What is the output?
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
for i in "abc":  
<br />
    print(i * 2)
    <br />      
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="400"
      >
        a b c
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="500"
      >
        aa bb cc
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="600"
      >
        abc abc
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
        a a b b c c
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 18</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
What is the output?
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
x = 1 
<br /> 
while x {("<")} 4:  
<br/>
    print(x, end=" ") 
    <br/> 
    x += 1      
  </pre>
</div>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="400"
      >
        1 2 3
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="500"
      >
        1 2 3 4
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        4
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        Infinte Loop
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">File I/O</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
File I/O (Input/Output) allows you to read from and write to files on your computer. Python provides built-in functions for file handling:
<br />
🔵Opening a file (open()).
<br />
🔵Reading data (read(), readline(), readlines()).
<br />
🔵Writing data (write(), writelines()).
<br/>
🔵Closing a file (close()).
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-right">Key File Operations</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵Opening a File
<br />
Use open(filename, mode) where mode specifies the operation:
<br />
💠"r"	Read (default)
<br />
💠"w"	Write (overwrites existing)
<br />
💠"a"	Append (adds to end)
<br />
💠"r+"	Read + Write
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
    file = open("example.txt", "r")  # Opens for reading  
  </pre>
  </div>
  <br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
🔵Reading from a File
<br />
💠read(): Reads the entire file as a string.
<br />
💠readline(): Reads one line at a time.
<br />
💠readlines(): Returns a list of all lines.
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="500">
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
content = file.read()  # Reads entire file
<br />
print(content)    
</pre>
</div>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
🔵Writing to a File
<br />
💠write(): Writes a string to the file.
<br />
💠writelines(): Writes a list of strings.
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
file = open("output.txt", "w")  
<br />
file.write("Hello, World!\n")  # Writes a line  
<br />
file.close()  # Always close the file!     
</pre>
</div>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="500">
🔵Closing a File
<br />
💠Always close files to free system resources
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="600">
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
file.close()  # Closes the file
</pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 19</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
Which mode overwrites an existing file?
</p>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        "w"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        "r"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        "a"
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="700"
      >
        "r+"
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 20</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
What does file.close() do?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        Opens a new file
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        Deletes the file
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        Nothing
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="700"
      >
        Saves and closes the file
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 21</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
How do you read all lines into a list?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        file.readlines()
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        file.read()
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        file.readline()
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black"
      >
        file.readall()
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">OOP (Object-Oriented Programming)</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
OOP is a programming paradigm that organizes code into objects (instances of classes) to model real-world entities. It emphasizes:
<br/>
🔵Encapsulation: Bundling data (attributes) and methods (functions) into a single unit (class).
<br/>
🔵Inheritance: Creating new classes (child) from existing ones (parent).
<br />
🔵Polymorphism: Using a single interface for different data types.
<br />
🔵Abstraction: Hiding complex details, exposing only essential features.
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Key Concepts in OOP</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
🔵Class: Blueprint for creating objects (defines attributes and methods).
<br />
🔵Object: Instance of a class (contains specific data).
<br />
🔵Attribute: Variable that belongs to a class (data).
<br />
🔵Method: Function that belongs to a class (behavior).
</p>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Class & Object</h1>
</header>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="300">
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
class Dog:  
<br />
    def __init__(self, name):  # Constructor  
    <br />
        self.name = name  # Attribute  
        <br />
    def bark(self):  # Method  
    <br />
        print(f"{self.name} says woof!")  
        <br />
# Create an object
<br />  
my_dog = Dog("Buddy")  
<br />
my_dog.bark()  # Output: "Buddy says woof!"  
</pre>
</div>
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Inheritance</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
Inheritance allows a class (child) to inherit attributes and methods from another class (parent). This promotes code reuse and establishes a hierarchy.
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
class Animal:  
<br />
    def __init__(self, species):  
    <br />
        self.species = species  
        <br />
    def make_sound(self):  
    <br />
        print("Some generic animal sound")  
        <br />
class Dog(Animal):  # Inherits from Animal
<br />
    def __init__(self, name):  
    <br />
        super().__init__("Dog")  # Call parent constructor  
        <br />
        self.name = name  
        <br />
    def bark(self):  
    <br />
        print(f"{self.name} says woof!")  
        <br />
# Create an object
<br />
my_dog = Dog("Buddy")
<br />
my_dog.make_sound()  # Output: "Some generic animal sound"
<br />
my_dog.bark()  # Output: "Buddy says woof!"
</pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Polymorphism</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
Polymorphism allows different classes to be treated as instances of the same class through a common interface. It enables methods to be used interchangeably across different objects.
</p>
<br />
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">  
<pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
class Cat:  
<br />
    def __init__(self, name):  
    <br />
        self.name = name  
        <br />
    def make_sound(self):  
    <br />
        print(f"{self.name} says meow!")  
        <br />
def animal_sound(animal):  # Function that accepts any animal
<br />
    animal.make_sound()  # Calls the make_sound method
    <br />
# Create objects
<br />
my_dog = Dog("Buddy")
<br />
my_cat = Cat("Whiskers")
<br />
animal_sound(my_dog)  # Output: "Buddy says woof!"
<br />
animal_sound(my_cat)  # Output: "Whiskers says meow!"
</pre>
</div>
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Encapsulation</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
Encapsulation is the bundling of data (attributes) and methods (functions) that operate on that data within a single unit (class). It restricts direct access to some of an object's components, which helps prevent unintended interference and misuse.
</p>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`class BankAccount:
    def __init__(self, balance=0):  
        self.__balance = balance  # Private attribute

    def deposit(self, amount):  
        if amount > 0:  
            self.__balance += amount  

    def withdraw(self, amount):  
        if 0 < amount <= self.__balance:
            self.__balance -= amount  

    def get_balance(self):  
        return self.__balance  # Public method to access private data

# Create an account
my_account = BankAccount(100)
my_account.deposit(50)
print(my_account.get_balance())  # Output: 150
`}
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Abstraction</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
Abstraction is the concept of hiding complex implementation details and exposing only the necessary features of an object. It allows users to interact with objects at a higher level without needing to understand the underlying complexity.
</p>
<div className="border border-black bg-gray-100 p-4 rounded overflow-auto max-w-full" data-aos="zoom-in" data-aos-delay="400">
  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`class Car:
    def __init__(self, make, model):  
        self.make = make  
        self.model = model  

    def start(self):  
        print(f"{self.make} {self.model} is starting...")
    def stop(self):
        print(f"{self.make} {self.model} is stopping...")
    def drive(self):
        print(f"{self.make} {self.model} is driving...")
# Create a car object
my_car = Car("Toyota", "Camry")
my_car.start()  # Output: "Toyota Camry is starting..."
my_car.drive()  # Output: "Toyota Camry is driving..."`}
  </pre>
</div>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 22</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
What is a class in OOP?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        A blueprint for creating objects
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        A variable that stores data
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        A function that performs actions
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="700"
      >
        A type of data structure
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 23</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
What is inheritance in OOP?
</p>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        Creating a new class from an existing one
</button>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        Hiding implementation details
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        Bundling data and methods
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="700"
      >
        Using a single interface for different data types
</button>
<br />
<header>
      <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 24</h1>
</header>
<br />
<p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
What is polymorphism in OOP?
</p>
<br />
<button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="400"
      >
        Using a single interface for different data types
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="500"
      >
        Creating a new class from an existing one
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="600"
      >
        Hiding implementation details 
</button>
<br />
<button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-up" data-aos-delay="700"
      >
        Bundling data and methods
</button>
<br />
<button
        onClick={handleHTMLClick}
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
};

export default Python1;