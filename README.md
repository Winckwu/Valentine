# 💝 Valentine - 浪漫表白网站

这是一个浪漫的表白网站项目，包含多个精美的表白和祝福页面。

## 📁 项目包含

### 1. 🎂 生日祝福页面 (index.html)
- 精美的生日蛋糕动画
- 彩色气球和彩灯装饰
- 温馨的生日祝福语
- 背景音乐

### 2. 💕 趣味表白页面 (confession.html) ✨ NEW!
- **互动式表白** - "你愿意做我的女朋友吗？"
- **逃跑按钮** - "不愿意"按钮会逃跑，只能选"愿意"！
- **浪漫特效** - 爱心雨、渐变背景、文字动画
- **甜蜜表白语** - 点击"愿意"后展示浪漫表白
- **背景音乐** - 营造浪漫氛围

#### 🎮 趣味互动特性：
- 鼠标靠近"不愿意"按钮时，按钮会自动躲开
- 每次尝试点击"不愿意"，按钮会说不同的俏皮话
- "愿意"按钮会随着尝试次数变大，更吸引注意力
- 点击"愿意"后有浪漫的爱心雨特效
- 表白文字逐行渐入，更有仪式感

## 🚀 如何使用

### 方式一：使用 Python（推荐）
```bash
cd Valentine
python -m http.server 8081
```
然后在浏览器访问：
- 生日祝福页面：http://localhost:8081/index.html
- 表白页面：http://localhost:8081/confession.html

### 方式二：使用 Node.js
```bash
npm install
npm run server-node
```
然后在浏览器访问：
- 生日祝福页面：http://localhost:8081/index.html
- 表白页面：http://localhost:8081/confession.html

### 方式三：直接在 VS Code 中使用 Live Server
1. 安装 Live Server 扩展
2. 右键点击 `confession.html` 或 `index.html`
3. 选择 "Open with Live Server"

## 💡 使用建议

### 表白页面使用技巧：
1. 提前测试一下效果，确保音乐和动画正常
2. 可以在浏览器全屏模式下展示，效果更佳
3. 建议在安静浪漫的环境下使用
4. 可以根据需要修改 `confession.html` 中的表白文字
5. 可以替换 `hbd.mp3` 为你喜欢的背景音乐

## 🎨 自定义

你可以轻松自定义内容：
- **修改表白文字**：编辑 `confession.html` 中的文字内容
- **更换背景音乐**：替换 `hbd.mp3` 文件
- **调整颜色主题**：修改 `confession.css` 中的渐变色
- **修改动画效果**：调整 `confession.css` 中的动画参数

## 📱 响应式设计

所有页面都支持手机、平板等移动设备访问，自动适配不同屏幕尺寸。

---

💝 祝你表白成功！愿有情人终成眷属！

