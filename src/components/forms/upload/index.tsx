import React, { useRef } from "react";

const FileUploadButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const allowedExtensions = [".doc", ".docx", ".pdf"];
      const fileExtension = selectedFile.name.slice(
        ((selectedFile.name.lastIndexOf(".") - 1) >>> 0) + 2
      );

      if (allowedExtensions.includes("." + fileExtension)) {
        // Valid file type, handle the file as needed
        console.log("Selected file:", selectedFile.name);
      } else {
        // Invalid file type, handle the error as needed
        console.error(
          "Invalid file type. Please select a .doc, .docx, or .pdf file."
        );
      }
    }
  };

  return (
    <div className="text-center">
      <button onClick={handleButtonClick} className="text-white underline">
        Click to upload
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".doc, .docx, .pdf"
      />
    </div>
  );
};

export default FileUploadButton;
