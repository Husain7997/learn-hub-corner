import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='m-4 text-center'>Answer and Question</h2>

            <div>
                <h6>what is cors?</h6>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented.</p>
            </div>

            <div>
                <h6>what is cors? What other options do you have to implement authentication?</h6>
                <p>Using Firebase in your project allows you to focus on the frontend and not so much on the backend because Firebase does a lot of things under the hood for you. Firebase also helps keeps costs low and reduces the need for boilerplate backend code. Firebase also helps you monitor errors.</p>
                <p>
                    There are many types of authentication methods. These include: 1. Token authentication 2. Password authentication Biometric authentication 3. Multi-factor authentication 4. Certificate-based authentication 5. Identification Authentication methods 6. API authentication methods 7. User authentication methods
                </p>
            </div>
            <div>
                <h6>How does the private route work?</h6>
                <p>Private Routes The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div>
                <h6>What is Node? How does Node work? </h6>
                <p>Node.js is an open-source, cross-platform JavaScript runtime environment used for executing JavaScript code outside of a web browser.</p>
                <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</p>
            </div>
        </div>
    );
};

export default Blogs;