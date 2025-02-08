import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="p-5 flex justify-between items-center bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Tech Weed</h1>
        <div>
          <Link href="/register" className="px-4 py-2 bg-green-500 rounded-lg">Register</Link>
          <Link href="/login" className="px-4 py-2 ml-4 border border-white rounded-lg">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl font-extrabold mb-4">Skill-Based Learning for Developers</h1>
        <p className="text-lg text-gray-300">Join our courses in MERN, Python, and more. Build real-world projects!</p>
        <div className="mt-6">
          <Link href="/register" className="px-6 py-3 bg-green-500 rounded-lg text-lg">Get Started</Link>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-bold mb-6">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="MERN Stack Development" />
          <CourseCard title="Python for AI & ML" />
          <CourseCard title="Full-Stack Web Development" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 mt-10">
        <p>&copy; 2025 Tech Weed. All rights reserved.</p>
      </footer>
    </div>
  );
}

function CourseCard({ title }) {
  return (
    <div className="p-5 bg-gray-700 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">Learn from scratch with hands-on projects.</p>
      <Link href="/courses" className="mt-4 inline-block px-4 py-2 bg-green-500 rounded-lg">Explore</Link>
    </div>
  );
}
