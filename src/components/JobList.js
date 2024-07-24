// src/components/JobList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs');
        setJobs(response.data.results);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
