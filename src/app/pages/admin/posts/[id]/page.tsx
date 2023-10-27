"use client";

import TinymceEditor from "@/app/components/TinymceEditor";
import Button from "@/app/components/Button";
import LangToggler from "@/app/components/LangToggler";
import "./styles.css";

import { useEffect, useRef, useState } from "react";
import { useStore } from "@/app/shared/react-store/useStore";
import { useParams } from "next/navigation";
import { createOnePost, findOnePost, updateOnePost } from "@/app/shared/api";

export type AdminPostPageProps = {};

const AdminPostPage: React.FC<AdminPostPageProps> = () => {
  const { id } = useParams();
  const { state, dispatch } = useStore();
  const ref = useRef(null);
  const [actualLang, setActualLang] = useState<string>("");
  const [postData, setPostData] = useState<any>([]);
  const [resetSignal, setResetSignal] = useState<boolean>(false);

  const addLocaleData = () => {
    let isNeedToAdd: boolean = true;

    const updatedData = postData.map((item: any) => {
      if (item.lang === actualLang) {
        isNeedToAdd = false;
        return {
          ...item,
          content: (ref.current as any).getContent(),
        };
      }
      return item;
    });
    const newData = isNeedToAdd
      ? [
          ...updatedData,
          {
            lang: actualLang,
            content: (ref.current as any).getContent(),
          },
        ]
      : updatedData;
    setPostData(newData);

    return newData;
  };

  const resetEditor = () => {
    setResetSignal(true);
    setTimeout(() => {
      setResetSignal(false);
    }, 100);
  };

  useEffect(() => {
    if (id !== "new") {
      const getPost = async () => await findOnePost({ id: id as string });
      getPost().then((res) => {
        const initData = res.localePosts.map((item: any) => ({
          lang: item.languageLang,
          content: item.body,
        }));
        setPostData(initData);
      });
    }
  }, [id]);

  useEffect(() => {
    setActualLang(state.langs![0].lang);
  }, [state.langs]);

  return (
    <div>
      <LangToggler
        customAction={(lang) => {
          addLocaleData();
          const langData = postData?.find(
            (item: any) => item?.lang === lang.lang
          );
          setActualLang(lang.lang);
          if (!langData) {
            resetEditor();
          }
        }}
      />

      <div id="adminPostPage">
        <div id="adminPostMainImage">
          <label>Main image</label>
          <input type="file" />
        </div>
        <div id="adminPostPageEditor">
          <TinymceEditor
            editorRef={ref}
            resetSignal={resetSignal}
            initialValue={
              postData.find((item: any) => item?.lang === actualLang)
                ?.content ?? ""
            }
          />
        </div>
        <div id="adminPostPageButtonPanel">
          <Button
            onClick={async () => {
              const data = addLocaleData();
              if (id === "new") {
                await createOnePost({ localePosts: data });
              } else {
                await updateOnePost({ id, localePosts: data });
              }
              resetEditor();
            }}
          >
            public post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPostPage;
