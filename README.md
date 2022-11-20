## 项目介绍
本仓库中 `tampermonkey-script.js` 为 Chrome 插件 [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) `Disable website hotkeys` 的源代码。




## 脚本目前功能
1. 屏蔽语雀文档发布（更新）快捷键 `⌘+enter` ，理由是与 Typora 表格换行冲突，经常误触导致页面刷新。

## 目前运行环境
1. 只支持 Mac、Chrome。

## 安装脚本
1. 首先在 Chrome 中安装 [Tampermonkey 插件](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. 访问提供用户脚本的网站 Greasy Fork
    - 语雀脚本：https://greasyfork.org/en/scripts/454229-disable-website-hotkeys
3. 点击绿色框中的 install。查看安装脚本步骤：https://greasyfork.org/en/help/installing-user-scripts。

## Todo
1. 目前代码屏蔽的是只含有一个修饰键的快捷键，可以扩展至含有多个修饰键的快捷键。

## 脚本自定义

1）脚本注释中的元键  
https://greasyfork.org/en/help/meta-keys

2）keyCodes 查询  
https://www.toptal.com/developers/keycode


## 结尾
感谢 isaacl 提供思路：https://greasyfork.org/en/scripts/5819-disable-website-keyboard-hooks

欢迎 fork、star