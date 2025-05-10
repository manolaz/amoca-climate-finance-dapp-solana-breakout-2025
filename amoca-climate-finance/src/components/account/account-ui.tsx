'use client'

import { RefreshCw, Droplet } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { ExplorerLink } from '../cluster/cluster-ui'
import {
  useGetBalance,
  useGetSignatures,
  useGetTokenAccounts,
  useRequestAirdrop,
  useTransferSol,
} from './account-data-access'
import { ellipsify } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/components/app-alert'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AppModal } from '@/components/app-modal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UiWalletAccount, useWalletUi, useWalletUiCluster } from '@wallet-ui/react'
import { address, Address, Lamports, lamportsToSol } from 'gill'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

export function AccountBalance({ address }: { address: Address }) {
  const query = useGetBalance({ address })

  return (
    <h1 className="text-5xl font-bold cursor-pointer text-blue-600" onClick={() => query.refetch()}>
      <span className="mr-2">💧</span>{query.data ? <BalanceSol balance={query.data} /> : '...'} SOL
    </h1>
  )
}

export function AccountChecker() {
  const { account } = useWalletUi()
  if (!account) {
    return null
  }
  return <AccountBalanceCheck address={address(account.address)} />
}

export function AccountBalanceCheck({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster()
  const mutation = useRequestAirdrop({ address })
  const query = useGetBalance({ address })

  if (query.isLoading) {
    return null
  }
  if (query.isError || !query.data) {
    return (
      <AppAlert
        action={
          <Button variant="outline" onClick={() => mutation.mutateAsync(1).catch((err) => console.log(err))}
                 className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700">
            <span className="mr-2">🚰</span> Request Airdrop
          </Button>
        }
      >
        <span className="text-blue-700">⚠️ You are connected to <strong>{cluster.label}</strong> but your account is not found on this cluster.</span>
      </AppAlert>
    )
  }
  return null
}

export function AccountButtons({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster()
  const { account } = useWalletUi()
  return (
    <div>
      <div className="space-x-2">
        {cluster.urlOrMoniker === 'mainnet' ? null : <ModalAirdrop address={address} />}
        <ErrorBoundary errorComponent={() => null}>
          {account ? <ModalSend address={address} account={account} /> : null}
        </ErrorBoundary>
        <ModalReceive address={address} />
      </div>
    </div>
  )
}

export function AccountTokens({ address }: { address: Address }) {
  const [showAll, setShowAll] = useState(false)
  const query = useGetTokenAccounts({ address })
  const client = useQueryClient()
  const items = useMemo(() => {
    if (showAll) return query.data
    return query.data?.slice(0, 5)
  }, [query.data, showAll])

  return (
    <div className="space-y-2">
      <div className="justify-between">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-green-600"><span className="mr-2">🌱</span> Token Accounts</h2>
          <div className="space-x-2">
            {query.isLoading ? (
              <span className="loading loading-spinner text-blue-500"></span>
            ) : (
              <Button
                variant="outline"
                onClick={async () => {
                  await query.refetch()
                  await client.invalidateQueries({
                    queryKey: ['getTokenAccountBalance'],
                  })
                }}
                className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"
              >
                <RefreshCw size={16} className="text-blue-600" />
              </Button>
            )}
          </div>
        </div>
      </div>
      {query.isError && <pre className="alert alert-error bg-red-50 text-red-600">❌ Error: {query.error?.message.toString()}</pre>}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div className="text-blue-500">📭 No token accounts found.</div>
          ) : (
            <Table className="border-green-100">
              <TableHeader className="bg-green-50">
                <TableRow>
                  <TableHead>Public Key</TableHead>
                  <TableHead>Mint</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map(({ account, pubkey }) => (
                  <TableRow key={pubkey.toString()} className="hover:bg-blue-50">
                    <TableCell>
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          <ExplorerLink label={ellipsify(pubkey.toString())} address={pubkey.toString()} />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          <ExplorerLink
                            label={ellipsify(account.data.parsed.info.mint)}
                            address={account.data.parsed.info.mint.toString()}
                          />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-mono">{account.data.parsed.info.tokenAmount.uiAmount}</span>
                    </TableCell>
                  </TableRow>
                ))}

                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)} 
                              className="bg-green-50 hover:bg-green-100 border-green-200 text-green-700">
                        {showAll ? '👆 Show Less' : '👇 Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  )
}

export function AccountTransactions({ address }: { address: Address }) {
  const query = useGetSignatures({ address })
  const [showAll, setShowAll] = useState(false)

  const items = useMemo(() => {
    if (showAll) return query.data
    return query.data?.slice(0, 5)
  }, [query.data, showAll])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-blue-600"><span className="mr-2">🌊</span> Transaction History</h2>
        <div className="space-x-2">
          {query.isLoading ? (
            <span className="loading loading-spinner text-blue-500"></span>
          ) : (
            <Button variant="outline" onClick={() => query.refetch()}
                    className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700">
              <RefreshCw size={16} className="text-blue-600" />
            </Button>
          )}
        </div>
      </div>
      {query.isError && <pre className="alert alert-error bg-red-50 text-red-600">❌ Error: {query.error?.message.toString()}</pre>}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div className="text-blue-500">📭 No transactions found.</div>
          ) : (
            <Table className="border-blue-100">
              <TableHeader className="bg-blue-50">
                <TableRow>
                  <TableHead>Signature</TableHead>
                  <TableHead className="text-right">Slot</TableHead>
                  <TableHead>Block Time</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map((item) => (
                  <TableRow key={item.signature} className="hover:bg-blue-50">
                    <TableHead className="font-mono">
                      <ExplorerLink transaction={item.signature} label={ellipsify(item.signature, 8)} />
                    </TableHead>
                    <TableCell className="font-mono text-right">
                      <ExplorerLink block={item.slot.toString()} label={item.slot.toString()} />
                    </TableCell>
                    <TableCell>{new Date((Number(item.blockTime) ?? 0) * 1000).toISOString()}</TableCell>
                    <TableCell className="text-right">
                      {item.err ? (
                        <span className="text-red-500 flex items-center justify-end gap-1" title={item.err.toString()}>
                          <span>❌</span> Failed
                        </span>
                      ) : (
                        <span className="text-green-500 flex items-center justify-end gap-1">
                          <span>✅</span> Success
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)}
                              className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700">
                        {showAll ? '👆 Show Less' : '👇 Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  )
}

function BalanceSol({ balance }: { balance: Lamports }) {
  return <span className="text-blue-600">{lamportsToSol(balance)}</span>
}

function ModalReceive({ address }: { address: Address }) {
  return (
    <AppModal title="📥 Receive">
      <p className="text-green-700">Receive assets by sending them to your public key:</p>
      <code className="bg-blue-50 text-blue-800 p-2 rounded block mt-2 break-all">{address.toString()}</code>
    </AppModal>
  )
}

function ModalAirdrop({ address }: { address: Address }) {
  const mutation = useRequestAirdrop({ address })
  const [amount, setAmount] = useState('2')

  return (
    <AppModal
      title="🚿 Airdrop"
      submitDisabled={!amount || mutation.isPending}
      submitLabel="Request Airdrop"
      submit={() => mutation.mutateAsync(parseFloat(amount))}
    >
      <Label htmlFor="amount" className="text-blue-700">💧 Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        step="any"
        type="number"
        value={amount}
        className="border-blue-200 focus:border-blue-400"
      />
    </AppModal>
  )
}

function ModalSend(props: { address: Address; account: UiWalletAccount }) {
  const mutation = useTransferSol({ address: props.address, account: props.account })
  const [destination, setDestination] = useState('')
  const [amount, setAmount] = useState('1')

  if (!props.address || !props.account) {
    return <div className="text-blue-500">⚠️ Wallet not connected</div>
  }

  return (
    <AppModal
      title="🌊 Send"
      submitDisabled={!destination || !amount || mutation.isPending}
      submitLabel="Send"
      submit={() => {
        mutation.mutateAsync({
          destination: address(destination),
          amount: parseFloat(amount),
        })
      }}
    >
      <Label htmlFor="destination" className="text-green-700">📤 Destination</Label>
      <Input
        disabled={mutation.isPending}
        id="destination"
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        type="text"
        value={destination}
        className="border-green-200 focus:border-green-400"
      />
      <Label htmlFor="amount" className="text-green-700">💧 Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        step="any"
        type="number"
        value={amount}
        className="border-green-200 focus:border-green-400"
      />
    </AppModal>
  )
}
