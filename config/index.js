export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxcd0fb73b982ff290",
    // 公众号APP_SECRET
    APP_SECRET: "c5f69f076d1637a0f514ef12de97bfa2",
    // 模板消息id
    TEMPLATE_ID: "TX0TX_pGLgpoE519NMNETe-oqG2W0jktZdjYRyvIoZ8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["of8nd6rdhxP2DYI9MhzUIvXemuI8","of8nd6hEk9SyseVJQjHocU9W11T0"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "河北",
    // 所在城市
    CITY: "石家庄",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "徐雯雯", "year": "2000", "date": "12-07"},
      {"name": "花花花", "year": "2001", "date": "02-07"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-11-29",
    // 结婚纪念日
    MARRY_DATE: "2025-11-29",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
