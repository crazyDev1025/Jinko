import axios from 'axios'
import { useCallback } from 'react'

export const useRequestOtp = () => {
  const handleRequestOtp = useCallback(async (_email: string, _token: string) => {
    try {
      const baseUrl = `${process.env.REACT_APP_DOMAIN_LINK}user/otp`

      const response = await axios.post(baseUrl, {
        email: _email,
        "cf-turnstile-response": _token
      })
      const { data, error, status, msg: message } = await response?.data
      if (error || status !== 200) throw new Error(message)
      return {
        error: false,
        data,
        message
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onRequestOtp : handleRequestOtp }
}

export const useLogin = () => {
  const handleLogin = useCallback(async (_email: string, _otp: string) => {
    try {
      const baseUrl = `${process.env.REACT_APP_DOMAIN_LINK}user/login`

      const response = await axios.post(baseUrl, {
        email: _email,
        otp: _otp
      })
      const { data, error, status, msg: message } = await response?.data
      if (error || status !== 200) throw new Error(message)
      return {
        error: false,
        data,
        message
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onLogin : handleLogin }
}