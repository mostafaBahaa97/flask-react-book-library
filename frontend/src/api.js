import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", 
});


export const fetchBooks = async () => {
  const response = await API.get("/api/books");
  return response.data;
};


export const addBook = async (book) => {
  const response = await API.post("/api/books", book);
  return response.data;
};


export const updateBook = async (id, updatedBook) => {
  const response = await API.put(`/api/books/${id}`, updatedBook);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await API.delete(`/api/books/${id}`);
  return response.data;
};
