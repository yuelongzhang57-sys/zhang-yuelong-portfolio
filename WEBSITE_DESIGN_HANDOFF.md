# 个人网站设计交接文档

本文用于让新的 Codex/AI 对话快速理解当前个人网站项目、审美方向、用户偏好和已完成/待处理事项。

## 项目位置

- 项目目录：`E:\个人网站`
- 首页入口：`E:\个人网站\index.html`
- 主样式文件：`E:\个人网站\src\styles.css`
- 构建工具：Vite
- 构建命令：`npm.cmd run build`
- 开发预览命令：`npm.cmd run dev -- --host 127.0.0.1`

注意：PowerShell 直接运行 `npm run build` 可能被执行策略拦截，需要使用 `npm.cmd run build`。

## 用户核心需求

用户正在做个人作品集网站，希望整体视觉达到更高级、更统一、更有审美的效果。

用户目前的主要评价：

- 首页视频视觉方向是最重要的参考。
- 首页原始设计比后续尝试更好，尤其是：
  - `WELCOME TO MY WORLD` 字体图的位置、出现时间、动画节奏不能乱改。
  - 个人姓名和简介的位置、大小不能乱改。
  - 首页可以加文字蒙版，但必须适配文字尺寸，不能改变原本构图。
- 首页之外的其他区块原本比较粗糙，希望继续统一到首页视频的视觉世界里。
- 不希望无限循环消耗 token， prefer 一轮一轮明确改：Audit -> Shape -> Implement -> Verify -> Polish。
- 不希望大范围重构，不迁移 React，不引入大框架。

## 视觉方向

最高优先级参考：用户桌面图片  
`C:\Users\me\Desktop\eb0abe79-a6ee-41e0-8126-400926718de9.png`

这个参考图是首页视频最后一帧，核心气质：

- 明亮蓝天
- 云白色柔光
- 粉紫高光
- 樱花粉
- 日落橙
- 3D 卡通城市
- 玩具感、广告片质感
- 浪漫，但带一点酷感
- 有景深、柔焦、光晕、城市广告牌感

关键词：`3D 浪漫酷感城市`、`toy city`、`cinematic pastel city`、`soft but cool`。

## 已安装/使用过的设计 skills

用户希望使用这些 skill 组合：

- `impeccable`：审美校准、审核、polish
- `ui-ux-pro-max`：设计方案、风格扩展、UI 规则
- `web-design-expert`：品牌视觉方向
- `karpathy-guidelines`：控制改动范围，避免乱扩

对应路径：

- `C:\Users\me\.codex\skills\impeccable`
- `C:\Users\me\.codex\skills\ui-ux-pro-max`
- `C:\Users\me\.codex\skills\web-design-expert`
- `C:\Users\me\.codex\skills\karpathy-guidelines`

## 已新增的项目语境文件

为了让设计审核有锚点，已经新增：

- `E:\个人网站\PRODUCT.md`
- `E:\个人网站\DESIGN.md`

这两个文件描述了网站是个人品牌/作品集，设计方向是 3D romantic cool city。

## 当前已完成的主要改动

主要改动在 `src/styles.css`。

已做：

- 新增 OKLCH 风格 token，用于天空蓝、云白、粉紫、日落橙、深蓝紫文字。
- 移除了移动端最严重的问题：原来 `body { min-width: 1100px; }` 会造成手机端横向溢出，现在通过后续覆盖修正。
- 首页之后的 about、projects、film、spatial、campus、capability、contact 等区块已经做过一轮统一：
  - 更接近云白/天空/粉橙的视觉系统。
  - 卡片、按钮、section、联系区等做了统一表面材质和阴影。
  - 项目卡从粗糙翻转感往“城市广告牌/作品入口”方向靠。
  - 加了 `prefers-reduced-motion` 兜底。
- 首页被用户指出“不如原来”，所以后来又专门还原了首页。

## 首页当前状态，重要

用户要求：首页只还原原本设计，不要跟着其他区块一起改。

`src/styles.css` 末尾有一段：

```css
/* Hero restore: keep the original homepage composition and timing. */
```

