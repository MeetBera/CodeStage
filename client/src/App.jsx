import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InterviewRoom from "./pages/InterviewRoom";
import Contest from "./pages/Contest";
import Layout from "./components/Layout";
import Pricing from "./pages/Pricing";
import Problems from "./pages/Problems";
import ProblemDetail from "./pages/ProblemDetail";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route
          path="/problems"
          element={
            <PrivateRoute>
              <Problems />
            </PrivateRoute>
          }
        />
        <Route
          path="/problems/:slug"
          element={
            <PrivateRoute>
              <ProblemDetail />
            </PrivateRoute>
          }
        />
      <Route path="/interview/:roomId" element={
        <PrivateRoute>
          <InterviewRoom />
        </PrivateRoute>
      } />
    </Routes>
    </Layout>
  );
}

export default App;