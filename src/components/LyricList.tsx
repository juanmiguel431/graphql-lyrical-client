import React from 'react';
import { Lyric } from '../models';

type LyricListProps = {
  lyrics: Lyric[];
}

const LyricList: React.FC<LyricListProps> = ({ lyrics }) => {
  return (
    <div className="">
      <ul className="collection">
        {lyrics.map(l => (
          <li key={l.id} className="collection-item">{l.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;
