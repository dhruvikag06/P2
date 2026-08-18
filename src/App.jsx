import React from "react";
import Student from "./Component/Student";

function App() {
  return (
    <div className="text-center mt-10 bg-green-500">
      <h1>Student Details</h1>

      <Student name="Rahul Kumar" rollNo="101" course="BCA" marks="85%" />

      <Student name="Priya Singh" rollNo="102" course="BCA" marks="92%" />

      <Student name="Amit Sharma" rollNo="103" course="BCA" marks="78%" />
    </div>
  );
}

export default App;
