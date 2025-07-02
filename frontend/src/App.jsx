import { useEffect, useState } from "react";
import { fetchBooks, deleteBook, updateBook } from "./api";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const loadBooks = () => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => console.error("Failed to fetch books:", err));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        loadBooks();
      } catch (err) {
        console.error("Failed to delete book:", err);
      }
    }
  };

  const handleUpdate = async (updatedBook) => {
    try {
      await updateBook(updatedBook.id, updatedBook);
      setEditingBook(null);
      loadBooks();
    } catch (err) {
      console.error("Failed to update book:", err);
    }
  };

  return (
   <div className="container mt-5">
  <h1 className="text-center mb-4">📚 My Book Library</h1>

  <AddBookForm onBookAdded={loadBooks} />

  
     {editingBook && (
    <EditBookForm book={editingBook} onSave={async (updated) => {
        await updateBook(updated.id, updated);
        setEditingBook(null);
        loadBooks();
        
      }}
      onCancel={() => setEditingBook(null)}
    />
  )}
  <div className="row">
    {books.map((book) => (
      <div className="col-md-6 col-lg-4 mb-4" key={book.id}>
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text text-muted">by {book.author}</p>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => setEditingBook(book)}
              >
                ✏️ Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(book.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

 
</div>

  );
}

export default App;
