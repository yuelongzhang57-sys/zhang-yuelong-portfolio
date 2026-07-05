# 张跃龙个人网站部署与修改交接说明

更新时间：2026-07-05

## 线上与仓库

- 正式域名：https://zhangyuelong.cn
- Vercel 生产域名：https://zhang-yuelong-portfolio.vercel.app（实际部署也会生成带随机后缀的预览/生产 URL）
- GitHub 仓库：https://github.com/yuelongzhang57-sys/zhang-yuelong-portfolio
- Vercel 项目：`zhangyuelong/zhang-yuelong-portfolio`
- 当前主分支：`main`

## 本地项目位置

- 本地根目录：`E:\个人网站`
- 主页面：`E:\个人网站\index.html`
- 全站主样式：`E:\个人网站\src\styles.css`
- 静态资源目录：`E:\个人网站\public\assets`
- Vite 配置：`E:\个人网站\vite.config.js`
- NPM 配置：`E:\个人网站\package.json`

## 常用命令

本地构建：

```powershell
npm.cmd run build
```

本地预览：

```powershell
npm.cmd run preview -- --host 127.0.0.1 --port 4173
```

推送到 GitHub：

```powershell
git push origin main
```

如果 GitHub/Vercel 直连失败，当前电脑的 Clash 代理端口通常是 `127.0.0.1:7890`，可临时这样推送：

```powershell
git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push origin main
```

Vercel 生产部署：

```powershell
$env:HTTP_PROXY='http://127.0.0.1:7890'
$env:HTTPS_PROXY='http://127.0.0.1:7890'
npm.cmd exec --yes vercel -- --prod --yes
```

部署成功后，Vercel CLI 应显示 `Aliased https://zhangyuelong.cn`。

## 页面结构定位

所有主要板块都在 `index.html` 中。当前大致行号如下，后续编辑后行号可能会变化，建议用 `id` 搜索定位。

| 板块 | 锚点 / 类名 | 当前位置 | 说明 |
| --- | --- | --- | --- |
| 底部卡片导航 | `.cardNavContainer` | `index.html` 约 1283 行 | 控制页面内跳转，链接到各板块锚点。 |
| 首页 | `#home`, `.hero` | `index.html` 约 1303 行 | 开场视频和循环视频所在区域。 |
| 个人介绍及经历 | `#about`, `.aboutGrid` | `index.html` 约 1313 行 | 左侧个人照片，右侧介绍、教育背景、基本信息、实习经历。 |
| AIGC 商业影视创作 | `#aigc-film`, `.filmGrid` | `index.html` 约 1408 行 | AIGC 视频作品列表。 |
| 环境视觉与三维表达 | `#spatial-visual`, `.spatialSwapShell` | `index.html` 约 1485 行 | 本科毕设、华清项目、Blender 建模换卡展示和详情弹窗。 |
| 校园实践与成长经历 | `#campus`, `.campusProjectGrid` | `index.html` 约 1525 行 | 校园经历证据卡片。 |
| 个人能力与技能学习 | `#capability-learning`, `.capabilityGrid` | `index.html` 约 1591 行 | 能力证据卡，点击打开详情弹窗。 |
| 技能掌握 | `#skills`, `.skillsGrid` | `index.html` 约 1658 行 | 软件/工具图标技能面板。 |
| 项目详情弹窗 | `.projectDetailOverlay` | `index.html` 约 1684 行 | 环境/校园项目的图片、PDF 详情弹窗。 |
| 能力详情弹窗 | `.capabilityDetailOverlay` | `index.html` 约 1697 行 | 能力证据详情弹窗。 |
| 联系方式页 | `#contact`, `.contactFinal` | `index.html` 约 1723 行 | 微信二维码、QQ 二维码和结束语。 |

## 核心资源位置

### 首页视频

- 开场视频：`public/assets/hero/hero-intro.mp4`
- 循环视频：`public/assets/hero/hero-loop.mp4`
- 首页视频标签：`index.html` 中 `.heroVideoIntro` 和 `.heroVideoLoop`
- 首页播放逻辑：`index.html` 中 `initHeroVideo()`

