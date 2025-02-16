import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-600">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-500">
          The page you are looking for might have been removed or temporarily unavailable.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="default">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}