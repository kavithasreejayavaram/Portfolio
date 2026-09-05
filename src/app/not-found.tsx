import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07090e] px-6 text-slate-100">
      <div className="max-w-lg text-center">
        <p className="font-mono-code text-sm tracking-[0.3em] text-blue-400">404 / RESOURCE NOT FOUND</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white">The requested page is unavailable.</h1>
        <p className="mt-4 text-slate-400">The system resource could not be located. Return to the portfolio to continue.</p>
        <Link href="/" className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-mono-code text-xs font-bold tracking-wider text-white transition hover:bg-blue-500">
          RETURN TO PORTFOLIO
        </Link>
      </div>
    </main>
  );
}
