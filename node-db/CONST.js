export const BOOKLET_FIELDS = [
  "booklet_id", // 小册子id
  "title", // 小册名字
  "price", // 小册原价
  "discount_rate", // 折扣率 0-10
  "put_on_time", // 上架时间
  "summary", // 简介
  "buy_count", // 购买数量
  "cover_img", // 封面
  "commission", // 佣金
];
export const QUERY_TYPES = ["new", "hot", "discount"];
export const QUERY_FIELDS = [...BOOKLET_FIELDS];
export const SEARCH_FIELDS = [...BOOKLET_FIELDS];
