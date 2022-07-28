import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const RoomPage = () => {
  const location = useLocation()
  const { msg }: any = location.state

  useEffect(() => {
    console.log(msg)
  }, [])

  return (
    <h1> You are now in the room page </h1>
  )
}

export default RoomPage
