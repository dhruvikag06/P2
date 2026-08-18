import React from "react";

function Student(props) {
  return (
    <div className="text-center mt-10 bg-yellow-500 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-white">Student Information</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Roll No:</strong> {props.rollNo}
      </p>
      <p>
        <strong>Course:</strong> {props.course}
      </p>
      <p>
        <strong>Marks:</strong> {props.marks}
      </p>
    </div>
  );
}

export default Student;
