import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Song } from '../models';
import { Link } from 'react-router-dom';
import { fetchSongsQuery } from '../queries';
import { deleteSong } from '../mutations';

type Response = {
  songs: Song[];
}

const SongList: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<Response>(fetchSongsQuery);

  const [deleteSongMutation, state] = useMutation(deleteSong);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul className="collection">
        {data?.songs.map(s => (
          <li className="collection-item" key={s.id}>
            {s.title}
            <i
              className="material-icons"
              onClick={() => {
                deleteSongMutation({
                  variables: { id: s.id },
                }).then(() => {
                  refetch();
                });
              }}
            >delete</i>
          </li>
        ))}
      </ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
