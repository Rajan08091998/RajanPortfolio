'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const formDataWithReplyTo = {
        ...formData,
        reply_to: formData.email,
      };
      console.log(formDataWithReplyTo)
      // Ensure environment variables are defined
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

      if (!serviceId || !templateId || !userId) {
        console.error('EmailJS environment variables are not defined');
        setErrorMessage('Error: EmailJS configuration is missing.');
        setIsSubmitting(false);
        return;
      }
      await emailjs.send(serviceId, templateId, formDataWithReplyTo, userId);
      setSuccessMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 dark:text-white"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {successMessage && <p className="text-green-600 dark:text-green-400 text-center">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 dark:text-red-400 text-center">{errorMessage}</p>}
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">Or reach out directly:</p>
          <p className="mt-2 text-xl font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-300">bagoriarajan@gmail.com</p>
          <p className="mt-1 text-xl font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-300">+91 8078609974</p>
        </div>
      </div>
    </section>
  )
}
