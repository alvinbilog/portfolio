import React from 'react';
import '../scss/Apps.css';
import Fade from 'react-reveal/Fade';

const Apps = ({ skills }) => {
  return (
    <div className="Apps">
      <div className="container">
        <Fade top cascade className="Fade">
          <img
            src={`${skills.image}`}
            alt={skills.name}
            key={skills.id}
            width="100"
          />
        </Fade>
        <p>{skills.name}</p>
      </div>
    </div>
  );
};

export default Apps;
