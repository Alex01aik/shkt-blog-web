import { gql } from "@/app/services/graphqlService";
import {
  createOnePostQuery,
  deleteOnePostQuery,
  findManyLangsQuery,
  findManyLocalePostQuery,
  findOneLocalePostByKeyQuery,
  findOneLocalePostQuery,
  findOnePostByKeyQuery,
  findOnePostQuery,
  loginQuery,
  refreshQuery,
  updateOnePostQuery,
} from "./queries";
import { Post } from "./types/Post";
import { AuthExcaption } from "./exceptions";

const callAPI = async (
  apiFunction: (data?: any) => Promise<any>,
  ...args: any[]
) => {
  try {
    return await apiFunction(...args);
  } catch (error: any) {
    if (error?.response?.errors?.length) {
      const isJwtNotProvided = error?.response?.errors.find(
        (err: any) => err.message === "jwt must be provided"
      );

      if (isJwtNotProvided) {
        window.location.reload();
        throw AuthExcaption;
      }

      const isJwtExpired = error?.response?.errors.find(
        (err: any) => err.message === "jwt expired"
      );
      if (isJwtExpired) {
        try {
          const res: any = await gql.graphQLClient.request(refreshQuery, {
            token: gql.getRefreshToken(),
          });
          localStorage.setItem("tokens", JSON.stringify(res.refresh));
          gql.refreshClient();
          apiFunction(...args);
        } catch (error) {
          localStorage.removeItem("tokens");
          window.location.reload();
          throw AuthExcaption;
        }
      }
    } else {
      throw error;
    }
  }
};

export const getManyLangs = async () => {
  const query = async () => {
    const res: any = await gql.graphQLClient.request(findManyLangsQuery);
    return res?.findManyLangs;
  };

  return callAPI(query);
};

export const getPosts = async (data: {
  lang: string;
  take: number;
  skip: number;
}) => {
  const query = async (data: { lang: string; take: number; skip: number }) => {
    const res: any = await gql.graphQLClient.request(
      findManyLocalePostQuery,
      data
    );
    return res.findManyLocalePost;
  };

  return callAPI(query, data);
};

export const login = async (data: { email: string; password: string }) => {
  const query = async (data: { email: string; password: string }) => {
    const res: any = await gql.graphQLClient.request(loginQuery, data);
    localStorage.setItem("tokens", JSON.stringify(res.login));
    gql.refreshClient();
  };

  return callAPI(query, data);
};

export const createOnePost = async (data: any) => {
  const query = async (data: any) => {
    const res: any = await gql.graphQLClient.request(createOnePostQuery, data);
    return res.deleteOnePost;
  };

  return callAPI(query, data);
};

export const updateOnePost = async (data: any) => {
  const query = async (data: any) => {
    const res: any = await gql.graphQLClient.request(updateOnePostQuery, data);
    return res.updateOnePost;
  };

  return callAPI(query, data);
};

export const findOnePost = async (data: { id: string }) => {
  const query = async (data: { id: string }) => {
    const res: any = await gql.graphQLClient.request(findOnePostQuery, data);
    return res.findOnePost;
  };

  return callAPI(query, data);
};

export const findOnePostByKey = async (data: {
  key: string;
}): Promise<Post> => {
  const query = async (data: { key: string }) => {
    const res: any = await gql.graphQLClient.request(
      findOnePostByKeyQuery,
      data
    );
    return res.findOnePostByKey;
  };

  return callAPI(query, data);
};

export const deleteOnePost = async (data: { id: string }) => {
  const query = async (data: { id: string }) => {
    const res: any = await gql.graphQLClient.request(deleteOnePostQuery, data);
    return res.deleteOnePost;
  };

  return callAPI(query, data);
};

export const findOneLocalePost = async (data: { id: string; lang: string }) => {
  const query = async (data: { id: string; lang: string }) => {
    const res: any = await gql.graphQLClient.request(
      findOneLocalePostQuery,
      data
    );
    return res.findOneLocalePost;
  };

  return callAPI(query, data);
};

export const findOneLocalePostByKey = async (data: {
  key: string;
  lang: string;
}) => {
  const query = async (data: { key: string; lang: string }) => {
    const res: any = await gql.graphQLClient.request(
      findOneLocalePostByKeyQuery,
      data
    );
    return res.findOneLocalePostByKey;
  };

  return callAPI(query, data);
};