这段是专门用于恢复首页原始设计的覆盖块。新的对话不要随便删掉或改掉它。

这段恢复了：

- `WELCOME TO MY WORLD` 的原始位置：
  - `left: 47.1%`
  - `top: clamp(-108px, -10vh, -84px)`
  - `width: min(56.16vw, 993.6px)`
  - 初始 `scale(0.68)`
  - `clip-path` 入场
  - `titleEnter 1.18s` 动画
- 姓名/简介原始位置：
  - `right: clamp(28px, 3vw, 60px)`
  - `bottom: clamp(100px, 8vw, 148px)`
  - `width: min(26vw, 470px)`
  - 姓名字号：`clamp(42px, 3.4vw, 72px)`
  - 简介字号：`clamp(15px, 1.1vw, 20px)`
- 导航恢复到底部居中胶囊。
- 首页视频滤镜/额外遮罩撤回。
- 只保留姓名简介后方的 `heroProfile::before` 自适应蒙版，不改变文字位置和大小。

用户明确说：

> 首页字体（welcome to my world）出现的时间和位置，以及个人名字和简介的位置和大小都不变。蒙版可以加，但要适配文字大小。

后续如要改首页，必须非常谨慎，最好先截图给用户确认。

## 重要审核发现

`impeccable detector` 曾发现：

- `01 / 02 / 03 / 04 / 05 / 06` 这种编号式章节标记容易有 AI 生成脚手架感。

当前没有大改 HTML 内容，只是在视觉上压低这种模板感。后续可以考虑把章节标题系统重新设计，但要单独开一轮。

## 性能风险

构建时发现视频资源非常大：

- hero 视频约 17MB + 17MB
- 部分 AIGC 作品视频：
  - 53MB
  - 60MB
  - 84MB
  - 128MB
  - 175MB

这是后续非常值得单独处理的问题：视频压缩、懒加载、poster、只在用户点击后加载、移动端降级等。

## 验证记录

已多次运行：

```powershell
npm.cmd run build
```

构建通过。

截图验证使用过本机 Chrome headless。注意：`file://` + headless 模式下，首页视频有时会出现白帧/过曝，不能完全作为首页视觉判断依据。更可靠的方式是启动 Vite 本地服务后，在真实浏览器里看。

推荐验证：

```powershell
npm.cmd run dev -- --host 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:5173/
```

## 后续建议工作流

每一轮只做一个明确目标，不要无限 loop。

建议下一轮这样做：

1. Audit：截图首页之后的主要区块，确认哪些地方仍粗糙。
2. Shape：明确本轮只优化一个区域，比如“项目展示区”或“能力区”。
3. Implement：只改相关 HTML/CSS/JS，不扩散。
4. Verify：桌面、平板、手机截图，检查横向溢出、可读性、动效。
5. Polish：只修细节，然后暂停给用户看。

## 下一轮优先级建议

优先级从高到低：

1. 项目展示区内容叙事与卡片系统
   - 让它更像作品集入口，不像素材堆。
   - 可以保留“城市广告牌/玩具城市入口”的方向。
2. 视频性能优化
   - 大视频太多，首屏和作品区加载压力很大。
3. 移动端整体体验
   - 首页已经要求保持原样，但后续区块仍需要手机端细节检查。
4. 章节标题系统
   - 减少 `01 / 02 / 03` 模板感。
   - 设计一套更符合 3D 城市世界观的 section marker。
5. 联系区/收尾区 polish
   - 让结尾更像个人品牌落点，而不是普通 CTA 卡片。

## 对下一个对话的重要提醒

- 不要再主动重做首页。
- 不要改变首页标题图的位置、出现时间、动画、姓名/简介的位置和字号。
- 首页可以加轻蒙版，但必须服务可读性，不能变成新卡片设计。
- 用户更在意“高级审美”和“还原参考图气质”，但不希望靠大量自然语言反复微调浪费 token。
- 每轮要先说明目标，再改，改完就停给用户看。
- 不要大范围迁移框架，不要引入大型依赖。
- 如果需要调整设计，优先改 `src/styles.css`，谨慎改 `index.html`。
