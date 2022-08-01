import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import useEditor from "./hooks/useEditor";
import pretty from "pretty";

export default function App() {
  const { editorRef, log, htmlOutput, convertToHtml } = useEditor();

  return (
    <div className="py-8 h-screen">
      <div className="xl:w-3/4 p-2 mx-auto h-full border border-sky-800 rounded">
        <Editor
          tinymceScriptSrc={"/tinymce/tinymce.min.js"}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: "100%",
            width: "100%",
            menubar: "file edit view insert format tools table help",
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",

              // "quickbars",
            ],
            toolbar: [
              "code | undo redo | blocks fontsize |" +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | removeformat | image hr | help",

              // + "quickimage | ",
            ],

            selector: "textarea",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>

      {/* <div className="col-span-1">
        <div>
          <button className="bg-slate-600 text-white" onClick={convertToHtml}>
            Log editor content
          </button>
        </div>
        <div>
          <pre>{pretty(htmlOutput)}</pre>
        </div>
      </div> */}
    </div>
  );
}
