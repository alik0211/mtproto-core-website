---
title: Test Phone Numbers
---

## Intro

Real phone numbers have login limits per day. This probably makes it more difficult to test the authorization flow in the client application

Telegram has several reserved phone numbers for testing sign up and login. Test phone numbers only work on test DCs. To use test DCs, set the `test` parameter to `true`:
```js
new MTProto({
  test: true,
});
```

## Format

Phone number template - `+99966XYYYY`. The login code will always be `XXXXX`

1. `X` - from 1 to 3. Emulate an user associated with DC number `X`
2. `YYYY` - from 0000 to 9999. Random part

You will probably need to [sign up](sign-up.md) a user for the phone number you generate

:::tip Limits on production

Telegram: to help you with working on production DCs, logins with the same phone number with which the api_id was registered have more generous flood limits

:::

## Generator

TODO
