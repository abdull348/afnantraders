'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">Something went wrong</h2>
          <p className="text-sm text-gray-500 mb-6">An unexpected error occurred. Please try again.</p>
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-[#00A8E8] text-white text-sm font-semibold rounded-lg hover:bg-[#0096d4] transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
