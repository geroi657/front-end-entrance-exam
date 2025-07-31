import html2pdf from "html2pdf.js";

const button = document.getElementById("downloadPDF");

button.addEventListener("click", () => {
    const html = document.getElementsByTagName("html")[0];
    console.log(html2pdf(html));
})