import { useMutation, gql } from '@apollo/client'

const REGISTER_MUTATION = gql`
mutation signup($input: UserCredentials!){
  signup(input: $input)
}
`
export const useRegisterMutation = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION)
  return { register, data, loading, error }
}
