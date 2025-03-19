import Link from "next/link";

export default function DataScienceTrack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center w-full">Data Science Track</h1>

      <div className="flex flex-col md:flex-row items-start w-full">
        {/* PDF Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2">
          <div className="w-full h-[700px] border-2 border-gray-300 rounded-md overflow-hidden">
            <iframe src="/roadmaps/datascience.pdf" className="w-full h-full"></iframe>
          </div>
        </div>

        {/* Text Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center space-y-3">
          <p className="text-lg">
            Our <strong>comprehensive 6-month Data Science Hands-On Roadmap</strong> is designed to transform you into a skilled data scientist.
          </p>
          <p className="text-lg"><strong>Month 1:</strong> Master Python, linear algebra, probability, and statistics. Learn data structures and algorithms.</p>
          <p className="text-lg"><strong>Month 2:</strong> Dive into data preprocessing, feature engineering, and data visualization with Pandas, Matplotlib, and Seaborn.</p>
          <p className="text-lg"><strong>Month 3:</strong> Learn SQL for data extraction and gain experience in exploratory data analysis (EDA).</p>
          <p className="text-lg"><strong>Month 4:</strong> Start with supervised and unsupervised machine learning using Scikit-learn. Implement classification, regression, and clustering models.</p>
          <p className="text-lg"><strong>Month 5:</strong> Explore deep learning, NLP, and time-series forecasting with TensorFlow and PyTorch.</p>
          <p className="text-lg"><strong>Month 6:</strong> Work on real-world projects, participate in Kaggle competitions, and prepare for job interviews.</p>
        </div>
      </div>

      {/* Navigation Buttons (Bottom, Full Width) */}
      <div className="flex justify-between w-full px-2 mt-6">
        <Link href="/" className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </Link>
        <Link href="/ai" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Next: AI →
        </Link>
      </div>
    </div>
  );
}
