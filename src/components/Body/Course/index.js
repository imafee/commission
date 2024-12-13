import "./index.css";
import { useState, useEffect } from "react";
import Card from "../Card";
import { queryCourse } from "../../../api/";

const list = ["最新", "最热", "活动"];
function Course() {
  const [focusIndex, setFocusIndex] = useState(0);
  const [courseList, setCourseList] = useState([]);
  const handleClick = async (index) => {
    setFocusIndex(index);
    refreshData(index + 1);
  };
  const refreshData = async (type = 1) => {
    const res = await queryCourse({
      type,
    });
    const allCourses = res.data;
    setCourseList(allCourses.slice(0, 10));
  };
  useEffect(() => {
    refreshData();
  }, []);
  return (
    <div>
      <div className="header-tags">
        {list.map((item, index) => (
          <div
            className={index === focusIndex ? "item item-focus" : "item"}
            onClick={() => handleClick(index)}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="courses">
        {courseList.map((item) => (
          <Card className="card" key={item.title} course={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Course;
