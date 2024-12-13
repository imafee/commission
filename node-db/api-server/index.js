import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { query, search } from "./local.js";
const { log, dir } = console;

const app = new Koa();
const router = new Router();
app.use(cors());
app.use(bodyParser());

router.post("/api/query", async (ctx, next) => {
  // log(ctx.request); // 问题点1: 打印出来的ctx.request对象中没有body
  // log(ctx.request.body); // 问题点2: 打印出来了ctx.request.body的值
  // log(Object.getOwnPropertyDescriptors(ctx.request)); // body属性的enumerable是true

  try {
    // 检查请求体是否存在和内容是否正确解析
    if (!ctx.request.body) {
      ctx.status = 400;
      ctx.body = { error: "Request body is missing or could not be parsed" };
    } else {
      // console.log("Parsed request body:", ctx.request.body);
      // 在这里处理正常的请求逻辑
      const { type } = ctx.request.body;
      ctx.body = await query(type);
    }
  } catch (error) {
    // 处理任何解析过程中可能抛出的错误
    console.error("Error parsing request body:", error);
    ctx.status = 500;
    ctx.body = {
      error: "Internal server error while parsing the request body",
    };
  }
});

router.post("/api/search", async (ctx, next) => {
  try {
    if (!ctx.request.body) {
      ctx.status = 400;
      ctx.body = { error: "Request body is missing or could not be parsed" };
    } else {
      const { title } = ctx.request.body;
      ctx.body = await search(title);
    }
  } catch (error) {
    // 处理任何解析过程中可能抛出的错误
    console.error("Error parsing request body:", error);
    ctx.status = 500;
    ctx.body = {
      error: "Internal server error while parsing the request body",
    };
  }
});

// 启动路由
app.use(router.routes());
// 设置响应头
app.use(router.allowedMethods());

// 监听端口
app.listen(3002, () => log("server is running at http://localhost:3002"));
