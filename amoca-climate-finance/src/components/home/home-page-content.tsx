import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HomePageContent() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AMOCA Climate Finance</h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              Bridging the gap between DeFi and sustainable energy adoption through a
              comprehensive platform built on Solana blockchain.
            </p>
            <Link href="/dashboard" passHref>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg flex items-center gap-2">
                Go to Dashboard <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6">For DeFi Investors</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Simplified Green Investment Flow:</strong> One-click access to verified green energy projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Transparent Portfolio Management:</strong> Track investment performance and environmental impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Diversified Green Assets:</strong> Options across solar, wind, and other renewable projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Hybrid Yield Structures:</strong> Combining environmental impact with competitive financial returns</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6">For Homeowners</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>End-to-End Solar Solutions:</strong> From initial consultation to installation and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Accessible Green Financing:</strong> Competitive green loans and innovative financing options</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Smart Energy Management:</strong> Battery storage solutions and optimization tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">→</span>
                <span><strong>Tokenized Benefits:</strong> Earn rewards for energy production and carbon reduction</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          By combining retail and institutional capital from banking partners, we create a scalable
          funding ecosystem that accelerates renewable energy adoption while providing attractive
          investment opportunities.
        </p>

        {/* Problem Statement Section */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">🔍</span> Problem Statement
          </h2>
          <p className="text-lg mb-6">
            Despite growing interest in sustainable investments and home solar adoption, significant
            barriers remain:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong className="text-emerald-700">Complex Financing Landscape:</strong> Homeowners struggle navigating solar financing options
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong className="text-emerald-700">High Upfront Costs:</strong> Solar installation requires substantial initial investment
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong className="text-emerald-700">Fragmented Services:</strong> Separate companies handle consulting, financing, installation and maintenance
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong className="text-emerald-700">Limited Investment Access:</strong> Small investors face barriers to participating in green energy projects
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
              <strong className="text-emerald-700">Institutional-Retail Gap:</strong> Disconnect between bank financing and retail investment in green projects
            </li>
          </ul>
          <p className="text-lg mt-6">
            AMOCA bridges these gaps through a blockchain-powered platform that simplifies access to
            green financing, democratizes investment opportunities, and creates a seamless experience
            for both homeowners and investors.
          </p>
        </div>

        {/* Key Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">✨</span> Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Carbon Credit Tokenization</h3>
              <p>Convert verified carbon credits into digital assets on Solana with immutable proof of retirement and origin</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Transparent Marketplace</h3>
              <p>Real-time trading of carbon tokens with complete traceability of pricing history, project details, and verification data</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Project Funding</h3>
              <p>Direct investment channel for sustainable projects via NFTs representing future carbon credits</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">DAO Governance</h3>
              <p>Community-driven decision making for protocol parameters, project approval, and fund allocation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Impact Tracking</h3>
              <p>Monitor and verify climate impact using oracle integrations connecting real-world data to on-chain assets</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Cross-chain Interoperability</h3>
              <p>Bridge to other ecosystems through Wormhole, enabling global liquidity and accessibility</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to get started?</h2>
          <Link href="/dashboard" passHref>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-8 py-6 rounded-lg">
              Access Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
