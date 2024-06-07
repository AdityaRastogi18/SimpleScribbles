import { useState } from 'react';

// Will create it once I add learnings in project page

const StarRating = ({ initialValue = 0, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          className={`${
            value <= rating ? 'text-yellow-400' : 'text-gray-300'
          } text-2xl focus:outline-none`}
          onClick={() => handleClick(value)}
        >
          ⭐
        </button>
      ))}
    </div>
  );
};

export default StarRating;
