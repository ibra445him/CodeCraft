import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MYSQL() {
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
                    <h1 className='text-lg sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL</h1>
                </header>
                <br />
                <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for accessing and managing data. It is widely used for web applications and is known for its reliability, performance, and ease of use.
                    MySQL supports a wide range of database operations, including data storage, retrieval, and manipulation. It is commonly used in conjunction with web development technologies like PHP, Python, and JavaScript to create dynamic websites and applications.
                    MySQL is also known for its scalability, allowing it to handle large volumes of data and high traffic loads. It provides features such as data replication, clustering, and partitioning to enhance performance and availability.
                    MySQL is widely used in various industries, including e-commerce, content management systems, and data warehousing. It is compatible with multiple operating systems and can be integrated with various programming languages and frameworks.
                </p>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Features</h2>
                </header>
                <br />
                <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                    <li>Open-source and free to use</li>
                    <li>Supports multiple storage engines</li>
                    <li>High performance and scalability</li>
                    <li>Data security features</li>
                    <li>Cross-platform compatibility</li>
                    <li>Extensive documentation and community support</li>
                    <li>Integration with various programming languages and frameworks</li>
                    <li>Support for transactions and ACID compliance</li>
                    <li>Replication and clustering for high availability</li>
                    <li>Full-text search capabilities</li>
                    <li>Support for JSON data types</li>
                    <li>Advanced indexing and query optimization</li>
                    <li>Data import/export capabilities</li>
                    <li>Support for stored procedures and triggers</li>
                    <li>Graphical user interface tools for database management</li>
                </ul>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Databases & Tables</h2>
                </header>
                <br />
                <div className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    <p>In MySQL, a database is a structured collection of data that is organized into tables. Each table consists of rows and columns, where each row represents a record and each column represents a field within that record. Databases can contain multiple tables, allowing for complex data relationships and queries.</p>
                    <p>Tables are defined by their schema, which includes the table name, column names, data types, and any constraints or indexes. MySQL supports various data types, including numeric, string, date/time, and binary types, allowing for flexible data storage.</p>
                    <p>To create a database in MySQL, you can use the `CREATE DATABASE` statement, followed by the database name. Once a database is created, you can create tables within it using the `CREATE TABLE` statement, specifying the table name and its schema.</p>
                    <p>For example, to create a database named "my_database" and a table named "users" with columns for user ID, name, and email, you would use the following SQL commands:</p>
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 mt-4 mb-4">
{`CREATE DATABASE my_database;
USE my_database;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);`}
                    </pre>
                    <p className="mb-4">This creates a database named "my_database" and a table named "users" with three columns: `user_id`, `name`, and `email`. The `user_id` column is set as the primary key and will auto-increment with each new record.</p>
                </div>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Commands</h2>
                </header>
                <br />
                {/* <div className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up"> */}
                    <p className="mb-4">MySQL commands are used to interact with the MySQL database server. These commands can be categorized into several types, including data definition, data manipulation, and data control commands.</p>
                    <p className="mb-4">Some common MySQL commands include:</p>
                    <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                        <li><strong>CREATE DATABASE</strong>: Creates a new database.</li>
                        <li><strong>CREATE TABLE</strong>: Creates a new table within a database.</li>
                        <li><strong>INSERT INTO</strong>: Inserts new records into a table.</li>
                        <li><strong>SELECT</strong>: Retrieves data from one or more tables.</li>
                        <li><strong>UPDATE</strong>: Modifies existing records in a table.</li>
                        <li><strong>DELETE</strong>: Deletes records from a table.</li>
                        <li><strong>ALTER TABLE</strong>: Modifies the structure of an existing table.</li>
                        <li><strong>DROP TABLE</strong>: Deletes a table and its data.</li>
                        <li><strong>GRANT</strong>: Grants privileges to users for accessing databases and tables.</li>
                        <li><strong>REVOKE</strong>: Revokes privileges from users.</li>
                    </ul>
                    <p className="mb-4">These commands can be executed using the MySQL command-line client or through various programming languages that support MySQL connectivity.</p>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Data Types</h2>
                </header>
                <br />
                <p className="mb-4 leading-relaxed text-gray-700" data-aos="fade-up">
                    MySQL supports a variety of data types to store different kinds of data. These data types can be categorized into several groups:
                </p>
                <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                    <li><strong>Numeric Types</strong>: Includes integers (INT, BIGINT), floating-point numbers (FLOAT, DOUBLE), and fixed-point numbers (DECIMAL).</li>
                    <li><strong>String Types</strong>: Includes character strings (CHAR, VARCHAR), text types (TEXT, MEDIUMTEXT, LONGTEXT), and binary strings (BINARY, VARBINARY).</li>
                    <li><strong>Date and Time Types</strong>: Includes date (DATE), time (TIME), datetime (DATETIME), timestamp (TIMESTAMP), and year (YEAR).</li>
                    <li><strong>Spatial Types</strong>: Used for storing geometric data, such as points, lines, and polygons.</li>
                    <li><strong>JSON Type</strong>: Used for storing JSON-formatted data.</li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700" data-aos="fade-up">
                    Each data type has its own characteristics and limitations, allowing developers to choose the most appropriate type for their data storage needs.
                </p>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Indexes</h2>
                </header>
                <br />
                <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    Indexes in MySQL are used to improve the performance of database queries by allowing faster data retrieval. An index is a data structure that provides a quick way to look up rows in a table based on the values of one or more columns.
                    MySQL supports several types of indexes, including:</p>
                    <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                        <li><strong>Primary Key Index</strong>: Automatically created when a primary key is defined on a table.</li>
                        <li><strong>Unique Index</strong>: Ensures that all values in the indexed column(s) are unique.</li>
                        <li><strong>Regular Index</strong>: A standard index that improves query performance without enforcing uniqueness.</li>
                        <li><strong>Full-Text Index</strong>: Used for full-text search capabilities on text columns.</li>
                        <li><strong>Spatial Index</strong>: Used for spatial data types to optimize spatial queries.</li>
                    </ul>
                    To create an index, you can use the `CREATE INDEX` statement, specifying the index name, table name, and column(s) to be indexed. For example:
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 mb-4">
{`CREATE INDEX idx_users_email ON users (email);`}
                    </pre>
                    <p className="mb-4 leading-relaxed text-gray-700">
                    This creates an index named `idx_users_email` on the `email` column of the `users` table, improving the performance of queries that filter or sort by email.
                </p>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Joins</h2>
                </header>
                <br />
                <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    Joins in MySQL are used to combine rows from two or more tables based on a related column between them. Joins allow you to retrieve data from multiple tables in a single query, enabling complex data relationships and analysis.
                    MySQL supports several types of joins:</p>
                    <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                        <li><strong>INNER JOIN</strong>: Returns only the rows that have matching values in both tables.</li>
                        <li><strong>LEFT JOIN (or LEFT OUTER JOIN)</strong>: Returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for the right table.</li>
                        <li><strong>RIGHT JOIN (or RIGHT OUTER JOIN)</strong>: Returns all rows from the right table and the matched rows from the left table. If there is no match, NULL values are returned for the left table.</li>
                        <li><strong>FULL JOIN (or FULL OUTER JOIN)</strong>: Returns all rows when there is a match in either left or right table records. If there is no match, NULL values are returned for non-matching columns.</li>
                        <li><strong>CROSS JOIN</strong>: Returns the Cartesian product of both tables, combining every row from the first table with every row from the second table.</li>
                    </ul>
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 mb-4">
{`SELECT users.name, orders.order_id
FROM users
INNER JOIN orders ON users.user_id = orders.user_id;`}
                    </pre>
                    <p className="mb-4 leading-relaxed text-gray-700">
                    This query retrieves the names of users along with their corresponding order IDs by matching the `user_id` column in both tables.
                </p>
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Transactions</h2>
                </header>
                <br />
                <p className="mb-4 leading-relaxed text-gray-700" data-aos="fade-up">
                    Transactions in MySQL are used to ensure that a series of database operations are executed as a single unit of work. A transaction is a sequence of one or more SQL statements that are executed together, and it can be committed or rolled back as a whole.
                    MySQL supports the following transaction control commands:
                </p>
                <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                    <li><strong>START TRANSACTION</strong>: Begins a new transaction.</li>
                    <li><strong>COMMIT</strong>: Saves all changes made during the transaction to the database.</li>
                    <li><strong>ROLLBACK</strong>: Undoes all changes made during the transaction, reverting the database to its previous state.</li>
                    <li><strong>SAVEPOINT</strong>: Creates a savepoint within a transaction, allowing you to roll back to that point without affecting the entire transaction.</li>
                </ul>
                    To use transactions, you typically start with `START TRANSACTION`, perform your database operations (such as INSERT, UPDATE, DELETE), and then either commit or roll back the changes based on whether the operations were successful or not.
                    For example:
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
{`START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Or ROLLBACK on error`}
                    </pre>
                    In this example, a transaction is started, two updates are made to transfer money between accounts, and then the changes are committed. If any error occurs during the updates, you can use `ROLLBACK` to undo all changes made in the transaction.
                <br />
                <header>
                    <h2 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">MySQL Security</h2>
                </header>
                <br />
                <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    MySQL provides several security features to protect data and ensure secure access to the database. Some key security measures include:</p>
                    <ul className="list-disc list-inside mb-8 text-gray-700" data-aos="fade-up">
                        <li><strong>User Authentication</strong>: MySQL requires users to authenticate with a username and password before accessing the database.</li>
                        <li><strong>Access Control</strong>: MySQL allows administrators to grant or revoke privileges to users, controlling what actions they can perform on databases and tables.</li>
                        <li><strong>SSL Encryption</strong>: MySQL supports SSL/TLS encryption for secure communication between the client and server, protecting data in transit.</li>
                        <li><strong>Data Encryption</strong>: MySQL provides options for encrypting sensitive data stored in the database using built-in functions or third-party tools.</li>
                        <li><strong>Audit Logging</strong>: MySQL can log user activity and changes made to the database, providing an audit trail for security monitoring.</li>
                        <li><strong>Firewall Rules</strong>: MySQL can be configured with firewall rules to restrict access based on IP addresses or network ranges.</li>
                    </ul>
                <br />
                <header>
                    <h1 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 1</h1>
                </header>
                <br />
                <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                    What does RDBMS stand for?
                </p>
                 <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
          Relational Data Management Service
                </button>
                <br />
                <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            Relational Database Management System
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >Random Database Modeling System</button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >Raw Data Manipulation Software
                    </button>
                    <br />
                    <header>
                        <h1 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 2</h1>
                    </header>
                    <br />
                    <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                        What is the purpose of a primary key in a database table?
                    </p>
                     <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
            To uniquely identify each record in the table
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To store large amounts of data
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To create relationships between tables
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To enforce data integrity constraints
                    </button>
                    <br />
                    <header>
                        <h1 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 3</h1>
                    </header>
                    <br />
                    <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-down">
                        Which SQL statement is used to retrieve data from a database?
                    </p>
                    <br />
                    <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
        >
            SELECT
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
        >
            INSERT
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
        >
            UPDATE
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
        >
            DELETE
                    </button>
                    <br />
                    <header>
                        <h1 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 4</h1>
                    </header>
                    <br />
                    <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                        What is the purpose of a foreign key in a database table?
                    </p>
                    <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
            To establish a relationship between two tables
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To enforce data integrity constraints
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To store large amounts of data
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
        >
            To uniquely identify each record in the table
                    </button>
                    <br />
                    <header>
                        <h1 className='text-lg sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900' data-aos="fade-down">Question 5</h1>
                    </header>
                    <br />
                    <p className="mb-8 leading-relaxed text-gray-700" data-aos="fade-up">
                        What is the purpose of an index in a database?
                    </p>
                    <button
        onClick={handleButtonClick1}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
            To improve query performance by allowing faster data retrieval
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-right" data-aos-delay="700"
      >
            To enforce data integrity constraints
                    </button>
                    <br />
                    <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
        >
                To store large amounts of data
                        </button>
                        <br />
                        <button
        onClick={handleButtonClick2}
        className="px-4 py-2 rounded-md bg-cyan-50 text-black transition-colors border border-black" data-aos="fade-left" data-aos-delay="700"
      >
            To create relationships between tables
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

export default MYSQL;