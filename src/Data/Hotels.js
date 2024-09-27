import zlodge_1 from '../assets/z-lodge/one.jpg';
import zlodge_2 from '../assets/z-lodge/two.jpg';
import zlodge_3 from '../assets/z-lodge/three.jpg';
import zlodge_4 from '../assets/z-lodge/four.jpg';

import imara_1 from '../assets/imara/one.jpg';
import imara_2 from '../assets/imara/two.jpg';
import imara_3 from '../assets/imara/three.jpg';
import imara_4 from '../assets/imara/four.jpg';


import marafiki_1 from '../assets/marafiki/one.jpg';
import marafiki_2 from '../assets/marafiki/two.jpg';
import marafiki_3 from '../assets/marafiki/three.jpg';
import marafiki_4 from '../assets/marafiki/four.jpg';

import kiwengwa_1 from '../assets/kiwengwa/one.jpg';
import kiwengwa_2 from '../assets/kiwengwa/two.jpg';
import kiwengwa_3 from '../assets/kiwengwa/three.jpg';
import kiwengwa_4 from '../assets/kiwengwa/four.jpg';



import sipano_1 from '../assets/sipano/one.jpg';
import sipano_2 from '../assets/sipano/two.jpg';
import sipano_3 from '../assets/sipano/three.jpg';
import sipano_4 from '../assets/sipano/four.jpg';

  

import zanblue_1 from '../assets/zanblue/one.jpg';
import zanblue_2 from '../assets/zanblue/two.jpg';
import zanblue_3 from '../assets/zanblue/three.jpg';
import zanblue_4 from '../assets/zanblue/four.jpg';

  


import tembo_1 from '../assets/tembo/one.jpg';
import tembo_2 from '../assets/tembo/two.jpg';
import tembo_3 from '../assets/tembo/three.jpg';
import tembo_4 from '../assets/tembo/four.jpg';




import mzingani_1 from '../assets/mzingani/one.jpg';
import mzingani_2 from '../assets/mzingani/two.jpg';
import mzingani_3 from '../assets/mzingani/three.jpg';
import mzingani_4 from '../assets/mzingani/four.jpg';

  


  
    

