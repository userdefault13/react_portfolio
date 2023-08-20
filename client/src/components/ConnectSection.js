import React from 'react';
import '../styles/connectsection.css'; // Import the CSS file

const ConnectSection = () => {
    return (
        <section id="connect" className="h-screen bg-gray-100 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Let's Connect</h2>
        <div className="connect-form">
            <p>Send me an email:</p>
            <a
            href="mailto:recipient@example.com?subject=Hello&body=I%20want%20to%20connect%20with%20you!"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full self-center"
            >
            Send Email
            </a>
        </div>
        </section>
    );
};

export default ConnectSection;
