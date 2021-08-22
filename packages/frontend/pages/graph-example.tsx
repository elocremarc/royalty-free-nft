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
    ipNfts {
      id
      address
      ipBrandName
      ipBrandSymbol
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
    <Box mt={4}>
      <p>Transaction</p>
      <p>Title: {title}</p>
      <p>Hash: {hash}</p>
      <p>Date: {date}</p>
    </Box>
  )
}

function GraphExampleIndex(): JSX.Element {
  const { account } = useEthers()
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
        data.ipNfts.map(
          ({ id, address, licensor, ipBrandName, ipBrandSymbol }) => (
            <Box key={id} mt="8">
              <Text>Licensor: {licensor}</Text>
              <Text>Address: {address}</Text>
              <Text>ipBrandName: {ipBrandName}</Text>
              <Text>ipBrandSymbol: {ipBrandSymbol}</Text>
            </Box>
          )
        )}
    </Layout>
  )
}

export default GraphExampleIndex
