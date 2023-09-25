import { useSession } from "next-auth/react"
import Layout from "@/components/Layout"

export default function Home() {
  const { data: session } = useSession()

  return <Layout>
    <div className="flex flex-row gap-2 items-center justify-between">
      <h2 className='text-white'>Hi, <b> {session?.user?.name}</b> </h2>
      <div className="flex gap-1">
        <img src={session?.user?.image} alt="user's avatar" className="rounded-full w-10 me-2" />
        <button onClick={() => signOut()} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </button>
      </div>
    </div>
  </Layout>
}