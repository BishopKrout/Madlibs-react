import React, { useState} from "react";
import Form from './Form';
import Story from './Story';

function Madlib() {
    const [ words, setWords] = useState(null);

    const handleSubmit = (formData) => {
        setWords(formData);
    };

    const handleRestart = () => {
        setWords(null);
    };

    return (
        <div>
            {words ? <Story data={words} onRestart={handleRestart} /> : <Form onSubmit={handleSubmit} />}
        </div>
    );
}

export default Madlib;