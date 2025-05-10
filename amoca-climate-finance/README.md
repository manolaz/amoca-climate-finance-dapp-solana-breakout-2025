# Amoca Climate Finance DApp

A decentralized application for funding renewable energy projects and financing solar installations and electric vehicles through Solana blockchain technology.

## Overview

Amoca Climate Finance bridges the gap between traditional green financing and blockchain technology, creating a transparent, efficient, and accessible platform for both borrowers and investors.

Key features:
- Transparent blockchain-based lending
- Real-time impact metrics
- Competitive rates for borrowers
- Attractive returns for investors
- Environmental impact tracking

## Pages Structure

- **Dashboard** (`/dashboard`): Central hub showing key metrics, recent activity, and navigation
- **Borrowing** (`/borrowing`): For users seeking financing for solar installations or EVs
- **Lending** (`/lending`): For investors looking to fund green energy projects
- **Portfolio** (`/portfolio`): For tracking investments and loans

## Technology Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Blockchain**: Solana (for fast, low-cost transactions)
- **Data Storage**: Combination of on-chain data and off-chain database

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
```

3. Run the development server:
```bash
npm run dev
```

## Solana Integration

This project includes a basic Solana integration layer in `src/components/solana-integration.tsx`. For a production application, you would need to:

1. Install proper Solana wallet adapters:
```bash
npm install @solana/wallet-adapter-react @solana/wallet-adapter-wallets @solana/wallet-adapter-react-ui
```

2. Set up proper wallet adapter configuration
3. Create the necessary Solana programs (smart contracts) for:
   - Loan origination
   - Investment pooling
   - Repayment tracking
   - Impact metrics calculation

## Smart Contract Structure

For a complete implementation, the following Solana programs would be needed:

1. **Loan Program**: Handles loan creation, funding, and repayment tracking
2. **Investment Pool**: Manages diversified investments across multiple projects
3. **Impact Tracker**: Calculates and verifies environmental impact metrics

## TypeScript Setup

To resolve TypeScript errors related to JSX elements, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Deployment

This application can be deployed on platforms like Vercel or Netlify that support Next.js applications.

## License

MIT
