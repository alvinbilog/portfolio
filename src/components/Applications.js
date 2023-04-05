import React, { useState, useEffect } from 'react';
import '../scss/Applications.css';
import mySkills from '../data/data';
import Apps from '../components/Apps';

const Applications = () => {
  const [selected, setSelected] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);

  const filterSkills = () => {
    if (selected === 'frontend') {
      setFilteredSkills(mySkills.filter((skill) => skill.type === 'frontend'));
    } else if (selected === 'backend') {
      setFilteredSkills(mySkills.filter((skill) => skill.type === 'backend'));
    } else if (selected === 'other') {
      setFilteredSkills(mySkills.filter((skill) => skill.type === 'other'));
    } else {
      setFilteredSkills(mySkills.filter((skill) => skill.type !== ''));
    }
  };
  useEffect(() => {
    filterSkills();
  }, [selected]);

  return (
    <div className="Applications">
      <h1>Skills</h1>

      <ul className="container">
        <li
          key={mySkills.id}
          onClick={() => {
            setSelected('all');
          }}
          className={`${selected === 'all' && 'active'} mininav`}
        >
          ALL
        </li>
        <li
          key={mySkills.id}
          onClick={() => {
            setSelected('frontend');
          }}
          className={`${selected === 'frontend' && 'active'} mininav`}
        >
          FRONTEND
        </li>
        <li
          key={mySkills.id}
          onClick={() => {
            setSelected('backend');
          }}
          className={`${selected === 'backend' && 'active'} mininav`}
        >
          BACKEND
        </li>
        <li
          key={mySkills.id}
          onClick={() => {
            setSelected('other');
          }}
          className={`${selected === 'other' && 'active'} mininav`}
        >
          OTHER
        </li>
      </ul>

      <div className="list-container">
        <div className="list">
          {filteredSkills.map((skills) => (
            <Apps skills={skills} />
          ))}
        </div>
      </div>
      {/* <p>{app}</p> */}
    </div>
  );
};

export default Applications;
