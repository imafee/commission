import { SEARCH_FIELDS } from "../CONST.js";
import { sortBy } from "../util.js";

export default async function search(title, data) {
  let dt = [];
  data.forEach((book) => {
    const obj = array2Object(SEARCH_FIELDS, book);
    if (obj.title.toLowerCase().includes(title.toLowerCase())) dt.push(obj);
  });
  return sortBy(dt, "put_on_time", "desc");
}

function array2Object(keys, values) {
  let obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
