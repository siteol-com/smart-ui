export default {
  'plat.serviceCode': '业务编码',
  'dict.add': '创建字典',
  'dict.add.sub': '现有分组下创建新字典',
  'dict.get': '查看字典',
  'dict.edit': '编辑字典',
  'dict.groupKey': '字典分组',
  'dict.label': '汉语标签',
  'dict.label.place': '请输入汉语模式下展示的标签名称',
  'dict.labelEn': '英语标签',
  'dict.labelEn.place': '请输入英语模式下展示的标签名称',
  'dict.val': '字典数值',
  'dict.val.place': '请输入系统实际使用的枚举值',
  'dict.val.tips': '选择字典分组后，系统推荐值为：',
  'dict.val.nextWait': '请选择字典分组',
  'dict.remark': '字典备注',
  'dict.remark.place': '请输入字典的备注信息',
  'dict.choose': '允许选择',
  'dict.choose.tips': '是否可在下拉框中选择，关闭表示仅作为系统翻译',
  'dict.sort': '分组排序',
  'dict.del.tip': '锁定后在字典不可见，但分组下该字典值依旧被占用不可复用！是否确认锁定？',
  'sysConfig.system': '系统配置',
  'sysConfig.get': '查看配置',
  'sysConfig.edit': '编辑配置',
  'sysConfig.loginSwitch': '多端登陆限制',
  'sysConfig.loginSwitch.tips': '用于限制同时登陆的终端数量，新登陆将踢出超出限制的历史登陆',
  'sysConfig.loginNum': '限制数量',
  'sysConfig.loginFailSwitch': '登陆尝试限制',
  'sysConfig.loginFailSwitch.tips': '用于限制指定周期内登陆失败的上限，超出时账号将被锁定,如：30分钟内失败尝试5次锁定3天',
  'sysConfig.loginFailNum': '统计周期数量',
  'sysConfig.loginFailUnit': '统计时间单位',
  'sysConfig.loginFailLockNum': '锁定单位数量',
  'sysConfig.loginFailLockUnit': '锁定时间单位',
  'sysConfig.loginFailTryNum': '失败上限数量',
  'sysConfig.logoutSwitch': '登陆超时限制',
  'sysConfig.logoutSwitch.tips': '用于限制无操作情况下登陆自动超时退出',
  'sysConfig.logoutNum': '超时周期数量',
  'sysConfig.logoutUnit': '超时时间单位',
  'response.add': '创建响应',
  'response.add.sub': '创建指定业务下的响应码',
  'response.get': '查看响应',
  'response.edit': '编辑响应',
  'response.type': '响应类型',
  'response.code': '响应码',
  'response.code.tips': '选择业务编码和响应类型后，系统为您自动推算响应码',
  'response.code.place': '请选择业务编码和响应类型自动获取',
  'response.code.sc': '请输入响应码，支持模糊查询',
  'response.zhCn': '汉语文言',
  'response.zhCn.place': '请输入汉语模式下的响应文言',
  'response.enUs': '英语文言',
  'response.enUs.place': '请输入英语模式下的响应文言',
  'response.remark': '响应备注',
  'response.remark.place': '请输入响应备注信息',
  'response.del.tip': '锁定后响应码不可见，但该响应码序号依旧保持占用！是否确认锁定？',
  'router.add': '创建路由',
  'router.add.sub': '创建一个新的路由接口',
  'router.get': '查看路由',
  'router.edit': '编辑路由',
  'router.url': '接口地址',
  'router.url.sc': '请输入接口地址，支持模糊查询',
  'router.url.format': '请输入合法的URL数据',
  'router.url.place': '请输入URL，需要以/开头，例：/user/add',
  'router.type': '授权类型',
  'router.name': '路由名称',
  'router.name.place': '请输入路由名称，全局唯一',
  'router.logInDb': '报文入库',
  'router.logInDb.tips': '打开时，报文将存入数据库',
  'router.reqLogPrint': '请求日志',
  'router.reqLogPrint.tips': '打开时，请求报文将写入日志文件',
  'router.reqLogSecure': '请求脱敏',
  'router.reqLogSecure.tips': '请求报文中需要脱敏+Hash存储的字段，该配置对入库和日志均生效',
  'router.reqLogSecure.place': '请输入字段名，英文逗号分隔，请勿输入回车，例：name,phone',
  'router.resLogPrint': '响应日志',
  'router.resLogPrint.tips': '打开时，响应报文将写入日志文件',
  'router.resLogSecure': '响应脱敏',
  'router.resLogSecure.tips': '响应报文中需要脱敏+Hash存储的字段，该配置对入库和日志均生效',
  'router.resLogSecure.place': '请输入字段名，英文逗号分隔，请勿输入回车，例：name,phone',
  'router.remark': '路由备注',
  'router.remark.place': '请输入路由备注信息',
  'router.del.tip': '删除路由后系统将拒绝该接口访问，数据无法恢复，是否确认删除改路由？'
}
