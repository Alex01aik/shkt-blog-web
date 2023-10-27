"use client";

import { findOneLocalePost, findOnePost } from "@/app/shared/api";
import { useStore } from "@/app/shared/react-store/useStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Post: React.FC = () => {
  const { id } = useParams();
  const { state, dispatch } = useStore();
  const [post, setPost] = useState<any>(null);
  useEffect(() => {
    const getPost = async () =>
      await findOneLocalePost({
        id: id as string,
        lang: state.actualLang?.lang ?? "en",
      });
    getPost().then((res) => {
      setPost(res.localePosts[0]);
    });
  }, [id, state.actualLang]);

  return (
    <div>
      <article dangerouslySetInnerHTML={{ __html: post?.body }} />
    </div>
  );
};

export default Post;
