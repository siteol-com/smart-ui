Smart配套前端。

# 安装

`pnpm i`

# 技术栈

Vite + TS + VueNext

更多描述，后续补充。

# 国际化插件

国际化插件采用GoLang编写，打包成exe放在本仓库/src/locale下。

将文言粘贴到i18n.xlsx，执行i18n.make.exe，自动生成国际化.ts并覆盖到语言目录下。

本插件源代码位置，如果您对GoLang感兴趣，可以看看：

[https://gitee.com/siteol-com/smart/blob/master/src/zoom/i18n/make_test.go](https://gitee.com/siteol-com/smart/blob/master/src/zoom/i18n/make_test.go)

[https://github.com/siteol-com/smart/blob/master/src/zoom/i18n/make_test.go](https://github.com/siteol-com/smart/blob/master/src/zoom/i18n/make_test.go)
