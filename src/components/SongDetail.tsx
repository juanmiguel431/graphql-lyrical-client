import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSongQuery } from '../queries';
import { useParams } from 'react-router-dom';
import { Song } from '../models';
import LyricCreate from './LyricCreate.tsx';
import LyricList from './LyricList.tsx';

type SongDetailProps = {}

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

  const song = data?.song;

  if (!song) {
    return 'Song not found';
  }

  return (
    <div>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics}/>
      <LyricCreate songId={song.id}/>
    </div>
  );
};

export default SongDetail;
