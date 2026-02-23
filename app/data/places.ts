export type Category = 'All' | 'Cafe' | 'Restaurant' | 'Bar' | 'Karaoke' | 'Billiards';

export interface MenuItem {
    name: string;
    description: string;
    price: string;
}

export interface Place {
    id: string;
    name: string;
    description: string;
    category: Category;
    location: string;
    fullLocation: string;
    hours: string;
    phone: string;
    imageUrl: string;
    rating: number;
    menu: MenuItem[];
}

export const mockPlaces: Place[] = [
    {
        id: "1",
        name: "The Velvet Lounge",
        description: "An exclusive, dimly lit bar with craft cocktails and a moody atmosphere.",
        category: "Bar",
        location: "Downtown District",
        fullLocation: "1024 Obsidian Way, Downtown District, Metropolis",
        hours: "Tue-Sun • 6:00 PM - 2:00 AM",
        phone: "+1 (555) 019-2834",
        imageUrl: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800",
        rating: 4.8,
        menu: [
            { name: "Midnight Manhattan", description: "Bourbon, sweet vermouth, activated charcoal, brandied cherry", price: "$22" },
            { name: "Smoked Vesper", description: "Gin, vodka, Lillet Blanc, citrus mist, cedar smoke", price: "$24" },
            { name: "Truffle Fries", description: "Hand-cut fries, white truffle oil, parmesan dust", price: "$14" }
        ]
    },
    {
        id: "2",
        name: "Noir Coffee Roasters",
        description: "Minimalist espresso bar serving single-origin roasts in a stark, modern space.",
        category: "Cafe",
        location: "Artisan Quarter",
        fullLocation: "88 Monolith Ave, Artisan Quarter, Metropolis",
        hours: "Daily • 7:00 AM - 5:00 PM",
        phone: "+1 (555) 012-4491",
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
        rating: 4.9,
        menu: [
            { name: "Pour Over (Ethiopia)", description: "Floral notes, jasmine, bright citrus finish", price: "$8" },
            { name: "Charcoal Latte", description: "Espresso, steamed oat milk, activated coconut charcoal", price: "$7" },
            { name: "Black Sesame Pastry", description: "Flaky croissant dough filled with black sesame cream", price: "$6" }
        ]
    },
    {
        id: "3",
        name: "Slate Dining",
        description: "Elevated contemporary cuisine in an industrial chic setting.",
        category: "Restaurant",
        location: "Financial District",
        fullLocation: "Penthouse Level, 400 Slate Tower, Financial District",
        hours: "Mon-Sat • 5:30 PM - 11:00 PM",
        phone: "+1 (555) 088-3110",
        imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
        rating: 4.7,
        menu: [
            { name: "Wagyu Tartare", description: "Cured egg yolk, black garlic emulsion, sourdough crisps", price: "$32" },
            { name: "Squid Ink Risotto", description: "Arborio rice, seared scallops, sea urchin foam", price: "$45" },
            { name: "Dark Chocolate Dome", description: "Valrhona 70%, espresso ganache, gold leaf", price: "$18" }
        ]
    },
    {
        id: "4",
        name: "Echo Rooms",
        description: "Premium private karaoke suites with state-of-the-art sound systems.",
        category: "Karaoke",
        location: "Entertainment Block",
        fullLocation: "Level B1, The Echo Complex, Entertainment Block",
        hours: "Daily • 4:00 PM - 4:00 AM",
        phone: "+1 (555) 044-9922",
        imageUrl: "https://images.unsplash.com/photo-1516280440502-a2fe0ad71120?auto=format&fit=crop&q=80&w=800",
        rating: 4.5,
        menu: [
            { name: "VIP Room Rental", description: "Per hour. Includes premium audio and dedicated service", price: "$80" },
            { name: "Bottle Service: Grey Goose", description: "Served with artisan mixers and ice spheres", price: "$250" },
            { name: "Izakaya Platter", description: "Chef's selection of yakitori and seasonal bites", price: "$45" }
        ]
    },
    {
        id: "5",
        name: "Onyx Billiards",
        description: "Sophisticated pool hall with black felt tables and a quiet, focused ambiance.",
        category: "Billiards",
        location: "Northside",
        fullLocation: "212 Shadow Lane, Northside District",
        hours: "Daily • 12:00 PM - 1:00 AM",
        phone: "+1 (555) 011-8833",
        imageUrl: "https://images.unsplash.com/photo-1629853313063-71887ce7eb3f?auto=format&fit=crop&q=80&w=800",
        rating: 4.6,
        menu: [
            { name: "Table Rental", description: "Per hour. Premium black felt regulation tables", price: "$25" },
            { name: "Local Craft Draft", description: "Rotating selection of local dark ales and stouts", price: "$9" },
            { name: "Wagyu Sliders", description: "Three mini burgers, brioche bun, caramelized onions", price: "$18" }
        ]
    },
    {
        id: "6",
        name: "Monochrome Cafe",
        description: "A 2D illusion cafe serving delicate pastries and robust coffees.",
        category: "Cafe",
        location: "Old Town",
        fullLocation: "45 Illusion Ave, Old Town Square",
        hours: "Wed-Mon • 9:00 AM - 6:00 PM",
        phone: "+1 (555) 077-2244",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
        rating: 4.4,
        menu: [
            { name: "Illusion Flat White", description: "Double ristretto, micro-foamed milk, contrasting latte art", price: "$6" },
            { name: "Vanilla Bean Cloud", description: "Airy vanilla mousse cake with a dark chocolate crust", price: "$9" },
            { name: "Iced Cold Brew", description: "Steeped for 24 hours, served over a single clear ice block", price: "$7" }
        ]
    }
];
