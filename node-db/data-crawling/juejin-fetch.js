import fetch from "node-fetch";
import { sleep } from "./util.js";
import { BOOKLET_FIELDS } from "../CONST.js";

const { log } = console;

const body = {
  category_id: "0",
  cursor: "0", // 条目开始位置
  limit: 20, // 条目的数量
  sort: 10, // 结果的排序: 10全部，7价格降序，8价格升序，1最新，7热销
  coupon_id: "", // 优惠券id
};

// 获得最终数据
export async function fetchData(url, options) {
  let courseList = [];
  let hasMore = true;

  // 按页请求
  while (hasMore) {
    options.body = JSON.stringify(body);
    const response = await fetch(url, options);
    const result = await response.json();
    hasMore = result.has_more;
    log("请求掘金接口中，cursor:", body.cursor);
    body.cursor = result.cursor;
    courseList = courseList.concat(cleanData(result));

    await sleep(2000);
    // if (courseList.length >= 40) break; // !debug
  }

  log("课程总量:", courseList.length);
  return courseList;
}

// 处理本页数据：筛选字段和转换格式
function cleanData(data) {
  let courses = [];

  for (let info of data.data) {
    const { base_info, event_discount } = info; // 接口文档见 ./doc/api-juejin.md
    let course = {};

    for (const field of BOOKLET_FIELDS) {
      // 折扣
      if (field === "discount_rate") {
        course[field] = event_discount?.discount_rate || 10;
        continue;
      }
      course[field] = base_info[field];
    }
    courses.push(course);
  }

  return courses;
}
