import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'connectUser' : ActorMethod<
    [
      {
        'name' : string,
        'email' : string,
        'address' : string,
        'birth' : bigint,
        'idCard' : Uint8Array | number[],
        'phone' : string,
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'principal' : Principal,
          'name' : string,
          'createdAt' : bigint,
          'email' : string,
          'updatedAt' : [] | [bigint],
          'address' : string,
          'birth' : bigint,
          'idCard' : Uint8Array | number[],
          'phone' : string,
        }
      } |
      { 'Err' : string }
  >,
  'getUsers' : ActorMethod<
    [],
    {
        'Ok' : Array<
          {
            'id' : string,
            'principal' : Principal,
            'name' : string,
            'createdAt' : bigint,
            'email' : string,
            'updatedAt' : [] | [bigint],
            'address' : string,
            'birth' : bigint,
            'idCard' : Uint8Array | number[],
            'phone' : string,
          }
        >
      } |
      { 'Err' : string }
  >,
}
