// src/components/IdeaList.js
import React, { useState } from 'react';
import IdeaItem from './IdeaItem';

const IdeaList = ({ initialIdeas }) => {
  const [ideas, setIdeas] = useState(initialIdeas);

  const handleVote = (id) => {
    const updatedIdeas = ideas.map(idea => 
      idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
    );
    updatedIdeas.sort((a, b) => b.votes - a.votes);
    setIdeas(updatedIdeas);
  };

  return (
    <div className="idea-list">
      {ideas.map(idea => (
        <IdeaItem key={idea.id} idea={idea} onVote={handleVote} />
      ))}
    </div>
  );
};

export default IdeaList;
