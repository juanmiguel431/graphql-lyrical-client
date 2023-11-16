import { gql } from '@apollo/client';

export const deleteSong = gql`
mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
        title
    }
}
`;
