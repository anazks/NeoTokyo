import React from 'react';
import './PriorityOne.css';
import person1 from '../../../Images/persons/Ajay.png'; // Replace with the actual path to the first image
import person2 from '../../../Images/persons/RoneyThomas.png'; // Replace with the actual path to the second image
import person3 from '../../../Images/persons/Julien.png'; // Replace with the actual path to the third image

function PriorityOne() {
  const team = [
    {
      name: 'Ajay Joy',
      position: 'CHIEF EXECUTIVE OFFICER',
      image: person1,
    },
    {
      name: 'Roney Thomas',
      position: 'CHIEF TECHNOLOGICAL OFFICER',
      image: person2,
    },
    {
      name: 'JULIAN PRASAD',
      position: 'RESEARCH & DEVELOPMENT HEAD',
      image: person3,
    },
  ];

  return (
    <div className="priority-one-container">
      <div className="header">
        <div>
             <h1 className="title">Priority One by Neo Tokyo</h1>
            <p className="subtitle">For the One's who want the best we offer</p>
        </div> 
        <div>
        </div>
      </div>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} className="person-image" />
            </div>
            <h3 className="person-name">{member.name}</h3>
            <p className="person-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriorityOne;
