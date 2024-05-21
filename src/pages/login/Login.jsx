import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Doctor from "@/assets/doctor.png";
import { loginEndpoints } from "@/services/api/endpoints";
import instance from "@/services/api/index";
import { useNavigate } from "react-router-dom";

// import useSWR from "swr";

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("E-mail:", email);
    console.log("Password:", password);
    try {
      const response = await instance.post(loginEndpoints.login, {
        email: email,
        password: password,
      });
      console.log("Server Response:", response.data);
      // console.log(response.data)
      if  (response.data) { // Check for success in response data (adjust based on your API)
      navigate('/hospitals')
      } else {
        console.error("Login failed:", response.data.message); // Handle failed login
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-end relative" style={{ backgroundImage: `url(${Doctor})` }}>
      <div className="w-1/2 h-full absolute inset-0 bg-teal-600 opacity-50"></div>
      <div className="flex flex-col w-1/2 bg-white h-full justify-center items-center">
        <p className="w-1/2 text-start mt-2">E-mail address</p>
        <Input
          className="w-1/2 mt-3 rounded border-neutral-400 bg-zinc-300 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="w-1/2 text-start mt-2">Password</p>
        <Input
          className="w-1/2 mt-3 rounded border-neutral-400 bg-zinc-300 outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-right w-1/2 my-4 text-emerald-600">
          <a href="">Forgot Password?</a>
        </p>
        <Button
          className="w-1/2 rounded outline-none transform duration-300 hover:bg-emerald-500 bg-emerald-600 border-none text-white"
          variant="outline"
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
