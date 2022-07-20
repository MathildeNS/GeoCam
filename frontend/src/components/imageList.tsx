import { FC, useEffect, useRef, useState } from "react";
import { useMainContext } from "../contexts/mainContext";
import "../css/first.css";

import api from "../utils/api";
import ImageMasonry from "./masonry";
import Dropzone from "react-dropzone";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const First: FC<{}> = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { updateListFile, setDeployment, project, projects, deployment } =
    useMainContext();
  let params = useParams();
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      setDeployment(params.deploymentId);
      updateListFile();
    })();
  }, []);

  const Uint8ArrayToHexString = (ui8array: Uint8Array) => {
    var hexstring = "",
      h;
    for (var i = 0; i < ui8array.length; i++) {
      h = ui8array[i].toString(16);
      if (h.length === 1) {
        h = "0" + h;
      }
      hexstring += h;
    }
    var p = Math.pow(2, Math.ceil(Math.log2(hexstring.length)));
    hexstring = hexstring.padStart(p, "0");
    return hexstring;
  };

  const save = () => {
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const digest = crypto.subtle.digest(
          "SHA-256",
          new Uint8Array(reader.result as ArrayBuffer)
        );
        digest.then((res) => {
          let result = new Uint8Array(res);
          var hash = Uint8ArrayToHexString(result);
          api
            .postForm(
              "files/upload/",
              { hash, file },
              { headers: { "Content-Type": "multipart/form-data" } }
            )
            .then((res) => {
              updateListFile();
            })
            .catch((err) => console.log(err));
        });
      };
    }
    clear();
  };

  const clear = () => {
    setFiles([]);
  };

  const loadFile = (f: any) => {
    f.forEach((f) => files.push(f));
    setFiles(files);
  };

  const dropZoneDisplayText = () => {
    if (files.length === 0) {
      return (
        <p>Glissez/Déposez ou cliquez pour importer 10 fichiers maximum</p>
      );
    } else {
      return <p>{files.map((f) => f.name).join(", ")}</p>;
    }
  };

  return (
    <>
      <Dropzone onDrop={loadFile} multiple maxFiles={10}>
        {({ getRootProps, getInputProps }) => (
          <section id="dropzone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneDisplayText()}
            </div>
          </section>
        )}
      </Dropzone>
      <Button variant="outlined" onClick={clear}>
        clear
      </Button>
      <Button variant="outlined" onClick={save}>
        save
      </Button>
      <ImageMasonry></ImageMasonry>
    </>
  );
};

export default First;
