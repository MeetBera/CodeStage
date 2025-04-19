import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log("✅ Registered:", res.data);
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-8">Join CodeStage 🚀</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label className="block mb-1 font-medium text-cyan-900">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-cyan-900">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-cyan-900">Password</label>
            <input
              name="password"
              type="password"
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
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-cyan-700">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-cyan-900">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;