import React from 'react'
import './features.css'

export function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Access All",
      subtitle: "Universities",
      description: "Connect with societies and communities in your university."
    },
    {
      icon: "💬",
      title: "Interactive",
      subtitle: "Q & A",
      description: "Ask and answer questions to engage with your university peers."
    },
    {
      icon: "🔔",
      title: "Stay",
      subtitle: "Updated",
      description: "Get the latest updates on university announcements and events."
    },
    {
      icon: "🤝",
      title: "Join",
      subtitle: "Communities",
      description: "Join communities across universities which help you grow."
    }
  ]

  return (
    <section className="features-section">
      <h2 className="features-title">Why <span className="highlight">Academora</span>?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">
              {feature.title}<br />
              <span className="feature-subtitle">{feature.subtitle}</span>
            </h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

