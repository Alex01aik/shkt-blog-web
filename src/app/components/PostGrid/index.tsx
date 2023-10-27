"use client";

import { useEffect, useState } from "react";
import "./styles.css";
import { PostsGrid, Post, PostTitle, PostAdminPanel } from "./styles";
import Button from "../Button";
import Link from "next/link";
import { getPosts, Post as PostType } from "@/app/shared/react-store/store";
import { useStore } from "@/app/shared/react-store/useStore";
import { deleteOnePost } from "@/app/shared/api";

export type PostGridProps = {
  isAdmin?: boolean;
};

const PostGrid: React.FC<PostGridProps> = ({ isAdmin }) => {
  const { state, dispatch } = useStore();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // TODO accurate check (checking all window height now)
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= documentHeight) {
        // TODO get next page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getPosts(dispatch, state);
  }, [state.actualLang]);

  useEffect(() => {
    setPosts(state.posts);
  }, [state.posts]);

  return (
    <PostsGrid $isadmin={isAdmin ? "true" : "false"}>
      {posts.map((item) => (
        <div key={item.id}>
          <Link href={`/post/${item.id}`}>
            <Post>
              <PostTitle className="postTitle">
                {item.localePosts[0]?.title}
              </PostTitle>
            </Post>
          </Link>
          {isAdmin && (
            <PostAdminPanel>
              <Link href={`/admin/posts/${item.id}`}>
                <Button>update</Button>
              </Link>
              <Button
                onClick={async () => {
                  await deleteOnePost({ id: item.id });
                }}
              >
                delete
              </Button>
            </PostAdminPanel>
          )}
        </div>
      ))}
    </PostsGrid>
  );
};

export default PostGrid;
