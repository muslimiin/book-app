import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import withAuth from "../hooks/withAuth";

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="p-6">
      <Link
        to="/add-book"
        className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
      >
        Add Book
      </Link>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-2">
              {book.title} by {book.author}
              <button
                onClick={() => navigate(`/edit-book/${book.id}`)}
                className="ml-2 text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                className="ml-2 text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
};

export default withAuth(Home);
