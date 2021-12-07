import React from 'react'

export const Header = ({
  title,
  name,
  profession,
  websiteUrl = '',
  profileImg = { src: '', alt: '' },
  experienceTime
}) => {
  return (
    <header aria-label="header" className="Header">
      <div className="Avatar-wrapper">
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <img
            className="Profile"
            src={profileImg.src || ''}
            alt={profileImg.alt || ''}
          />
        </a>
        <div className="Total-xp-wrapper">
          <h5>Total Experience</h5>
          <span>{experienceTime}</span>
        </div>
      </div>
      <div className="Titles-wrapper">
        <h2>
          {name} - {profession}
        </h2>
        <h1>{title}</h1>
      </div>
    </header>
  )
}
