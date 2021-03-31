import { useMutation, gql } from '@apollo/client'

const LOGIN_MUTATION = gql`
mutation login($input: UserCredentials!){
  login(input: $input)
}
`
export const useLoginMutation = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION)
  return { login, data, loading, error }
}
