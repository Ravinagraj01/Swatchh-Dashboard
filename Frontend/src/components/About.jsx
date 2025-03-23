import React from 'react';

function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">About Swachh Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p>
          Swachh Dashboard is designed to revolutionize cleanliness management by providing a platform for users to report trash locations. With AI-powered detection and real-time tracking, the platform ensures quick and efficient resolution of reported issues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <ul className="list-disc ml-8">
          <li>Users upload images of trash with location details.</li>
          <li>AI analyzes the image to confirm the presence of trash.</li>
          <li>A nearby worker is assigned to clean the area.</li>
          <li>Users receive reward points upon successful cleanup.</li>
          <li>Admins monitor reports and ensure timely action.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Future Goals</h2>
        <ul className="list-disc ml-8">
          <li>Expand to more cities and regions for broader impact.</li>
          <li>Integrate with municipal corporations for better coordination.</li>
          <li>Implement predictive analytics to identify trash-prone areas.</li>
          <li>Introduce community challenges to encourage cleanliness.</li>
          <li>Provide detailed reports and insights to stakeholders.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get Involved</h2>
        <p>
          Join us in making our surroundings cleaner. Report trash, contribute to the community, and earn rewards. Every small action counts!
        </p>
      </section>
    </div>
  );
}

export default About;
