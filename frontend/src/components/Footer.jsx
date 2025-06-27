import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Footer = () => {

  const {axios} = useAppContext()
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("/api/subscribe", { email: email });
      if(data.success){
      setEmail("");
      toast.success("Subscribed successfully")
    } else{
      toast.error(data.message)
    }

    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="dummyLogoDark" />
          <p className="mt-6 text-sm">
            Discover, write, and share insightful blogs powered by AI. Whether
            you're a seasoned writer or just getting started, BlogOut helps you
            express your thoughts, reach your audience, and grow your voice —
            all in one intuitive platform.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p>
                The latest blog, new tech,and exclusive news sent to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-600/90 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © BlogOut. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
