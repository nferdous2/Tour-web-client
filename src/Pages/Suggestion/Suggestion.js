import React from 'react';
import './Suggestion.css'
const Suggestion = ({ suggestion }) => {
    const { img, name } = suggestion;

    return (
        <div className="frame">
            <div>
                <div className="photo">
                    <img src={img} alt="" className="w-100" />
                </div>

                <div className="detail">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};
export default Suggestion;