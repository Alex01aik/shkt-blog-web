"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import { PostsGrid, Post, PostTitle, PostAdminPanel } from "./styles";
import Button from "../Button";
import Link from "next/link";
import { Post as PostType } from "@/app/shared/types/Post";
import { useStore } from "@/app/shared/react-store/useStore";
import { deleteOnePost, getPosts } from "@/app/shared/api";

export type PostGridProps = {
  isAdmin?: boolean;
};

const PostGrid: React.FC<PostGridProps> = ({ isAdmin }) => {
  const [isAll, setIsAll] = useState<boolean>(false);
  const take = 10;
  const [skip, setSkip] = useState<number>(0);
  const { state } = useStore();
  const [posts, setPosts] = useState<PostType[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const [isListEnd, setIsListEnd] = useState<boolean>(false);

  const fetchPosts = useCallback(async () => {
    const res = await getPosts({ lang: state.actualLang!.lang, take, skip });
    setPosts((prev) => {
      if (res.length < take) {
        setIsAll(true);
      }
      return [...prev, ...res];
    });
  }, [state.actualLang, skip]);

  useEffect(() => {
    if (isListEnd && !isAll) {
      setSkip((prev) => prev + take);
    }
  }, [isListEnd, isAll]);

  useEffect(() => {
    fetchPosts();
    const handleScroll = () => {
      if (ref.current) {
        const grid = ref.current;
        if (grid.getBoundingClientRect().bottom <= window.innerHeight) {
          setIsListEnd(true);
        } else {
          setIsListEnd(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPosts, ref]);

  return (
    <PostsGrid ref={ref} $isadmin={isAdmin ? "true" : "false"}>
      {posts.map((item) => (
        <div className="postCard" key={item.key}>
          <Link href={`/post/${item.key}`}>
            <Post>
              <PostTitle className="postTitle">
                {item.localePosts[0]?.title}
              </PostTitle>
            </Post>
          </Link>
          {isAdmin && (
            <PostAdminPanel>
              <Link href={`/admin/posts/${item.key}`}>
                <Button>update</Button>
              </Link>
              <Button
                onClick={async () => {
                  await deleteOnePost({ id: item.key });
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
