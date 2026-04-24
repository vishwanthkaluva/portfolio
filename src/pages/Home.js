import React from "react";
import profile from "../Profile.jpg"; // ✅ make sure file name matches exactly

function Home() {
  return (
    <div className="container">
      <h1>Vishwanth Kaluva</h1>

      {/* Profile Image */}
      <img
        src={profile}
        alt="profile"
        className="profile-img"
      />

      {/* About Me */}
      <h2>About Me</h2>
      <p>
        I am a passionate Computer Science student interested in building
        modern web applications using technologies like React, Node.js, and Java.
      </p>

      {/* Research Interests */}
      <h2>Research Interests</h2>
      <p>
        Web Development, Artificial Intelligence, Data Science
      </p>

      {/* Personal Details */}
      <h2>Personal Details</h2>
      <p>📞 Phone: 9182763915</p>
      <p>📧 Email: vishwanthkaluva@email.com</p>
      <p>🏫 College Email: se23ucse195@mahindrauniversity.edu.in</p>

      {/* Skills */}
      <h2>Skills</h2>
      <ul>
        <li>React JS</li>
        <li>Java</li>
        <li>Python</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  );
}

export default Home;