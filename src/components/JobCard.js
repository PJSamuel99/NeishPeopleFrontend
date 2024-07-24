// src/components/JobCard.js

import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.macro_address}</p>
      <p>{job.salary}</p>
      <a href={job.public_url} target="_blank" rel="noopener noreferrer">
        View Job
      </a>
    </div>
  );
};

export default JobCard;
