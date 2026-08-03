import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const videoExtensions = new Set([".mp4"]);

const collections = [
  { label: "Gallery", directory: path.join(root, "public", "images", "gallery"), output: "gallery.json", urlPrefix: "/images/gallery", extensions: imageExtensions },
  { label: "Customers", directory: path.join(root, "public", "images", "customers"), output: "review.json", urlPrefix: "/images/customers", extensions: imageExtensions },
  { label: "Reels", directory: path.join(root, "public", "videos", "reels"), output: "video.json", urlPrefix: "/videos/reels", extensions: videoExtensions },
];

async function generateCollection({ label, directory, output, urlPrefix, extensions }) {
  let files = [];
  try {
    files = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  const filesInCollection = files
    .filter((file) => file.isFile() && extensions.has(path.extname(file.name).toLowerCase()))
    .map((file) => `${urlPrefix}/${file.name}`)
    .sort((first, second) => first.localeCompare(second, "vi"));

  await writeFile(path.join(root, "data", output), `${JSON.stringify(filesInCollection, null, 2)}\n`, "utf8");
  console.log(`${label}: ${filesInCollection.length} file(s) found in ${path.relative(root, directory)}`);
}

await Promise.all(collections.map(generateCollection));
