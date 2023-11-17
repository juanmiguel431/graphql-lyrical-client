import React from 'react';
import { Lyric } from '../models';
import { useMutation } from '@apollo/client';
import { likeLyric } from '../mutations';
// import { fetchSongQuery } from '../queries';

type LyricListProps = {
  lyrics: Lyric[];
}

const LyricList: React.FC<LyricListProps> = ({ lyrics }) => {

  const [likeLyricMutation, data] = useMutation(likeLyric);

  return (
    <div className="">
      <ul className="collection">
        {lyrics.map(l => (
          <li key={l.id} className="collection-item">
            {l.content} - {l.likes} likes
            <i
              className="material-icons"
              onClick={() => {
                likeLyricMutation({
                  variables: { id: l.id },
                  // refetchQueries: [{ query: fetchSongQuery }] // It is not required to do this because of the caching system of Apollo Client.
                });
              }}
            >thumb_up</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;
