import React from "react";

function Question({ question, id }) {
  const [expandedId, setExpandedId] = React.useState(null);

  function toggleQuestion(id) {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <div
      key={id}
      className="bg-white my-6 p-4 shadow-lg shadow-gray-800"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold my-2">{question.question}</h2>
        <button
          className="border-3 border-blue-800 rounded-md bg-blue-200 px-2  cursor-pointer font-bold text-2xl text-blue-800 w-10 h-10"
          onClick={() => {
            toggleQuestion(question.id);
          }}
        >
          {expandedId === question.id ? "-" : "+"}
        </button>
      </div>
      {expandedId === question.id && (
        <p className="text-gray-600 text-lg">{question.answer}</p>
      )}
    </div>
  );
}

export default Question;
