const sampleListings = [

{
title: "Cozy Beachfront Cottage",
description: "Escape to this charming beachfront cottage for a relaxing getaway.",
image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
price: 1500,
location: "Malibu",
country: "United States",
},

{
title: "Modern Loft in Downtown",
description: "Stay in the heart of the city in this stylish loft apartment.",
image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
price: 1200,
location: "New York City",
country: "United States",
},

{
title: "Mountain Retreat",
description: "Unplug and unwind in this peaceful mountain cabin.",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
price: 1000,
location: "Aspen",
country: "United States",
},

{
title: "Historic Villa in Tuscany",
description: "Experience the charm of Tuscany in this restored villa.",
image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
price: 2500,
location: "Florence",
country: "Italy",
},

{
title: "Secluded Treehouse Getaway",
description: "Live among the treetops in this unique retreat.",
image: "https://images.unsplash.com/photo-1770347271178-97a4f8ffb183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
price: 800,
location: "Portland",
country: "United States",
},

{
title: "Beachfront Paradise",
description: "Step directly onto the sandy beach from your condo.",
image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
price: 2000,
location: "Cancun",
country: "Mexico",
},

{
title: "Rustic Cabin by the Lake",
description: "Fishing and kayaking on a peaceful lake.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 900,
location: "Lake Tahoe",
country: "United States",
},

{
title: "Luxury Penthouse",
description: "Panoramic city views from this stunning penthouse.",
image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
price: 3500,
location: "Los Angeles",
country: "United States",
},

{
title: "Ski Chalet",
description: "Ski directly from your doorstep in the Alps.",
image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
price: 3000,
location: "Verbier",
country: "Switzerland",
},

{
title: "Safari Lodge",
description: "Witness wildlife up close in the Serengeti.",
image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
price: 4000,
location: "Serengeti",
country: "Tanzania",
},

{
title: "Canal House",
description: "Historic canal house stay in Amsterdam.",
image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
price: 1800,
location: "Amsterdam",
country: "Netherlands",
},

{
title: "Private Island Retreat",
description: "Entire island exclusively for you.",
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
price: 10000,
location: "Fiji",
country: "Fiji",
},

{
title: "Cotswolds Cottage",
description: "Thatched roof cottage in English countryside.",
image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
price: 1200,
location: "Cotswolds",
country: "United Kingdom",
},

{
title: "Boston Brownstone",
description: "Elegant historic brownstone.",
image: "https://images.unsplash.com/photo-1472228283686-42356d789f66",
price: 2200,
location: "Boston",
country: "United States",
},

{
title: "Bali Beach Bungalow",
description: "Relax in tropical Bali.",
image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
price: 1800,
location: "Bali",
country: "Indonesia",
},

{
title: "Banff Cabin",
description: "Mountain views in Canadian Rockies.",
image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
price: 1500,
location: "Banff",
country: "Canada",
},

{
title: "Miami Art Deco Apartment",
description: "1920s glamour in South Beach.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 1600,
location: "Miami",
country: "United States",
},

{
title: "Phuket Villa",
description: "Infinity pool tropical villa.",
image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
price: 3000,
location: "Phuket",
country: "Thailand",
},

{
title: "Scottish Castle",
description: "Live like royalty in Highlands.",
image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
price: 4000,
location: "Highlands",
country: "United Kingdom",
},

{
title: "Dubai Desert Oasis",
description: "Luxury stay in desert.",
image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
price: 5000,
location: "Dubai",
country: "UAE",
},

{
title: "Montana Log Cabin",
description: "Nature escape in Montana.",
image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
price: 1100,
location: "Montana",
country: "United States",
},

{
title: "Greek Beach Villa",
description: "Mediterranean beachfront villa.",
image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
price: 2500,
location: "Mykonos",
country: "Greece",
},

{
title: "Costa Rica Treehouse",
description: "Eco-friendly jungle retreat.",
image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
price: 750,
location: "Costa Rica",
country: "Costa Rica",
},

{
title: "Tokyo Apartment",
description: "Modern stay in Tokyo.",
image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
price: 2000,
location: "Tokyo",
country: "Japan",
},

{
title: "Maldives Overwater Villa",
description: "Luxury ocean views.",
image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
price: 6000,
location: "Maldives",
country: "Maldives",
},

{
title: "Aspen Ski Resort Chalet",
description: "Luxury ski chalet.",
image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
price: 4000,
location: "Aspen",
country: "United States",
},

{
title: "Swiss Mountain Cabin",
description: "Peaceful snowy escape.",
image: "https://images.unsplash.com/photo-1455587734955-081b22074882",
price: 2200,
location: "Zermatt",
country: "Switzerland",
},

{
title: "Paris Luxury Apartment",
description: "Romantic Paris stay.",
image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
price: 2800,
location: "Paris",
country: "France",
},

{
title: "Santorini Cliff Villa",
description: "White and blue paradise.",
image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
price: 3200,
location: "Santorini",
country: "Greece",
},

{
title: "Sydney Harbour Apartment",
description: "Views of Opera House.",
image: "https://images.unsplash.com/photo-1688653802629-5360086bf632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
price: 2700,
location: "Sydney",
country: "Australia",
},

{
title: "Iceland Glass Cabin",
description: "Northern lights experience.",
image: "https://images.unsplash.com/photo-1582399288103-6a5974840ed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZWxhbmQlMjBnbGFzcyUyMGNhYmlufGVufDB8fDB8fHww",
price: 3500,
location: "Reykjavik",
country: "Iceland",
},

{
title: "Thailand Beach Hut",
description: "Simple island getaway.",
image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
price: 700,
location: "Krabi",
country: "Thailand",
},

{
title: "Norway Fjord Cabin",
description: "Scenic fjord views.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 1800,
location: "Bergen",
country: "Norway",
}

];

module.exports = { data: sampleListings };