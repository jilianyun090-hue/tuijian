# 机场、流媒体及 AI 资源导航博客

这是一个基于 [VuePress 2](https://v2.vuepress.vuejs.org/) 和 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 构建的资源导航网站。

## 项目结构

- `docs/`: 存放所有 Markdown 文档。
  - `airport/`: 机场推荐相关内容。
  - `streaming/`: 流媒体资源相关内容。
  - `ai/`: AI 工具及导航内容。
  - `.vuepress/`: VuePress 配置文件、自定义样式及公共资源。
- `package.json`: 项目依赖及运行脚本。

## 快速开始

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **本地预览**：
   ```bash
   npm run dev
   ```

3. **生成静态文件**：
   ```bash
   npm run build
   ```

## 注意事项

- **路径问题**：如果您在 Windows 环境下遇到运行错误，建议将项目放在不包含中文字符的文件夹路径中（例如 `C:\projects\my-blog`）。
- **内容更新**：您可以直接修改 `docs/` 下的 `.md` 文件来更新您的博客内容。
- **自定义配置**：在 `docs/.vuepress/config.mjs` 和 `docs/.vuepress/theme.mjs` 中可以调整网站的标题、导航栏、插件等。

## 功能亮点

- ✅ **现代响应式设计**：完美适配手机、平板及电脑。
- ✅ **丰富插件支持**：集成搜索、代码块、搜索、博客布局等。
- ✅ **SEO 友好**：自动生成站点地图和 Meta 标签。
- ✅ **极致美学**：使用 `vuepress-theme-hope` 及其配套图标库。
