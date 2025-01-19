import { useState, useEffect, useContext } from "react";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import { Link, useParams } from "react-router-dom";
import MyContext from "../../../context/context";
import axios from "axios";

const QuestionPage = () => {
  const { courses } = useContext(MyContext);
  const [coursesState, setCoursesState] = useState();
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const initialTime = localStorage.getItem("timeLeft") || 15 * 60;
  const [timeLeft, setTimeLeft] = useState(Number(initialTime));
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (courses) {
      const course = courses.find((course) => course.id === id);
      if (course) {
        setCoursesState(course);
        setQuestions(course.quiz);
      }
    }
  }, [courses, id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          localStorage.setItem("timeLeft", prev - 1);
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("timeLeft");
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNavigation = (direction, currentQuestion) => {
    const newIndex = currentQuestion + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestion(newIndex);
      setSelectedOption(null);
    }

    if (newIndex === questions.length) {
      questions.map((question) => {
        if (question.chosenAnswer === question.correctAnswer) {
          setMarks(marks + 1);
        }
        //logic to update data in backend
        // if (courses) {
        //   courses.some(async (ele) => {
        //     if (ele.id === id) {
        //       const response = await axios.get(
        //         "http://localhost:5000/courses/" + ele.id,
        //         { quizMarks: marks }
        //       );
        //       const updatedCourse = response.data;
        //       updatedCourse.quizMarks = marks;
        //       const responseFroPatch = await axios.put(
        //         "http://localhost:5000/courses/" + ele.id,
        //         { updatedCourse }
        //       );
        //       console.log(responseFroPatch);
        //       return true;
        //     }
        //   });
        //   console.log("foreach executed");
        //   console.log("course executed", courses);
        //   console.log("marks ", marks);
        //   return;
        // }
      });
    }
  };

  // Check if questions[currentQuestion] exists
const currentQuestionData = questions?.length ? questions[currentQuestion] : {};

  return (
    <div>
      <StudentNavBar />
      <div
        className="bg-white flex flex-col items-center justify-center font-sans mr-5 ml-5"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <header className="w-full px-6 py-4 flex flex-col items-start text-gray-800">
          <div className="flex items-center space-x-2">
            <Link to="/student/quiz">
              <span className="text-2xl font-bold">←</span>
            </Link>
            <h1 className="text-xl font-bold">Assess Yourself</h1>
          </div>
          <p className="text-gray-500 mt-2">Complete the test now</p>
        </header>

        <div className="flex w-full mt-8">
          <div className="w-1/4 space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">
                {coursesState?.courseName || "Course Name"}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">
                Laravel
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">
                Time Left
              </h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">
                {formatTime(timeLeft)}
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Questions :
              </h3>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {Array.from({ length: questions.length }, (_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 rounded-md font-semibold ${questions[index]?.answered !== false ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 border border-gray-300 rounded-lg ml-8 relative flex flex-col justify-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 ">
                Question No {currentQuestion + 1}:
              </h2>
            </div>
            <p className="text-lg font-medium text-gray-900 mb-4">
              {currentQuestionData.question || "Loading question..."}
            </p>
            <div className="space-y-3 mb-4">
              {currentQuestionData.options?.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    required
                    name={`question-${currentQuestion}`}
                    className="w-5 h-5"
                    value={option}
                    checked={currentQuestionData.selectedOption == option}
                    onChange={() => {
                      currentQuestionData.selectedOption = option;
                      currentQuestionData.chosenAnswer = option;
                      currentQuestionData.answered = true;
                    }}
                  />
                  <span className="text-lg text-gray-800">{option}</span>
                </label>
              ))}
            </div>

            <div className="absolute top-2 right-2 flex space-x-6">
              <img
                src="/roundedleftarrow.png"
                alt="Previous Question"
                className="cursor-pointer w-8 h-8"
                onClick={() => handleNavigation(-1, currentQuestion)}
                style={{
                  visibility: currentQuestion === 0 ? "hidden" : "visible",
                }}
              />
              <img
                src="/roundedrightarrow.png"
                alt="Next Question"
                className="cursor-pointer w-8 h-8"
                onClick={() => handleNavigation(1, currentQuestion)}
                style={{
                  visibility:
                    currentQuestion === questions.length - 1
                      ? "hidden"
                      : "visible",
                }}
              />
            </div>

            <div className="absolute bottom-10 right-4">
              <button
                onClick={() => {
                  localStorage.removeItem("timeLeft");
                  handleNavigation(1, currentQuestion);
                }}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
