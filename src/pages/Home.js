import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.png";
function Home() {


    return (
        <>

            <div className="2xl:container 2xl:mx-auto lg:py-1 lg:my-1 lg:px-20 md:py-1 md:my-1 md:px-6 py-1 my-1 px-4 min-h-screen ">
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-2 pb-10 lg:py-16 xl:py-24 font-WorkSans ">
                            <h1 className="text-xl lg:text-xl xl:text-xl  font-semibold text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Welcome to Crypto Shatabdi</h1>
                            <h2 className="md:w-8/12 py-2 text-center md:text-left md:py-2 text-gray-700 text-md lg:text-2xl ">Our Benefits:<br />
                                <li>Fully Compliant with TDS regulations <br /></li>
                                <li>We don't hold your funds or your Crypto.<br /></li>
                                <li>Place an order, transfer funds, and get full control over your crypto.<br /></li>
                                <li>Selling crypto is super quick and efficient. (Lock price, transfer crypto and get funds in your account instantly)<br /></li>
                                <li>We don't make money on network fees. Plus you get to choose the fees you want to pay on the network.<br /></li>
                                <li>Tier Based Limits for buying<br /></li>
                                <li>For more details, <a className="font-medium text-blue-500 hover:text-blue-900"><Link to="/faq">click here</Link></a> and access our FAQ section.</li></h2><br />
                            <div className="w-full flex justify-center md:block font-Urbanist">
                                <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-4 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"><Link to="/register">Register</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            <img className="md:absolute  pt-8 md:-ml-16" src={heroimage} alt="heroimage" style={{ width: "50%", height: "auto", minWidth: "170px" }} />
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
