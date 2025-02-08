import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Artificial Intelligence Track</h1>
      <p className="text-lg text-center max-w-3xl mb-4">
        This track covers advanced AI concepts, including deep learning, NLP, reinforcement learning, and generative AI models. Students will work with PyTorch, TensorFlow, OpenAI APIs, and real-world AI projects.
      </p>

      {/* View Roadmap Button */}
      <Link
        href="/roadmaps/ai.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
      >
        View Roadmap
      </Link>

      {/* Roadmap PDF */}
      <div className="w-full max-w-4xl h-[600px] border-2 border-gray-300 rounded-md overflow-hidden mb-6">
        <iframe src="/roadmaps/ai.pdf" className="w-full h-full"></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/roadmaps/ai.pdf"
        download
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
      >
        Download Roadmap
      </a>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6">
        <Link href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </Link>
        <Link href="/cybersecurity" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Next: Cyber Security →
        </Link>
      </div>
    </div>
  );
}
