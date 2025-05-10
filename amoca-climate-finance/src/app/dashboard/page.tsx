import { AppHero } from '@/components/app-hero'
import Link from 'next/link';

const dashboardCards = [
  {
    title: 'Financing Options',
    description: 'Apply for solar installation and EV loans with transparent blockchain-based financing.',
    icon: '🏠',
    stats: '1,245 Financed Projects',
    buttonText: 'Get Financing',
    href: '/borrowing',
    color: 'green'
  },
  {
    title: 'Investment Opportunities',
    description: 'Fund green energy projects and earn returns while making a positive environmental impact.',
    icon: '📈',
    stats: '$4.2M Total Invested',
    buttonText: 'Start Investing',
    href: '/lending',
    color: 'blue'
  },
  {
    title: 'Portfolio & Impact',
    description: 'Track your loans, investments, and environmental impact metrics.',
    icon: '📊',
    stats: '2,150 CO₂ Tons Saved',
    buttonText: 'View Dashboard',
    href: '/portfolio',
    color: 'purple'
  }
]

const resourceLinks: { label: string; href: string }[] = [
  { label: 'Solar Tax Credits', href: 'https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics' },
  { label: 'Energy Savings Calculator', href: '#calculator' },
  { label: 'Find Local Installers', href: '#installers' },
  { label: 'Investor Resources', href: '#investor-resources' },
  { label: 'Impact Report', href: '#impact' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <AppHero
          title="Amoca Climate Finance"
          subtitle="Democratizing access to affordable, sustainable energy solutions through Solana blockchain technology."
        />

        {/* Main Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {dashboardCards.map((card, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-8 border-l-4 border-${card.color}-600 flex flex-col h-full`}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className={`text-2xl font-bold text-${card.color}-800 mb-3`}>{card.title}</h2>
              <p className="mb-4 text-gray-700 flex-grow">{card.description}</p>
              <div className={`text-${card.color}-600 font-medium mb-6 text-sm`}>{card.stats}</div>
              <Link href={card.href} className="mt-auto">
                <button className={`bg-${card.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${card.color}-700 transition w-full`}>
                  {card.buttonText}
                </button>
              </Link>
            </div>
          ))}
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
  );
}
