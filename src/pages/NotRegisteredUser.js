import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <Registro activateAuth={activateAuth} />
      <Login activateAuth={activateAuth} title='Iniciar Sesión' />
    </>
  )
}

const Registro = ({ activateAuth }) => {
  const { register, loading, error } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
}

const Login = ({ activateAuth }) => {
  const { login, loading, error } = useLoginMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorMsg = error && 'Usuario y/o clave inválida'

  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesión' />
}
