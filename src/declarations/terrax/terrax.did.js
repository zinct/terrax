export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'connectUser' : IDL.Func(
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
            'Err' : IDL.Text,
          }),
        ],
        [],
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
            'Err' : IDL.Text,
          }),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
