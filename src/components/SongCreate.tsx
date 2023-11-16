import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { fetchSongsQuery } from '../queries';

const SongCreate: React.FC = () => {
  const [songTitle, setSongTitle] = useState('');

  const navigate = useNavigate();

  const [addSong, { data, loading, error }] = useMutation(mutation);

  if (loading) {
    return 'Is loading...';
  }

  return (
    <div>
      <h3>Create a new song</h3>
      <form onSubmit={async (e) => {
        e.preventDefault();
        try {
          const title = songTitle.trim();
          if (!title) {
            return;
          }

          await addSong({
            variables: { title: title },
            refetchQueries: [{ query: fetchSongsQuery }]
          });

          navigate('/songs');

        } catch (e) {
          console.log(e);
        }
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
