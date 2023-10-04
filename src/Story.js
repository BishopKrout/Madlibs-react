import React from "react";

function Story({ data, onRestart }) {
    let storyText = '';
    
    switch(data.storyChoice) {
        case '1':
            storyText = `In a quiet town, a ${data.adjective} cat named ${data.noun} had a peculiar habit. Every morning, it would ${data.verb} at the town square, leaving everyone in awe.`;
            break;
        case '2':
            storyText = `The ${data.adjective} pirate ${data.noun} was searching for a treasure. But instead of gold, he found a map to ${data.verb} the seven seas.`;
            break;
        case '3':
            storyText = `In a distant galaxy, a ${data.adjective} alien named ${data.noun} wanted nothing more than to ${data.verb} with the stars.`;
            break;
        default:
            storyText = '';
    }

    return (
        <div>
            <p>
                {storyText}  {/* Render the storyText here */}
            </p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}

export default Story;