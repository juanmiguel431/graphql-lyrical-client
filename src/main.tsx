import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.tsx'
import SongList from './components/SongList.tsx';
import SongCreate from './components/SongCreate.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/song-list',
        element: <SongList/>
      },
      {
        path: '/song-create',
        element: <SongCreate/>
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
