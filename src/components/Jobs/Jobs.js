import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom';

import jobs from '../../data/data';

const Jobs = () => {
  const [jobsData, setJobsData] = useState(jobs);
  const [searchText, setSearchText] = useState('');
  // console.log(searchText);

  // filter By Job
  const filterByJobNature = (e) => {
    const filterData = e.target.value;
    // console.log(filterData)
    const filteredOutput = jobs.filter((job) => {
      return (job.contract === filterData);
    })
    // console.log(filteredOutput);
    if(filterData === 'Filter job by'){
      setJobsData(jobs);
    }else {
      // console.log("array:",filteredOutput)
      setJobsData(filteredOutput);
    }
  }


  return (
    <div className='jobs_body'>
      <div className="jobs_container">
        {/* search box  */}
        <div className="search_box">
          {/* search by job title, company */}
          <div className="search_item">
            <span><BiSearch /></span>
            <input type="text" name="" id="" onChange={(e)=> setSearchText(e.target.value)} placeholder='Search by Job title, companies' />
          </div>
          <div className="search_item2">
            <span><GoLocation /></span>
            <input type="text" name="" id="" placeholder='Search by Job location' />
            <button className='btn'>Search</button>
          </div>
          {/* filter by job type: remote/full time */}
          <div className="search_item3">
            <select name="" id="" onChange={filterByJobNature}>
              <option value="Filter job by">Filter job by</option>
              <option value="Freelance">Freelance</option>
              <option value="Remote">Remote</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
        {/* search output  */}

        <section className='job_output'>
          <div className="job_output_box">
            {
              jobsData.filter((jobData)=> {
                return jobData.position.toLowerCase().includes(searchText) || jobData.company.toLowerCase().includes(searchText);
              })
              .map((jobData, i) => (
                <div key={i} className="job_output_item">
                  <img src={jobData.logo} alt="" />
                  <p className='postedAt'>{jobData.postedAt}</p>
                  <Link to={jobData.position}><h3 className='position'>{jobData.position}</h3></Link>
                  <p className='company'>{jobData.company}</p>
                  <p className='location'>Location: <span className='location_details'>{jobData.location}</span></p>
                </div>
              ))
            }
          </div>
        </section>

      </div>
    </div>
  )
}

export default Jobs