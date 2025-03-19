import Link from "next/link";

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center w-full">Cyber Security Track</h1>

      <div className="flex flex-col md:flex-row items-start w-full">
        {/* PDF Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2">
          <div className="w-full h-[700px] border-2 border-gray-300 rounded-md overflow-hidden">
            <iframe src="/roadmaps/cybersecurity.pdf" className="w-full h-full"></iframe>
          </div>
        </div>

        {/* Text Section - 50% of the screen */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center space-y-3">
          <p className="text-lg">
            Our <strong>comprehensive 6-month Cybersecurity Hands-On Roadmap</strong> is designed to transform you into a skilled cybersecurity professional.
          </p>
          <p className="text-lg"><strong>Month 1:</strong> Learn cybersecurity fundamentals, IT skills, and Linux/Windows commands. Set up a virtual lab and use tools like Wireshark and Nmap.</p>
          <p className="text-lg"><strong>Month 2:</strong> Dive into networking and system security with firewalls, intrusion detection systems, and attack simulations.</p>
          <p className="text-lg"><strong>Month 3:</strong> Master ethical hacking and penetration testing using Metasploit and Burp Suite. Perform security testing and exploit vulnerabilities.</p>
          <p className="text-lg"><strong>Month 4:</strong> Explore digital forensics and incident response. Analyze logs, investigate breaches, and recover data with Splunk and Autopsy.</p>
          <p className="text-lg"><strong>Month 5:</strong> Work with SOCs, SIEM platforms, and bug bounty programs. Participate in real-world security challenges.</p>
          <p className="text-lg"><strong>Month 6:</strong> Build projects, tackle CTF challenges, and prepare for job interviews. Gain insights into certifications like CompTIA Security+ and CEH.</p>
        </div>
      </div>

      {/* Navigation Buttons (Bottom, Full Width) */}
      <div className="flex justify-between w-full px-2 mt-6">
        <Link href="/" className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </Link>
        <Link href="/fullstack" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Next: Full Stack →
        </Link>
      </div>
    </div>
  );
}
