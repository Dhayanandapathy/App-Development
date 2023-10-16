import React, { useEffect } from 'react';
import celebrationSound from './celebration.mp3'; // Import your celebration sound

export default function Celebration({ onClose }) {
  // Play the celebration sound when the component mounts
  useEffect(() => {
    const audio = new Audio(celebrationSound);
    audio.play();

    // Automatically close the celebration after a few seconds
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div className="celebration">
      {/* Add your celebration animation and visuals here */}
      <p>Congratulations! Correct Answer</p>
    </div>
  );
}
