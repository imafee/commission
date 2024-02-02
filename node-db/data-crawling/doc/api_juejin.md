# 接口和数据结构

## api.juejin.cn/booklet_api/v1/booklet/listbycategory

`api.juejin.cn/booklet_api/v1/booklet/listbycategory?aid=2608&uuid=7236932435564824098&spider=0`

### query

- aid，？
- uuid，用户或设备唯一 id
- spider，0 表示非爬虫

### request

```js
{
  "category_id":"0",// 课程分类: 0全部,6809637767543259144前端
  "cursor":"0",// 条目开始位置
  "limit":20,  // 条目的数量
  "sort":10, // 结果的排序: 10全部，7价格降序，8价格升序，1最新，7热销
  "is_vip":0, // 是否为会员
  "coupon_id": "", // 优惠券id
}
```

### response

shell

```js
{
  "err_msg":'success',
  "err_no":0,
  "count":0,
  "cursor":'20', // 下一轮条目开始位置
  "has_more":true, // 还有下一页吗
  "data": Booklet[], // 数据
}
```

Booklet 小册子

```js
{
  base_info:
  {
    id: 0,
    booklet_id: '7294082310658326565', // 小册id，课程id
    title: 'React 通关秘籍', // 课程标题
    price: 8990, // 原价
    category_id: '6809637767543259144',
    status: 1,
    user_id: '2788017216685118',
    verify_status: 4,
    summary: '从组件库到源码，全面掌握 React 技术栈', // 简介
    cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4fd74219300049f58bcedde5230300be~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1300&h=1820&s=230179&e=jpg&b=ed7a91', // 封面图片
    section_count: 60, // 章节数量
    section_ids: '7294984325995593738|7294082070677028874|7295617117938778149|7298292751051784230', // 章节id集合
    is_finished: 0, // 是否完稿
    ctime: 1705479923,
    mtime: 1706796663,
    put_on_time: 1706691531,
    pull_off_time: -62135596800,
    finished_time: -62135596800,
    recycle_bin_time: -62135596800,
    verify_time: -62135596800,
    submit_time: 1706796663,
    top_time: 1706691541,
    wechat_group_img: '',
    wechat_group_desc: '',
    wechat_group_signal: '',
    read_time: 34755,
    buy_count: 1685, // 已购买数量
    course_type: 1, // 课程类型，？
    background_img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fe91fe2e3e145f9842f9f358f867661~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1125&h=723&s=122445&e=jpg&b=cd6378', // 背景图
    is_distribution: 1,
    distribution_img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2c66f9e6a3145e6945f49e83828e977~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1080&h=1920&s=474738&e=jpg&b=ea748b', // 经销图，分销图？
    commission: 1798, // 佣金，分？
    can_vip_borrow: false // 会员可否借阅
  },
  // 折扣事件
  event_discount:{
    id: 705,
    desc: '上新6折', // 折扣描述
    booklet_id: '7294082310658326565',
    discount_rate: 6, // 折扣率
    status: 0,
    start_time: 1706688000,
    end_time: 1707321540,
    ctime: 1706514105,
    mtime: 1706514105,
    event_type: 1, // 事件类型，？
    discount_info: '', // 折扣信息
    event_name: '', // 事件名称
    show_label: '早鸟优惠价' // 活动标签
  }
}
```
