'use client'

import { useRouter } from 'next/navigation'

// 404 Not Fount Error Page
export default function NotFound() {
    const router = useRouter()

    return (
        <div className="text-center h-[60vh] flex flex-col justify-center">
            <h2 className="text-uclaBlue text-3xl font-semibold">
                404 Not Found
            </h2>
            <p className="text-gray-500 mt-4">
                The page you are looking for could not be found.
            </p>
            <div className="mt-8">
                <button
                    type="button"
                    onClick={() => router.replace('/')}
                    className="bg-uclaBlue text-white rounded-xl px-4 py-2.5 hover:shadow-lg"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    )
}
