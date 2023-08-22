import styles from "./FileMenuItem.module.css";

const FileMenuItem = ({ id, currId, name, onSelect }) => {
  const selectedClass = currId === id ? styles.selected : "";

  return (
    <div className={`${styles.item} ${selectedClass}`} onClick={onSelect}>
      {name}
    </div>
  );
};

export default FileMenuItem;
