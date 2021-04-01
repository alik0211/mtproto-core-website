---
title: Call The Telegram Methods
---

## Requirements

- Use the API module from the [error handling](setup-handle-errors.md) section
- To call most of the methods, you first need to run the [user authorization](user-authorization.md)

## Fundamentals

To call the Telegram method, use the `api.call(method, params, options)` method

### `method`

Method name from [methods list](https://core.telegram.org/methods). Example:
```js
api.call('help.getNearestDc');
```

### `params`
Let's analyze the example for [messages.sendMessage](https://core.telegram.org/method/messages.sendMessage#parameters):

1. flags — don't pass it on. Calculated automatically
2. peer — [InputPeer](https://core.telegram.org/type/InputPeer) type. To pass a constructor of the type use `_`
3. entities — Vector of [MessageEntity](https://core.telegram.org/type/MessageEntity) type. To pass a vector, use an array

```js
api.call('messages.sendMessage', {
  clear_draft: true,

  peer: {
    _: 'inputPeerSelf',
  },
  message: 'Hello @mtproto_core',
  entities: [
    {
      _: 'messageEntityBold',
      offset: 6,
      length: 13,
    },
  ],

  random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
});
```

### `options`
1. **dcId** — Number. Default: `2`. Call the method on a specific DC
2. **syncAuth** — Boolean. Default: `true`. Copy the authorization to all DCs (if the answer contains a [`auth.authorization`](https://core.telegram.org/constructor/auth.authorization))

```js
api.call('help.getNearestDc', {}, {
  dcId: 1,
});
```

## Examples

### Parse all messages from channel

```js
(async () => {
  const resolvedPeer = await api.call('contacts.resolveUsername', {
    username: 'mtproto_core',
  });

  const channel = resolvedPeer.chats.find(
    (chat) => chat.id === resolvedPeer.peer.channel_id
  );

  const inputPeer = {
    _: 'inputPeerChannel',
    channel_id: channel.id,
    access_hash: channel.access_hash,
  };

  const LIMIT_COUNT = 10;
  const allMessages = [];

  const firstHistoryResult = await api.call('messages.getHistory', {
    peer: inputPeer,
    limit: LIMIT_COUNT,
  });

  const historyCount = firstHistoryResult.count;

  for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {
    const history = await api.call('messages.getHistory', {
      peer: inputPeer,
      add_offset: offset,
      limit: LIMIT_COUNT,
    });

    allMessages.push(...history.messages);
  }

  console.log('allMessages:', allMessages);
})();
```
