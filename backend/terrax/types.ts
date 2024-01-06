import { Null, Opt, Principal, Record, Recursive, Variant, Vec, blob, bool, nat16, nat64, nat8, text } from "azle";

export const ErrorResponse = Record({
  code: nat16,
  message: text,
});

export type ErrorResponse = typeof ErrorResponse.tsType;

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

const PropertyType = Variant({
  new: Null,
  used: Null,
});

export const PropertyHistory = Variant({
  user: User,
  startDate: nat64,
  endDate: nat64,
});

export const Property = Record({
  id: text,
  owner: User,

  name: text,
  price: nat64,
  image: Vec(blob),
  type: PropertyType,
  history: Vec(PropertyHistory),

  bedroom: nat64,
  bathroom: nat64,
  dining: nat64,
  livingRoom: nat64,
  groundFloor: nat64,
  firstFloor: nat64,
  secondFloor: nat64,
  construtionArea: nat64,

  address: text,
  latitude: nat64,
  longitude: nat64,

  createdAt: nat64,
  updatedAt: Opt(nat64),
});

export type Property = typeof Property.tsType;
