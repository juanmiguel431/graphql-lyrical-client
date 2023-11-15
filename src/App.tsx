import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Link to="/song-list">Song List</Link>
      <Link to="/song-create">Song Create</Link>
      <Outlet/>
    </div>
  )
}

export default App
