"use client";

import { DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { useEffect, useState } from "react";

const DraftEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<any>(null);

  useEffect(() => {
    const state = EditorState.createEmpty();
    setEditorState(state);
  }, []);

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return editorState ? (
    <Editor
      editorKey="editor"
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={setEditorState}
    />
  ) : (
    <></>
  );
};

export default DraftEditor;
