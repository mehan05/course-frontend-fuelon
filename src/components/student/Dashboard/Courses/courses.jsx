import React from "react";

const CourseCard = ({ title }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-3 w-[250px] bg-white shadow-lg flex flex-col items-start">
      {/* Centered image */}
      <div className="w-full flex justify-center">
        <img
          src="/courseprogress.png" // Replace with the exact image filename
          alt="Course"
          className="w-[120px] h-auto mt-2" // Smaller image size
        />
      </div>
      {/* Title with arrow inline */}
      <div className="mt-4 flex items-center">
        <h3 className="text-lg font-semibold text-gray-800 font-poppins">{title}</h3>
        <span className="ml-2 text-gray-600 text-xl font-bold">&#8594;</span>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Laravel For Beginners",
    },
    {
      title: "Laravel For Beginners",
    },
    {
      title: "Laravel For Beginners",
    },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-6 p-6">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} />
      ))}
    </div>
  );
};

export default Courses;
