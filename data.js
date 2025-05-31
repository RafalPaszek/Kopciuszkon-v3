// EcoRevive - Waste Reuse Database
// This file contains all the data for waste items and their reuse ideas
// Easy to modify and expand

const wasteData = [
    {
        id: 'ice-cream-box',
        name: 'Ice Cream Container',
        description: 'Plastic ice cream containers can be transformed into useful household items',
        detailDescription: 'Ice cream containers are perfect for storage and organization due to their durable plastic construction and tight-fitting lids. These versatile containers can serve many purposes around your home and garden.',
        keywords: ['ice cream', 'container', 'plastic', 'box', 'tub'],
        reuseIdeas: [
            {
                title: 'Herb Freezing Storage',
                description: 'Freeze fresh dill, parsley, and other herbs in small portions. The airtight seal keeps herbs fresh for months.'
            },
            {
                title: 'Craft Supply Organizer',
                description: 'Sort and store small craft items like buttons, beads, ribbons, and threads. The clear plastic makes it easy to see contents.'
            },
            {
                title: 'Seed Starting Pots',
                description: 'Drill drainage holes in the bottom and use as planters for starting seeds or growing small herbs indoors.'
            },
            {
                title: 'Paint Water Container',
                description: 'Perfect size for holding water while painting. The wide opening makes brush cleaning easy.'
            },
            {
                title: 'Lunch Box',
                description: 'Pack salads, fruits, or snacks. The secure lid prevents spills and keeps food fresh.'
            },
            {
                title: 'Garage Storage',
                description: 'Store small hardware items like screws, nails, washers, and bolts in your workshop or garage.'
            },
            {
                title: 'Pet Food Storage',
                description: 'Store dry pet treats or small amounts of pet food. Keep it fresh and easily accessible.'
            },
            {
                title: 'Beach Toy Container',
                description: 'Pack sand toys, shells, or beach treasures. The lid keeps sand from spilling in your bag.'
            }
        ]
    },
    {
        id: 'plastic-bottle',
        name: 'Plastic Bottle',
        description: 'Single-use plastic bottles can become useful tools and decorations',
        detailDescription: 'Plastic bottles are incredibly versatile for DIY projects. Their shape and durability make them perfect for gardening, organization, and creative crafts that benefit both your home and the environment.',
        keywords: ['plastic', 'bottle', 'water bottle', 'soda bottle', 'beverage'],
        reuseIdeas: [
            {
                title: 'Self-Watering Planter',
                description: 'Cut the bottle in half, invert the top, and thread a string through the cap to create an automatic watering system for plants.'
            },
            {
                title: 'Bird Feeder',
                description: 'Cut feeding holes, add perches made from wooden spoons, fill with birdseed for a garden bird feeder.'
            },
            {
                title: 'Piggy Bank',
                description: 'Cut a coin slot in the top and decorate to create a fun savings bank for kids.'
            },
            {
                title: 'Scoop and Funnel',
                description: 'Cut diagonally to create a scoop for pet food, garden soil, or laundry detergent.'
            },
            {
                title: 'Organizer Cups',
                description: 'Cut to desired height and use as pen holders, makeup brush containers, or desk organizers.'
            },
            {
                title: 'Sprinkler System',
                description: 'Poke holes in the cap and sides to create a garden sprinkler or kids\' water toy.'
            }
        ]
    },
    {
        id: 'cardboard-box',
        name: 'Cardboard Box',
        description: 'Shipping and packaging boxes can be transformed into functional items',
        detailDescription: 'Cardboard boxes are excellent for organization, storage, and creative projects. Their sturdy construction and various sizes make them perfect for countless reuse applications throughout your home.',
        keywords: ['cardboard', 'box', 'shipping box', 'package', 'amazon box'],
        reuseIdeas: [
            {
                title: 'Storage Organizer',
                description: 'Cut to size and cover with decorative paper to create custom storage boxes for closets, under beds, or shelves.'
            },
            {
                title: 'Cat Playground',
                description: 'Cut holes and connect multiple boxes to create tunnels, houses, and climbing structures for cats.'
            },
            {
                title: 'Drawer Dividers',
                description: 'Cut strips to create custom drawer dividers for organizing utensils, socks, or office supplies.'
            },
            {
                title: 'Kids\' Playhouse',
                description: 'Large boxes become instant playhouses, castles, or rocket ships with some creative cutting and decorating.'
            },
            {
                title: 'Garden Weed Barrier',
                description: 'Flatten and place under mulch to suppress weeds naturally. Cardboard decomposes and enriches soil.'
            },
            {
                title: 'Moving Protection',
                description: 'Cut into sheets to wrap fragile items or create padding for future moves or storage.'
            }
        ]
    },
    {
        id: 'glass-jar',
        name: 'Glass Jar',
        description: 'Food jars can serve many purposes beyond their original use',
        detailDescription: 'Glass jars are perfect for storage, organization, and decoration. Their airtight seals and transparent walls make them ideal for kitchen, bathroom, and craft room organization while adding a rustic charm to any space.',
        keywords: ['glass', 'jar', 'mason jar', 'jam jar', 'pickle jar', 'sauce jar'],
        reuseIdeas: [
            {
                title: 'Spice Storage',
                description: 'Perfect for storing homemade spice blends, dried herbs, or bulk spices. Label for easy identification.'
            },
            {
                title: 'Bathroom Organizer',
                description: 'Store cotton balls, Q-tips, bath salts, or hair accessories. The clear glass shows contents at a glance.'
            },
            {
                title: 'Desk Accessories',
                description: 'Use as pen holders, paperclip containers, or to store rubber bands and other small office supplies.'
            },
            {
                title: 'Candle Making',
                description: 'Melt old candles or use new wax to create custom candles. The glass can withstand heat safely.'
            },
            {
                title: 'Salad in a Jar',
                description: 'Layer ingredients for grab-and-go salads. Dressing on bottom, hearty vegetables, then greens on top.'
            },
            {
                title: 'Flower Vase',
                description: 'Simple, elegant vases for fresh or dried flowers. Wrap with twine or lace for decoration.'
            },
            {
                title: 'Food Storage',
                description: 'Store dry goods like pasta, rice, beans, or nuts. Airtight seal keeps food fresh longer.'
            }
        ]
    },
    {
        id: 'coffee-grounds',
        name: 'Coffee Grounds',
        description: 'Used coffee grounds have many practical applications',
        detailDescription: 'Don\'t throw away those coffee grounds! They\'re rich in nitrogen and make excellent additions to gardens, cleaning routines, and beauty treatments. Coffee grounds can serve multiple purposes around your home.',
        keywords: ['coffee', 'grounds', 'used coffee', 'coffee waste'],
        reuseIdeas: [
            {
                title: 'Garden Fertilizer',
                description: 'Mix into compost or apply directly to soil. Coffee grounds add nitrogen and improve soil structure.'
            },
            {
                title: 'Natural Exfoliant',
                description: 'Mix with coconut oil for a natural body scrub that removes dead skin cells and is gentle on skin.'
            },
            {
                title: 'Odor Absorber',
                description: 'Place dried grounds in a bowl in the refrigerator, gym bag, or car to absorb unwanted odors.'
            },
            {
                title: 'Pest Deterrent',
                description: 'Sprinkle around plants to deter ants, slugs, and snails. The caffeine acts as a natural repellent.'
            },
            {
                title: 'Cleaning Scrub',
                description: 'Use as an abrasive cleaner for pots, pans, and surfaces. The texture helps remove stubborn residue.'
            },
            {
                title: 'Hair Treatment',
                description: 'Massage into scalp before shampooing to exfoliate and potentially stimulate hair growth.'
            }
        ]
    },
    {
        id: 'egg-carton',
        name: 'Egg Carton',
        description: 'Paper and foam egg cartons are perfect for organization and gardening',
        detailDescription: 'Egg cartons provide perfect individual compartments for starting seeds, organizing small items, or creating craft projects. Their biodegradable nature makes them environmentally friendly for many applications.',
        keywords: ['egg', 'carton', 'egg box', 'egg container'],
        reuseIdeas: [
            {
                title: 'Seed Starter Tray',
                description: 'Fill each compartment with soil and plant seeds. The biodegradable carton can be planted directly in the ground.'
            },
            {
                title: 'Paint Palette',
                description: 'Use compartments to hold different paint colors for art projects. Easy cleanup and perfect portion control.'
            },
            {
                title: 'Jewelry Organizer',
                description: 'Sort earrings, rings, and small jewelry pieces. Each compartment keeps items separate and tangle-free.'
            },
            {
                title: 'Fire Starters',
                description: 'Fill with dryer lint and melted wax to create fire starters for camping or fireplace use.'
            },
            {
                title: 'Craft Supply Storage',
                description: 'Store beads, buttons, sequins, or other small craft supplies in organized compartments.'
            },
            {
                title: 'Ice Cube Alternative',
                description: 'Fill with water and freeze for uniquely shaped ice cubes for parties or special drinks.'
            }
        ]
    },
    {
        id: 'tin-can',
        name: 'Tin Can',
        description: 'Metal food cans can be repurposed for storage and decoration',
        detailDescription: 'Tin cans are durable and versatile containers that can be transformed into useful household items. With proper preparation and creativity, they become excellent organizers and decorative elements.',
        keywords: ['tin', 'can', 'metal can', 'food can', 'aluminum can'],
        reuseIdeas: [
            {
                title: 'Pencil Holder',
                description: 'Sand rough edges, decorate with paper or paint, and use as desk organizers for pens, pencils, and brushes.'
            },
            {
                title: 'Herb Garden',
                description: 'Drill drainage holes and plant herbs. Label each can and arrange on a windowsill for fresh cooking herbs.'
            },
            {
                title: 'Lantern',
                description: 'Punch decorative holes, add battery-operated tea lights to create beautiful ambient lighting.'
            },
            {
                title: 'Utensil Holder',
                description: 'Store kitchen utensils, serving spoons, or cooking tools within easy reach of the stove.'
            },
            {
                title: 'Coin Bank',
                description: 'Cut a slot in the plastic lid and decorate to create a savings bank for loose change.'
            },
            {
                title: 'Workshop Storage',
                description: 'Organize screws, nails, bolts, and other small hardware items in your garage or workshop.'
            }
        ]
    },
    {
        id: 'newspaper',
        name: 'Newspaper',
        description: 'Old newspapers have numerous practical household uses',
        detailDescription: 'Newspapers are incredibly useful for cleaning, gardening, gift wrapping, and craft projects. The absorbent paper and large sheets make them perfect for many household applications beyond reading.',
        keywords: ['newspaper', 'paper', 'old newspaper', 'news'],
        reuseIdeas: [
            {
                title: 'Window Cleaner',
                description: 'Crumpled newspaper cleans windows and mirrors streak-free better than paper towels or cloth rags.'
            },
            {
                title: 'Gift Wrapping',
                description: 'Use colorful pages or comics section as unique, eco-friendly gift wrap. Add ribbons for decoration.'
            },
            {
                title: 'Garden Mulch',
                description: 'Shred and use as mulch around plants to retain moisture and suppress weeds naturally.'
            },
            {
                title: 'Packing Material',
                description: 'Crumple for protective padding when shipping fragile items or storing delicate decorations.'
            },
            {
                title: 'Shoe Drying',
                description: 'Stuff wet shoes with newspaper to absorb moisture and help them maintain shape while drying.'
            },
            {
                title: 'Paint Protection',
                description: 'Spread on floors and furniture before painting projects to protect surfaces from drips and spills.'
            },
            {
                title: 'Compost Material',
                description: 'Shred and add to compost bins as brown carbon material to balance green nitrogen-rich materials.'
            }
        ]
    },
    {
        id: 'wine-cork',
        name: 'Wine Cork',
        description: 'Natural and synthetic wine corks are perfect for small crafts',
        detailDescription: 'Wine corks are excellent for small DIY projects and practical applications. Their size and material properties make them perfect for organization, crafts, and household solutions.',
        keywords: ['wine', 'cork', 'bottle cork', 'champagne cork'],
        reuseIdeas: [
            {
                title: 'Drawer Pulls',
                description: 'Drill and attach to drawers or cabinet doors as unique, eco-friendly handles with rustic charm.'
            },
            {
                title: 'Plant Markers',
                description: 'Write plant names on corks and stick on wooden skewers to label garden plants and herbs.'
            },
            {
                title: 'Key Float',
                description: 'Attach to key rings to prevent keys from sinking if dropped in water during boating or swimming.'
            },
            {
                title: 'Fire Starters',
                description: 'Soak in melted wax to create effective fire starters for camping, fireplaces, or wood stoves.'
            },
            {
                title: 'Stamp Making',
                description: 'Carve designs into cork ends to create custom stamps for crafts, scrapbooking, or card making.'
            },
            {
                title: 'Jewelry Organizer',
                description: 'Cut slits to hold rings and earrings, or create a cork board display for jewelry storage.'
            }
        ]
    },
    {
        id: 'old-t-shirt',
        name: 'Old T-Shirt',
        description: 'Worn-out clothing can be transformed into useful household items',
        detailDescription: 'Old t-shirts made from cotton are perfect for cleaning, crafting, and practical applications. The soft, absorbent fabric makes them ideal for many household tasks and creative projects.',
        keywords: ['t-shirt', 'old clothes', 'clothing', 'shirt', 'fabric'],
        reuseIdeas: [
            {
                title: 'Cleaning Rags',
                description: 'Cut into squares for dusting, cleaning surfaces, or polishing furniture. Cotton is lint-free and absorbent.'
            },
            {
                title: 'Reusable Shopping Bags',
                description: 'Cut off sleeves and neckline, then sew or tie the bottom closed to create strong, stretchy shopping bags.'
            },
            {
                title: 'Plant Ties',
                description: 'Cut into strips to tie up tomato plants, support climbing vines, or secure garden plants to stakes.'
            },
            {
                title: 'Pet Bedding',
                description: 'Layer old shirts in pet beds or carriers for comfortable, washable bedding that smells like you.'
            },
            {
                title: 'Hair Scrunchies',
                description: 'Cut into strips and sew around elastic bands to create soft, fabric hair ties and scrunchies.'
            },
            {
                title: 'Dust Cloths',
                description: 'The soft cotton material is perfect for dusting electronics, furniture, and delicate surfaces without scratching.'
            }
        ]
    },
    {
        id: 'cereal-box',
        name: 'Cereal Box',
        description: 'Large cardboard cereal boxes are perfect for organization',
        detailDescription: 'Cereal boxes provide sturdy, large containers perfect for organizing documents, magazines, and household items. Their rectangular shape and durability make them excellent for storage solutions.',
        keywords: ['cereal', 'box', 'cereal container', 'breakfast box'],
        reuseIdeas: [
            {
                title: 'Magazine Holders',
                description: 'Cut diagonally from top corner to create slanted magazine and document organizers for your office or home.'
            },
            {
                title: 'Gift Boxes',
                description: 'Cover with decorative paper or fabric to create custom-sized gift boxes for presents and storage.'
            },
            {
                title: 'Drawer Organizers',
                description: 'Cut to fit drawer dimensions and create compartments for organizing utensils, tools, or office supplies.'
            },
            {
                title: 'Seedling Planters',
                description: 'Line with plastic, add drainage holes, and use for starting vegetable or flower seedlings indoors.'
            },
            {
                title: 'Toy Storage',
                description: 'Decorate and use to organize children\'s toys, art supplies, or building blocks in playrooms.'
            },
            {
                title: 'File Organizer',
                description: 'Create custom filing systems for important documents, bills, or papers that need organization.'
            }
        ]
    },
    {
        id: 'yogurt-container',
        name: 'Yogurt Container',
        description: 'Small plastic containers perfect for portioning and storage',
        detailDescription: 'Yogurt containers are ideal for food storage, organization, and small gardening projects. Their size makes them perfect for individual portions and small-scale applications.',
        keywords: ['yogurt', 'container', 'plastic container', 'food container'],
        reuseIdeas: [
            {
                title: 'Portion Control',
                description: 'Pre-portion snacks, nuts, or treats for healthy eating and grab-and-go convenience throughout the week.'
            },
            {
                title: 'Paint Containers',
                description: 'Hold water for cleaning brushes or mix custom paint colors for art projects and touch-up work.'
            },
            {
                title: 'Seed Starting',
                description: 'Drill drainage holes and use for starting seeds or growing small herbs on windowsills.'
            },
            {
                title: 'Travel Containers',
                description: 'Pack toiletries, lotions, or small items for travel. The secure lids prevent spills in luggage.'
            },
            {
                title: 'Craft Storage',
                description: 'Sort and store small craft supplies like beads, buttons, sequins, or embroidery thread by color.'
            },
            {
                title: 'Freezer Portions',
                description: 'Freeze individual portions of soup, sauce, or baby food. Stack easily and label with contents and dates.'
            }
        ]
    }
];

