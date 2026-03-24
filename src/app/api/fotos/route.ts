import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const extensoesPermitidas = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".avif",
    ".heic",
  ];

  // Tenta múltiplos caminhos possíveis para encontrar a pasta
  const possiveisCaminhos = [
    path.join(process.cwd(), "public", "fotos"),
    path.join(process.cwd(), "fotos"),
    path.join(__dirname, "..", "..", "..", "..", "public", "fotos"),
  ];

  let fotosDir: string | null = null;

  for (const caminho of possiveisCaminhos) {
    if (fs.existsSync(caminho)) {
      fotosDir = caminho;
      break;
    }
  }

  // Pasta não encontrada — retorna info de debug
  if (!fotosDir) {
    return NextResponse.json({
      fotos: [],
      debug: {
        cwd: process.cwd(),
        tentativas: possiveisCaminhos,
        erro: "Pasta /public/fotos não encontrada",
      },
    });
  }

  const arquivos = fs.readdirSync(fotosDir).filter((arquivo) => {
    const ext = path.extname(arquivo).toLowerCase();
    return extensoesPermitidas.includes(ext);
  });

  return NextResponse.json({
    fotos: arquivos,
    debug: {
      pasta: fotosDir,
      totalEncontrado: arquivos.length,
    },
  });
}
