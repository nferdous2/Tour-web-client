import React, { useEffect, useState } from 'react';
import Suggestion from '../Suggestion/Suggestion';

const Suggestions = () => {
    const [suggestions, setSuggesiton] = useState([])
    useEffect(() => {
        fetch('./places.JSON')
            .then(res => res.json())
            .then(data => setSuggesiton(data));
    }, [])
    return (

        <div id="suggest ">
            <h2 className="text-primary m-3 text-center">You can see the places below once</h2>
            <div className="suggest-container album">
                {
                    suggestions.map(suggestion => <Suggestion

                        suggestion={suggestion}
                    ></Suggestion>)
                }
            </div>
        </div>
    );
};

export default Suggestions;