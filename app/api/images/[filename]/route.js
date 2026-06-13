import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  try {
    const filename = params.filename;
    // prevent path traversal
    if (!filename || filename.includes("..")) return new Response("Not found", { status: 404 });
    const filePath = path.join(process.cwd(), "app", "assets", "images", filename);
    const data = await fs.promises.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const mime = ext === ".png" ? "image/png" : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "application/octet-stream";
    return new Response(data, { status: 200, headers: { "Content-Type": mime } });
  } catch (err) {
    return new Response("Not found", { status: 404 });
  }
}
