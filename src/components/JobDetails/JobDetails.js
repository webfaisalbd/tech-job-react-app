import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
  const { position } = useParams();
  return (
    <div>
      <p>hello {position}</p>
    </div>
  )
}

export default JobDetails