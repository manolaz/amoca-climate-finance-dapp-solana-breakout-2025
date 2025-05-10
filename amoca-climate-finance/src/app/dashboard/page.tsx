import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold text-green-900 mb-6 flex items-center">
          <span className="mr-2">🌱</span> Green Loans Dashboard
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Access affordable green loans for solar home installations and electric vehicles. Empower your sustainable journey with transparent, blockchain-powered financing.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Solar Home Install Loan Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-600 flex flex-col">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="mr-2">🏠</span> Solar Home Install Loans
            </h2>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>• Fixed low interest rates</li>
              <li>• Flexible repayment terms</li>
              <li>• No hidden fees</li>
              <li>• On-chain loan tracking</li>
            </ul>
            <Link href="/financing?type=solar" className="mt-auto">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Apply for Solar Loan
              </button>
            </Link>
          </div>
          {/* Electric Vehicle Loan Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2">🚗</span> Electric Vehicle Loans
            </h2>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>• Competitive EV loan rates</li>
              <li>• Fast approval process</li>
              <li>• Flexible down payment options</li>
              <li>• ESG impact reporting</li>
            </ul>
            <Link href="/financing?type=ev" className="mt-auto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Apply for EV Loan
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold mb-4">Why Choose Amoca Green Loans?</h3>
          <p className="text-gray-700 mb-6">
            Transparent, blockchain-based financing for a cleaner future. Track your impact, manage your loans, and join a community committed to sustainability.
          </p>
          <Link href="/">
            <button className="bg-gray-200 text-green-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
