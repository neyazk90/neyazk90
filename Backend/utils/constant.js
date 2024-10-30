const PORT = 5000;
// module.exports = { PORT };

const DUMMY_DATA = [
    {
        id: 101,
        name: 'BigBang',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: 'Udhyog vihar ph-3 122001',
        creator: 'user1',
        description: 'lorem ipsum dolor sit amet, consect'
    },
    {
        id: 102,
        name: 'VITRIE',
        location: {
            lat: 30.7484474,
            lng: -70.9871516
        },
        address: 'Udhyog vihar ph-4 122001',
        creator: 'user1',
        description: 'lorem ipsum dolor sit amet, consect'
    },
    {
        id: 103,
        name: 'VITRIE',
        location: {
            lat: 30.7484474,
            lng: -70.9871516
        },
        address: 'Udhyog vihar ph-4 122001',
        creator: 'user2',
        description: 'lorem ipsum dolor sit amet, consect'
    }
]

module.exports = { PORT, DUMMY_DATA }