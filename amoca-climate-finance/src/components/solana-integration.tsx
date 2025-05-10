import React, { createContext, useContext, useState, useEffect } from 'react';

// Types for the Solana integration
type TransactionStatus = 'pending' | 'success' | 'error';

type SolanaContextType = {
  walletConnected: boolean;
  connecting: boolean;
  publicKey: string | null;
  balance: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendTransaction: (destination: string, amount: number) => Promise<{
    status: TransactionStatus;
    signature?: string;
    error?: string;
  }>;
};

// Create context with default values
const SolanaContext = createContext<SolanaContextType>({
  walletConnected: false,
  connecting: false,
  publicKey: null,
  balance: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  sendTransaction: async () => ({ status: 'error', error: 'Wallet not connected' }),
});

// Hook for components to access Solana functionality
export const useSolana = () => useContext(SolanaContext);

// Provider component that wraps your app and provides Solana context
export const SolanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  // Connect to wallet (Phantom, Solflare, etc.)
  const connectWallet = async () => {
    try {
      setConnecting(true);
      
      // In a real implementation, you would use proper wallet adapter libraries
      // This is a mock implementation for UI demonstration
      
      // Simulate wallet connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful connection
      setWalletConnected(true);
      setPublicKey('7x9eMhUYFfxvf7WnUrP5ECJAuNvKpPwbQZMM1sAKMxQw'); // Example public key
      setBalance(5.23); // Example SOL balance
      
      return;
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setPublicKey(null);
    setBalance(null);
  };

  // Send transaction (mock implementation)
  const sendTransaction = async (destination: string, amount: number) => {
    if (!walletConnected) {
      return { status: 'error' as TransactionStatus, error: 'Wallet not connected' };
    }

    try {
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock transaction signature
      const signature = 'mock-transaction-signature-' + Math.random().toString(36).substring(2, 9);
      
      return {
        status: 'success' as TransactionStatus,
        signature,
      };
    } catch (error) {
      return {
        status: 'error' as TransactionStatus,
        error: 'Transaction failed',
      };
    }
  };

  // Provide the Solana context to children components
  return (
    <SolanaContext.Provider
      value={{
        walletConnected,
        connecting,
        publicKey,
        balance,
        connectWallet,
        disconnectWallet,
        sendTransaction,
      }}
    >
      {children}
    </SolanaContext.Provider>
  );
};

// Wallet connection button component
export const WalletButton: React.FC = () => {
  const { walletConnected, connecting, publicKey, balance, connectWallet, disconnectWallet } = useSolana();

  return (
    <div className="relative">
      {!walletConnected ? (
        <button
          onClick={connectWallet}
          disabled={connecting}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition flex items-center"
        >
          {connecting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connecting...
            </>
          ) : (
            'Connect Wallet'
          )}
        </button>
      ) : (
        <div className="flex items-center">
          <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-l flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {publicKey ? publicKey.substring(0, 4) + '...' + publicKey.substring(publicKey.length - 4) : ''}
          </button>
          <button 
            className="bg-gray-100 border border-gray-300 border-l-0 text-gray-700 font-medium py-2 px-3 rounded-r hover:bg-gray-200"
            onClick={disconnectWallet}
          >
            ⏏️
          </button>
        </div>
      )}
      
      {walletConnected && (
        <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg p-3 min-w-[200px] z-50">
          <div className="text-xs text-gray-500 mb-1">Connected Wallet</div>
          <div className="font-mono text-sm mb-2 break-all">{publicKey}</div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Balance:</span>
            <span className="font-medium">{balance} SOL</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Transaction button component
export const TransactionButton: React.FC<{
  destination: string;
  amount: number;
  label: string;
  onSuccess?: (signature: string) => void;
  onError?: (error: string) => void;
}> = ({ destination, amount, label, onSuccess, onError }) => {
  const { walletConnected, sendTransaction } = useSolana();
  const [isProcessing, setIsProcessing] = useState(false);
  const [txResult, setTxResult] = useState<{
    status?: TransactionStatus;
    signature?: string;
    error?: string;
  }>({});

  const handleTransaction = async () => {
    if (!walletConnected) return;
    
    setIsProcessing(true);
    setTxResult({});
    
    try {
      const result = await sendTransaction(destination, amount);
      setTxResult(result);
      
      if (result.status === 'success' && result.signature && onSuccess) {
        onSuccess(result.signature);
      } else if (result.status === 'error' && result.error && onError) {
        onError(result.error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleTransaction}
        disabled={!walletConnected || isProcessing}
        className={`font-medium py-2 px-4 rounded transition flex items-center justify-center w-full
          ${!walletConnected 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-green-600 hover:bg-green-700 text-white'}`}
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          label
        )}
      </button>
      
      {txResult.status === 'success' && (
        <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm">
          <div className="text-green-600 font-medium">Transaction successful!</div>
          <div className="text-xs text-gray-600 mt-1 break-all">
            Signature: {txResult.signature}
          </div>
        </div>
      )}
      
      {txResult.status === 'error' && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm">
          <div className="text-red-600 font-medium">Transaction failed</div>
          <div className="text-xs text-gray-600 mt-1">
            Error: {txResult.error}
          </div>
        </div>
      )}
    </div>
  );
}; 