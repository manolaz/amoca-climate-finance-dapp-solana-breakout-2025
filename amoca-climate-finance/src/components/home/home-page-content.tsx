import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HomePageContent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="mr-2">🌊</span> AMOCA Climate Finance <span className="ml-2">🌱</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              Bridging the gap between DeFi and sustainable energy adoption through a
              comprehensive platform built on Solana blockchain.
            </p>
            <Link href="/dashboard" passHref>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-lg px-8 py-6 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                <span className="mr-2">💧</span> Go to Dashboard <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
              <span className="mr-2">💰</span> For DeFi Investors
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">🌊</span>
                <span><strong>Simplified Green Investment Flow:</strong> One-click access to verified green energy projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">📊</span>
                <span><strong>Transparent Portfolio Management:</strong> Track investment performance and environmental impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">🔄</span>
                <span><strong>Diversified Green Assets:</strong> Options across solar, wind, and other renewable projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">💎</span>
                <span><strong>Hybrid Yield Structures:</strong> Combining environmental impact with competitive financial returns</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <span className="mr-2">🏡</span> For Homeowners
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">☀️</span>
                <span><strong>End-to-End Solar Solutions:</strong> From initial consultation to installation and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">💸</span>
                <span><strong>Accessible Green Financing:</strong> Competitive green loans and innovative financing options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">🔋</span>
                <span><strong>Smart Energy Management:</strong> Battery storage solutions and optimization tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">🎁</span>
                <span><strong>Tokenized Benefits:</strong> Earn rewards for energy production and carbon reduction</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-blue-800 bg-blue-50 p-6 rounded-xl shadow-sm border-blue-100 border">
          <span className="text-2xl">💧</span> By combining retail and institutional capital from banking partners, we create a scalable
          funding ecosystem that accelerates renewable energy adoption while providing attractive
          investment opportunities. <span className="text-2xl">🌱</span>
        </p>

        {/* Problem Statement Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl shadow-sm mb-16 border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <span className="mr-2">🔍</span> Problem Statement <span className="ml-2">💭</span>
          </h2>
          <p className="text-lg mb-6 text-blue-700">
            Despite growing interest in sustainable investments and home solar adoption, significant
            barriers remain:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-all">
              <strong className="text-blue-700 flex items-center"><span className="mr-2">📝</span>Complex Financing Landscape:</strong> Homeowners struggle navigating solar financing options
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-all">
              <strong className="text-blue-700 flex items-center"><span className="mr-2">💰</span>High Upfront Costs:</strong> Solar installation requires substantial initial investment
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-all">
              <strong className="text-green-700 flex items-center"><span className="mr-2">🧩</span>Fragmented Services:</strong> Separate companies handle consulting, financing, installation and maintenance
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-all">
              <strong className="text-green-700 flex items-center"><span className="mr-2">🚫</span>Limited Investment Access:</strong> Small investors face barriers to participating in green energy projects
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm md:col-span-2 border-l-4 border-indigo-400 hover:shadow-md transition-all">
              <strong className="text-indigo-700 flex items-center"><span className="mr-2">🌉</span>Institutional-Retail Gap:</strong> Disconnect between bank financing and retail investment in green projects
            </li>
          </ul>
          <p className="text-lg mt-6 text-blue-700 bg-white p-4 rounded-lg shadow-sm">
            <span className="text-xl mr-2">🌊</span> AMOCA bridges these gaps through a blockchain-powered platform that simplifies access to
            green financing, democratizes investment opportunities, and creates a seamless experience
            for both homeowners and investors.
          </p>
        </div>

        {/* Key Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center justify-center">
            <span className="mr-2">✨</span> Key Features <span className="ml-2">💦</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-blue-400">
              <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
                <span className="mr-2">🌿</span> Carbon Credit Tokenization
              </h3>
              <p className="text-blue-600">Convert verified carbon credits into digital assets on Solana with immutable proof of retirement and origin</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-green-400">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <span className="mr-2">🔍</span> Transparent Marketplace
              </h3>
              <p className="text-green-600">Real-time trading of carbon tokens with complete traceability of pricing history, project details, and verification data</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-blue-400">
              <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
                <span className="mr-2">💰</span> Project Funding
              </h3>
              <p className="text-blue-600">Direct investment channel for sustainable projects via NFTs representing future carbon credits</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-green-400">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <span className="mr-2">🏛️</span> DAO Governance
              </h3>
              <p className="text-green-600">Community-driven decision making for protocol parameters, project approval, and fund allocation</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-blue-400">
              <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
                <span className="mr-2">📊</span> Impact Tracking
              </h3>
              <p className="text-blue-600">Monitor and verify climate impact using oracle integrations connecting real-world data to on-chain assets</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-green-400">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <span className="mr-2">🌉</span> Cross-chain Interoperability
              </h3>
              <p className="text-green-600">Bridge to other ecosystems through Wormhole, enabling global liquidity and accessibility</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-emerald-600 p-10 rounded-2xl shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
            <span className="mr-2">💧</span> Ready to get started? <span className="ml-2">🌱</span>
          </h2>
          <Link href="/dashboard" passHref>
            <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-700 font-semibold text-lg px-8 py-6 rounded-lg flex items-center gap-2 mx-auto transition-all shadow-lg hover:shadow-xl">
              <span className="mr-2">🚀</span> Access Dashboard <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
