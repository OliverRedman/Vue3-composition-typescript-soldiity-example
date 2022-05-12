export default [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_firstName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lastName',
        type: 'string',
      },
    ],
    name: 'addPerson',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'next',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'allPeople',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: '_firstName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: '_lastName',
            type: 'string',
          },
        ],
        internalType: 'struct MyContract.Person[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isActive',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isReady',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isWaiting',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'people',
    outputs: [
      {
        internalType: 'string',
        name: '_firstName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lastName',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'peopleCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'state',
    outputs: [
      {
        internalType: 'enum MyContract.State',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
