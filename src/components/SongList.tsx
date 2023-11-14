import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Song } from '../models';

type Response = {
  songs: Song[];
}

const SongList: React.FC = () => {
  const { loading, error, data } = useQuery<Response>(GET_SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul className="collection">
      {data?.songs.map(s => (
        <li className="collection-item" key={s.id}>{s.title}</li>
      ))}
    </ul>
  )
}

const GET_SONGS = gql`
query Songs {
    songs {
        id
        title
    }
}
`;

export default SongList;
