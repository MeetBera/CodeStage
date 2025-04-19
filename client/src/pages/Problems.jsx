// src/pages/Problems.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Problems = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch("http://localhost:5000/api/questions");
      const data = await res.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧠 All Problems</h1>
      <ul className="space-y-4">
        {questions.map((q) => (
          <li key={q._id} className="border p-4 rounded hover:shadow">
            <Link to={`/problems/${q.slug}`} className="text-lg font-semibold text-blue-600 hover:underline">
              {q.title}
            </Link>
            <p className="text-sm text-gray-600">{q.difficulty} | {q.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problems;
