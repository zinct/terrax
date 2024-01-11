import { Null, Opt, Principal, Record, Variant, Vec, blob, bool, nat16, nat64, text } from "azle";

export const ErrorResponse = Record({
  code: nat16,
  message: text,
});

export const User = Record({
  id: text,
  principal: Principal,
  name: Opt(text),
  email: Opt(text),
  address: Opt(text),
  birth: Opt(nat64),
  phone: Opt(text),
  idCardImageURL: Opt(text),
  profileImageURL: Opt(text),
  isRegistered: bool,
  createdAt: Opt(nat64),
  updatedAt: Opt(nat64),
});

export const UserPayload = Record({
  name: text,
  email: text,
  address: text,
  birth: nat64,
  phone: text,
  idCardImageURL: text,
  profileImageURL: Opt(text),
});

export const PropertyCategory = Variant({
  new: Null,
  used: Null,
  land: Null,
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
  image: Vec(text),
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
  image: Vec(text),
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
  category: Opt(PropertyCategory),
});

export type User = typeof User.tsType;
export type UserPayload = typeof UserPayload.tsType;
export type ErrorResponse = typeof ErrorResponse.tsType;
export type Property = typeof Property.tsType;
export type PropertyPayload = typeof PropertyPayload.tsType;
export type PropertyCategory = typeof PropertyCategory.tsType;
