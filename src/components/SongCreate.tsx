import React, { useState } from 'react';

const SongCreate: React.FC = () => {
  const [songTitle, setSongTitle] = useState('');

  return (
    <div>
      <h3>Create a new song</h3>
      <form>
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

export default SongCreate;
