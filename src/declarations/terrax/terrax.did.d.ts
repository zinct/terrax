import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'connectUser' : ActorMethod<
    [],
    {
        'Ok' : {
          'id' : string,
          'principal' : Principal,
          'name' : [] | [string],
          'createdAt' : [] | [bigint],
          'email' : [] | [string],
          'updatedAt' : [] | [bigint],
          'idCardImageURL' : [] | [string],
          'address' : [] | [string],
          'birth' : [] | [bigint],
          'phone' : [] | [string],
          'isRegistered' : boolean,
          'profileImageURL' : [] | [string],
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'createProperty' : ActorMethod<
    [
      {
        'latitude' : string,
        'bedroom' : number,
        'bathroom' : number,
        'firstFloor' : number,
        'name' : string,
        'description' : string,
        'groundFloor' : number,
        'livingRoom' : number,
        'secondFloor' : number,
        'longitude' : string,
        'address' : string,
        'category' : { 'new' : null } |
          { 'land' : null } |
          { 'used' : null },
        'dining' : number,
        'image' : Array<string>,
        'price' : number,
        'construtionArea' : number,
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'latitude' : string,
          'bedroom' : number,
          'bathroom' : number,
          'owner' : {
            'id' : string,
            'principal' : Principal,
            'name' : [] | [string],
            'createdAt' : [] | [bigint],
            'email' : [] | [string],
            'updatedAt' : [] | [bigint],
            'idCardImageURL' : [] | [string],
            'address' : [] | [string],
            'birth' : [] | [bigint],
            'phone' : [] | [string],
            'isRegistered' : boolean,
            'profileImageURL' : [] | [string],
          },
          'firstFloor' : number,
          'name' : string,
          'createdAt' : bigint,
          'description' : string,
          'history' : Array<
            {
              'user' : {
                'id' : string,
                'principal' : Principal,
                'name' : [] | [string],
                'createdAt' : [] | [bigint],
                'email' : [] | [string],
                'updatedAt' : [] | [bigint],
                'idCardImageURL' : [] | [string],
                'address' : [] | [string],
                'birth' : [] | [bigint],
                'phone' : [] | [string],
                'isRegistered' : boolean,
                'profileImageURL' : [] | [string],
              },
              'startDate' : bigint,
            }
          >,
          'updatedAt' : [] | [bigint],
          'groundFloor' : number,
          'livingRoom' : number,
          'secondFloor' : number,
          'longitude' : string,
          'address' : string,
          'category' : { 'new' : null } |
            { 'land' : null } |
            { 'used' : null },
          'dining' : number,
          'image' : Array<string>,
          'price' : number,
          'construtionArea' : number,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'debug' : ActorMethod<
    [
      {
        'name' : string,
        'category' : [] | [
          { 'new' : null } |
            { 'land' : null } |
            { 'used' : null }
        ],
      },
    ],
    { 'Ok' : string } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'emptyProperty' : ActorMethod<[], string>,
  'emptyUsers' : ActorMethod<[], string>,
  'getCurrentProperties' : ActorMethod<
    [],
    {
        'Ok' : Array<
          {
            'id' : string,
            'latitude' : string,
            'bedroom' : number,
            'bathroom' : number,
            'owner' : {
              'id' : string,
              'principal' : Principal,
              'name' : [] | [string],
              'createdAt' : [] | [bigint],
              'email' : [] | [string],
              'updatedAt' : [] | [bigint],
              'idCardImageURL' : [] | [string],
              'address' : [] | [string],
              'birth' : [] | [bigint],
              'phone' : [] | [string],
              'isRegistered' : boolean,
              'profileImageURL' : [] | [string],
            },
            'firstFloor' : number,
            'name' : string,
            'createdAt' : bigint,
            'description' : string,
            'history' : Array<
              {
                'user' : {
                  'id' : string,
                  'principal' : Principal,
                  'name' : [] | [string],
                  'createdAt' : [] | [bigint],
                  'email' : [] | [string],
                  'updatedAt' : [] | [bigint],
                  'idCardImageURL' : [] | [string],
                  'address' : [] | [string],
                  'birth' : [] | [bigint],
                  'phone' : [] | [string],
                  'isRegistered' : boolean,
                  'profileImageURL' : [] | [string],
                },
                'startDate' : bigint,
              }
            >,
            'updatedAt' : [] | [bigint],
            'groundFloor' : number,
            'livingRoom' : number,
            'secondFloor' : number,
            'longitude' : string,
            'address' : string,
            'category' : { 'new' : null } |
              { 'land' : null } |
              { 'used' : null },
            'dining' : number,
            'image' : Array<string>,
            'price' : number,
            'construtionArea' : number,
          }
        >
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'getProperties' : ActorMethod<
    [
      {
        'name' : string,
        'category' : [] | [
          { 'new' : null } |
            { 'land' : null } |
            { 'used' : null }
        ],
      },
    ],
    {
        'Ok' : Array<
          {
            'id' : string,
            'latitude' : string,
            'bedroom' : number,
            'bathroom' : number,
            'owner' : {
              'id' : string,
              'principal' : Principal,
              'name' : [] | [string],
              'createdAt' : [] | [bigint],
              'email' : [] | [string],
              'updatedAt' : [] | [bigint],
              'idCardImageURL' : [] | [string],
              'address' : [] | [string],
              'birth' : [] | [bigint],
              'phone' : [] | [string],
              'isRegistered' : boolean,
              'profileImageURL' : [] | [string],
            },
            'firstFloor' : number,
            'name' : string,
            'createdAt' : bigint,
            'description' : string,
            'history' : Array<
              {
                'user' : {
                  'id' : string,
                  'principal' : Principal,
                  'name' : [] | [string],
                  'createdAt' : [] | [bigint],
                  'email' : [] | [string],
                  'updatedAt' : [] | [bigint],
                  'idCardImageURL' : [] | [string],
                  'address' : [] | [string],
                  'birth' : [] | [bigint],
                  'phone' : [] | [string],
                  'isRegistered' : boolean,
                  'profileImageURL' : [] | [string],
                },
                'startDate' : bigint,
              }
            >,
            'updatedAt' : [] | [bigint],
            'groundFloor' : number,
            'livingRoom' : number,
            'secondFloor' : number,
            'longitude' : string,
            'address' : string,
            'category' : { 'new' : null } |
              { 'land' : null } |
              { 'used' : null },
            'dining' : number,
            'image' : Array<string>,
            'price' : number,
            'construtionArea' : number,
          }
        >
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'getProperty' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : string,
          'latitude' : string,
          'bedroom' : number,
          'bathroom' : number,
          'owner' : {
            'id' : string,
            'principal' : Principal,
            'name' : [] | [string],
            'createdAt' : [] | [bigint],
            'email' : [] | [string],
            'updatedAt' : [] | [bigint],
            'idCardImageURL' : [] | [string],
            'address' : [] | [string],
            'birth' : [] | [bigint],
            'phone' : [] | [string],
            'isRegistered' : boolean,
            'profileImageURL' : [] | [string],
          },
          'firstFloor' : number,
          'name' : string,
          'createdAt' : bigint,
          'description' : string,
          'history' : Array<
            {
              'user' : {
                'id' : string,
                'principal' : Principal,
                'name' : [] | [string],
                'createdAt' : [] | [bigint],
                'email' : [] | [string],
                'updatedAt' : [] | [bigint],
                'idCardImageURL' : [] | [string],
                'address' : [] | [string],
                'birth' : [] | [bigint],
                'phone' : [] | [string],
                'isRegistered' : boolean,
                'profileImageURL' : [] | [string],
              },
              'startDate' : bigint,
            }
          >,
          'updatedAt' : [] | [bigint],
          'groundFloor' : number,
          'livingRoom' : number,
          'secondFloor' : number,
          'longitude' : string,
          'address' : string,
          'category' : { 'new' : null } |
            { 'land' : null } |
            { 'used' : null },
          'dining' : number,
          'image' : Array<string>,
          'price' : number,
          'construtionArea' : number,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'getTimestamp' : ActorMethod<[], bigint>,
  'getUserByPrincipal' : ActorMethod<
    [],
    {
        'Ok' : {
          'id' : string,
          'principal' : Principal,
          'name' : [] | [string],
          'createdAt' : [] | [bigint],
          'email' : [] | [string],
          'updatedAt' : [] | [bigint],
          'idCardImageURL' : [] | [string],
          'address' : [] | [string],
          'birth' : [] | [bigint],
          'phone' : [] | [string],
          'isRegistered' : boolean,
          'profileImageURL' : [] | [string],
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
            'name' : [] | [string],
            'createdAt' : [] | [bigint],
            'email' : [] | [string],
            'updatedAt' : [] | [bigint],
            'idCardImageURL' : [] | [string],
            'address' : [] | [string],
            'birth' : [] | [bigint],
            'phone' : [] | [string],
            'isRegistered' : boolean,
            'profileImageURL' : [] | [string],
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
        'idCardImageURL' : string,
        'address' : string,
        'birth' : bigint,
        'phone' : string,
        'profileImageURL' : [] | [string],
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'principal' : Principal,
          'name' : [] | [string],
          'createdAt' : [] | [bigint],
          'email' : [] | [string],
          'updatedAt' : [] | [bigint],
          'idCardImageURL' : [] | [string],
          'address' : [] | [string],
          'birth' : [] | [bigint],
          'phone' : [] | [string],
          'isRegistered' : boolean,
          'profileImageURL' : [] | [string],
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'whoAmI' : ActorMethod<[], string>,
}
