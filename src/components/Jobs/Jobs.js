import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go'

const Jobs = () => {
  return (
    <div className='jobs_body'>
       <div className="jobs_container">
        {/* search box  */}
          <div className="search_box">
              <div className="search_item">
                <span><BiSearch /></span>
                <input type="text" name="" id="" placeholder='Search by Job title, companies' />
              </div>
              <div className="search_item2">
                <span><GoLocation /></span>
                <input type="text" name="" id="" placeholder='Search by Job location' />
                <button className='btn'>Search</button>
              </div>
              <div className="search_item3">
                <select name="" id="">
                  <option>Filter job by</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="remote">Remote</option>
                  <option value="part-time">Part Time</option>
                  <option value="full-time">Full Time</option>
                  <option value="full-time">Contract</option>
                </select>
              </div>
          </div>
          {/* search output  */}

          <section className='job_output'>

          </section>

       </div>
    </div>
  )
}

export default Jobs