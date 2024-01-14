import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [notelist, setNoteList] = useState([]);

  const handleChange = () => {
    if (note !== "") {
      setNoteList((prevList) => [...prevList, { id: Date.now(), text: note }]);
      setNote("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 font-sans">
      <div className="p-10 text-center text-3xl font-black text-red-600 sm:text-3xl md:text-4xl">
        The CheckList
      </div>
      <div className="flex justify-center items-center w-full space-x-4">
        <input
          className=" placeholder:text-center px-3 py-2 text-xl from-stone-900 font-mono font-bold w-1/2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Write your note/reminder"
          value={note}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="border border-black p-2 bg-sky-600 text-white hover:bg-blue-950 rounded focus:outline-none"
          type="button"
          onClick={handleChange}
        >
          Create Note
        </button>
      </div>
      <div className="notelist mt-10 overflow-hidden">
        <ul className="">
          {notelist.map((msg) => (
            <div className="mx-auto bg-orange-600 rounded-xl rounded-br-xl max-w-[500px]">
            <li
              className="break-words mx-auto text-2xl text-slate-200 mt-4 mb-2 p-4"
              key={msg.id}
            >
              {msg.text}
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
