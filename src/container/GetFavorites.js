import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'
function getfav () {
  const getSfavorit = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
  `
  return useQuery(getSfavorit, { fetchPolicy: 'network-only' })
}

export const GetFavorites = () => {
  const { loading, error, data } = getfav()
  console.log(error)
  if (loading) return 'Cargando...'
  if (error) return <p>Error!!</p>
  const { favs } = data
  return <ListOfFavs favs={favs} />
}
