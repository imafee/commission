import xlsx from "node-xlsx";
import fs from "node:fs";
const { log } = console;

export async function writeSheet(
  filename = "default", // 文件名
  data = [] // 表记录
) {
  // 创建工作簿和记录;
  const buffer = xlsx.build([
    {
      name: getSheetName(),
      data,
    },
  ]);
  await write2File(buffer, filename);
}
async function write2File(buffer, filename) {
  log("文件写入中...");
  fs.writeFile(filename, buffer, function (err) {
    if (err) throw err;
    log("文件写入完成!");
  });
}

function getSheetName() {
  const date = new Date();
  return [
    date.getFullYear(),
    "".padStart.call(date.getMonth() + 1, 2, 0),
    "".padStart.call(date.getDate(), 2, 0),
    "".padStart.call(date.getHours(), 2, 0),
    "".padStart.call(date.getMinutes(), 2, 0),
  ].join("");
}
