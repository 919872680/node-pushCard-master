const port = 8088
const grant_type = 'client_credential'
const appid = 'wx2ce82b683549622b'
const secret = '34288abbfbd1df37e1e667d83df2fe77'
const openId = 'oaMTd6kgjrKpiee8zUIwk2k_sUp4'
// 彩虹皮接口
const chpUrl = 'https://api.shadiao.pro/chp'
// 模板id
const templateIdOne = 'OAJIltme8Hzm-ONPyk1LHIWqpvxRAnLobIHFvMnmMRs'
const sendUrl = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='
const getTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token'
// 天气接口
const weatherUrl = 'https://v0.yiketianqi.com/free/day?appid=12917378&appsecret=5Vc0YjTj&city=%E4%B8%8A%E6%B5%B7&cityId=101070303&unescape=1'

const startStr = `亲爱的宝贝，早上好！记得按时吃早饭，午饭还有晚饭哦！今天也要开心哦！😘`
const centStr = `下面由我来给你播报一下今天的天气情况😘`
const tip = 'life`s too sho..'
//错误返回
const errorResponse = (res) => {
  return {
    success: false,
    status: 200,
    data: res,
  }
}
module.exports = {
  port,
  tip,
  centStr,
  startStr,
  errorResponse,
  grant_type,
  appid,
  secret,
  sendUrl,
  getTokenUrl,
  openId,
  templateIdOne,
  chpUrl,
  weatherUrl,
}
