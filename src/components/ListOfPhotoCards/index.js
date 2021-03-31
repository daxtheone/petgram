import React from 'react'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../../hoc/withPhotos'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId: categoryId }
  })
  if (loading) return <p>Loading</p>
  if (error) return <p>Error!!</p>
  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard key={photo.id} {...photo} />
        </li>
      ))}
    </ul>
  )
}
