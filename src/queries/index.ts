import { gql } from '@apollo/client';

export const fetchSongsQuery = gql`
query Songs {
    songs {
        id
        title
    }
}
`;

export const fetchSongQuery = gql`
query Song($id: ID!) {
    song(id: $id) {
        title
        id
    }
}
`;
