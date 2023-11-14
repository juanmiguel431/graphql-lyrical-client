import { useQuery, gql } from '@apollo/client';
import { Song } from './models';

type Response = {
  songs: Song[];
}

function App() {
  const { loading, error, data } = useQuery<Response>(GET_SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data?.songs.map(s => (
        <div key={s.id}>{s.title}</div>
      ))}
    </div>
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

export default App
