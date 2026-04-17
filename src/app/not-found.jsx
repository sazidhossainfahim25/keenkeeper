import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}