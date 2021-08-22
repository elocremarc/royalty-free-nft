import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import {
  useEthers,
  useEtherBalance,
  useTransactions,
  StoredTransaction,
} from '@usedapp/core'
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'
import { formatEther } from '@ethersproject/units'
import { utils, Contract } from 'ethers'
import { IpNftFactory } from '../types/typechain'

import { Alert, AlertIcon, Box, Heading, Text } from '@chakra-ui/react'
import hardhatContracts from '../contracts/hardhat_contracts.json'
import Layout from '../components/layout/Layout'

const COMPOUND_MARKETS = gql`
  query GetAllIpNfts {
    ipNfts(licensor: "eq") {
      id
      licensor
    }
  }
`

function ListElement({
  transaction,
  transactionName: title,
  submittedAt: date,
}: StoredTransaction) {
  const { hash } = transaction
  return (
    <div>
      <p>Transaction</p>
      <p>Title: {title}</p>
      <p>Hash: {hash}</p>
      <p>Date: {date}</p>
    </div>
  )
}

function GraphExampleIndex(): JSX.Element {
  const { chainId, account } = useEthers()
  const { loading, error, data } = useQuery(COMPOUND_MARKETS)
  const etherBalance = useEtherBalance(account)
  const [disabled, setDisabled] = useState(false)

  const ipNftFactoryJson =
    hardhatContracts['31337']['localhost']['contracts']['IpNftFactory']
  const { abi, address } = ipNftFactoryJson

  const ipNftFactoryInterface = new utils.Interface(abi)
  const contract = new Contract(address, ipNftFactoryInterface) as IpNftFactory

  const { state, send } = useContractFunction__fix(contract, 'newIpNft', {
    transactionName: 'NewIpNFT',
  })

  const { transactions } = useTransactions()

  const handleClick = () => {
    setDisabled(true)
    send('Test', 'Test', 'QmTwx4sLHk432eDqe54CX3Jij2isStJDpe6ey8eBRTYFZq')
  }

  useEffect(() => {
    console.log(state)
    if (state.status != 'Mining') {
      setDisabled(false)
    }
  }, [state])

  return (
    <Layout>
      <Heading as="h1" mb="12">
        The Graph Query Page
      </Heading>
      <div>Hello</div>
      <div>Account: {account}</div>
      {etherBalance && <div>Balance: {formatEther(etherBalance)}</div>}
      <p>Transaction History</p>
      {transactions.map((transaction) => (
        <ListElement key={transaction.transaction.hash} {...transaction} />
      ))}
      <button disabled={disabled} onClick={handleClick}>
        New IpNft
      </button>

      {loading && (
        <Alert status="warning">
          <AlertIcon />
          ... Loading
        </Alert>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}
      {!loading &&
        !error &&
        data.ipNfts.map(({ id, licesor }) => (
          <Box key={id} mt="8">
            <Text>Name: {licensor}</Text>
          </Box>
        ))}
    </Layout>
  )
}

export default GraphExampleIndex
