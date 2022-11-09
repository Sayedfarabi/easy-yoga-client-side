import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-6xl text-center font-semibold my-3 text-purple-500'>Answer to some questions</h1>
            <div className='md:w-2/3 w-4/5 py-12 mx-auto text-base-200'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is Difference between SQL and NoSQL ?
                    </div>
                    <div className="collapse-content">
                        <p>MySQL is one of the types of relational database whereas NoSQL is more of design based database type with examples like MongoDB, Couch DB, etc. MySQL is available with a wide array of reporting tools help application's validity whereas NoSQL databases lack reporting tools for analysis and performance testing.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p>
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Blog;