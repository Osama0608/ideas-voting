// src/components/IdeaItem.js
import React from 'react';

const IdeaItem = ({ idea, onVote }) => {
  return (
    <div className="idea-item">
      <h3>{idea.title}</h3>
      <p>Votes: {idea.votes}</p>
      <button onClick={() => onVote(idea.id)}>Vote</button>
    </div>
  );
};

export default IdeaItem;
