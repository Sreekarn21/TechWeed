import Link from "next/link";

export default function FullStackPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center w-full">Full Stack Development Track</h1>

      <div className="flex flex-col md:flex-row items-start w-full">
        {/* PDF Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2">
          <div className="w-full h-[700px] border-2 border-gray-300 rounded-md overflow-hidden">
            <iframe src="/roadmaps/fullstack.pdf" className="w-full h-full"></iframe>
          </div>
        </div>

        {/* Text Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center space-y-3">
          <p className="text-lg">
            Our <strong>6-month Full Stack Development Hands-On Roadmap</strong> will transform you into a job-ready full stack developer.
          </p>
          <p className="text-lg"><strong>Month 1:</strong> Learn HTML, CSS, and JavaScript fundamentals. Build static and responsive websites.</p>
          <p className="text-lg"><strong>Month 2:</strong> Dive into frontend frameworks like React. Learn state management, routing, and component-based development.</p>
          <p className="text-lg"><strong>Month 3:</strong> Explore backend development with Node.js and Express. Work with APIs, authentication, and middleware.</p>
          <p className="text-lg"><strong>Month 4:</strong> Master databases with MongoDB and SQL. Learn CRUD operations, indexing, and optimization.</p>
          <p className="text-lg"><strong>Month 5:</strong> Implement full stack projects, integrating frontend, backend, and databases. Learn deployment strategies with Docker and CI/CD.</p>
          <p className="text-lg"><strong>Month 6:</strong> Build scalable applications, optimize performance, and prepare for job interviews with mock projects.</p>
        </div>
      </div>

      {/* Navigation Buttons (Bottom, Full Width) */}
      <div className="flex justify-between w-full px-2 mt-6">
        <Link href="/" className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </Link>
        <Link href="/datascience" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Next: Data Science →
        </Link>
      </div>
    </div>
  );
}
