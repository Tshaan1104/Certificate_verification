import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const generatePDF = async (certificateData) => {
  try {
    const doc = await PDFDocument.create();
    const page = doc.addPage([600, 400]);

    // Load fonts
    const timesRomanFont = await doc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBoldFont = await doc.embedFont(StandardFonts.TimesRomanBold);
    const courierFont = await doc.embedFont(StandardFonts.Courier);
const courierBoldFont = await doc.embedFont(StandardFonts.CourierBold);


    // Draw a gradient-style background
    page.drawRectangle({
      x: 0,
      y: 0,
      width: page.getWidth(),
      height: page.getHeight(),
      color: rgb(240 / 255, 240 / 255, 255 / 255), // Light background color
    });

    // Add a stylish overlay rectangle with transparency
    page.drawRectangle({
      x: 50,
      y: 50,
      width: page.getWidth() - 100,
      height: page.getHeight() - 100,
      color: rgb(200 / 255, 220 / 255, 255 / 255), // Subtle color for overlay
      opacity: 0.3, // Transparency effect
    });

    // Draw border
    const borderWidth = 10;
    page.drawRectangle({
      x: borderWidth / 2,
      y: borderWidth / 2,
      width: page.getWidth() - borderWidth,
      height: page.getHeight() - borderWidth,
      borderWidth: borderWidth,
      color: rgb(1, 1, 1),
      borderColor: rgb(54 / 255, 75 / 255, 197 / 255),
    });

    // Title
    page.drawText("Certificate of Completion", {
      x:
        page.getWidth() / 2 -
        courierBoldFont.widthOfTextAtSize("Certificate of Completion", 30) /
          2,
      y: page.getHeight() - 80,
      size: 30,
      color: rgb(128 / 255, 0 / 255, 0 / 255), // Maroon color  
      font: courierBoldFont,
    });

    // Subtitle
    page.drawText("This is to certify that", {
      x:
        page.getWidth() / 2 -
        timesRomanFont.widthOfTextAtSize("This is to certify that", 18) / 2,
      y: page.getHeight() - 130,
      size: 18,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    // Recipient Name
    page.drawText(certificateData.name, {
      x:
        page.getWidth() / 2 -
        timesRomanBoldFont.widthOfTextAtSize(certificateData.name, 22) / 2,
      y: page.getHeight() - 160,
      size: 22,
      color: rgb(0, 0, 0),
      font: timesRomanBoldFont,
    });

    // Body Text
    page.drawText("has successfully completed the internship program in", {
      x:
        page.getWidth() / 2 -
        timesRomanFont.widthOfTextAtSize(
          "has successfully completed the internship program in",
          16
        ) / 2,
      y: page.getHeight() - 200,
      size: 16,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    // Internship Domain
    page.drawText(certificateData.internshipDomain, {
      x:
        page.getWidth() / 2 -
        timesRomanBoldFont.widthOfTextAtSize(
          certificateData.internshipDomain,
          18
        ) / 2,
      y: page.getHeight() - 230,
      size: 18,
      color: rgb(0, 0, 0),
      font: timesRomanBoldFont,
    });

    // Date Range
    const dateRangeText = `from ${new Date(
      certificateData.internshipStartDate
    ).toLocaleDateString()} to ${new Date(
      certificateData.internshipEndDate
    ).toLocaleDateString()}.`;
    page.drawText(dateRangeText, {
      x:
        page.getWidth() / 2 -
        timesRomanFont.widthOfTextAtSize(dateRangeText, 16) / 2,
      y: page.getHeight() - 260,
      size: 16,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    // Issued Date, Certificate ID, and Authorized Signature
    const infoTextX = 50;
    const initialInfoTextY = 80; // Adjust this value to place the text higher
    const infoTextGap = 20;

    const issuedDateText = `Issued on: ${new Date().toLocaleDateString()}`;
    page.drawText(issuedDateText, {
      x: infoTextX,
      y: initialInfoTextY,
      size: 10,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    const certificateIdText = `Certificate ID: ${certificateData.certificateId}`;
    page.drawText(certificateIdText, {
      x: infoTextX,
      y: initialInfoTextY - infoTextGap,
      size: 10,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    const authorizedSignatureText = `Authorized Signature:`;
    page.drawText(authorizedSignatureText, {
      x: infoTextX,
      y: initialInfoTextY - 2 * infoTextGap,
      size: 10,
      color: rgb(0, 0, 0),
      font: timesRomanFont,
    });

    const pdfBytes = await doc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};
