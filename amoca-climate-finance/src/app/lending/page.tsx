import { AppHero } from '@/components/app-hero'
import Link from 'next/link';

const investmentOptions = [
  {
    id: 'green-bonds',
    title: 'Solar Project Bonds',
    description: 'Finance specific solar installation projects and earn fixed returns secured by the energy production.',
    icon: '🏦',
    color: 'green',
    returns: '5-7% APY',
    lockPeriod: '12-36 months',
    minInvestment: '$1,000',
    features: [
      'Fixed returns backed by loan agreements',
      'Project-specific investment tracking',
      'Quarterly interest payments',
      'On-chain verification of project milestones',
      'Early exit options available (with fee)'
    ]
  },
  {
    id: 'investment-pool',
    title: 'Green Energy Pool',
    description: 'Diversified investment across multiple solar, battery, and EV loan projects.',
    icon: '💰',
    color: 'blue',
    returns: '4-8% APY (variable)',
    lockPeriod: '3-24 months',
    minInvestment: '$500',
    features: [
      'Diversified risk across multiple projects',
      'Automated yield distribution',
      'Flexible investment terms',
      'Lower entry point than direct bonds',
      'Liquidity pool for earlier exit options'
    ]
  },
  {
    id: 'impact-fund',
    title: 'Climate Impact Fund',
    description: 'Maximum environmental impact investments with carbon credits and ESG tracking.',
    icon: '🌍',
    color: 'purple',
    returns: '3-6% APY',
    lockPeriod: '12-48 months',
    minInvestment: '$2,000',
    features: [
      'Focus on highest-impact climate projects',
      'Carbon credit generation',
      'ESG reporting dashboard',
      'Community governance participation',
      'Quarterly impact reports'
    ]
  }
];

const portfolioStats = [
  { label: 'Total Investment Volume', value: '$4.2M', change: '+12% this month' },
  { label: 'Active Investors', value: '876', change: '+64 this month' },
  { label: 'Avg. Annual Return', value: '6.2%', change: '+0.3% over last quarter' },
  { label: 'CO₂ Offset', value: '2,150 tons', change: '+215 tons this month' }
];

const upcomingProjects = [
  {
    title: 'Community Solar Farm - Phoenix, AZ',
    goalAmount: '$250,000',
    raisedAmount: '$175,000',
    progress: 70,
    expectedReturn: '6.5% APY',
    closingDate: 'May 30, 2023',
    status: 'Funding',
    image: '🌄'
  },
  {
    title: 'Multi-Family Building Solar - Denver, CO',
    goalAmount: '$180,000',
    raisedAmount: '$180,000',
    progress: 100,
    expectedReturn: '5.8% APY',
    closingDate: 'May 25, 2023',
    status: 'Filled',
    image: '🏙️'
  },
  {
    title: 'School District Battery Systems - Portland, OR',
    goalAmount: '$320,000',
    raisedAmount: '$85,000',
    progress: 27,
    expectedReturn: '7.2% APY',
    closingDate: 'June 15, 2023',
    status: 'Funding',
    image: '🏫'
  }
];

export default function LendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <AppHero
          title="Invest in a Greener Future"
          subtitle="Fund renewable energy projects, earn competitive returns, and track your environmental impact."
        />
        
        {/* Investment Options */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Choose Your Investment Strategy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Solana blockchain-based platform offers transparent and secure ways to invest in renewable energy projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentOptions.map((option) => (
              <div key={option.id} className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                <div className={`bg-${option.color}-100 p-4 flex justify-between items-center`}>
                  <div>
                    <span className="text-4xl">{option.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-${option.color}-700 font-bold text-xl`}>{option.returns}</div>
                    <div className="text-sm text-gray-600">Expected Return</div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Minimum</div>
                      <div className="font-semibold">{option.minInvestment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Lock Period</div>
                      <div className="font-semibold">{option.lockPeriod}</div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-green-700 mt-4 mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1 mb-6">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <Link href={`/lending/invest?type=${option.id}`}>
                    <button className={`bg-${option.color}-600 hover:bg-${option.color}-700 text-white font-medium py-2 px-4 rounded w-full transition`}>
                      Start Investing
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Portfolio Statistics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Current Portfolio Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Investment Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-40 bg-blue-50 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Funding' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Funding Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span>Raised: {project.raisedAmount}</span>
                      <span>Goal: {project.goalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Expected Return</div>
                      <div className="font-semibold">{project.expectedReturn}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Closing Date</div>
                      <div className="font-semibold">{project.closingDate}</div>
                    </div>
                  </div>
                  
                  <Link href={`/lending/project-details?id=${index}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/lending/projects">
              <button className="inline-block border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg transition">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How Investing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Create Account</h3>
              <p className="text-sm text-gray-600">Connect your Solana wallet and complete KYC verification.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Choose Projects</h3>
              <p className="text-sm text-gray-600">Browse available investment options and select projects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Fund Investment</h3>
              <p className="text-sm text-gray-600">Transfer USDC or other stablecoins to fund your investments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Earn Returns</h3>
              <p className="text-sm text-gray-600">Track your investments and receive automated returns.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Investors Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">JD</div>
                <div>
                  <div className="font-bold">John D.</div>
                  <div className="text-xs text-gray-500">Investing since 2022</div>
                </div>
              </div>
              <p className="italic text-gray-600 mb-3">"I've been looking for ways to align my investments with my values. Amoca offers both competitive returns and the ability to directly see my environmental impact."</p>
              <div className="flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">RL</div>
                <div>
                  <div className="font-bold">Rachel L.</div>
                  <div className="text-xs text-gray-500">Investing since 2021</div>
                </div>
              </div>
              <p className="italic text-gray-600 mb-3">"The transparency provided by the blockchain aspect is what sold me. I can see exactly where my money is going and track my investments in real-time."</p>
              <div className="flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">MT</div>
                <div>
                  <div className="font-bold">Michael T.</div>
                  <div className="text-xs text-gray-500">Investing since 2023</div>
                </div>
              </div>
              <p className="italic text-gray-600 mb-3">"As someone new to both renewable energy and crypto, I was surprised how easy the platform was to use. The returns have been consistent, and I love the real-time impact metrics."</p>
              <div className="flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-lg mb-6">Create an account and make your first investment in under 15 minutes</p>
            <Link href="/lending/register">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition mx-2">
                Create Account
              </button>
            </Link>
            <Link href="/lending/learn-more">
              <button className="bg-white border border-green-600 text-green-600 font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-green-50 transition mx-2">
                Learn More
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">Already have an account? <Link href="/login" className="text-green-600 hover:underline">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
} 