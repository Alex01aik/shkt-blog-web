import { gql } from "graphql-request";

export const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const refreshQuery = gql`
  query refresh($token: String!) {
    refresh(token: $token) {
      accessToken
      refreshToken
    }
  }
`;

export const findManyLocalePostQuery = gql`
  query findManyLocalePost($lang: String!, $take: Float!, $skip: Float!) {
    findManyLocalePost(lang: $lang, take: $take, skip: $skip) {
      id
      key
      localePosts {
        title
        body
        languageLang
      }
    }
  }
`;

export const findOneLocalePostQuery = gql`
  query findOneLocalePost($id: String!, $lang: String!) {
    findOneLocalePost(id: $id, lang: $lang) {
      id
      key
      localePosts {
        title
        body
        languageLang
      }
    }
  }
`;

export const findOneLocalePostByKeyQuery = gql`
  query findOneLocalePostByKey($key: String!, $lang: String!) {
    findOneLocalePostByKey(key: $key, lang: $lang) {
      id
      key
      localePosts {
        title
        body
        languageLang
      }
    }
  }
`;

export const findManyLangsQuery = gql`
  query {
    findManyLangs {
      lang
      fullLang
      alternativeLang
    }
  }
`;

export const createOnePostQuery = gql`
  mutation createOnePost($key: String!, $localePosts: [LocalePostInput!]!) {
    createOnePost(key: $key, localePosts: $localePosts) {
      success
    }
  }
`;

export const updateOnePostQuery = gql`
  mutation updateOnePost(
    $id: String!
    $key: String!
    $localePosts: [LocalePostInput!]!
  ) {
    updateOnePost(id: $id, key: $key, localePosts: $localePosts) {
      success
    }
  }
`;

export const findOnePostQuery = gql`
  query findOnePost($id: String!) {
    findOnePost(id: $id) {
      id
      key
      localePosts {
        title
        body
        languageLang
      }
    }
  }
`;

export const findOnePostByKeyQuery = gql`
  query findOnePostByKey($key: String!) {
    findOnePostByKey(key: $key) {
      id
      key
      localePosts {
        title
        body
        languageLang
      }
    }
  }
`;

export const deleteOnePostQuery = gql`
  mutation deleteOnePost($id: String!) {
    deleteOnePost(id: $id) {
      success
    }
  }
`;