// Site content and descriptions (easy to modify)
const siteContent = {
    // Main page content
    mainTitle: "Transform Waste into Wonder",
    mainDescription: "Discover creative ways to give your waste items a second life. From ice cream containers to cardboard boxes, we'll show you innovative reuse ideas that help the environment and spark creativity.",
    
    // Navigation and page descriptions
    pages: {
        aboutUs: "Learn about our mission to reduce waste through creative reuse solutions and environmental awareness.",
        account: "Manage your profile, save favorite reuse ideas, and track your environmental impact.",
        announcements: "Stay updated with the latest eco-friendly tips, community challenges, and waste reduction news."
    },
    
    // Hit of the week (can be easily changed)
    hitOfWeek: {
        itemId: 'ice-cream-box',
        title: 'Ice Cream Container',
        description: 'Most searched this week! Discover 8+ creative ways to reuse ice cream containers.',
        badge: '🔥 Hit of the Week'
    },
    
    // Special offer section
    specialOffer: {
        percentage: '100%',
        text: 'ECO-FRIENDLY<br>SOLUTIONS'
    },
    
    // Footer and contact info
    websiteUrl: 'www.ecorevive.com',
    
    // Search placeholder text
    searchPlaceholder: 'Enter waste item (e.g., ice cream box, plastic bottle...)',
    
    // Button texts
    buttons: {
        discover: 'DISCOVER',
        back: '← Back to Search'
    },
    
    // Messages
    messages: {
        noResults: 'No results found. Try different keywords!',
        comingSoon: ' - Coming Soon!'
    }
};

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wasteData, siteContent };
}
