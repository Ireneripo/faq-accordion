import React from "react";

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
      <div className="bg-blue-800 p-5 max-w-2xl m-auto mb-10 rounded-xl">
        <p className="text-white text-3xl font-bold text-center">
          Frequently Asked Questions
        </p>
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              className="bg-white my-6 p-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold my-2">{question.question}</h2>
                <button className="border-3 border-blue-800 rounded-md bg-blue-200 px-2  cursor-pointer font-bold text-2xl text-blue-800 w-10 h-10">
                  +
                </button>
              </div>
              <p className="text-gray-600 text-lg">{question.answer}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
