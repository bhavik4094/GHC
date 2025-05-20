// menuData.js
export const mobileMenuItems = [
    { label: 'HOME', path: '/' },
    {
        label: 'SERVICES',
        submenuKey: 'services',
        children: [
            { label: 'Driveway Repair & Replacements', path: '/services/driveway-repair' },
            { label: 'Patio Design & Construction', path: '/services/patio-design' },
            { label: 'Concrete Slab Installation', path: '/services/slab-installation' },
            { label: 'Mitered Ends', path: '/services/mitered-ends' },
            { label: 'Fill-in Sunken Living Room', path: '/services/sunken-room' },
            { label: 'Parking Lot Repairs and Curbing', path: '/services/parking-lot-repairs' },
            { label: 'Bollards Installation', path: '/services/bollards' },
            { label: 'Concrete Repairs', path: '/services/concrete-repairs' },
            { label: 'Sidewalks and Walkway Construction', path: '/services/sidewalks' },
            { label: 'Retaining Wall Construction', path: '/services/retaining-wall' },
            { label: 'Modern Decorative Floating Ponds', path: '/services/floating-ponds' },
            { label: 'Plumbing Trench Concrete Pour Back', path: '/services/plumbing-trench' },
            { label: 'Culvert Pipe Installation', path: '/services/culvert-pipe' },
        ]
    },
    {
        label: 'PHOTOS',
        submenuKey: 'photos',
        children: [
            // { label: 'Residential', path: '/photos/residential' },
            // { label: 'Commercial', path: '/photos/commercial' },
            { label: 'AllPhotos', path: '/photos/allphotos' },
        ]
    },
    { label: 'REVIEWS', path: '/reviews' },
    { label: 'TEAM', path: '/team' },
    { label: 'BLOG', path: '/blog' },
    { label: 'VIDEOS', path: '/videos' },
];
