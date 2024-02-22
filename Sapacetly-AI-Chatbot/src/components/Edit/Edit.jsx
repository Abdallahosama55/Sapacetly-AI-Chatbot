import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";

export default function Edit() {
  const [limit, setLimit] = useState(1000000);
  const [control, setControl] = useState(true);
  const [height, setHeight] = useState(0);
  const [image, setImage] = useState("");
  const [character, setCharacter] = useState(0);
  const [text, setText] = useState({
    ops: [
      {
        insert: ""
      }
    ]
  });

  const placeholder = "كيف يمكنني مساعدتك اليوم";

  var modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ size: ["small", false, "large", "huge"] }],
      ["image"],
      [{ color: [] }, { background: [] }],

      ["clean"]
    ],
    clipboard: {
      matchVisual: false
    },
    imageResize: {}
  };

  const { quill, quillRef, Quill } = useQuill({
    modules,
    placeholder
  });

  if (Quill && !quill) {
    Quill.register("modules/imageResize", ImageResize);
  }

  React.useEffect(() => {
    const input = document.getElementById("html2canvas-container");
    if (height > 5) {
      var x = document.createElement("HR");
      input.EditendChild(x);
      console.log("we cam here");
    }
  }, [height]);

  React.useEffect(() => {
    if (quill) {
      if (quill) {
        quill.setContents(text);
      }

      quill.on("text-change", function (delta, old, source) {
        if (quill.getLength() > limit) {
          quill.deleteText(limit, quill.getLength());
          console.log("Text change!");
          console.log(quill.getLength());
        }
      });
    }
  }, [quill, control]);

  const exportFile = async (type) => {
    switch (type) {
      case "pdf":
        exportToPdf();
        break;
      case "word":
        exportToWord();
        break;
      case "txt":
        exportToTxt();
        break;
      default:
        break;
    }
  };

  const exportToPdf = () => {
    const input = document.getElementById("html2canvas-container");

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");

      var doc = new jsPDF();
      doc.addImage(imgData, "PNG", 0, 0);
      doc.save("file.pdf");
    });
  };

  const exportToWord = async () => {
    const delta = quill.getContents();
    const docAsBlob = await quillToWord.generateWord(delta, {
      exportAs: "blob"
    });
    saveAs(docAsBlob, "word-export.docx");
  };

  const exportToTxt = () => {
    const textToSave = quill.getText();
    const blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "text-export.txt");
  };

  return (
    <div>
      <Container style={{ marginTop: "20xp" }}></Container>

      {image && <img src={image} alt="Preview" />}

      <Container>
        <Row style={{ marginTop: "20px" }} className=" shadow">
          <Col md={5} className=" " >
          <div className="ps-4 pt-4">
          
          <h6  className=" font-bold text-blue"> العنوان </h6>
          <p  className=" font-light text-blue"> 1.4 الف كلمة </p>
          </div>
          
          </Col>
          <Col md={3}></Col>
          <Col md={4} >
            <Dropdown  className="pt-3">
              <Dropdown.Toggle variant="pink" className="  bg-white text-blue shadow " id="dropdown-basic">
               تصدير
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => exportFile("pdf")}>
                  PDF
                </Dropdown.Item>
                <Dropdown.Item onClick={() => exportFile("word")}>
                  Word
                </Dropdown.Item>
                <Dropdown.Item onClick={() => exportFile("txt")}>
                  Text
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
        
          <div className="col-md-12 shadow  py-5">
            <div>
              <div
                id="html2canvas-container"
                ref={quillRef}
                style={{
                  border: "none",
                 fontFamily:"GE SS Two Medium",
                 minHeight:"45vh",
             
                  margin:"30px",
                 textAlign:"end"
                }}
              
              >
                <hr />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
