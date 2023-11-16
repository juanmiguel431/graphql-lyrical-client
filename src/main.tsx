import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './styles/style.css';
import App from './App.tsx'
import SongList from './components/SongList.tsx';
import SongCreate from './components/SongCreate.tsx';
import SongDetail from './components/SongDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/songs',
        element: <SongList/>
      },
      {
        path: '/songs/new',
        element: <SongCreate/>
      },
      {
        path: '/songs/:id',
        element: <SongDetail/>
      }
    ]
  },
]);

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
)
