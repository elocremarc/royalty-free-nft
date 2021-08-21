# Instructions

Follow standard scaffold-eth instructions

# Localhost development

```
yarn graph-prepare:localhost
yarn graph-ship-local
```

# Deploy subgraph to legacy explorer

https://thegraph.com/docs/developer/deploy-subgraph-hosted

```
graph deploy --product hosted-service miaortizma/Ipnft
```

# Deploy to Graph Studio

From root folder:

```
yarn graph-prepare:matic
```

```
graph codegen && graph build
graph deploy --studio ipnft
```
