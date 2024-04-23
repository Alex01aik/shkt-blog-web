"use client";

import Button from "@/app/components/Button";
import LangToggler from "@/app/components/LangToggler";
import "./styles.css";

import { useEffect, useState } from "react";
import { useStore } from "@/app/shared/react-store/useStore";
import { useParams, useRouter } from "next/navigation";
import {
  createOnePost,
  findOnePostByKey,
  updateOnePost,
} from "@/app/shared/api";
import { Post } from "@/app/shared/types/Post";
import { LocalePost } from "@/app/shared/types/LocalePost";
import LocalePostEditor from "@/app/components/LocalePostEditor";

export type AdminPostPageProps = {};

const AdminPostPage: React.FC<AdminPostPageProps> = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { key } = useParams();
  const { state } = useStore();
  const [actualLang, setActualLang] = useState<string>(state.langs![0].lang);
  const [post, setPost] = useState<Post>({
    id: "new",
    key: "",
    localePosts: [],
  });
  const [localePost, setLocalePost] = useState<LocalePost>({
    title: "",
    body: "",
    languageLang: actualLang,
  });

  const addLocalePost = () => {
    let newPostData: Post;
    const isUpdate = post.localePosts.find(
      (item) => item.languageLang === localePost.languageLang
    );

    if (!isUpdate) {
      newPostData = {
        ...post,
        localePosts: [...post.localePosts, localePost],
      };
    } else {
      newPostData = {
        ...post,
        localePosts: post.localePosts.map((item) =>
          item.languageLang === localePost.languageLang ? localePost : item
        ),
      };
    }
    return newPostData;
  };

  const getPost = (key: string) => {
    setIsLoading(true);
    if (key !== "new") {
      const fetchPost = async () => await findOnePostByKey({ key });
      fetchPost().then((res: Post) => {
        setPost(res);
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPost(key as string);
  }, [key]);

  useEffect(() => {
    const locPost = post.localePosts.find((p) => p.languageLang === actualLang);

    setLocalePost(
      locPost ?? {
        title: "",
        body: "",
        languageLang: actualLang,
      }
    );
  }, [actualLang, post]);

  const publickPost = async (post: Post) => {
    if (post.id === "new") {
      await createOnePost({ key: post.key, localePosts: post.localePosts });
      const newPost = await findOnePostByKey({ key: post.key });
      router.push(`/admin/posts/${newPost.key}`);
    } else {
      await updateOnePost(post);
      const newPost = await findOnePostByKey({ key: key as string });
      setPost(newPost);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div id="adminPostPage">
      <fieldset className="postInput">
        <label>Language</label>
        <LangToggler
          customAction={(lang) => {
            setActualLang(lang.lang);
            setPost(addLocalePost());
          }}
        />
      </fieldset>
      <fieldset className="postInput">
        <label htmlFor="adminPostKey">Key</label>
        <input
          id="adminPostKey"
          value={post.key}
          onChange={(e) => {
            setPost({ ...post, key: e.target.value });
          }}
        />
      </fieldset>
      <LocalePostEditor post={localePost} setPost={setLocalePost} />
      <Button
        onClick={() => {
          publickPost(addLocalePost());
        }}
      >
        public post
      </Button>
    </div>
  );
};

export default AdminPostPage;
