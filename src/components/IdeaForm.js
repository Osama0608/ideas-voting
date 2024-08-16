// src/components/IdeaForm.js
import React, { useState } from 'react';

const IdeaForm = ({ onAddIdea }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onAddIdea(title);
      setTitle('');  // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter idea title" 
      />
      <button type="submit">Add Idea</button>
    </form>
  );
};

export default IdeaForm;
