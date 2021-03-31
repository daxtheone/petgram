import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'

function getSinglePhoto (id) {
  const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!){
      photo(id:$id){
          id
          categoryId
          src
          likes
          userId
          liked
      }
  }
  `
  return useQuery(getSinglePhoto, { variables: { id } })
}

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = getSinglePhoto(id)
  console.log(error)
  if (loading) return 'Cargando...'
  return (<PhotoCard {...data.photo} />)
}
