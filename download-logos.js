import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images");

const logos = [
  {
    file: "python.webp",
    urls: ["https://cdn.simpleicons.org/python/3776AB"],
    type: "svg",
  },
  {
    file: "fastapi.webp",
    urls: ["https://cdn.simpleicons.org/fastapi/009688"],
    type: "svg",
  },
  {
    file: "docker.webp",
    urls: ["https://cdn.simpleicons.org/docker/2496ED"],
    type: "svg",
  },
  {
    file: "langgraph.webp",
    urls: ["https://cdn.simpleicons.org/langchain/00A67E"],
    type: "svg",
  },
  {
    file: "openai.webp",
    urls: [
      "https://cdn.simpleicons.org/openai/000000",
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
    ],
    type: "svg",
  },
  {
    file: "claude.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claude-color.png",
    ],
    type: "raster",
  },
  {
    file: "claudecode.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claudecode-color.png",
    ],
    type: "raster",
  },
  {
    file: "aws.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/aws-color.png",
    ],
    type: "raster",
  },
  {
    file: "azure.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/azure-color.png",
    ],
    type: "raster",
  },
  {
    file: "databricks.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/dbrx-color.png",
    ],
    type: "raster",
  },
  {
    file: "gemini.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/gemini-color.png",
    ],
    type: "raster",
  },
  {
    file: "antigravity.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/antigravity-color.png",
    ],
    type: "raster",
  },
  {
    file: "cursor.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/cursor.png",
    ],
    type: "raster",
  },
  {
    file: "vscode.webp",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    ],
    type: "svg",
  },
  {
    file: "n8n.webp",
    urls: ["https://cdn.simpleicons.org/n8n/EA4B71"],
    type: "svg",
  },
  {
    file: "huggingface.webp",
    urls: [
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/huggingface-color.png",
    ],
    type: "raster",
  },
  {
    file: "pinecone.webp",
    urls: ["https://avatars.githubusercontent.com/u/54333248?s=280&v=4"],
    type: "raster",
  },
];

async function fetchBuffer(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
  }

  throw new Error(`Failed to fetch icon from all URLs: ${urls.join(", ")}`);
}

async function generateLogo(entry) {
  const outputPath = path.join(OUTPUT_DIR, entry.file);

  const sourceBuffer = await fetchBuffer(entry.urls);

  const logoBuffer = await sharp(sourceBuffer)
    .resize(280, 280, { fit: "contain" })
    .png()
    .toBuffer();

  // 2-4. Build 1024x512 white canvas and composite logo twice.
  await sharp({
    create: {
      width: 1024,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      { input: logoBuffer, left: 116, top: 116 },
      { input: logoBuffer, left: 628, top: 116 },
    ])
    .webp({ quality: 95 })
    .toFile(outputPath);

  console.log(`Generated ${entry.file}`);
}

async function deleteAllWebpFiles() {
  const files = await fs.readdir(OUTPUT_DIR);
  await Promise.all(
    files
      .filter((file) => file.toLowerCase().endsWith(".webp"))
      .map((file) => fs.rm(path.join(OUTPUT_DIR, file), { force: true }))
  );
  console.log("Deleted existing .webp files in public/images.");
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Delete all old webp logos to avoid stale cache conflicts.
  await deleteAllWebpFiles();

  for (const entry of logos) {
    await generateLogo(entry);
  }
  console.log("All logo textures generated successfully.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
