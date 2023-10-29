import { GraphQLClient } from "graphql-request";
// import { Tokens } from "../../../path/to/generated/types";

const endpoint = process.env.NEXT_PUBLIC_BACK_URL ?? "";

export class GraphQLService {
  public graphQLClient: GraphQLClient;

  private accessToken: string = "";
  private refreshToken: string = "";

  constructor() {
    this.setTokens();

    this.graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: this.getAccessToken()
          ? `Bearer ${this.getAccessToken()}`
          : "",
      },
    });
  }

  private setTokens() {
    try {
      const tokensString = localStorage.getItem("tokens");
      if (tokensString && tokensString !== "undefined") {
        const tokens: any = JSON.parse(tokensString);
        this.accessToken = tokens.accessToken;
        this.refreshToken = tokens.refreshToken;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getAccessToken() {
    this.setTokens();
    return this.accessToken;
  }

  public getRefreshToken() {
    this.setTokens();
    return this.refreshToken;
  }

  public refreshClient() {
    this.graphQLClient.setHeader(
      "Authorization",
      this.getAccessToken() ? `Bearer ${this.getAccessToken()}` : ""
    );
  }
}

export const gql = new GraphQLService();
