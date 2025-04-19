import { Code2, BrainCog, Layers3 } from "lucide-react"; // Lucide icons

const questions = [
  {
    title: "Two Sum Problem",
    description: "Find two indices such that their elements sum up to a target.",
    tags: ["Array", "HashMap", "Easy"],
  },
  {
    title: "LRU Cache Design",
    description: "Implement a data structure that follows the LRU caching mechanism.",
    tags: ["Design", "HashMap", "LinkedList", "Medium"],
  },
  {
    title: "Reverse a Linked List",
    description: "Reverse the nodes of a singly linked list.",
    tags: ["Linked List", "Recursion", "Easy"],
  },
  {
    title: "Longest Palindromic Substring",
    description: "Find the longest palindromic substring in a given string.",
    tags: ["String", "Dynamic Programming", "Medium"],
  },
  {
    title: "Detect Cycle in a Graph",
    description: "Check if a cycle exists in a directed or undirected graph.",
    tags: ["Graph", "DFS", "Union-Find", "Medium"],
  },
  {
    title: "System Design: URL Shortener",
    description: "Design a scalable URL shortening service like bit.ly.",
    tags: ["System Design", "Database", "Scalability", "Hard"],
  },
];

const tagColors = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const InterviewQuestionsSection = () => (
  <section className="py-20 px-6 bg-white text-center">
    <h2 className="text-4xl font-bold mb-6 text-cyan-900">💡 Best Interview Questions</h2>
    <p className="text-lg text-cyan-800 mb-12 max-w-3xl mx-auto">
      Strengthen your coding interview prep with these must-solve problems across data structures,
      algorithms, and system design.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
      {questions.map((q, idx) => (
        <div key={idx} className="p-6 bg-cyan-50 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4 text-cyan-700">
            {idx < 2 ? (
              <Code2 className="w-5 h-5" />
            ) : idx < 4 ? (
              <BrainCog className="w-5 h-5" />
            ) : (
              <Layers3 className="w-5 h-5" />
            )}
            <h3 className="text-xl font-semibold">{q.title}</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">{q.description}</p>
          <div className="flex flex-wrap gap-2">
            {q.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full font-medium ${
                  tagColors[tag] || "bg-cyan-100 text-cyan-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InterviewQuestionsSection;
