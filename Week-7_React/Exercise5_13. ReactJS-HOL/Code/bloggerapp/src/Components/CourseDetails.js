import React from 'react';

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div className="card">
      <h2>🎓 Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <div className="item-title">{course.name}</div>
          <div className="item-sub">{course.date}</div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
