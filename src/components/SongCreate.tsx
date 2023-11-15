import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SongCreate: React.FC = () => {
  const [songTitle, setSongTitle] = useState('');

  const [addSong, { data, loading, error }] = useMutation(mutation);

  if (loading) {
    return 'Is loading...';
  }

  return (
    <div>
      <h3>Create a new song</h3>
      <form onSubmit={e => {
        e.preventDefault();
        addSong({ variables: { title: songTitle } });
      }}>
        <label>Song Title:</label>
        <input
          type="text"
          onChange={e => setSongTitle(e.target.value)}
          value={songTitle}
        />
      </form>
    </div>
  );
};

const mutation = gql`
mutation AddSong($title: String!) {
    addSong(title: $title) {
        id
        title
    }
}
`;

export default SongCreate;
