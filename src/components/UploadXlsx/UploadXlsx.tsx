import * as XLSX from "xlsx";
import styles from "./UploadXlsx.module.css";
import { setSongs } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../store";
import { songsSelect } from "../../store/selectors";
import { Link } from "react-router-dom";
import FileUpload from "../FileUpload/FileUpload";
import { useState } from "react";

const UploadXlsx = () => {
  const songs = useAppSelector(songsSelect)
  const dispatch = useAppDispatch()

  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file?.name || '');
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: any[] = XLSX.utils.sheet_to_json(sheet);

      const formattedData = parsedData.map((row) => {

        return {
          title: row.title || "",
          artist: row.artist || "",
          image: row.image || "",
          status: 'active'
        }
      });

      dispatch(setSongs(formattedData));
      // setData(formattedData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className={styles.container}>
      <FileUpload onFileSelect={handleFileUpload} fileName={fileName} />
      {songs.length > 0 && (
        <>
          <div className={styles.preview}>
            <ul>
              {songs.map((item, index) => (
                <li key={index}>
                  {index + 1}. {item.title} - {item.artist}
                </li>
              ))}
            </ul>
          </div>
          <Link className={styles.startGame} to="/game">Старт игры</Link>
        </>
      )}
    </div>
  );
};

export default UploadXlsx;