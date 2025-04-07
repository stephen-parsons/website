import { useEffect } from "react";

async function readResumePdf(): Promise<Blob> {
  const result = await fetch("/resume.pdf");
  return await result.blob();
}

async function showPdf() {
  const objectUrl = URL.createObjectURL(await readResumePdf());
  document.getElementById("pdfPreview")?.setAttribute("src", objectUrl);
}

export default function Preview() {
  useEffect(() => {
    showPdf();
  }, []);

  return <iframe id="pdfPreview" width="600" height="500"></iframe>;
}
