import { AppHero } from '@/components/app-hero'
import Link from 'next/link'

const resourceLinks: { label: string; href: string }[] = [
  { label: 'Solar Tax Credits', href: 'https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics' },
  { label: 'Energy Savings Calculator', href: '#calculator' },
  { label: 'Find Local Installers', href: '#installers' },
  { label: 'Investor Dashboard', href: '#investor-portal' },
  { label: 'Impact Metrics', href: '#impact' },
]

const userPaths = [
  {
    title: 'I Need Financing',
    description: 'Access affordable solar installation options for your home with transparent blockchain-based financing.',
    icon: '🏠',
    buttonText: 'Apply for Financing',
    href: '/financing',
    options: [
      {
        title: 'Solar Loans',
        description: 'Fixed-rate loans with competitive terms powered by Solana blockchain.',
        features: ['Low interest rates', 'Flexible terms', 'No hidden fees', 'On-chain tracking']
      },
      {
        title: 'Leasing & PPAs',
        description: 'Zero money down options with predictable monthly payments.',
        features: ['No upfront costs', 'Maintenance included', 'Performance guarantees', 'Energy savings']
      }
    ]
  },
  {
    title: 'I Want to Invest',
    description: 'Fund green energy projects and earn returns while making a positive environmental impact.',
    icon: '📈',
    buttonText: 'Start Investing',
    href: '/investing',
    options: [
      {
        title: 'Solar Project Bonds',
        description: 'Finance specific solar projects with stable returns backed by energy production.',
        features: ['Projected 5-7% APY', 'Project transparency', 'On-chain verification', 'ESG impact']
      },
      {
        title: 'Green Investment Pool',
        description: 'Diversified investment across multiple solar and battery installations.',
        features: ['Portfolio diversification', 'Liquidity options', 'Automated yield distribution', 'Carbon credits']
      }
    ]
  }
]

export function DashboardFeature() {
  return (
    <div className="pb-10">
      <AppHero 
        title="Amoca Climate Finance" 
        subtitle="Democratizing access to affordable, sustainable home solar & battery installations through Solana." 
      />
      
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* User Path Selection */}
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {userPaths.map((path, index) => (
            <div key={index} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700">
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">{path.description}</p>
              
              {path.options.map((option, i) => (
                <div key={i} className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                  <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                  <ul className="mb-3 space-y-1 text-sm">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <span className="mr-2 text-green-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <Link 
                href={path.href} 
                className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium w-full text-center"
              >
                {path.buttonText}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Impact Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">On-Chain Impact Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="border rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600">1,245</div>
              <div>Solar Installations</div>
            </div>
            <div className="border rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600">$4.2M</div>
              <div>Total Invested</div>
            </div>
            <div className="border rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600">2,150</div>
              <div>CO₂ Tons Saved</div>
            </div>
            <div className="border rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600">6.2%</div>
              <div>Avg. Investor Returns</div>
            </div>
          </div>
        </div>
        
        {/* Resource Links */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resourceLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
