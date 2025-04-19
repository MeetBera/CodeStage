// src/pages/ProblemDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";

const ProblemDetail = () => {
  const { slug } = useParams();
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await fetch(`http://localhost:5000/api/questions`);
      const data = await res.json();
      const q = data.find((q) => q.slug === slug);  
      setQuestion(q);
      setCode(q.starterCode); // Load starter code
    };

    fetchQuestion();
  }, [slug]);

const handleSubmit = async () => {
  setLoading(true);
  setOutput("");

  try {
    for (let test of question.testCases) {
      // Parse test.input into a valid JavaScript array
      const inputArray = JSON.parse(`[${test.input}]`);

      const fullCode = `
        const input = ${JSON.stringify(inputArray)};
        ${code}
        console.log(twoSum(input, ${test.input.split(",").pop()}));
      `;

      const res = await fetch("http://localhost:5000/api/code/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: fullCode }),
      });

      const result = await res.json();

      if (result.error) {
        setOutput(`❌ Error: ${result.error}`);
        break;
      }

      const expected = test.output.replace(/\s/g, "");
      const actual = String(result.output).replace(/\s/g, "");

      if (expected !== actual) {
        setOutput(`❌ Test Failed\nExpected: ${expected}\nGot: ${actual}`);
        break;
      } else {
        setOutput((prev) => prev + `✅ Test Passed: ${actual}\n`);
      }
    }
  } catch (err) {
    setOutput(`⚠️ Execution Failed: ${err.message}`);
  }

  setLoading(false);
};

  if (!question) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-700 mt-2">{question.description}</p>
      <p className="text-sm text-gray-600 mt-1">Tags: {question.tags.join(", ")}</p>

      <div className="mt-6">
        <CodeEditor initialCode={code} onCodeChange={setCode} />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Running..." : "Run Code"}
        </button>

        {output && (
          <pre className="mt-4 bg-gray-900 text-green-300 p-4 rounded overflow-x-auto whitespace-pre-wrap">
            {output}
          </pre>
        )}
      </div>
    </div>
  );
};

export default ProblemDetail;
