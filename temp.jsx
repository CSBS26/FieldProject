import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const GeneratePDF = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Base64 Images (replace with your actual images)
    const vnrvjietLogo = 'data:image/jpeg;base64,...'; // VNRVJIET logo placeholder
    const researchImage = 'data:image/jpeg;base64,...'; // Research image placeholder

    // Sample table data
    const tableColumn = ["ID", "Title", "Author", "Journal", "Year"];
    const tableRows = [
      [1, "Advanced AI Techniques", "Dr. John Doe", "AI Journal", "2022"],
      [2, "Quantum Computing", "Dr. Anna Smith", "Quantum Journal", "2021"],
      [3, "Robotics and Automation", "Dr. Peter Jones", "Robotics Journal", "2020"],
    ];

    // Add college logo
    doc.addImage(vnrvjietLogo, 'JPEG', 14, 8, 30, 30);

    // Add main title with custom font size and color
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.text("VNRVJIET Hyderabad", 50, 20);

    // Add subtitle
    doc.setFontSize(16);
    doc.setTextColor(100);
    doc.text("Faculty Published Papers", 50, 30);

    // Add research image
    doc.addImage(researchImage, 'JPEG', 160, 8, 40, 40);

    // Add a line break
    doc.setLineWidth(0.5);
    doc.line(14, 40, 196, 40);

    // Add a small description
    doc.setFontSize(12);
    doc.setTextColor(50);
    doc.text("List of research papers published by our faculty.", 14, 48);

    // Add table with styles
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      styles: {
        fontSize: 10,
        halign: 'center',
        valign: 'middle',
        cellPadding: 3,
        overflow: 'linebreak',
        lineColor: [44, 62, 80],
        lineWidth: 0.5,
        font: "helvetica",
        textColor: [44, 62, 80],
      },
      headStyles: {
        fillColor: [23, 162, 184],
        textColor: [255, 255, 255],
        fontSize: 11,
        fontStyle: 'bold',
      },
      bodyStyles: {
        fillColor: [245, 245, 245],
      },
      alternateRowStyles: {
        fillColor: [255, 255, 255],
      },
      margin: { top: 10 },
    });

    // Footer with page number
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10);
    }

    // Save the PDF
    doc.save("Faculty_Published_Papers.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF with Faculty Papers</button>
    </div>
  );
};

export default GeneratePDF;
