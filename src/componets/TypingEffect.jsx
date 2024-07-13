import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 50); 
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return <p className='sec-cont'>{displayedText}</p>;
};

export default TypingEffect;
