import { AppHero } from '@/components/app-hero'
import Link from 'next/link';

const loanOptions = [
  {
    id: 'solar',
    title: 'Solar Installation Financing',
    description: 'Fund your home solar panel installation with transparent, blockchain-verified loans.',
    icon: '☀️',
    color: 'green',
    benefits: [
      'Low fixed interest rates (4.99-6.99% APR)',
      'Loan terms from 5-20 years',
      'No prepayment penalties',
      'On-chain loan verification and tracking',
      'Simple online application process'
    ],
    requirements: [
      'Minimum credit score of 650',
      'Maximum debt-to-income ratio of 45%',
      'Property ownership documentation',
      'Solar installation quote from approved provider'
    ],
    amounts: 'Loans from $10,000 to $50,000'
  },
  {
    id: 'battery',
    title: 'Home Battery Financing',
    description: 'Add energy storage to your home with affordable financing options for battery systems.',
    icon: '🔋',
    color: 'blue',
    benefits: [
      'Competitive interest rates (5.49-7.49% APR)',
      'Loan terms from 5-15 years',
      'Energy savings monitoring',
      'Integration with existing solar systems',
      'Transparent blockchain-based loan terms'
    ],
    requirements: [
      'Minimum credit score of 640',
      'Maximum debt-to-income ratio of 50%',
      'Property ownership documentation',
      'Battery system quote from approved provider'
    ],
    amounts: 'Loans from $5,000 to $25,000'
  },
  {
    id: 'ev',
    title: 'Electric Vehicle Loans',
    description: 'Finance your new or used electric vehicle with competitive rates and flexible terms.',
    icon: '🚗',
    color: 'purple',
    benefits: [
      'Rates starting at 4.49% APR',
      'Loan terms up to 72 months',
      'No origination fees',
      'Fast approval process',
      'Carbon offset tracking'
    ],
    requirements: [
      'Minimum credit score of 660',
      'Maximum debt-to-income ratio of 40%',
      'Proof of income',
      'Vehicle information and purchase agreement'
    ],
    amounts: 'Loans from $15,000 to $80,000'
  }
];

const steps = [
  {
    number: 1,
    title: 'Apply Online',
    description: 'Complete our simple application form with your personal information and desired loan amount.'
  },
  {
    number: 2,
    title: 'Verify Identity',
    description: 'Connect your Solana wallet and complete our secure ID verification process.'
  },
  {
    number: 3,
    title: 'Review Loan Terms',
    description: 'Review and accept your personalized loan offer with transparent terms and rates.'
  },
  {
    number: 4,
    title: 'Get Funded',
    description: 'Once approved, receive funds directly in your wallet or bank account within 2-3 business days.'
  }
];

export default function BorrowingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <AppHero
          title="Get Affordable Green Financing"
          subtitle="Transparent, blockchain-powered loans for solar installations, home batteries, and electric vehicles."
        />
        
        {/* Loan Application Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Choose Your Financing Option</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Solana blockchain-based loans offer transparent terms, competitive rates, and a seamless application process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loanOptions.map((option) => (
              <div key={option.id} className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-${option.color}-500`}>
                <div className="p-6">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-sm font-medium text-gray-800 mb-4">{option.amounts}</div>
                  
                  <h4 className="font-semibold text-green-700 mt-4 mb-2">Benefits</h4>
                  <ul className="text-sm space-y-1 mb-6">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/borrowing/apply?type=${option.id}`}>
                    <button className={`bg-${option.color}-600 hover:bg-${option.color}-700 text-white font-medium py-2 px-4 rounded w-full transition`}>
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Application Process */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Simple Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                  {step.number}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Amoca for Your Green Financing?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span><strong>Blockchain Transparency:</strong> All loans are recorded on Solana for immutable verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span><strong>Competitive Rates:</strong> Our DeFi structure allows us to offer better rates than traditional banks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span><strong>Environmental Impact:</strong> Track your carbon offset with each payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span><strong>Fast Approval:</strong> Get approved within 24-48 hours</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Hear from our borrowers</h3>
              <div className="mb-4 pb-4 border-b">
                <p className="italic text-gray-600 mb-2">"The process was incredibly smooth. I had my solar panels financed and installed within two weeks. The rates were better than my local credit union!"</p>
                <p className="text-sm font-medium">— Sarah T., California</p>
              </div>
              <div>
                <p className="italic text-gray-600 mb-2">"I love being able to track my loan and environmental impact in one dashboard. The transparency is refreshing compared to traditional lending."</p>
                <p className="text-sm font-medium">— Miguel R., Arizona</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y">
              <div className="p-6">
                <h3 className="font-bold mb-2">How are my loan rates determined?</h3>
                <p className="text-gray-600">Rates are determined based on your credit profile, loan amount, term length, and the type of green technology you're financing. Our blockchain-based system often allows us to offer more competitive rates than traditional lenders.</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Do I need a Solana wallet to apply?</h3>
                <p className="text-gray-600">Yes, you'll need a Solana wallet to complete the application process and receive your loan. Don't worry, we provide easy instructions to set one up if you don't already have one.</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">What happens if I want to pay off my loan early?</h3>
                <p className="text-gray-600">There are no prepayment penalties on any of our loans. You're free to make additional payments or pay off your loan at any time without extra fees.</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">How is my environmental impact calculated?</h3>
                <p className="text-gray-600">We use industry-standard calculations based on the specifications of your solar system, battery, or EV, verified through oracle data feeds on the Solana blockchain for accuracy and transparency.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">Apply now and get a decision within 24-48 hours</p>
            <Link href="/borrowing/apply">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition mx-2">
                Apply for Financing
              </button>
            </Link>
            <Link href="/calculator">
              <button className="bg-white border border-green-600 text-green-600 font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-green-50 transition mx-2">
                Use Loan Calculator
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">Have questions? <Link href="/contact" className="text-green-600 hover:underline">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
} 