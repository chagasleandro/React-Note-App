import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "11/12/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "11/12/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "11/12/2022"
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "12/12/2022"
    }
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
