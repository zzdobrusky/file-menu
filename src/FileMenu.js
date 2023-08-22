import { Component } from "react";
import FileMenuItem from "./FileMenuItem";

import styles from "./FileMenu.module.css";

class FileMenu extends Component {
  state = {
    currId: -1
  };

  onSelect = (id) => {
    this.setState({ currId: id });
    this.props.onSelect && this.props.onSelect(id);
  };

  render() {
    const { files, className } = this.props;
    const { currId } = this.state;

    return (
      <div className={`${styles.container} ${className}`}>
        {files.map((file) => (
          <FileMenuItem
            key={file.id}
            id={file.id}
            currId={currId}
            name={file.name}
            onSelect={() => this.onSelect(file.id)}
          />
        ))}
      </div>
    );
  }
}

export default FileMenu;
