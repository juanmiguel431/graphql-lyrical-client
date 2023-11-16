import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSongQuery } from '../queries';
import { useParams } from 'react-router-dom';
import { Song } from '../models';

type SongDetailProps = {
}

type Params = {
  id: string;
}

type Response = {
  song: Song;
}

const SongDetail: React.FC<SongDetailProps> = (props) => {

  const { id } = useParams<Params>();

  const { loading, error, data, refetch } = useQuery<Response>(fetchSongQuery, { variables: { id: id } });

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <h3>Song Detail</h3>
      {data?.song.title}
    </div>
  );
};

export default SongDetail;
