import React from 'react'
import { GetFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <GetFavorites />
    </Layout>
  )
}
