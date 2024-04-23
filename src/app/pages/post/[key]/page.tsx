"use client";

import { findOneLocalePostByKey } from "@/app/shared/api";
import { useStore } from "@/app/shared/react-store/useStore";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import "./styles.css";

const Post: React.FC = () => {
  const { key } = useParams();
  const { state } = useStore();
  const [post, setPost] = useState<any>(null);

  const getPost = useCallback(
    async () =>
      await findOneLocalePostByKey({
        key: key as string,
        lang: state.actualLang?.lang ?? "en",
      }),
    [key, state.actualLang?.lang]
  );

  useEffect(() => {
    getPost().then((res) => {
      setPost(res.localePosts[0]);
    });
  }, [getPost]);

  return (
    <div>
      <h1 id="postTitle">{post?.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post?.body }} />
    </div>
  );
};

export default Post;
