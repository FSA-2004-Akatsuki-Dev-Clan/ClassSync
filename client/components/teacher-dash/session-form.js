import React from 'react'

const SessionForm = ({title, details, url, handleChange}) => (
  <div>
    <label htmlFor="title">Title:</label>
    <input
      type="text"
      name="title"
      value={title}
      onChange={evt => handleChange(evt.target)}
    />
    <label htmlFor="activityType">Activity Type:</label>
    <select name="activityType" onChange={evt => handleChange(evt.target)}>
      <option value="discussion">Discussion</option>
      <option value="writing">Writing</option>
      <option value="reading">Reading</option>
    </select>
    <label htmlFor="details">Details:</label>
    <input
      type="text"
      name="details"
      value={details}
      onChange={evt => handleChange(evt.target)}
    />
    <label htmlFor="url">Assignment URL:</label>
    <input
      type="text"
      name="url"
      value={url}
      onChange={evt => handleChange(evt.target)}
    />
  </div>
)

export default SessionForm
