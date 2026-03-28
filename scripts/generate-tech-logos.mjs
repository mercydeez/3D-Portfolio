import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, "../public/images");

const logos = [
  {
    file: "python.webp",
    urls: ["https://cdn.simpleicons.org/python/3776AB"],
  },
  {
    file: "fastapi.webp",
    urls: ["https://cdn.simpleicons.org/fastapi/009688"],
  },
  {
    file: "docker.webp",
    urls: ["https://cdn.simpleicons.org/docker/2496ED"],
  },
  {
    file: "langchain.webp",
    urls: ["https://cdn.simpleicons.org/langchain/00A67E"],
  },
  {
    file: "openai.webp",
    urls: [
      "https://cdn.simpleicons.org/openai/000000",
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
    ],
  },
  {
    file: "aws.webp",
    urls: [
      "https://cdn.simpleicons.org/amazonaws/FF9900",
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
    ],
  },
  {
    file: "azure.webp",
    urls: [
      "https://cdn.simpleicons.org/microsoftazure/0078D4",
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftazure.svg",
    ],
  },
  {
    file: "gcp.webp",
    urls: ["https://cdn.simpleicons.org/googlecloud/4285F4"],
  },
  {
    file: "redis.webp",
    urls: ["https://cdn.simpleicons.org/redis/FF4438"],
  },
  {
    file: "n8n.webp",
    urls: ["https://cdn.simpleicons.org/n8n/FF6D5A"],
  },
  {
    file: "gemini.webp",
    urls: ["https://cdn.simpleicons.org/googlegemini/8E75B2"],
  },
  {
    file: "huggingface.webp",
    urls: ["https://cdn.simpleicons.org/huggingface/FFD21E"],
  },
  {
    file: "pinecone.webp",
    urls: ["https://cdn.simpleicons.org/pinecone/00C9A7"],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00C9A7" d="M12 2c4.8 0 8.7 3.9 8.7 8.7S16.8 19.4 12 19.4 3.3 15.5 3.3 10.7 7.2 2 12 2Zm0 2.2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-1.1 2.5h2.2v8.1h-2.2V6.7Z"/></svg>`,
  },
  {
    file: "langgraph.webp",
    urls: ["https://cdn.simpleicons.org/langchain/1a7f5a"],
  },
];

async function fetchSvgText(urls, fallbackSvg) {
  for (const url of urls) {
    const response = await fetch(url);
    if (response.ok) {
      return response.text();
    }
  }

  if (fallbackSvg) {
    return fallbackSvg;
  }

  throw new Error(`Failed to fetch all candidate URLs: ${urls.join(", ")}`);
}

async function generateLogo(entry) {
  const svgText = await fetchSvgText(entry.urls, entry.fallbackSvg);

  const renderedLogo = await sharp(Buffer.from(svgText))
    .resize(220, 220, { fit: "contain" })
    .png()
    .toBuffer();

  const outputPath = path.join(outputDir, entry.file);

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: renderedLogo, left: 146, top: 146 }])
    .webp({ quality: 95 })
    .toFile(outputPath);

  console.log(`Generated: ${entry.file}`);
}

async function main() {
  for (const entry of logos) {
    await generateLogo(entry);
  }
  console.log("All logos generated.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
