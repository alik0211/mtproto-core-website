---
title: Installation
slug: /
---

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 12 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed

## Install

```sh
yarn add @mtproto/core -E
# or
npm i @mtproto/core -E
```

## Select environment

Depending on your environment, you need to use **different import paths**. Currently, two environments are supported:
1. **`node`** — if you run the code in the Node.js
2. **`browser`** — if you run the code in a browser environment

### Import for `node` environment

```js
const MTProto = require('@mtproto/core');
// or
// const MTProto = require('@mtproto/core/envs/node');
```

### Import for `browser` environment

```js
const MTProto = require('@mtproto/core/envs/browser');
```

## Getting `api_id` and `api_hash`

:::danger About abuse

If you use the Telegram API for flooding, spamming, faking subscriber and view counters of channels, you **will be banned forever**

:::

1. Login into [https://my.telegram.org/](https://my.telegram.org/)
2. Go to [https://my.telegram.org/apps](https://my.telegram.org/apps) and fill out the form
3. Take the `api_id` and `api_hash` of your app

## Final check

### Create simple file

```js title="example.js"
const MTProto = require('@mtproto/core/envs/node');

const api_id = YOU_API_ID;
const api_hash = YOU_API_HASH;

// 1. Create instance
const mtproto = new MTProto({
  api_id,
  api_hash,
});

// 2. Print the user country code
mtproto.call('help.getNearestDc').then(result => {
  console.log('country:', result.country);
});
```

### Run

```sh
node example.js
```
