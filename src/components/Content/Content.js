import React from 'react'
import skills from '../../data/skills.json'
import {
  calculateExperienceTimeInMonths,
  getExperienceTime
} from '../../helpers'

export const Content = ({ title }) => {
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
      <div className="Skills-wrapper">
        {skillsOrderedByExperienceTime.map(({ name, startDate, endDate }) => {
          return (
            <div key={name} className="Skills">
              <h5>{name}</h5>
              <p>{getExperienceTime(startDate, endDate)}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
