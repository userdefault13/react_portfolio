import React, { useState } from 'react';

const SkillCard = ({ skillName, imageSrc, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
        className={`bg-white p-4 rounded shadow cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={toggleFlip}
        >
        <div className="front">
            <img src={imageSrc} alt={skillName} className="w-12 h-12 mx-auto" />
        </div>
        <div className="back">
            <h4 className="text-lg font-semibold mb-2">{skillName}</h4>
            <p>{description}</p>
        </div>
        </div>
    );
};

export default SkillCard;
