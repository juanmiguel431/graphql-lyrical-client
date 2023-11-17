import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { addLyricToSong } from '../mutations';
// import { fetchSongQuery } from '../queries';

type LyricCreateProps = {
  songId: string;
}

const LyricCreate: React.FC<LyricCreateProps> = ({ songId }) => {
  const [lyric, setLyric] = useState('');

  const [addLyricToSongMutation, data] = useMutation(addLyricToSong);

  const onSubmit:  React.FormEventHandler<HTMLFormElement> = useCallback((evt) => {
    evt.preventDefault();
    if (!lyric) {
      return;
    }

    addLyricToSongMutation({
      variables: { songId: songId, content: lyric },
      // refetchQueries: [{ query: fetchSongQuery, variables: { id: songId } }]
    });

    setLyric('');

  }, [lyric, songId, addLyricToSongMutation])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Add lyric</label>
        <input
          type="text"
          value={lyric}
          onChange={e => setLyric(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LyricCreate;
