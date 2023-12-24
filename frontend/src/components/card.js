// Card.js

import React from 'react';

const Card = ({ title, children,maxWidth }) => {
  return (
    <div style={{ ...styles.card, maxWidth }}>
      <div style={styles.header}>{title}</div>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '16px',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
  },
  content: {
    // You can add additional styling for the content area if needed.
  },
};

export default Card;
