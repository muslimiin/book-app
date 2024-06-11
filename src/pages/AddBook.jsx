import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuth from '../hooks/withAuth';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/books', { title, author });
    navigate('/home');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title Book</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-2 border"
        />
        <label htmlFor="title">Title Book</label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mb-4 p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default withAuth(AddBook);
