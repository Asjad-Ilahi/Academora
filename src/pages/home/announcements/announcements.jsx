import React from 'react'
import './announcements.css'
import Comsats from '../../../assets/ComsatsUniversity.svg'
import Nust from '../../../assets/NUSTuniversity.svg'

export function Announcements() {
  const announcements = [
    {
      university: "NUST University",
      title: "Admission",
      status: "Open",
      image: Nust, // Imported image
      date: "27-11-24"
    },
    {
      university: "COMSATS University",
      title: "Admission",
      status: "Open",
      image: Comsats, // Imported image
      date: "19-12-24"
    }
  ]

  return (
    <section className="announcements-section">
      <h2 className="section-title">
        Announcements 
        <span className="emoji">🎉</span>
      </h2>
      <div className="announcements-grid">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <div className="announcement-image-container">
              <img 
                src={announcement.image} 
                alt={announcement.university}
                className="announcement-image"
              />
              <div className="announcement-overlay"></div> {/* Dark overlay */}
            </div>
            <div className="announcement-content">
              <h3>{announcement.university}</h3>
              <p>
                {announcement.title}
                <span className="status">{announcement.status}</span>
              </p>
              <p className="date">Last Date: {announcement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
