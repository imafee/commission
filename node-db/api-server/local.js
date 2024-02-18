// 查询模块，适配任何的数据库
import xlsx from "node-xlsx";
import query1 from "./query.js";
import search1 from "./search.js";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 解析得到文档中的所有 sheet
const sheets = xlsx.parse(path.resolve(__dirname, "../", "db_juejin.xlsx"));
const { data } = sheets[0];
// console.log(name);
// console.log(data[0]);
// console.log(data[1]);

export const query = async (type) => await query1(type, data);
export const search = async (title) => await search1(title, data);
