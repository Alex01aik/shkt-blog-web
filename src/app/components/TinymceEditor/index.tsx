"use client";

import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject, useEffect, useState } from "react";

export type TinymceEditorProps = {
  editorRef: MutableRefObject<any>;
  initialValue?: string;
  resetSignal?: boolean;
};

const TinymceEditor: React.FC<TinymceEditorProps> = ({
  editorRef,
  initialValue,
  resetSignal,
}) => {
  const [editorState, setEditorState] = useState<any>(null);

  useEffect(() => {
    setEditorState({
      height: "100%",
      resize: false,
      content: initialValue ?? "",
      images_upload_handler: () => {
        // TODO upload image
      },
      //print paste hr toc imagetools textpattern template
      plugins:
        "preview searchreplace autolink directionality visualblocks " +
        "visualchars fullscreen image link media codesample " +
        "table charmap pagebreak nonbreaking anchor insertdatetime advlist " +
        "lists wordcount code help",
      toolbar:
        "undo redo | formatselect | bold italic underline strikethrough | " +
        "forecolor backcolor blockquote | link image media | " +
        "alignleft aligncenter alignright alignjustify | " +
        "numlist bullist outdent indent | removeformat | help",
    });
  }, [initialValue]);

  useEffect(() => {
    if (resetSignal) {
      editorRef.current.setContent("");
    }
  }, [resetSignal, editorRef]);

  return editorState ? (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey="67bax6zmbvrambbe0t8s16k0mh6nkwjat1rd9lnnwe4bkr8h"
      init={editorState}
      ref={editorRef}
      initialValue={editorState.content}
    />
  ) : (
    <></>
  );
};

export default TinymceEditor;
