import React from 'react'
import { useParams } from 'react-router-dom'

import jobs from '../../data/data';
// console.log(jobs);

const JobDetails = () => {
  const { position } = useParams();

  const filteredJob = jobs.find((job) => {
    return job.position === position;
  })
  // console.log(filteredJob);

  return (
    <div className="jobs_body">
      <div className="jobs_details_body">

        <div className='job-details-first-box'>
          <h3>{filteredJob.company}</h3>
          <p className='company-site-btn'>Company Site</p>
        </div>

        <p className='margin-top-10 postedAt'>{filteredJob.postedAt} - {filteredJob.contract}</p>

        <div className='job-details-second-box'>
          <h3>{filteredJob.position}</h3>
          <p className='apply-btn'>Apply</p>
        </div>

        <p className='job-details-location'>{filteredJob.location}</p>

        <div className='job-details-third-box margin_top_bottom_20 job_details_text_style'>{filteredJob.desc}</div>

        <h3 className='margin_top_bottom_20'>Requirements</h3>

        <div className='job-details-fourth-box'>
          <p className='job_details_text_style'>{filteredJob.requirements.reqTitle}</p>
          <ul className='margin_top_bottom_20'>
            {
              filteredJob.requirements.reqItem.map((item, i) => {
                return <li key={i} className='list_style'>{item}</li>
              })
            }
          </ul>
        </div>

        <h3 className='margin_top_bottom_20'>What you will do?</h3>

        <div className='job-details-fifth-box'>
          <p className='job_details_text_style'>{filteredJob.responsibility.resTitle}</p>
          <ul className='margin_top_bottom_20'>
            {
              filteredJob.responsibility.resItem.map((item,i)=> {
                return <li key={i} className="list_style">{item}</li>
              })
            }
          </ul>
        </div>



      </div>
    </div>

  )
}

export default JobDetails