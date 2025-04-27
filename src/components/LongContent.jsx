// src/components/LongContent.jsx
import React from 'react';

const LongContent = () => (
  <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
    {Array.from({ length: 100 }).map((_, i) => (
      <p key={i}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl sit amet
        consectetur consequat, nisl nunc consectetur nisi, euismod aliquam nunc nisl eu
        lectus. Integer sit amet purus nec elit ullamcorper ultrices. (paragraph {i + 1})
      </p>
    ))}
  </div>
);

export default LongContent;
