import { gql } from "@apollo/client";

const THOUGHTS = gql`
  query Thoughts {
    thoughts {
      id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        commentText
        createdAt
        id
      }
    }
  }
`;

export const PROFILES = gql`
  query Profiles {
    profiles {
      id
      name
      skills
    }
  }
`;
