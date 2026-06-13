import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "assets", "RhysJonathanAbalon CV.pdf");
  try {
    const data = await fs.promises.readFile(filePath);
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="RhysJonathanAbalon CV.pdf"',
      },
    });
  } catch (err) {
    return new Response("File not found", { status: 404 });
  }
}
