"use client";

import { Editor, IAllProps } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";

export type TinymceEditorProps = IAllProps & {
  resetSignal?: boolean;
};

const TinymceEditor: React.FC<TinymceEditorProps> = ({
  resetSignal,
  ...props
}) => {
  const [editorState, setEditorState] = useState<any>(null);

  useEffect(() => {
    setEditorState({
      height: "100%",
      resize: false,
      content: props.initialValue ?? "",
      font_family_formats:
        "Andale Mono=andale mono,times; " +
        "Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; " +
        "Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; " +
        "Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; " +
        "Impact=impact,chicago; Oswald=oswald; Symbol=symbol; " +
        "Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; " +
        "Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; " +
        "Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats;" +
        "Heavy Snow=p22-yule-heavy-snow, sans-serif; Roboto=Roboto, sans-serif;",
      plugins:
        "preview searchreplace autolink directionality visualblocks " +
        "visualchars fullscreen image link media codesample " +
        "table charmap pagebreak nonbreaking anchor insertdatetime advlist " +
        "lists wordcount code help pageembed",
      toolbar:
        "undo redo | formatselect | bold italic underline strikethrough | " +
        "forecolor backcolor blockquote | link image powerpaste media pageembed proscons | " +
        "alignleft aligncenter alignright alignjustify | " +
        "numlist bullist outdent indent | removeformat | help",
      content_style: "@import url('https://use.typekit.net/nxd8hle.css",
    });
  }, [props.initialValue]);

  return editorState ? (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      init={editorState}
      initialValue={editorState.content}
      onChange={props.onChange}
    />
  ) : (
    <></>
  );
};

export default TinymceEditor;
