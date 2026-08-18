import React from "react";
import Student from "./Component/Student";

function App() {
  return (
    <div className="min-h-screen bg-green-500 py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8 animate-bounce">
        Student Details
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <Student
            name="Rahul Kumar"
            rollNo="101"
            course="BCA"
            marks="85%"
          />
        </div>

        <div className="transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <Student
            name="Priya Singh"
            rollNo="102"
            course="BCA"
            marks="92%"
          />
        </div>

        <div className="transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <Student
            name="Amit Sharma"
            rollNo="103"
            course="BCA"
            marks="78%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
