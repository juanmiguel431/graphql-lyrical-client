import { gql } from '@apollo/client';

export const deleteSong = gql`
mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
        title
    }
}
`;

export const addLyricToSong = gql`
mutation AddLyricToSong($songId: ID!, $content: String!) {
    addLyricToSong(content: $content, songId: $songId) {
        id
        title
    }
}
`;
