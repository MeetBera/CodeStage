import React from "react";
import {
  BadgeCheck,
  Brain,
  Code2,
  MessageCircle,
  Timer,
  UserCheck,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      "Real-Time Collaborative Coding",
      "Secure Code Execution",
      "Integrated Communication",
    ],
  },
  {
    name: "Plus",
    price: 25,
    features: [
      "Real-Time Collaborative Coding",
      "Secure Code Execution",
      "Integrated Communication",
      "Access to Question Bank",
      "Timed Interviews",
    ],
  },
  {
    name: "Pro",
    price: 50,
    features: [
      "Real-Time Collaborative Coding",
      "Secure Code Execution",
      "Integrated Communication",
      "Access to Question Bank",
      "Timed Interviews",
      "Scoring & Feedback",
      "Admin Panel Access",
    ],
  },
];

const icons = {
  "Real-Time Collaborative Coding": <Code2 className="w-5 h-5 text-cyan-600" />,
  "Secure Code Execution": <BadgeCheck className="w-5 h-5 text-cyan-600" />,
  "Integrated Communication": <MessageCircle className="w-5 h-5 text-cyan-600" />,
  "Access to Question Bank": <Brain className="w-5 h-5 text-cyan-600" />,
  "Timed Interviews": <Timer className="w-5 h-5 text-cyan-600" />,
  "Scoring & Feedback": <UserCheck className="w-5 h-5 text-cyan-600" />,
  "Admin Panel Access": <UserCheck className="w-5 h-5 text-cyan-600" />,
  "All Free Features": <BadgeCheck className="w-5 h-5 text-cyan-600" />,
  "All Plus Features": <BadgeCheck className="w-5 h-5 text-cyan-600" />,
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-cyan-50 p-8">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-12">
        CodeStage Pricing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-2xl shadow-cyan-200 shadow-lg p-6 flex flex-col items-center hover:shadow-cyan-300 transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2 text-cyan-700">
              {plan.name}
            </h2>
            <p className="text-3xl font-bold mb-4 text-cyan-900">
              ${plan.price}
              <span className="text-base font-medium text-cyan-600">/mo</span>
            </p>
            <ul className="space-y-3 w-full">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-cyan-800"
                >
                  {icons[feature]}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
