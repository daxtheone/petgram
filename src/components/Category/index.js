import React from 'react'
import { Anchor, Image } from './styles'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => (
  <Link to={path}>
    <Anchor>
      <Image src={cover} alt='imagen' />
      {emoji}
    </Anchor>
  </Link>
)
