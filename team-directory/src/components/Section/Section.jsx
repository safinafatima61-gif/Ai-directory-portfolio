import React from 'react';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="main-section">
      <h2 className="section-heading">{title}</h2>
      <div className="content">
        {children}
      </div>
    </section>
  );
};

export default Section;