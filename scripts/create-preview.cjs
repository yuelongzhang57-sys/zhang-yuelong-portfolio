const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const assets = path.join(dist, "assets");

const jsFile = fs.readdirSync(assets).find((file) => /^index-.*\.js$/.test(file));
const cssFile = fs.readdirSync(assets).find((file) => /^index-.*\.css$/.test(file));

if (!jsFile || !cssFile) {
  throw new Error("Build assets not found. Run `npm run build` first.");
}

const js = fs.readFileSync(path.join(assets, jsFile), "utf8");
const css = fs.readFileSync(path.join(assets, cssFile), "utf8");

function createHtml({ script, title }) {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="张跃龙 - 视觉设计师 / AI运营师个人作品集" />
    <title>${title}</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>${script.replace(/<\/script/gi, "<\\/script")}</script>
  </body>
</html>
`;
}

const distPreview = path.join(dist, "preview.html");
fs.writeFileSync(
  distPreview,
  createHtml({ script: js, title: "张跃龙 | Portfolio Preview" }),
  "utf8",
);

console.log(distPreview);
