import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import withAuth from "../hooks/withAuth";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:3000/books/${id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/books/${id}`, { title, author });
    navigate("/home");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-2 border"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mb-4 p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default withAuth(EditBook);
