import FileMenu from "./FileMenu";

import "./styles.css";

export default function App() {
  return (
    <FileMenu
      className="App"
      files={[
        { id: 1, name: "UESP_4760" },
        { id: 2, name: "UEBANK_4760" }
      ]}
      onSelect={(id) => console.log(id)}
    />
  );
}
