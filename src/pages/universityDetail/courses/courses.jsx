import React from 'react';
import './Courses.css';

const CourseCard = ({ title, icon, rank }) => (
  <div className="course-card">
    <div className="course-icon">{icon}</div>
    <div className="course-info">
      <h3>{title}</h3>
      <p>Subject Wise Rank: {rank}</p>
    </div>
  </div>
);

export default function Courses() {
  const coursesData = [
    { title: "Software Engineering", icon: "💻", rank: "302" },
    { title: "Electric Engineering", icon: "⚡", rank: "302" },
    { title: "Psychology", icon: "🧠", rank: "302" },
    { title: "Mechanical Engineering", icon: "⚙️", rank: "302" },
  ];

  return (
    <div className="courses">
      <h2>Courses</h2>
      <div className="courses-description">
        <div className="description-bar"></div>
        <p>
          At COMSATS, we offer a wide range of courses designed to empower students with the skills and knowledge needed for success in their chosen fields. Each course is tailored to meet industry standards, with opportunities for practical learning, research, and innovation. Whether you're pursuing undergraduate, graduate, or professional studies, COMSATS provides a dynamic and inclusive environment to help you achieve your academic and career goals.
        </p>
      </div>
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            icon={course.icon}
            rank={course.rank}
          />
        ))}
      </div>
    </div>
  );
}
