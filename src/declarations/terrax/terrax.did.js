export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'connectUser' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'principal' : IDL.Principal,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'email' : IDL.Text,
              'updatedAt' : IDL.Opt(IDL.Nat64),
              'address' : IDL.Text,
              'birth' : IDL.Nat64,
              'idCard' : IDL.Vec(IDL.Nat8),
              'phone' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        ['query'],
      ),
    'createProperty' : IDL.Func(
        [
          IDL.Record({
            'latitude' : IDL.Nat64,
            'bedroom' : IDL.Nat16,
            'bathroom' : IDL.Nat16,
            'firstFloor' : IDL.Nat16,
            'name' : IDL.Text,
            'description' : IDL.Text,
            'groundFloor' : IDL.Nat16,
            'livingRoom' : IDL.Nat16,
            'secondFloor' : IDL.Nat16,
            'longitude' : IDL.Nat64,
            'address' : IDL.Text,
            'category' : IDL.Variant({ 'new' : IDL.Null, 'used' : IDL.Null }),
            'dining' : IDL.Nat16,
            'image' : IDL.Vec(IDL.Vec(IDL.Nat8)),
            'price' : IDL.Nat64,
            'construtionArea' : IDL.Nat16,
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'latitude' : IDL.Nat64,
              'bedroom' : IDL.Nat16,
              'bathroom' : IDL.Nat16,
              'owner' : IDL.Record({
                'id' : IDL.Text,
                'principal' : IDL.Principal,
                'name' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'email' : IDL.Text,
                'updatedAt' : IDL.Opt(IDL.Nat64),
                'address' : IDL.Text,
                'birth' : IDL.Nat64,
                'idCard' : IDL.Vec(IDL.Nat8),
                'phone' : IDL.Text,
              }),
              'firstFloor' : IDL.Nat16,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'description' : IDL.Text,
              'history' : IDL.Vec(
                IDL.Variant({
                  'endDate' : IDL.Nat64,
                  'user' : IDL.Record({
                    'id' : IDL.Text,
                    'principal' : IDL.Principal,
                    'name' : IDL.Text,
                    'createdAt' : IDL.Nat64,
                    'email' : IDL.Text,
                    'updatedAt' : IDL.Opt(IDL.Nat64),
                    'address' : IDL.Text,
                    'birth' : IDL.Nat64,
                    'idCard' : IDL.Vec(IDL.Nat8),
                    'phone' : IDL.Text,
                  }),
                  'startDate' : IDL.Nat64,
                })
              ),
              'updatedAt' : IDL.Opt(IDL.Nat64),
              'groundFloor' : IDL.Nat16,
              'livingRoom' : IDL.Nat16,
              'secondFloor' : IDL.Nat16,
              'longitude' : IDL.Nat64,
              'address' : IDL.Text,
              'category' : IDL.Variant({ 'new' : IDL.Null, 'used' : IDL.Null }),
              'dining' : IDL.Nat16,
              'image' : IDL.Vec(IDL.Vec(IDL.Nat8)),
              'price' : IDL.Nat64,
              'construtionArea' : IDL.Nat16,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'emptyProperty' : IDL.Func([], [IDL.Text], []),
    'getProperty' : IDL.Func(
        [
          IDL.Record({
            'name' : IDL.Text,
            'category' : IDL.Variant({ 'new' : IDL.Null, 'used' : IDL.Null }),
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'latitude' : IDL.Nat64,
                'bedroom' : IDL.Nat16,
                'bathroom' : IDL.Nat16,
                'owner' : IDL.Record({
                  'id' : IDL.Text,
                  'principal' : IDL.Principal,
                  'name' : IDL.Text,
                  'createdAt' : IDL.Nat64,
                  'email' : IDL.Text,
                  'updatedAt' : IDL.Opt(IDL.Nat64),
                  'address' : IDL.Text,
                  'birth' : IDL.Nat64,
                  'idCard' : IDL.Vec(IDL.Nat8),
                  'phone' : IDL.Text,
                }),
                'firstFloor' : IDL.Nat16,
                'name' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'description' : IDL.Text,
                'history' : IDL.Vec(
                  IDL.Variant({
                    'endDate' : IDL.Nat64,
                    'user' : IDL.Record({
                      'id' : IDL.Text,
                      'principal' : IDL.Principal,
                      'name' : IDL.Text,
                      'createdAt' : IDL.Nat64,
                      'email' : IDL.Text,
                      'updatedAt' : IDL.Opt(IDL.Nat64),
                      'address' : IDL.Text,
                      'birth' : IDL.Nat64,
                      'idCard' : IDL.Vec(IDL.Nat8),
                      'phone' : IDL.Text,
                    }),
                    'startDate' : IDL.Nat64,
                  })
                ),
                'updatedAt' : IDL.Opt(IDL.Nat64),
                'groundFloor' : IDL.Nat16,
                'livingRoom' : IDL.Nat16,
                'secondFloor' : IDL.Nat16,
                'longitude' : IDL.Nat64,
                'address' : IDL.Text,
                'category' : IDL.Variant({
                  'new' : IDL.Null,
                  'used' : IDL.Null,
                }),
                'dining' : IDL.Nat16,
                'image' : IDL.Vec(IDL.Vec(IDL.Nat8)),
                'price' : IDL.Nat64,
                'construtionArea' : IDL.Nat16,
              })
            ),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        ['query'],
      ),
    'getUserByPrincipal' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'principal' : IDL.Principal,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'email' : IDL.Text,
              'updatedAt' : IDL.Opt(IDL.Nat64),
              'address' : IDL.Text,
              'birth' : IDL.Nat64,
              'idCard' : IDL.Vec(IDL.Nat8),
              'phone' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        ['query'],
      ),
    'getUsers' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'principal' : IDL.Principal,
                'name' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'email' : IDL.Text,
                'updatedAt' : IDL.Opt(IDL.Nat64),
                'address' : IDL.Text,
                'birth' : IDL.Nat64,
                'idCard' : IDL.Vec(IDL.Nat8),
                'phone' : IDL.Text,
              })
            ),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        ['query'],
      ),
    'registerUser' : IDL.Func(
        [
          IDL.Record({
            'name' : IDL.Text,
            'email' : IDL.Text,
            'address' : IDL.Text,
            'birth' : IDL.Nat64,
            'idCard' : IDL.Vec(IDL.Nat8),
            'phone' : IDL.Text,
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'principal' : IDL.Principal,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'email' : IDL.Text,
              'updatedAt' : IDL.Opt(IDL.Nat64),
              'address' : IDL.Text,
              'birth' : IDL.Nat64,
              'idCard' : IDL.Vec(IDL.Nat8),
              'phone' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'whoAmI' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
