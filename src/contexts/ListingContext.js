import { createContext } from 'react';

const ListingContext = createContext({
    listing: { 
        listings:[
            {
            id: -1,
            seller_id: -1,
            price: -1,
            status: "",
            type: "",
            category: "",
            section: -1,
            row: -1,
            seat: -1,
            details: "",
            image_url_slug: ""
            } 
        ]
       
      },
    setListing: () => { }
});

export default ListingContext;