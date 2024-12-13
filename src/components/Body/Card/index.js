import "./index.css";
import { Button, message } from "antd";

function Card({ course }) {
  const jumpCourse = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      message.info("当前链接不可用");
    }
  };

  return (
    <div
      className="card"
      onClick={() => {
        jumpCourse(course.shareUrl);
      }}
    >
      <div>
        <img
          alt="img"
          referrerPolicy="no-referrer"
          className="background"
          src={course.cover_img}
        />
      </div>
      <div className="content">
        <div className="info">
          <div className="title">{course.title}</div>
          <div className="author">{}</div>
          <div className="people">{course.buy_count}人已学习</div>
        </div>
        <div className="action">
          <div className="action-left">
            <div className="price">
              <div className="promotion">
                限时: ¥
                {(0.001 * course.price * course.discount_rate).toFixed(2)}
              </div>
              <div className="origin">
                原价: ¥{(0.01 * course.price).toFixed(2)}
              </div>
            </div>
            <div className="return">
              成功购买后可得红包¥
              {(0.01 * course.commission).toFixed(2)}
            </div>
          </div>
          <div className="aciton-right">
            <Button className="button" shape="round" type="primary">
              立即购买
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
