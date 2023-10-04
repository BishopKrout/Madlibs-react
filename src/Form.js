import React, { useState } from 'react';


function Form({ onSubmit }) {
    const [storyChoice, setStoryChoice] = useState('1'); 
    const [adjective, setAdjective] = useState('');
    const [noun, setNoun] = useState('');
    const [verb, setVerb] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ storyChoice, adjective, noun, verb });
    }

    return (
      <form onSubmit={handleFormSubmit}>
        <select value={storyChoice} onChange={(e) => setStoryChoice(e.target.value)}>
        <option value="1">Story 1</option>
        <option value="2">Story 2</option>
        <option value="3">Story 3</option>
      </select>

        <input
        placeholder="Noun"
        value={noun}
        onChange={(e) => setNoun(e.target.value)}
        required
        />
        <input 
        placeholder="Verb"
        value={verb}
        onChange={(e) => setVerb(e.target.value)}
        required
        />
        <input 
        placeholder="Adjective"
        value={adjective}
        onChange={(e) => setAdjective(e.target.value)}
        required
        />
        <button type="submit">Generate Story</button>
      </form>
    );
}

export default Form;