const Hotels = [


    {
        id: 1,
        title: "Z-Logde Zanzibar",
        nyota: 4,
        kilometers: "2.3 km from center",
        standard: "Small Double Room",
        bed: "1 extra-large double bed",
        breakfast: "Breakfast included",
        cancel: true,
        good: "Superb",
        reviews: "1,428 reviews",
        rate: "9.0",
        night: "1 night, 2 adults",
        // location: "Location 9.3",
        price: "TZS 106,276",
        charges: "+TZS 27,250 taxes and charges",
        others: {
            one: zlodge_1,
            two: zlodge_2,
            three: zlodge_3,
            four: zlodge_4,
        }
    },


    

    {
        id: 2,
        title: "Sipano Beach Lodge",
        nyota: 3,
        kilometers: "0.5 km from centre",
        standard: "Family Room with Sea View",
        bed: "2 large double beds",
        breakfast: "Breakfast included",
        cancel: true,
        good: "Very good",
        reviews: "286 reviews",
        rate: "8.1",
        night: "1 night, 2 adults",
        location: "Location 9.3",
        price: "TZS 145, 976",
        charges: "include taxes and charges",
        others: {
            one: sipano_1,
            two: sipano_2,
            three: sipano_3,
            four: sipano_4,
        }
    },


    
    {
        id: 3,
        title: "Kiwengwa Beach Resort",
        nyota: 5,
        kilometers: "500 m from centre",
        standard: "Standard Double Room",
        bed: "Multiple bed types",
        breakfast: "Breakfast included",
        cancel: false,
        good: "Fabulous",
        reviews: "1500 reviews",
        rate: "8.8",
        night: "1 night, 2 adults",
        price: "TZS 576,461",
        charges: "TZS 27,260 taxes and charges",
        others: {
            one: kiwengwa_1,
            two: kiwengwa_2,
            three: kiwengwa_3,
            four: kiwengwa_4,
        }
    },

    

      
    {
        id: 4,
        title: "Marafiki Bungalows",
        nyota: 4,
        kilometers: "2.2 km from centre",
        standard: "Deluxe Triple Room",
        bed: "2 beds (1 single, 1 large double)",
        breakfast: "Breakfast included",
        cancel: true,
        good: "Superb",
        reviews: "572 reviews",
        rate: "9.1",
        night: "1 night, 2 adults",
        // location: "Location 9.3",
        price: "TZS 299,857",
        charges: "+TZS 21,808 taxes and charges",
        others: {
            one: marafiki_1,
            two: marafiki_2,
            three: marafiki_3,
            four: marafiki_4,
        }
    },


    
      
    {
        id: 5,
        title: "Imara Beach Resort",
        nyota: 4,
        kilometers: "2.4 km from centre",
        standard: "Deluxe Double Room with Balcony and Sea View",
        bed: "1 extra-large double bed",
        breakfast: "Breakfast included",
        cancel: false,
        good: "Exceptional",
        reviews: "395 reviews",
        rate: "9.5",
        night: "1 night, 2 adults",
        // location: "Location 9.3",
        price: "TZS  681,493",
        charges: "Include taxes and charges",
        others: {
            one: imara_1,
            two: imara_2,
            three: imara_3,
            four: imara_4,
        }
    },

    
        
    {
        id: 6,
        title: "Zanbluu Beach Hotel",
        nyota: 4,
        kilometers: "2.3 km from centre",
        standard: "Suite with Partial Sea View",
        bed: "Private suite, 1 extra-large double bed",
        breakfast: "Breakfast included",
        cancel: false,
        good: "Superb",
        reviews: "719 reviews",
        rate: "9.2",
        night: "1 night, 2 adults",
        // location: "Location 9.3",
        price: "TZS 655,841",
        charges: "+TZS 21,808 taxes and charges",
        others: {
            one: zanblue_1,
            two: zanblue_2,
            three: zanblue_3,
            four: zanblue_4,
        }
    },

    
    
        
    {
        id: 7,
        title: "Tembo House Hotel",
        nyota: 4,
        kilometers: "2.3 km from centre",
        standard: "Family room at Annex Building",
        bed: "3 king beds",
        breakfast: "Breakfast included",
        cancel: false,
        good: "Very good",
        reviews: "4,841 reviews",
        rate: "8.2",
        night: "1 night, 2 adults",
        location: "Location 9.4",
        price: "TZS 419,527",
        charges: "+TZS 27,260 taxes and fees",
        others: {
            one: tembo_1,
            two: tembo_2,
            three: tembo_3,
            four: tembo_4,
        }
    },

    

    
        
    {
        id: 8,
        title: "Mizingani Seafront Hotel",
        nyota: 4,
        kilometers: "2 km from centre",
        standard: "Double Room",
        bed: "1 double bed",
        breakfast: "Breakfast included",
        cancel: false,
        good: "Very good",
        reviews: "2,264 reviews",
        rate: "8.2",
        night: "1 night, 2 adults",
        location: "Location 9.4",
        price: "TZS 258,967",
        charges: "+TZS 27,260 taxes and fees",
        others: {
            one: mzingani_1,
            two: mzingani_2,
            three: mzingani_3,
            four: mzingani_4,
        }
    },

    

    {
        id: 11,
        title: "Sipano Beach Lodge",
        nyota: 4,
        kilometers: "2.3 km from center",
        standard: "Small Double Room",
        bed: "1 extra-large double bed",
        breakfast: "Breakfast included",
        cancel: true,
        good: "Superb",
        reviews: "1,428 reviews",
        rate: "9.0",
        location: "Location 9.3",
        others: {
            one: zlodge_1,
            two: zlodge_2,
            three: zlodge_3,
            four: zlodge_4,
        }
    },


    // {
    //     id: 2,
    //     title: "Sipano Beach Lodge Kiwengwa",
    //     nyota: 4,
    //     kilometers: "2.3 km from center",
    //     others: {
    //         one: zlodge_1,
    //         two: zlodge_2,
    //         three: zlodge_3,
    //         four: zlodge_4,
    //     }
    // },


    // {
    //     id: 3,
    //     title: "Sipano Beach Lodge Kiwengwa",
    //     title: "Kiwengwa Beach Resort",
    //     kilometers: "2.3 km from center",
    //     others: {
    //         one: zlodge_1,
    //         two: zlodge_2,
    //         three: zlodge_3,
    //         four: zlodge_4,
    //     }
    // },

    
];

export default Hotels;