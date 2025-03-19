import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center w-full">Artificial Intelligence Track</h1>

      <div className="flex flex-col md:flex-row items-start w-full">
        {/* PDF Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2">
          <div className="w-full h-[700px] border-2 border-gray-300 rounded-md overflow-hidden">
            <iframe src="/roadmaps/ai.pdf" className="w-full h-full"></iframe>
          </div>
        </div>

        {/* Text Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center space-y-3">
          <p className="text-lg">
            Our <strong>6-month Artificial Intelligence Hands-On Roadmap</strong> is designed to equip you with the latest AI techniques and applications.
          </p>
          <p className="text-lg"><strong>Month 1:</strong> Learn Python, linear algebra, probability, and statistics. Understand AI fundamentals and essential libraries like NumPy and Pandas.</p>
          <p className="text-lg"><strong>Month 2:</strong> Explore machine learning techniques, including supervised and unsupervised learning, using Scikit-Learn.</p>
          <p className="text-lg"><strong>Month 3:</strong> Dive into deep learning with TensorFlow and PyTorch. Work on neural networks, CNNs, and RNNs.</p>
          <p className="text-lg"><strong>Month 4:</strong> Learn Natural Language Processing (NLP) techniques. Implement transformers, BERT, and OpenAI APIs.</p>
          <p className="text-lg"><strong>Month 5:</strong> Explore reinforcement learning and generative AI models (GANs, VAEs). Work on AI-driven automation and recommendation systems.</p>
          <p className="text-lg"><strong>Month 6:</strong> Build AI-powered projects, fine-tune models, and prepare for AI job roles with real-world case studies.</p>
        </div>
      </div>

      {/* Navigation Buttons (Bottom, Full Width) */}
      <div className="flex justify-between w-full px-2 mt-6">
        <Link href="/" className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </Link>
        <Link href="/cybersecurity" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Next: Cyber Security →
        </Link>
      </div>
    </div>
  );
}
