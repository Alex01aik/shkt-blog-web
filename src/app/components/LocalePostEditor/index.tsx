"use client";

import { LocalePost } from "@/app/shared/types/LocalePost";

import TinymceEditor from "@/app/components/TinymceEditor";
import "./styles.css";
import { Dispatch, SetStateAction } from "react";

export type LocalePostEditorProps = {
  post: LocalePost;
  setPost: Dispatch<SetStateAction<LocalePost>>;
};

const LocalePostEditor: React.FC<LocalePostEditorProps> = ({
  post,
  setPost,
}) => {
  return (
    <div id="adminPostPage">
      <fieldset className="postInput">
        <label htmlFor="adminPostTitle">Title</label>
        <textarea
          id="adminPostTitle"
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
      </fieldset>
      <div id="adminPostPageEditor">
        <TinymceEditor
          value={post.body}
          initialValue={post.body}
          onChange={(e) => {
            setPost({ ...post, body: e.target.getContent() });
          }}
        />
      </div>
    </div>
  );
};

export default LocalePostEditor;
