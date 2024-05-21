import React from "react";

export default function StudentList({ student }) {
  return (
    <div>
      <p>
        {student.firstName} {student.lastName}
      </p>
    </div>
  );
}
