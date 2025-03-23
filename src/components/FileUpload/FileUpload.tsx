import React, { useState } from "react";
import styles from "./FileUpload.module.css";

interface FileUploadProps {
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, fileName }) => {

  return (
    <div className={styles.uploadContainer}>
      <label className={styles.uploadLabel}>
        📂 Выберите файл
        <input type="file" accept=".xlsx" onChange={onFileSelect} className={styles.hiddenInput} />
      </label>
      {fileName && <p className={styles.fileName}>📄 {fileName}</p>}
    </div>
  );
};

export default FileUpload;