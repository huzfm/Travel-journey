import { useState } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import abc from '../assets/abc.jpg'

export default function Contact() {
      const bgStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
      }
      const { register, reset, handleSubmit } = useForm();

      const [isSuccess, setIsSuccess] = useState(false);
      const [result, setResult] = useState(null);

      const accessKey = "6a608ecc-53a2-4ecf-9528-bfa5890a7563";

      const { submit: onSubmit } = useWeb3Forms({
            access_key: accessKey,
            settings: {
                  from_name: "user#",
                  // subject: "New Contact Message from your Website",
                  // ... other settings
            },
            onSuccess: (msg) => {
                  setIsSuccess(true);
                  setResult(msg);
                  reset();
            },
            onError: (msg) => {
                  setIsSuccess(false);
                  setResult(msg);
            },
      });

      return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-10 py-10" id='contact'
                  style={{ ...bgStyles, backgroundImage: `url(${abc})` }}
            >
                  <div className="w-full max-w-lg  backdrop-blur-sm shadow-md rounded-lg p-6 space-y-6">
                        <h1 className="text-2xl font-bold text-white text-center">
                              Contact Us
                        </h1>

                        <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="space-y-4"
                        >
                              <div>
                                    <label
                                          htmlFor="name"
                                          className="block text-lg font-medium text-white"
                                    >
                                          Name
                                    </label>
                                    <input
                                          type="text"
                                          id="name"
                                          {...register("name", { required: true })}
                                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          placeholder="Your Name"
                                    />
                              </div>

                              <div>
                                    <label
                                          htmlFor="email"
                                          className="block text-lg font-medium text-white"
                                    >
                                          Email
                                    </label>
                                    <input
                                          type="email"
                                          id="email"
                                          {...register("email", { required: true })}
                                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          placeholder="Your Email"
                                    />
                              </div>

                              <div>
                                    <label
                                          htmlFor="message"
                                          className="block text-lg font-medium text-white"
                                    >
                                          Message
                                    </label>
                                    <textarea
                                          id="message"
                                          {...register("message", { required: true })}
                                          rows="4"
                                          className="backdrop-blur-sm mt-1 block w-full px-4 py-2 rounded-md shadow-sm sm:text-sm"
                                          placeholder="Your Message"
                                    ></textarea>
                              </div>

                              <div>
                                    <button
                                          type="submit"
                                          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 "
                                    >
                                          Submit Form
                                    </button>
                              </div>
                        </form>

                        {result && (
                              <div
                                    className={`mt-4 text-center text-sm font-medium ${isSuccess
                                          ? "text-green-500"
                                          : "text-red-500"
                                          }`}
                              >
                                    {result}
                              </div>
                        )}
                  </div>
            </div>
      );
}
