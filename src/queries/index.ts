import { gql } from '@apollo/client';

export const fetchSongsQuery = gql`
query Songs {
    songs {
        id
        title
    }
}
`;
