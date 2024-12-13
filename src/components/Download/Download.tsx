import { RefObject, useCallback } from "react";
import "./downoad.css";
import { toJpeg } from "html-to-image";
import { saveAs } from "file-saver";

interface DownloadProps {
  node: RefObject<HTMLElement>;
  name: string;
}

export default function Download({
  node,
  name = "GNDC_member",
}: DownloadProps) {
  const onButtonClick = useCallback(() => {
    if (node.current === null) {
      return;
    }

    toJpeg(node.current, {
      canvasWidth: 900,
      canvasHeight: 900,
      type: "image/jpeg",
    })
      .then((dataUrl) => {
        saveAs(dataUrl, `je_serai_la_${name}.jpeg`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [node, name]);

  return (
    <section>
      <button onClick={onButtonClick}>Download Image</button>
    </section>
  );
}
