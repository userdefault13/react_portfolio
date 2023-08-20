import React from 'react';

const TimelineCard = ({ title, date, description }) => {
    return (
        <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p className="mt-2">{description}</p>
        </div>
    );
};

export default TimelineCard;
