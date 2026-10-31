export default async function Footer() {
  // Cache Components is on in Next.js 16, so the current year must be
  // captured with "use cache" (it is still a Server Component).
  'use cache';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p>
          Copyright &copy; {year} | Thubelihle Dlamini | All rights reserved
        </p>
      </div>
    </footer>
  );
}
