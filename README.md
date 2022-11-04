## 项目介绍
本仓库中 `tampermonkey-script.js` 为 Chrome 插件 [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related) [Disable website hotkeys](https://greasyfork.org/en/scripts/454229-disable-website-hotkeys) 的源代码。




## 脚本目前功能
1. 屏蔽语雀文档发布（更新）快捷键 `⌘+enter` ，理由是与 Typora 表格换行冲突，经常误触导致页面刷新。

## 目前运行环境
1. 只支持 Mac、Chrome。

## 安装脚本
1. 首先在 Chrome 中安装 [Tampermonkey 插件](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. 访问提供用户脚本的网站 Greasy Fork，脚本存放在这里：https://greasyfork.org/en/scripts/454229-disable-website-hotkeys
3. 点击绿色框中的 install 或 Reinstall，也可点击问号查看如何安装脚本。

## Todo
1. 代码只支持对包含一个修饰键的快捷键进行屏蔽。多个修饰键需要扩展。

## 脚本注释中的元键
https://greasyfork.org/en/help/meta-keys

## 结尾
感谢 isaacl 提供思路：https://greasyfork.org/en/scripts/5819-disable-website-keyboard-hooks/code

欢迎 fork、star