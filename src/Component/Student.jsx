import React from "react";

function Student(props) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-500 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-5">
        Student Information
      </h2>

      <div className="bg-white rounded-lg p-4 space-y-3 text-gray-800">
        <p>
          <strong className="text-yellow-600">Name:</strong> {props.name}
        </p>

        <p>
          <strong className="text-yellow-600">Roll No:</strong> {props.rollNo}
        </p>

        <p>
          <strong className="text-yellow-600">Course:</strong> {props.course}
        </p>

        <p>
          <strong className="text-yellow-600">Marks:</strong> {props.marks}
        </p>
      </div>
    </div>
  );
}

export default Student;
