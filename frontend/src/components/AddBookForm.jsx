import { useState } from "react";
import { addBook } from "../api";

function AddBookForm({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) {
      alert("Please enter both title and author.");
      return;
    }

    try {
      const newBook = { title, author };
      await addBook(newBook);
      setTitle("");
      setAuthor("");
      onBookAdded();
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  return (
<form onSubmit={handleSubmit} className="mb-4">
  <div className="input-group">
    <input
      type="text"
      placeholder="Book Title"
      className="form-control"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      placeholder="Author"
      className="form-control"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
    <button type="submit" className="btn btn-success">
      ➕ Add Book
    </button>
  </div>
</form>

  );
}

export default AddBookForm;
