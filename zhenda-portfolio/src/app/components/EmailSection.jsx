"use client"
import React from 'react'

const EmailSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const resData = await response.json()

        if (response.status === 200) {
            console.log('Message sent.')
        }
    }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative text-[#ADB7BE]'>
        <div className=''>
            <h2 className='text-3xl text-white font-bold py-2 xl:py-4'> <span className='font-mono text-[#64FFDA] text-base'>04.</span> Let's Connect</h2>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hello, feel free to drop a message and I'll do my best to get back to you!
            </p>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" className='block text-sm font-mono text-[#64FFDA] mb-2'> Your email </label>
                    <input
                        name='email'
                        type="email"
                        id="email"
                        required placeholder="example@example.com"
                        className='bg-[#ADB7BE] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject" className='block text-sm font-mono text-[#64FFDA] mb-2'> Subject </label>
                    <input
                        name='subject'
                        type="text"
                        id="subject"
                        required placeholder="What's Poppin!"
                        className='bg-[#ADB7BE] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='block text-sm font-mono text-[#64FFDA] mb-2'> Message </label>
                    <textarea
                        name="message"
                        id="message"
                        className='bg-[#ADB7BE] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-500 text-white py-2.5 px-5 rounded-full font-mono w-full h-full"
                >Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection