import { Null, Opt, Principal, Record, Variant, Vec, blob, bool, nat16, nat64, text } from "azle";

export const ErrorResponse = Record({
  code: nat16,
  message: text,
});

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

const PropertyCategory = Variant({
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
  description: text,
  price: nat64,
  image: Vec(blob),
  category: PropertyCategory,
  history: Vec(PropertyHistory),
  bedroom: nat16,
  bathroom: nat16,
  dining: nat16,
  livingRoom: nat16,
  groundFloor: nat16,
  firstFloor: nat16,
  secondFloor: nat16,
  construtionArea: nat16,
  address: text,
  latitude: nat64,
  longitude: nat64,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

export const PropertyPayload = Record({
  name: text,
  description: text,
  price: nat64,
  image: Vec(blob),
  category: PropertyCategory,
  bedroom: nat16,
  bathroom: nat16,
  dining: nat16,
  livingRoom: nat16,
  groundFloor: nat16,
  firstFloor: nat16,
  secondFloor: nat16,
  construtionArea: nat16,
  address: text,
  latitude: nat64,
  longitude: nat64,
});

export const PropertyParams = Record({
  name: text,
  category: PropertyCategory,
});

export type User = typeof User.tsType;
export type UserPayload = typeof UserPayload.tsType;
export type ErrorResponse = typeof ErrorResponse.tsType;
export type Property = typeof Property.tsType;
export type PropertyPayload = typeof PropertyPayload.tsType;
