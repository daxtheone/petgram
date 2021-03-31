import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
export const Home = (props) => {
  console.log(props.id)
  return (
    <><ListOfCategories /> <ListOfPhotoCards categoryId={props.id} /></>
  )
}
