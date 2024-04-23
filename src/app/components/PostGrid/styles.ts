import styled from "styled-components";

export const PostsGrid = styled.div<{ $isadmin: "true" | "false" }>`
  display: grid;
  width: 100%;
  grid-gap: 24px;
  ${(props) => `
    grid-template-columns: repeat(${
      props.$isadmin === "true" ? "1" : "auto-fill"
    }, minmax(300px, 1fr));
    `}
`;

export const Post = styled.div`
  background: lightblue;
  width: 100%;
  height: 240px;
  border-radius: 12px;
  padding: 12px;
  background: url(https://www.iberian-escapes.com/images/ibiza-spain-europe.jpg)
    no-repeat;
  background-size: cover;
  cursor: pointer;
  &: hover {
    opacity: 0.8;
  }
`;

export const PostTitle = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--text-rgb);
`;

export const PostAdminPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-end;
`;
