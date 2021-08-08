export { getImportBuildCode }

function getImportBuildCode(): string {
  return `const { pageFiles } = require("./pageFiles.node.js");
const clientManifest = require("../client/manifest.json");
const serverManifest = require("../server/manifest.json");
const { __private: { importBuild } } = require("vite-plugin-ssr");
importBuild({ pageFiles, clientManifest, serverManifest });
`
}