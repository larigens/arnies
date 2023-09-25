import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'
import Image from 'next/image'

export default function Layout({ children }) {
    const { data: session } = useSession()
    if (!session) {
        return (
            <div className='bg-main-brand flex min-w-screen min-h-screen text-center py-8 items-center justify-center'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div className="bg-secondary rounded-full w-40 rolling-image">
                        <Image
                            src='/arnieslogo.png'
                            alt='Arnies Logo'
                            width={230}
                            height={250}
                        />
                    </div>
                    <button onClick={() => signIn('google')} className="hover:text-secondary">Sign in with Google</button>
                </div>
            </div>
        );
    }
    return (
        <div className='bg-secondary min-h-screen flex'>
            <Nav />
            <div className="bg-main-brand flex-grow mt-1 mr-2 mb-2 rounded-lg p-4">
                {children}
            </div>
        </div>
    )
}