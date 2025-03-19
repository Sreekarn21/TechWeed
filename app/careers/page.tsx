import Link from "next/link";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <p className="text-lg text-center max-w-3xl mb-6">
        At TechWeed, we are looking for passionate individuals to help revolutionize education in AI, ML, Cybersecurity, and Software Development. Explore our open positions and apply today.
      </p>

      {/* Open Positions */}
      <div className="w-full max-w-4xl space-y-6">
        {/* Software Development Instructor */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Software Development Instructor</h2>
          <p className="text-gray-400 mt-2">
            Teach MERN, Python, and full-stack development. Hands-on experience required.
          </p>
          <Link href="mailto:techweedstartup@gmail.com">
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>

        {/* AI/ML Instructor */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">AI/ML Instructor</h2>
          <p className="text-gray-400 mt-2">
            Guide students in AI, ML, and deep learning projects. Prior teaching experience preferred.
          </p>
          <Link href="mailto:techweedstartup@gmail.com">
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Data Science Instructor */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Data Science Instructor</h2>
          <p className="text-gray-400 mt-2">
            Teach data analysis, visualization, and machine learning. Proficiency in Python, Pandas, and TensorFlow required.
          </p>
          <Link href="mailto:techweedstartup@gmail.com">
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Cybersecurity Instructor */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Cybersecurity Instructor</h2>
          <p className="text-gray-400 mt-2">
            Teach ethical hacking, network security, and cyber defense strategies. Hands-on experience preferred.
          </p>
          <Link href="mailto:techweedstartup@gmail.com">
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      {/* Back to Home */}
      <Link href="/" className="mt-8 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
        Back to Home
      </Link>
    </div>
  );
}
