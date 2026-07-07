import React from 'react';
import { teamMembers } from './data/team';
import Section from './components/Section/Section';
import Card from './components/Card/Card';
import TeamMember from './components/TeamMember/TeamMember';
import './App.css';

function App() {
  // Task 5: Function defined at root for prop drilling demonstration
  const handleFollow = (memberName) => {
    console.log(`Fired follow for: ${memberName}`);
  };

  return (
    <div className="app-wrapper">
      <header className="app-main-header">
        <h1>Team Profile Directory</h1>
        <p>Vite + React Assignment 1</p>
      </header>

      {/* Render Section component with title */}
      <Section title="Engineering & Design Team">
        {teamMembers.map((member) => (
          /* Nesting TeamMember inside Card via children prop */
          <Card key={member.id} title="Profile Card">
            <TeamMember
              name={member.name}
              role={member.role}
              age={member.age}
              isAdmin={member.isAdmin}
              skills={member.skills}
              address={member.address}
              // Prop drilling: passed down to TeamMember
              onFollow={() => handleFollow(member.name)}
            />
          </Card>
        ))}
      </Section>
    </div>
  );
}

export default App;