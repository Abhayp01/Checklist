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
    <div className="min-h-screen  bg-gray-900">
      <div className="p-10 text-center text-3xl font-black text-red-600 sm:text-3xl md:text-4xl">
        The CheckList
      </div>
      <div className="flex justify-center items-center w-full space-x-4">
        <input
          className="w-[30%] shadow-white shadow-2xl place-content-center p-2 placeholder:text-center text-xl from-stone-900 font-bold border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Write your note"
          value={note}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="border-none shadow-inner shadow-indigo-500 hover:bg-indigo-700 bg-transparent text-white font-bold rounded-full py-2 px-4 focus:outline-none transition ease-in-out duration-300"
          type="button"
          onClick={handleChange}
        >
          Create Note
        </button>
      </div>
      <div className="notelist mt-10 overflow-hidden">
        <ul className="">
          {notelist.map((msg) => (
            <div className="mx-auto bg-gray-800 hover:border-white rounded-xl rounded-br-xl max-w-[500px]">
              <li
                className="break-words mx-auto text-xl font-medium text-slate-200 mt-4 mb-2 p-4"
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
