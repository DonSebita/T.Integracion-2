"use server"
import { useSession, signIn, signOut } from "next-auth/react"

export default async function Component() {
  const { data } = useSession()
  const { accessToken } = data

  return <div>Access Token: {accessToken}</div>
}
