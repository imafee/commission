import { QUERY_FIELDS } from "../CONST.js";
import { sortBy } from "../util.js";

export default async function query(type, data) {
  let dt = [];
  for (const book of data) {
    dt.push(array2Object(QUERY_FIELDS, book));
  }
  if (type === "hot") return sortBy(dt, "buy_count", "desc");
  if (type === "new") return sortBy(dt, "put_on_time", "desc");
  if (type === "discount") return sortBy(dt, "discount_rate", "asce");
  return [];
}

function array2Object(keys, values) {
  let obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
