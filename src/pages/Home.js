import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = (props) => {
  console.log(props.id)
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={props.id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
