// 拷贝自dev-tool的netwrok面板相应接口
// 改为export const args输出
export const args = [
  "https://api.juejin.cn/booklet_api/v1/booklet/listbycategory?aid=2608&uuid=7331319368884848137&spider=0",
  {
    headers: {
      accept: "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-secsdk-csrf-token":
        "000100000001be5b01b85c58d57589bf2762ed41709ffa2157d326768721245572e21c8807b417b0534bb349943d",
      cookie:
        "_tea_utm_cache_2608=undefined; csrf_session_id=86ee5f27c716604399acdee9e3915c0e; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227331319368884848137%2522%252C%2522user_unique_id%2522%253A%25227331319368884848137%2522%252C%2522timestamp%2522%253A1706955823104%257D; msToken=0YdRZHls0aM32y4qyr57oLyFIl6OcxMOBYzLGV1il-uepaXpNtzVkQjHkhnQLllSCNAOngV8wE9qjHV1YjVcCl-J2AR72VdZqz9ZeNIOYGCYKcwDXxj5VxulR_0clww=",
      Referer: "https://juejin.cn/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"category_id":"0","cursor":"0","sort":10,"is_vip":0,"limit":20}',
    method: "POST",
  },
];
