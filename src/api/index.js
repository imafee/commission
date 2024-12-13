import { get, post } from "./server";

export const queryCourse = function (params) {
  return post("/api/query", params);
};

export const searchCourse = function (params) {
  return post("/api/search", params);
};
