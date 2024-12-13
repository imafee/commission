// 网络模块
const DOMAIN_MAP = {
  development: "http://localhost:3002",
  production: "",
};
const ENV = process.env.NODE_ENV;

/**
 * @param {*} urlOpts,URL类的参数
 * @returns {Promise}
 */
export async function get(urlOpts) {
  const href = getHref(urlOpts);
  const request = new Request(href, {
    method: "GET",
  });
  return fetch(request);
}
/**
 * @param {String} urlOpts
 * @param {Object}
 * @param {*} options,URL类的参数
 * @returns {Promise}
 */
export async function post(urlOpts, data) {
  const href = getHref(urlOpts);
  const request = new Request(href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return fetch(request);
}
function getHref({
  protocol = "http:",
  hostname = "localhost",
  port = 80,
  pathname = "/",
  params = {},
  hash = "",
}) {
  // todo: 参数需要和post的参数option区别开来
  const href = new URL(`${protocol}//${hostname}:${port}`);
  href.pathname = pathname;
  Object.keys(params).forEach((key) => {
    href.searchParams.append(key, params[key]);
  });
  return href.toString();
}
