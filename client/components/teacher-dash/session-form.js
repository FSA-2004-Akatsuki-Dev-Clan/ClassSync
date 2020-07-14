import React from 'react'

const SessionForm = ({
  title,
  details,
  url,
  handleChange,
  createSession,
  classes,
}) => (
  <form id="create-session" onSubmit={createSession}>
    {title && (
      <button type="submit" className={classes.buttonStyle}>
        Start Session
      </button>
    )}
    <div>
      <label htmlFor="title">
        Title:{' '}
        {title === '' && <span>(Enter a title for the new session)</span>}
      </label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(evt) => handleChange(evt.target)}
      />
      <label htmlFor="activityType">Activity Type:</label>
      <select name="activityType" onChange={(evt) => handleChange(evt.target)}>
        <option value="writing">Writing</option>
        <option value="reading">Reading</option>
        <option value="discussion">Discussion</option>
      </select>
      <label htmlFor="details">Details:</label>
      <input
        type="text"
        name="details"
        value={details}
        onChange={(evt) => handleChange(evt.target)}
      />
      <label htmlFor="url">Assignment URL:</label>
      <input
        type="text"
        name="url"
        value={url}
        onChange={(evt) => handleChange(evt.target)}
      />
    </div>
  </form>
)

export default SessionForm
