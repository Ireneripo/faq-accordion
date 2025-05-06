import React from "react";
import Question from "./components/Question/Question";

const questions = [
  {
    id: 1,
    question: "How long does the battery last on a full charge?",
    answer:
      "The headphones offer up to 30 hours of battery life with noise-cancellation on, and up to 40 hours with it off.",
  },
  {
    id: 2,
    question: "Can I use the headphones while they are charging?",
    answer:
      "Yes, you can use the headphones while charging via the USB-C cable, but charging may be slower during use.",
  },
  {
    id: 3,
    question: "Are the headphones compatible with voice assistants?",
    answer:
      "Yes, they support Google Assistant, Amazon Alexa, and Siri for hands-free control.",
  },
  {
    id: 4,
    question: "Do the headphones support Bluetooth multipoint connection?",
    answer:
      "Yes, you can connect the headphones to two devices simultaneously and switch between them seamlessly.",
  },
  {
    id: 5,
    question: "Is there a wired mode available?",
    answer:
      "Absolutely. A 3.5mm audio cable is included so you can use the headphones in wired mode when needed.",
  },
];

function App() {
  return (
    <>
      <h1 className="text-center text-4xl my-8 font-bold">
        Project 2: FAQ/Accordion
      </h1>
      <div className="bg-blue-700 p-5 max-w-2xl m-auto mb-10 rounded-xl shadow-lg shadow-gray-800">
        <p className="text-white text-3xl font-bold text-center">
          Frequently Asked Questions
        </p>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            id={question.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
