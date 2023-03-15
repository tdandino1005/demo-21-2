import { gql } from "apollo/client";

const THOUGHTS = gql`
query Thoughts {
    thoughts {
        thoughtTextthoughtAuthor
        createdAt
        comments {
            commentText
    
`;
