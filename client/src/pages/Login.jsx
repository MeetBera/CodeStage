import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log("✅ Logged in:", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
    console.log("Logging in with", formData.email, formData.password); // Access email and password from formData
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-8">Welcome Back to CodeStage 🚀</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-cyan-900">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-cyan-900">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300 font-semibold"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-cyan-700">
          Don’t have an account? <a href="/register" className="underline hover:text-cyan-900">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
