import { gql } from "@/app/services/graphqlService";
import {
  createOnePostQuery,
  deleteOnePostQuery,
  findManyLangsQuery,
  findManyLocalePostQuery,
  findOneLocalePostQuery,
  findOnePostQuery,
  loginQuery,
  updateOnePostQuery,
} from "./queries";

export const getManyLangs = async () => {
  const res: any = await gql.graphQLClient.request(findManyLangsQuery);
  return res?.findManyLangs;
};

export const getPosts = async (lang: string) => {
  const res = await gql.graphQLClient.request(findManyLocalePostQuery, {
    lang,
  });
  return (res as any).findManyLocalePost;
};

export const login = async (formData: { email: string; password: string }) => {
  const res: any = await gql.graphQLClient.request(loginQuery, formData);
  return res.login;
};

export const createOnePost = async (data: any) => {
  console.log("data", data);
  const res: any = await gql.graphQLClient.request(createOnePostQuery, data);
  console.log("res");
  return res.deleteOnePost;
};

export const updateOnePost = async (data: any) => {
  const res: any = await gql.graphQLClient.request(updateOnePostQuery, data);
  return res.deleteOnePost;
};

export const findOnePost = async (data: { id: string }) => {
  const res: any = await gql.graphQLClient.request(findOnePostQuery, data);
  return res.findOnePost;
};

export const deleteOnePost = async (data: { id: string }) => {
  const res: any = await gql.graphQLClient.request(deleteOnePostQuery, data);
  return res.deleteOnePost;
};

export const findOneLocalePost = async (data: { id: string; lang: string }) => {
  const res: any = await gql.graphQLClient.request(
    findOneLocalePostQuery,
    data
  );
  return res.findOneLocalePost;
};
