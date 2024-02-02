import { args } from "./juejin-arg.js";
import { fetchData } from "./juejin-fetch.js";
import { writeSheet } from "./excel.js";
import { BOOKLET_FIELDS } from "../CONST.js";

const { log } = console;

(async () => {
  try {
    let dataList, records;
    dataList = await fetchData(...args);
    records =
      dataList?.map((book) => BOOKLET_FIELDS.map((field) => book[field])) || [];
    await writeSheet("db_juejin.xlsx", records);
  } catch (error) {
    log("发生错误:\n", error);
  }
})();
