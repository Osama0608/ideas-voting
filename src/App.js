// src/App.js
import React, { useState } from 'react';
import IdeaList from './components/IdeaList';
import IdeaForm from './components/IdeaForm';
import './styles.css';

const App = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Project Idea 1', votes: 20 },
    { id: 2, title: 'Project Idea 2', votes: 15 },
    { id: 3, title: 'Project Idea 3', votes: 25 },
  ]);

  const addIdea = (title) => {
    const newIdea = {
      id: ideas.length + 1,
      title,
      votes: 0
    };
    setIdeas(prevIdeas => [...prevIdeas, newIdea]);
  };

  return (
    <div className="app">
      <h1>Project Ideas Voting</h1>
      <IdeaForm onAddIdea={addIdea} />
      <IdeaList initialIdeas={ideas} />
    </div>
  );
};

export default App;
