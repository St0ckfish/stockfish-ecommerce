import * as React from 'react';
import { useState } from 'react';




const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const emailMessage = `
            You Have Received A New Message From Your E-commerce Contact Website:
            <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
                <p style="margin: 0;">Name: ${firstName} ${lastName}</p>
                <p style="margin: 12px 0;">Phone: ${phone}</p>
                <p style="margin: 12px 0;">Email: ${email}</p>
                <p style="margin: 0;">Message: ${message}</p>
            </div>
        `;

            const response = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
                method: "POST",
                body: JSON.stringify({
                    to: "freelancing_messages@hotmail.com", 
                    subject: "Message From Your E-commerce Website",
                    message: emailMessage,
                }),
            });

            if (response.ok) {
                console.log("Email sent successfully!");
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
                setMessage('');
                // Display a success message to the user
            } else {
                console.error("Error sending email:", response.statusText);
                // Handle the error and display a user-friendly message
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle other errors gracefully
        }
    };

    return (
        <>
            <div className='grid justify-center items-center mt-32'>
                <div className='grid justify-center items-center text-center'>
                    <h1 className=' text-[30px] font-bold'>Contact US</h1>
                    <p>Any question or remarks? Just write us a message!</p>
                </div>
                <div className='bg-white flex p-3 rounded-2xl mt-8 max-[1370px]:grid'>
                    <div className=' bg-[#4086e9] text-white grid gap-32 rounded-2xl p-7'>
                        <div className=''>
                            <h1 className='text-[25px] font-bold'>Contact Information</h1>
                            <p className=' text-gray-300'>Say something to start a live chat!</p>
                        </div>
                        <div className='grid gap-3'>
                            <div className='flex gap-3 items-center'>
                                <svg className="h-6 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <p>+1012 3456 789</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <svg className="h-6 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                                <p>demo@gmail.com</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <svg className="h-6 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <a href="">
                                <img className='w-[30px]' src="/images/linkedin.svg" alt="" />
                            </a>
                            <a href="">
                                <img className='w-[30px]' src="/images/facebook.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='grid p-4' >
                            <div className='grid gap-11'>
                                <div className='flex gap-4 max-[744px]:grid '>
                                    <input id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className=' outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='First Name' type="text" />
                                    <input id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className=' outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Last Name' type="text" />
                                </div>
                                <div className='flex gap-4 max-[744px]:grid'>
                                    <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className=' outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Email' type="email" />
                                    <input id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className=' outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Phone Number' type="text" />
                                </div>
                                <div className='flex'>
                                    <input id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required className=' w-full  outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Write Your Message...' type="text" />
                                </div>
                                <div className='flex justify-end'>
                                    <input className=' cursor-pointer px-10 py-4 bg-[#4086e9] rounded-lg text-white' type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;