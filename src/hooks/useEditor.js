import { useState, useRef } from "react";

export default function useEditor() {
  const editorRef = useRef(null);
  const [htmlOutput, setHtmlOutput] = useState();

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const convertToHtml = () => {
    if (editorRef.current) {
      setHtmlOutput(editorRef.current.getContent());
    }
  };

  return { editorRef, log, htmlOutput, convertToHtml };
}
