import React from 'react'
import {
  calculateExperienceTimeInMonths,
  getExperienceTime
} from '../../helpers'

export const Content = ({ title, skills = [] }) => {
  const skillsOrderedByExperienceTime = skills
    .map((skill) => {
      return {
        ...skill,
        experienceTimeInMonths: calculateExperienceTimeInMonths(
          skill.startDate,
          skill.endDate
        )
      }
    })
    .sort((a, b) => {
      return b.experienceTimeInMonths - a.experienceTimeInMonths
    })

  return (
    <section>
      <h3>{title}</h3>
      <div aria-label="skills-wrapper" className="Skills-wrapper">
        {skillsOrderedByExperienceTime.map(({ name, startDate, endDate }) => {
          return (
            <div aria-label="skill-card" key={name} className="Skills">
              <h5>{name}</h5>
              <p>{getExperienceTime(startDate, endDate)}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
