import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'connectUser' : ActorMethod<
    [],
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
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'createProperty' : ActorMethod<
    [
      {
        'latitude' : bigint,
        'bedroom' : number,
        'bathroom' : number,
        'firstFloor' : number,
        'name' : string,
        'description' : string,
        'groundFloor' : number,
        'livingRoom' : number,
        'secondFloor' : number,
        'longitude' : bigint,
        'address' : string,
        'category' : { 'new' : null } |
          { 'used' : null },
        'dining' : number,
        'image' : Array<Uint8Array | number[]>,
        'price' : bigint,
        'construtionArea' : number,
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'latitude' : bigint,
          'bedroom' : number,
          'bathroom' : number,
          'owner' : {
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
          },
          'firstFloor' : number,
          'name' : string,
          'createdAt' : bigint,
          'description' : string,
          'history' : Array<
            { 'endDate' : bigint } |
              {
                'user' : {
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
              { 'startDate' : bigint }
          >,
          'updatedAt' : [] | [bigint],
          'groundFloor' : number,
          'livingRoom' : number,
          'secondFloor' : number,
          'longitude' : bigint,
          'address' : string,
          'category' : { 'new' : null } |
            { 'used' : null },
          'dining' : number,
          'image' : Array<Uint8Array | number[]>,
          'price' : bigint,
          'construtionArea' : number,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'emptyProperty' : ActorMethod<[], string>,
  'getProperty' : ActorMethod<
    [{ 'name' : string, 'category' : { 'new' : null } | { 'used' : null } }],
    {
        'Ok' : Array<
          {
            'id' : string,
            'latitude' : bigint,
            'bedroom' : number,
            'bathroom' : number,
            'owner' : {
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
            },
            'firstFloor' : number,
            'name' : string,
            'createdAt' : bigint,
            'description' : string,
            'history' : Array<
              { 'endDate' : bigint } |
                {
                  'user' : {
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
                { 'startDate' : bigint }
            >,
            'updatedAt' : [] | [bigint],
            'groundFloor' : number,
            'livingRoom' : number,
            'secondFloor' : number,
            'longitude' : bigint,
            'address' : string,
            'category' : { 'new' : null } |
              { 'used' : null },
            'dining' : number,
            'image' : Array<Uint8Array | number[]>,
            'price' : bigint,
            'construtionArea' : number,
          }
        >
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'getUserByPrincipal' : ActorMethod<
    [],
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
      { 'Err' : { 'code' : number, 'message' : string } }
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
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'registerUser' : ActorMethod<
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
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'whoAmI' : ActorMethod<[], string>,
}
