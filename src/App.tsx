import { useRef, useState } from "react";
import Form from "./components/Form";
import TemplateCard from "./components/TemplateCard";
import { FormDataType } from "./types/form";
import Download from "./components/Download";

import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [image, setImage] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  function setData(data: FormDataType) {
    setFirstname(data.firstname);
    setLastname(data.lastname);
    setImage(data.image);
  }

  return (
    <main>
      <div className="actions">
        <Form onSubmit={(data: FormDataType) => setData(data)} />

        <Download node={ref} name={firstname} />
      </div>

      <div className="preview" ref={ref}>
        <TemplateCard
          image_url={image}
          firstname={firstname || "Firstname"}
          lastname={lastname}
        />
      </div>
    </main>
  );
}

export default App;
