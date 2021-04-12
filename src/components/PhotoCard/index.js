import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMutationToogleLike } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  // const handleFavClick = () => setLiked(!liked)
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='imagen' />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
        }
    </Article>
  )
}

PhotoCard.prototype = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