注意：手机端已设置为每次进入都播放开场动画，桌面端仍保留 session 级别的“开场已播放则直接循环”逻辑。

### 个人介绍

- 个人照片：`public/assets/portrait.jpg`
- 个人介绍文字：`index.html` 的 `#about` 内 `.leadText`
- 教育背景与基本信息：`index.html` 的 `.resumePanels`
- 实习经历：`index.html` 的 `.timeline`

### AIGC 视频

- 资源目录：`public/assets/videos/aigc/`
- 页面位置：`index.html` 的 `#aigc-film`
- 每个作品卡：`.filmCard`

### 环境视觉与三维表达

- 本科毕设：`public/assets/spatial/undergraduate-final/`
- 华清项目：`public/assets/spatial/huaqing-ripple/`
- Blender 建模：`public/assets/spatial/blender/`
- 展示卡：`index.html` 的 `[data-spatial-card]`
- 详情数据：`index.html` 中 `projectDetails` 对象

### 校园实践与成长经历

- 资源目录：`public/assets/campus/`
- 页面卡片：`index.html` 的 `.campusProjectCard`
- 详情数据：`index.html` 中 `projectDetails` 对象

### 个人能力与技能学习

- 能力证明资源：`public/assets/capability/`
- 技能图标资源：`public/assets/skills/`
- 能力卡片：`index.html` 的 `.capabilityCard`
- 能力详情数据：`index.html` 中 `capabilityDetails` 对象

### 导航卡片图片

导航卡片直接引用根目录图片：

- `个人照片/微信图片_20260610145513_1027_7.jpg`
- `AIGC商业影视创作（反面）.png`
- `环境视觉与三维表达（反面）.png`
- `校园实践与成长经历（反面）.png`
- `个人能力与技能学习（反面）.png`

## 移动端适配说明

移动端响应式样式主要在 `index.html` 头部的两个样式块里：

- `mobile-responsive-fix`：全站移动端基础适配，多列改单列、弹窗限制宽高、导航触控尺寸、二维码和卡片缩放。
- `mobile-hero-about-fix`：本次新增的首页和个人介绍专项修复。

当前移动端策略：

- 首页在手机端按 16:9 横幅高度显示视频，不再用整屏高度制造大面积空白。
- 首页视频在手机端使用 `object-fit: contain`，配合 `height: calc(100vw * 9 / 16)` 保持完整画面。
- 个人介绍在手机端保留“左图右文”布局，照片在左侧，标题和介绍文字在右侧。
- 教育背景、基本信息、实习经历继续放在个人介绍下方展示；640px 以下经历列表会压缩为证据卡并限制长段落行数，避免个人介绍板块过长。

## 部署注意事项

- 不要提交根目录下未压缩/历史版本视频，例如：
  - `开场动画（最最最新）.mp4`
  - `循环动画（最最最新）.mp4`
  - `最终版开场视频.mp4`
  - `最终版循环视频.mp4`
- 真正被网站引用的首页视频在 `public/assets/hero/`。
- `.vercelignore` 中有一些历史排除规则，部署前建议运行 `npm.cmd run build` 确认产物完整。
- Vercel 会使用 GitHub 仓库或本地 CLI 部署。推荐优先推送 GitHub，再让 Vercel 部署；如果网络不通，可用本地 Vercel CLI 走代理部署。

## 修改建议

- 改文字：优先在 `index.html` 中搜索对应中文内容。
- 改样式：优先看 `src/styles.css`，但后期新增的专项覆盖样式在 `index.html` 头部。
- 改作品资源：优先替换 `public/assets` 下同名资源，保持路径不变最稳。
- 改板块跳转：修改 `.cardNavContent` 内的 `<a href="#...">`。
- 改详情弹窗内容：修改 `projectDetails` 或 `capabilityDetails` 对象。