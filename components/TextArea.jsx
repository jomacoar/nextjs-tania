'use client';
import React, { useState, useEffect } from 'react';

const TextareaWithCounter = ({
  className,
  placeholder,
  name,
  defaultValue,
  rows,
  cols,
  required,
}) => {
  const [text, setText] = useState(defaultValue || '');
  const maxWords = 70;

  // Sync with defaultValue changes (e.g., form reset)
  useEffect(() => {
    setText(defaultValue || '');
  }, [defaultValue]);

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  // Handle text change and enforce word limit
  const handleTextChange = (e) => {
    const newText = e.target.value;
    const newWordCount = newText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    // Only update text if within word limit
    if (newWordCount <= maxWords || newText.length < text.length) {
      setText(newText);
    }
  };

  return (
    <div>
      <textarea
        className={className}
        defaultValue={defaultValue}
        onChange={handleTextChange}
        placeholder={placeholder}
        name={name}
        rows={rows}
        cols={cols}
        required={required}
      />
      <p className="w-[90%] text-right text-xs text-secondary/40 mt-2">
        {wordCount}/{maxWords}
      </p>
    </div>
  );
};

export { TextareaWithCounter };
