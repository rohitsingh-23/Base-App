import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);
  // const

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == "admin" && password == "admin") {
      setUserData({ email: email });
      navigate("/");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUserData(user.providerData[0]);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 m-0 p-0 relative">
      <div className="height-[100vh] flex flex-col lg:flex-row justify-around lg:justify-center relative">
        <div className="bg-[#605BFF] h-[10vh]  flex items-center pl-[20px] font-nunito lg:hidden">
          <img
            src="/icons/app_logo.png"
            alt="App Icon"
            className="w-[30px] h-[30px] "
          />
          <p className="text-[20px] text-white ml-[20px]">Base</p>
        </div>
        <div className="colored-style lg:bock hidden lg:w-[30vw] h-[105vh] bg-[#F8FAFF] lg:block  overflow-hidden absolute rotate-[5deg] left-[44%] z-10 "></div>

        <div className="lg:w-[55%] bg-[#605BFF] hidden lg:block">
          <img
            src="/icons/app_logo.png"
            alt=""
            className="h-[70px] absolute top-[2%] left-[3%]"
          />
          <p className="text-[80px] text-white font-montserrat absolute left-[20%] top-[40%] text-center">
            Base
          </p>
          <div className="flex w-[25vw] justify-between absolute bottom-20 left-[10%]">
            <img
              src="/icons/github.png"
              alt="Github Icon"
              className="w-[40px] h-[40px]"
            />
            <img
              src="/icons/twitter.png"
              alt="Twitter Icon"
              className="w-[40px] h-[40px]"
            />
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn Icon"
              className="w-[50px] h-[50px]"
            />
            <img
              src="/icons/discord.png"
              alt="Discord Icon"
              className="w-[50px] h-[50px]"
            />
          </div>
        </div>
        <div className="lg:w-[50vw] w-[100vw] bg-[#F8FAFF] flex justify-center">
          <div className="h-[100vh] w-[100%] px-[5%] bg-[#F8FAFF] lg:bg-[#F8FAFF] flex flex-col justify-center lg:h-[100vh] lg:w-[550px] lg:px-[3%] py-[7%] z-10">
            <div className="">
              <p className="text-[24px] font-[700] mt-[8%]">Sign In</p>
              <p className="text-[14px] pt-[8px]">Sign in to your account</p>
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <button
                type="button"
                className="text-[#858585] text-[10px] w-[45%]  rounded-lg bg-white hover:bg-[#white]/90  focus:outline-none focus:ring-[#3b5998]/50 px-3 py-2.5 text-center inline-flex items-center mb-2 lg:text-[14px]"
                onClick={handleGoogleLogin}
              >
                <img
                  src="/icons/google-icon.png"
                  className="h-[24px] mr-[10px]"
                  alt=""
                />
                Sign in with Google
              </button>
              <button
                type="button"
                className="text-[#858585] text-[10px] w-[45%] bg-white hover:bg-[#white]/90 focus:ring-4 focus:outline-none  rounded-lg px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 lg:text-[14px]"
              >
                <img
                  src="/icons/apple-icon.png"
                  className="h-[24px] mr-[10px]"
                  alt=""
                />
                Sign in with Apple
              </button>
            </div>
            <div className="bg-white rounded-md p-[20px] mt-[20px] py-[40px]">
              <form action="" onSubmit={handleSubmit}>
                <label className="text-[16px]  font-lato" htmlFor="email">
                  Email Address
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="   
                        mt-[10px]
                        mb-[20px]
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-[#EAEAEA]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                <br />
                <label className="font-lato" htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
              mt-[10px]
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-[#EAEAEA]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                <p className="text-[#346BD4] mt-[10px] text-[14px]">
                  Forgot Passoword?
                </p>
                <input
                  type="submit"
                  className="w-[100%] bg-[#605BFF] rounded-md text-white py-[8px] mt-[20px]"
                  value="Sign In"
                />
              </form>
            </div>

            <div className="lg:flex items-center justify-center mt-[30px]">
              <p className="text-center mt-[25px] lg:mt-0 lg:pr-[10px] text-[20px] text-[#858585] font-lato">
                Don't have an account?
              </p>
              <p className="text-[#346BD4] mt-[10px] lg:mt-0 text-[18px] text-center">
                Register here
              </p>
            </div>
            <div className="flex w-[70%] m-[auto] mt-[40px] justify-between lg:hidden">
              <img
                src="/icons/github-mobile.png"
                alt="Github Icon"
                className="w-[40px] h-[40px]"
              />
              <img
                src="/icons/twitter-mobile.png"
                alt="Twitter Icon"
                className="w-[40px] h-[40px]"
              />
              <img
                src="/icons/linkedin-mobile.png"
                alt="LinkedIn Icon"
                className="w-[40px] h-[40px]"
              />
              <img
                src="/icons/discord-mobile.png"
                alt="Discord Icon"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
