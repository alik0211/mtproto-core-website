---
title: Setup. Handle Updates
---

```js
mtproto.updates.on('updatesTooLong', (updateInfo) => {
  console.log('updatesTooLong:', updateInfo);
});

mtproto.updates.on('updateShortMessage', (updateInfo) => {
  console.log('updateShortMessage:', updateInfo);
});

mtproto.updates.on('updateShortChatMessage', (updateInfo) => {
  console.log('updateShortChatMessage:', updateInfo);
});

mtproto.updates.on('updateShort', (updateInfo) => {
  console.log('updateShort:', updateInfo);
});

mtproto.updates.on('updatesCombined', (updateInfo) => {
  console.log('updatesCombined:', updateInfo);
});

mtproto.updates.on('updates', (updateInfo) => {
  console.log('updates:', updateInfo);
});

mtproto.updates.on('updateShortSentMessage', (updateInfo) => {
  console.log('updateShortSentMessage:', updateInfo);
});
```
