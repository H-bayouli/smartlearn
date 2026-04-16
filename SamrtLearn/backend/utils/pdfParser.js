import fs from "fs/promises";
import { PDFParse } from "pdf-parse";


/**
 * Extract text from PDF file
 * @param {string} filePath - path to PDF file
 * @returns {Promise<{text: string, numPages: number}>}
 */

export const extractTextFromPDF = async (filePath) => {
    try {
        const dataBuffer = await fs.readFile(filePath);
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return {
            text: data.text,
            numPages: data.numpages,
            info: data.info
        };
    } catch (error) {
        console.error("PDF parsing error:", error);
        throw new Error("failed to extract text from PDF");
    }
};

