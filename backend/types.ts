import { Opt, Principal, Record, blob, nat64, text } from "azle";

export const User = Record({
  id: text,
  principal: Principal,
  name: text,
  email: text,
  address: text,
  birth: nat64,
  phone: text,
  idCard: blob,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

export const UserPayload = Record({
  name: text,
  email: text,
  address: text,
  birth: nat64,
  phone: text,
  idCard: blob,
});

export type User = typeof User.tsType;
export type UserPayload = typeof UserPayload.tsType;
