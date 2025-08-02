import axios from "axios"
import { useCallback } from "react"

// To get social media links
export const useSocialLinks = () => {
  const handleSocialLinks = useCallback(async () => {
    try {
      const baseUrl = `${process.env.REACT_APP_BO_LINK}/api/frontend/get-social-link`

      const response = await axios.get(baseUrl)

      const { data, error, code, message } = await response?.data
      if (error || code !== 200) throw new Error(message)
      return {
        error: false,
        data,
        message: ""
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

  return { onSocialLinks: handleSocialLinks }
}