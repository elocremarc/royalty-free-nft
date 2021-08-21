# Hardhat!!

You need to set .env like .envtemplate, or use envrc to have matic mainnet rpc and polygonscan api key for verifying the contracts.

# Generate burner account for deployments

```
yarn generate
```

## Check funds

You should send some matic to the address that was generated, check the address with the following command:

```
yarn account
```

## Deploy to Matic

```
yarn deploy --network matic
```

## Verify Contracts

```
yarn hardhat --network matic etherscan-verify
```

## Typechain

```
yarn hardhat clean
```

```
yarn hardhat compile
```

### Errors

Error: ERROR processing .../hardhat/deploy/00_deploy_IpNftFactory.ts:
TypeError: Cannot read property 'length' of undefined

->

Check namedAccounts in hardhat.config.ts
