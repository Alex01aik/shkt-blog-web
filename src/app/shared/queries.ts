import { gql } from "graphql-request";

export const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const findManyLocalePostQuery = gql`
  query findManyLocalePost($lang: String!) {
    findManyLocalePost(lang: $lang) {
      id
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
  mutation createOnePost($localePosts: [LocalePostInput!]!) {
    createOnePost(localePosts: $localePosts) {
      success
    }
  }
`;

export const updateOnePostQuery = gql`
  mutation updateOnePost($id: String!, $localePosts: [LocalePostInput!]!) {
    updateOnePost(id: $id, localePosts: $localePosts) {
      success
    }
  }
`;

export const findOnePostQuery = gql`
  query findOnePost($id: String!) {
    findOnePost(id: $id) {
      id
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
