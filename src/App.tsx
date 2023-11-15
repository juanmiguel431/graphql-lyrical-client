import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Link to="/song-list">Song List</Link>
      <Outlet/>
    </div>
  )
}

export default App
