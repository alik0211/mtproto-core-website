---
title: Custom Storage
---

## Why do I need storage?

The storage is used to store the session (authentication keys, server salts and time offset)

## How to make your own custom storage?

### 1. Create

It's easy. The custom storage **must** follow this API:
```ts
class CustomStorage {
  set(key: string, value: string): Promise<void>;
  get(key: string): Promise<string|null>;
}
```

Examples can be found in the [last section](#ready-made-storages)

### 2. Use

Create an instance of the custom storage and pass it to `storageOptions.instance`:
```js
const instance = new CustomStorage();

new MTProto({
  storageOptions: {
    instance,
  },
});
```

## Ready-made storages

The library includes ready-made storages:

1. [tempStorage](https://github.com/alik0211/mtproto-core/blob/master/src/storage/temp/index.js) only stores data while the script is running

```js
const tempStorage = require('@mtproto/core/src/storage/temp');

new MTProto({
  storageOptions: {
    instance: tempStorage,
  },
});
```
