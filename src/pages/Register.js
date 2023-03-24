import React from 'react'

const Register = () => {
    return (
        <div>

            <div class="flex flex-col justify-center items-center min-h-screen py-4 px-8 font-WorkSans">
            <h2 class="text-xl font-bold  text-center">Register</h2>
                <div class="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 flex my-4">
                    <div class="w-1/3 md:block hidden my-auto pt-4 pb-16 ">
                        <ol class="list-decimal pl-4 text-gray-500 ">
                            <li class="mb-4 py-4">Registration</li>
                            <li class="mb-4 py-4">Mobile Verification</li>
                            <li class="mb-4 py-4">Email Verification</li>
                            <li class="mb-4 py-4">KYC Process</li>
                            <li class="mb-4 py-4">Bank Verification</li>
                            <li class="mb-4 py-4">2FA Generation</li>
                        </ol>
                    </div>


                    <div class="w-5/6 mx-auto ">
                        
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@example.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="confirm-password"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    className="appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirm-password"
                                    type="password"
                                    placeholder="********"
                                />
                            </div>
                            <div class="flex items-center justify-end">
                                <button
                                    className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-900 focus:outline-none font-Urbanist"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Register