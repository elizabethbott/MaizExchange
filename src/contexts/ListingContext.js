import { createContext } from 'react';

const ListingContext = createContext({
    allListings: {
        listings: []
    },
    setListings: () => { }
});

export default ListingContext;