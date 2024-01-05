import Cookies from "universal-cookie"

const cookies = new Cookies()

const checkAuth = () => {
  const auth = cookies.get("token")
  return auth ? true : false
}

export default checkAuth
