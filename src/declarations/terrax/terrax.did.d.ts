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
          { 'land' : null } |
          { 'used' : null },
        'dining' : number,
        'image' : Array<string>,
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
            { 'endDate' : bigint } |
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
            { 'land' : null } |
            { 'used' : null },
          'dining' : number,
          'image' : Array<string>,
          'price' : bigint,
          'construtionArea' : number,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'emptyProperty' : ActorMethod<[], string>,
  'emptyUsers' : ActorMethod<[], string>,
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
            'latitude' : bigint,
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
              { 'endDate' : bigint } |
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
              { 'land' : null } |
              { 'used' : null },
            'dining' : number,
            'image' : Array<string>,
            'price' : bigint,
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
          'latitude' : bigint,
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
            { 'endDate' : bigint } |
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
            { 'land' : null } |
            { 'used' : null },
          'dining' : number,
          'image' : Array<string>,
          'price' : bigint,
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
