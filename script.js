/* Namma Sakleshpura Travel & Holidays - all page behaviour (no libraries). */

// ============================================================
// 1. SETTINGS & DATA  (edit these to change content)
// ============================================================

const CONTACT = {
  whatsappNumber: '918277377955',
  phone: '+918277377955',
  phoneLabel: '+91 82773 77955',
  floatingCallNumber: '+918277377955', // used by the floating call button
  email: 'bookings.nammasakleshpuratravel@gmail.com',
};
const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}`;

const HERO_IMAGES = [
  'images/road-trip-to-sakleshpur.jpg',
  'images/fort.jpg',
  'images/bisle-ghat-sakleshpur-farmers-son-resort.jpg',
];

const NAV_LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#fleet', label: 'Rides' },
  { href: '#experience', label: 'Experiences' },
  { href: '#how', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/nammasakleshpura_cabservices/', label: 'Instagram', hover: 'hover:text-gold-600 dark:hover:text-gold-400',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { href: WHATSAPP_URL, label: 'WhatsApp', hover: 'hover:text-emerald-600 dark:hover:text-emerald-400',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.874 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.437-9.884 9.893-9.884 2.64.001 5.122 1.03 6.985 2.893a9.825 9.825 0 012.89 6.99c-.003 5.45-4.44 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.946L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' },
  { href: 'https://www.facebook.com/p/Namma-Sakleshpur-Cab-Taxi-Service-100064077191711/', label: 'Facebook', hover: 'hover:text-blue-600 dark:hover:text-blue-400',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z' },
  { href: 'https://share.google/UkvvclvSEYCTpSExY', label: 'Google', hover: 'hover:text-red-600 dark:hover:text-red-400',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
];

const FLEET_CATEGORIES = [
  { id: 'all', label: 'All Fleet', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { id: 'small', label: 'Small', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { id: 'medium', label: 'Medium', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 'large', label: 'Large Groups', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

const SIZE_LABELS = { small: 'Small', medium: 'Medium', large: 'Large Group' };

// One image per class; swap the path for a real photo (adding more entries also adds them to the gallery).

const VEHICLES = [
  { name: 'Hatchback', type: 'Compact city rides', size: 'small', images: ['images/vehicle-hatchback.svg'], features: ['Fuel Efficient', 'Air Conditioned', 'GPS Tracking'], priceLocal: '₹12/km' },
  { name: 'Sedan', type: 'Comfortable & spacious', size: 'small', images: ['images/vehicle-sedan.svg'], features: ['Climate Control', 'Ample Boot Space', 'Smooth Ride'], priceLocal: '₹14/km', priceOutstation: '₹13/km', popular: true },
  { name: 'SUV', type: 'Hills & rough roads', size: 'medium', images: ['images/vehicle-suv.svg'], features: ['Higher Seating', 'Extra Luggage Space', 'Powerful Engine'], priceLocal: '₹16/km', priceOutstation: '₹15/km', popular: true },
  { name: 'MPV', type: 'Family & group travel', size: 'medium', images: ['images/vehicle-mpv.svg'], features: ['Spacious Cabin', 'Reclining Seats', 'Extra Luggage Space'], priceLocal: '₹18/km', priceOutstation: '₹16/km', popular: true },
  { name: 'Tempo Traveller', type: 'Group tours', size: 'large', images: ['images/vehicle-tempo-traveller.svg'], features: ['Push-back Seats', 'Music System', 'Generous Legroom'], priceOutstation: '₹28/km' },
  { name: 'Bus', type: 'Large groups & events', size: 'large', images: ['images/vehicle-bus.svg'], features: ['Push-back Seating', 'Air Conditioned', 'Large Luggage Hold'], priceOutstation: '₹45/km' },
];

// Solid (filled) 24px glyphs for the care/experience rows; they match the filled gold icons in the design.
const SOLID_ICONS = {
  user: 'M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z',
  shield: 'M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z',
  seat: 'M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.36 2.4 5.5 2.4v-2.5c-1.92 0-3.89-1.17-4.76-2.31l-1.24-1.62c-.35-.46-.94-.73-1.55-.73-1.11 0-2 .89-2 2v7h6.07l4.43 4.43L20 20.07z',
  pin: 'M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z',
  camera: 'M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9zM9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z',
  heart: 'M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z',
  person: 'M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
};

const CARE_ITEMS = [
  { icon: SOLID_ICONS.shield, title: 'Travel with care', text: 'Thoughtful driving and clear communication throughout your journey.' },
  { icon: SOLID_ICONS.seat, title: 'Settle in comfortably', text: 'Choose a ride that suits your group and luggage.' },
  { icon: SOLID_ICONS.pin, title: 'Explore with local insight', text: 'Get suggestions for scenic stops and places along your route.' },
  { icon: SOLID_ICONS.camera, title: 'Bring home the memories', text: 'Need a picture together? We\u2019re happy to help.' },
  { icon: SOLID_ICONS.heart, title: 'Have help along the way', text: 'From coordinating stops to practical travel assistance, just ask.' },
];

const EXPERIENCE_ITEMS = [
  { icon: SOLID_ICONS.shield, title: 'Safety & Care', text: 'Careful driving and clear communication are part of every ride.' },
  { icon: SOLID_ICONS.pin, title: 'Local Insights', text: 'Discover scenic spots, viewpoints and local favourites along your route.' },
  { icon: SOLID_ICONS.camera, title: 'Photography Support', text: 'Need a photo? We\u2019ll happily take casual pictures of you and your group.' },
  { icon: SOLID_ICONS.person, title: 'Travel Assistance', text: 'Help with planning stops, stay suggestions and practical needs.' },
];

const HOW_STEPS = [
  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', title: 'Plan your ride', text: 'Tell us where you want to go and when.' },
  { icon: 'M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM9 14h.01M12 14h.01M15 14h.01', title: 'Get a confirmation', text: 'We\u2019ll discuss availability, pricing and your requirements.' },
  { icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0zM3.5 11H10m4 0h6.5M12 14v7', title: 'Enjoy the journey', text: 'Sit back, relax and explore with a local companion.' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Make memories', text: 'Capture moments and take the stories home.' },
];

// Leave `avatar` empty for a plain circle, or set a photo path.
const TESTIMONIALS = [
  { name: 'KARTHIK', rating: 5, avatar: '',
    text: 'I\u2019m a solo traveller from Bangalore and booked a sedan round trip to Sakleshpur to enjoy the beauty of the Western Ghats. Along with the stunning nature, I found a truly reliable friend who helped with pictures, showed me hidden gems and the best eateries, and suggested my whole Sakleshpur itinerary, including stays. The entire trip was completely hassle-free. Thank you, brother, for making it so memorable! To anyone reading this: contact Namma Sakleshpura Travel & Holidays without a second thought, and thank me later.' },
  { name: 'Shobha Dinesh', rating: 5, avatar: '',
    text: 'Very good-hearted person and excellent driver. Very polite, punctual and helpful. Knows all the roads in Sakleshpur very well. Safe driving even in ghat roads. Highly recommended if you need a taxi in Sakleshpur. Thank you sir 🙏' },
  { name: 'Robin Smith', rating: 5, avatar: '',
    text: 'Excellent taxi service, the cab was clean and well maintained. The driver was professional and friendly, and helped us plan the best route and itinerary. He patiently waited at every sightseeing spot without rushing us. Highly recommended for anyone visiting Sakleshpur. Thank you Namma Sakleshpura Travel & Holidays for your wonderful cab service!' },
  { name: 'Savitha Ravindra', rating: 5, avatar: '',
    text: 'Great experience with this cab service! The booking was hassle-free, the car arrived right on time, and the vehicle was clean and comfortable. The driver was polite and drove safely. Highly recommended for a reliable commute.' },
  { name: 'Priya Sharma', role: 'Software Engineer', location: 'Bangalore', rating: 5, avatar: '', trip: 'Outstation • Sedan • Oct 2024',
    text: 'Booked a Sedan for our weekend getaway to Sakleshpur. The smooth, comfortable ride through the Western Ghats was magical — quiet cabin, just pure nature. Driver was professional and knew all the hidden viewpoints. The fare breakdown was exactly as shown, no surprises.' },
  { name: 'Rajesh Kumar', role: 'Office Professional', location: 'Mumbai', rating: 5, avatar: '', trip: 'Local Rides • Hatchback • Daily Commuter',
    text: "Use their local rides daily for office commute. The app shows driver location in real-time, ETA is always accurate, and drivers are courteous. Best decision for our team's daily transport." },
  { name: 'Anita Desai', role: 'Travel Blogger', location: 'Pune', rating: 5, avatar: '', trip: 'Outstation • MPV • Sep 2024',
    text: 'The MPV was perfect for our family trip to Coorg via Sakleshpur. Spacious for 4 adults + 2 kids with all luggage. Driver suggested the most scenic route with waterfall stops. Transparent pricing meant we budgeted exactly — final bill matched the quote perfectly.' },
  { name: 'Sarah Johnson', role: 'International Tourist', location: 'UK', rating: 5, avatar: '', trip: 'Outstation • SUV • Jul 2024',
    text: 'First time in India, was nervous about transport. Their outstation service from Bangalore airport to Sakleshpur was seamless. Driver tracked my flight, waited with a name board, helped with luggage. The live tracking link I shared with my husband gave us both peace of mind.' },
  { name: 'Amit Patel', role: 'Photography Enthusiast', location: 'Hyderabad', rating: 5, avatar: '', trip: 'Photography Tour • SUV • Jun 2024',
    text: "The SUV's large windows were a game-changer for photography! Captured stunning shots of the misty Ghats without stopping. Driver knew exactly when golden hour hits each viewpoint. The high seating gave us clear views of the valleys. Will book the monsoon special next." },
];

// ============================================================
// 2. SMALL HELPERS
// ============================================================

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const STAR_PATH = 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';
const CHECK_PATH = 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z';

// Outline icon from a Heroicons-style path.
const outlineIcon = (path, cls) =>
  `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}"/></svg>`;

const starIcon = (cls) =>
  `<svg class="${cls}" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`;

// Escape text that comes from the data arrays before putting it in innerHTML.
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const solidIcon = (path, cls) =>
  `<svg class="${cls}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="${path}"/></svg>`;

// ============================================================
// 3. RENDER THE DATA-DRIVEN SECTIONS
// ============================================================

function renderHeroImages() {
  $('#hero-images').innerHTML = HERO_IMAGES.map((src, i) => {
    // Spread images evenly over the 30s cycle regardless of how many there are.
    const delay = -(30 / HERO_IMAGES.length) * i;
    return `<img src="${src}" alt="" class="hero-backdrop-image" style="--image-index:0;animation-delay:${delay}s" ${i === 0 ? 'fetchpriority="high"' : ''} decoding="async">`;
  }).join('');
}

function renderNavLinks() {
  $('#nav-links-desktop').innerHTML = NAV_LINKS.map((l) =>
    `<a href="${l.href}" class="px-4 py-2 rounded-xl text-slate-600 dark:text-luxury-300 hover:text-slate-900 dark:hover:text-luxury-50 hover:bg-luxury-100/80 dark:hover:bg-slate-800/80 font-medium text-sm relative">${l.label}</a>`
  ).join('');

  const arrow = '<svg class="w-4 h-4 ml-1.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>';
  $('#nav-links-mobile').innerHTML =
    NAV_LINKS.map((l) =>
      `<a href="${l.href}" class="block px-4 py-3.5 rounded-xl text-slate-600 dark:text-luxury-300 hover:text-slate-900 dark:hover:text-luxury-50 hover:bg-luxury-100/80 dark:hover:bg-slate-800/80 font-medium">${l.label}</a>`
    ).join('') +
    `<a href="#contact" class="btn btn-gold w-full py-3 mt-2 text-center block">Book Now${arrow}</a>`;
}

function renderSocialLinks() {
  // Each network gets a gradient close to its own brand colours, with a white icon.
  const gradients = {
    Instagram: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600',
    WhatsApp: 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600',
    Facebook: 'bg-gradient-to-br from-sky-400 to-blue-700',
    // Google's four brand colours: red, yellow, green, blue.
    Google: 'bg-[conic-gradient(from_45deg,#EA4335,#FBBC05,#34A853,#4285F4,#EA4335)]',
  };
  $$('[data-social-links]').forEach((box) => {
    box.innerHTML = SOCIAL_LINKS.map((s) =>
      `<a href="${s.href}" class="w-10 h-10 rounded-xl ${gradients[s.label]} text-white shadow-md hover:scale-110 hover:brightness-110 flex items-center justify-center" aria-label="${s.label}" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="${s.path}"/></svg>
      </a>`
    ).join('');
  });
}

function vehicleCard(v, index) {
  return `
  <article class="card-elevated fleet-card relative overflow-hidden group ${v.popular ? 'ring-2 ring-gold-500/30' : ''}" data-size="${v.size}">
    ${v.popular ? '<div class="absolute top-4 left-4 z-10"><span class="px-3 py-1 bg-gold-500 text-slate-950 text-xs font-bold rounded-full shadow-lg">Popular</span></div>' : ''}
    <div class="absolute top-4 right-4 z-10"><span class="px-3 py-1 liquid-glass-sm text-slate-800 dark:text-luxury-100 text-xs font-semibold rounded-full">${SIZE_LABELS[v.size]}</span></div>

    <div class="relative aspect-[4/3] overflow-hidden bg-luxury-100 dark:bg-slate-800">
      <img src="${esc(v.images[0])}" alt="${esc(v.name)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
      <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <div class="flex gap-2 justify-center">
          <!-- View-photos button hidden for now; restore by removing the comment markers.
          <button type="button" data-gallery="${index}" class="liquid-glass-sm w-11 h-11 rounded-xl flex items-center justify-center text-slate-600 dark:text-luxury-300 hover:text-gold-500" aria-label="View ${esc(v.name)} photos" title="View photos">
            ${outlineIcon('M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', 'w-5 h-5')}
          </button>
          -->
          <a href="#contact" data-booking-type="${v.priceLocal ? 'local' : 'outstation'}" class="w-11 h-11 rounded-xl flex items-center justify-center bg-gold-500 text-slate-950 shadow-gold hover:bg-gold-400" aria-label="Explore this ride" title="Explore this ride">
            ${outlineIcon('M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM9 14l2 2 4-4', 'w-5 h-5')}
          </a>
        </div>
      </div>
    </div>

    <div class="p-6">
      <div class="mb-3">
        <h3 class="font-display text-xl font-medium text-slate-950 dark:text-luxury-50">${esc(v.name)}</h3>
        <p class="text-slate-500 dark:text-luxury-400 text-sm mt-0.5">${esc(v.type)}</p>
      </div>

      <ul class="space-y-2 pt-4 border-t border-luxury-200 dark:border-slate-700" role="list">
        ${v.features.slice(0, 3).map((f) => `<li class="flex items-center gap-2 text-sm text-slate-600 dark:text-luxury-400"><svg class="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="${CHECK_PATH}" clip-rule="evenodd"/></svg><span>${esc(f)}</span></li>`).join('')}
      </ul>
      <a href="#contact" data-booking-type="${v.priceLocal ? 'local' : 'outstation'}" class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline">Explore This Ride ${outlineIcon('M17 8l4 4m0 0l-4 4m4-4H3', 'w-4 h-4')}</a>
    </div>
  </article>`;
}

function renderFleet() {
  $('#fleet-grid').innerHTML = VEHICLES.map(vehicleCard).join('');
  $$('.fleet-card').forEach((card, i) => {
    card.classList.add('reveal');
    card.style.setProperty('--delay', `${(i % 4) * 0.08}s`);
  });
  $('#fleet-filters').innerHTML = FLEET_CATEGORIES.map((c) =>
    `<button type="button" role="radio" aria-checked="${c.id === 'all'}" data-filter="${c.id}" class="filter-btn ${c.id === 'all' ? 'filter-btn-active' : 'filter-btn-inactive'}">${outlineIcon(c.icon, 'w-4 h-4')}${c.label}</button>`
  ).join('');
}

// Fill the booking form's vehicle dropdowns from the same VEHICLES list.
function renderVehicleOptions() {
  const fill = (select, priceKey) => {
    select.insertAdjacentHTML('beforeend', VEHICLES.filter((v) => v[priceKey]).map((v) =>
      `<option value="${esc(v.name.toLowerCase().replace(/\s+/g, '-'))}">${esc(v.name)}</option>`
    ).join(''));
  };
  fill($('#localVehicle'), 'priceLocal');
  fill($('#outVehicle'), 'priceOutstation');
}

function renderCare() {
  $('#care-grid').innerHTML = CARE_ITEMS.map((c, i) => `
    <div class="reveal text-center px-3 ${i ? 'lg:border-l lg:border-slate-300/70 dark:lg:border-slate-700/70' : ''}" style="--delay:${i * 0.08}s">
      <div class="icon-badge w-16 h-16 mx-auto mb-4">${solidIcon(c.icon, 'w-7 h-7')}</div>
      <h3 class="font-semibold text-slate-950 dark:text-luxury-50 mb-1">${esc(c.title)}</h3>
      <p class="text-slate-600 dark:text-luxury-400 text-sm">${esc(c.text)}</p>
    </div>`).join('');
}

function renderExperience() {
  $('#experience-list').innerHTML = EXPERIENCE_ITEMS.map((c) => `
    <li class="flex items-start gap-4">
      <div class="icon-badge w-12 h-12 shrink-0">${solidIcon(c.icon, 'w-5 h-5')}</div>
      <div><h3 class="font-semibold text-slate-950 dark:text-luxury-50">${esc(c.title)}</h3><p class="text-slate-600 dark:text-luxury-400 text-sm">${esc(c.text)}</p></div>
    </li>`).join('');
}

function renderHow() {
  $('#how-grid').innerHTML = HOW_STEPS.map((s, i) => `
    <li class="reveal relative text-center" style="--delay:${i * 0.1}s">
      <div class="icon-badge w-20 h-20 mx-auto mb-4">${outlineIcon(s.icon, 'w-9 h-9')}</div>
      ${i < HOW_STEPS.length - 1 ? '<span class="hidden lg:block absolute top-8 -right-5 text-gold-500" aria-hidden="true">' + outlineIcon('M17 8l4 4m0 0l-4 4m4-4H3', 'w-5 h-5') + '</span>' : ''}
      <h3 class="font-semibold text-slate-950 dark:text-luxury-50 mb-1">${i + 1}. ${esc(s.title)}</h3>
      <p class="text-slate-600 dark:text-luxury-400 text-sm">${esc(s.text)}</p>
    </li>`).join('');
}

function renderTestimonials() {
  $('#carousel-track').innerHTML = TESTIMONIALS.map((t) => `
    <div class="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0" data-slide>
      <article class="card-elevated h-full p-7 flex flex-col relative overflow-hidden">
        <div class="absolute top-6 right-6 opacity-5">
          <svg class="w-16 h-16 text-gold-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.434.917-3.995 3.355-3.995 5.849h4v7.391h-4zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.995 3.355-3.995 5.849h3.983v7.391h-3.983z"/></svg>
        </div>
        <div class="flex items-center gap-1 mb-4 relative z-10" aria-label="${t.rating} out of 5 stars">
          ${Array.from({ length: 5 }, (_, i) => starIcon(`w-5 h-5 ${i < t.rating ? 'text-gold-500' : 'text-luxury-300 dark:text-slate-700'}`)).join('')}
        </div>
        <blockquote class="text-slate-600 dark:text-luxury-300 leading-relaxed mb-6 flex-grow relative z-10 text-body">&ldquo;${esc(t.text)}&rdquo;</blockquote>
        <div class="flex items-center gap-4 relative z-10 pt-4 border-t border-luxury-200 dark:border-slate-700">
          <div class="w-12 h-12 rounded-full bg-luxury-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0 ring-2 ring-white dark:ring-slate-900">
            ${t.avatar ? `<img src="${esc(t.avatar)}" alt="" class="w-full h-full object-cover" loading="lazy">` : solidIcon(SOLID_ICONS.user, 'w-6 h-6 text-slate-500 dark:text-luxury-300')}
          </div>
          <div class="min-w-0">
            <div class="font-medium text-slate-950 dark:text-luxury-50 truncate">${esc(t.name)}</div>
          </div>
        </div>
      </article>
    </div>`).join('');
}

function fillContactLinks() {
  $$('[data-contact-call]').forEach((a) => { a.href = `tel:${CONTACT.phone}`; a.textContent = `Call ${CONTACT.phoneLabel}`; });
  $$('[data-contact-whatsapp]').forEach((a) => { a.href = WHATSAPP_URL; });
  $$('[data-contact-email]').forEach((a) => { a.href = `mailto:${CONTACT.email}`; });
  $('#whatsapp-btn').href = WHATSAPP_URL;
  $('#call-btn').href = `tel:${CONTACT.floatingCallNumber}`;
  $('#year').textContent = new Date().getFullYear();
}

// ============================================================
// 4. THEME TOGGLE
// ============================================================

function initTheme() {
  const root = document.documentElement;
  const sync = () => {
    const dark = root.classList.contains('dark');
    $$('.theme-icon-moon').forEach((el) => el.classList.toggle('hidden', dark));
    $$('.theme-icon-sun').forEach((el) => el.classList.toggle('hidden', !dark));
  };
  sync();

  $$('[data-theme-toggle]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const dark = root.classList.toggle('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      sync();
    })
  );
}

// ============================================================
// 5. NAVBAR (mobile menu, hide on scroll, smooth anchors)
// ============================================================

function initNavbar() {
  const navbar = $('#navbar');
  const menu = $('#mobile-menu');
  const toggle = $('#menu-toggle');

  const setMenu = (open) => {
    menu.style.height = open ? `${menu.scrollHeight}px` : '0px';
    toggle.setAttribute('aria-expanded', String(open));
    $('.menu-icon-open', toggle).classList.toggle('hidden', open);
    $('.menu-icon-close', toggle).classList.toggle('hidden', !open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });

  // On small screens the bar slides away when scrolling down and returns when scrolling up.
  let lastScroll = 0;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const current = window.scrollY;
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      const menuOpen = toggle.getAttribute('aria-expanded') === 'true';
      navbar.classList.toggle('nav-hidden', !isDesktop && !menuOpen && current > lastScroll && current > 200);
      lastScroll = current;
      ticking = false;
    });
  }, { passive: true });
}

// Eased scroll to an element, leaving room for the fixed navbar.
function scrollToElement(target) {
  const offset = $('#navbar').offsetHeight + 20;
  const start = window.scrollY;
  const end = target.id === 'top' ? 0 : target.getBoundingClientRect().top + start - offset;

  if (prefersReducedMotion) { window.scrollTo(0, end); return; }

  const duration = 1200;
  const startTime = performance.now();
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({ top: start + (end - start) * ease(progress), behavior: 'instant' });
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initSmoothAnchors() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (hash === '#') return e.preventDefault();
    const target = $(hash);
    if (!target) return;
    e.preventDefault();
    scrollToElement(target);
    history.replaceState(null, '', hash);
  });
}

// ============================================================
// 6. SCROLL EFFECTS (reveal + counters + magnetic buttons)
// ============================================================

function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-visible')); return; }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      observer.unobserve(el);
      // Drop the reveal classes afterwards so hover transforms/transitions work normally.
      const delay = parseFloat(el.style.getPropertyValue('--delay')) || 0;
      setTimeout(() => el.classList.remove('reveal', 'is-visible'), (delay + 1.1) * 1000);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = $$('[data-counter]');
  const format = (value, target, suffix) => `${value.toFixed(target % 1 !== 0 ? 1 : 0)}${suffix}`;

  const run = (el) => {
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion) { el.textContent = format(target, target, suffix); return; }

    const duration = 2000;
    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 2);
      el.textContent = format(target * eased, target, suffix);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => observer.observe(el));
}

// Buttons drift slightly towards the cursor, then spring back.
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover)').matches || prefersReducedMotion) return;

  // Form and full-width buttons stay still; only compact buttons get the drift effect.
  $$('.btn').filter((btn) => !btn.closest('form') && !btn.classList.contains('w-full')).forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
      btn.style.transition = 'transform 0.3s ease-out, background-color 0.3s, box-shadow 0.3s';
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.3s ease-out, background-color 0.3s, box-shadow 0.3s';
      btn.style.transform = '';
    });
  });
}

// ============================================================
// 7. FLEET FILTER
// ============================================================

function initFleetFilter() {
  const buttons = $$('[data-filter]');
  const cards = $$('.fleet-card');

  const matches = (card, filter) => {
    if (filter === 'all') return true;
    return card.dataset.size === filter;
  };

  const show = (card) => {
    if (!card.hidden) return;
    card.hidden = false;
    card.classList.add('is-entering');
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-entering')));
  };

  const hide = (card) => {
    if (card.hidden) return;
    card.classList.add('is-leaving');
    setTimeout(() => {
      // Skip if the user switched back to a filter that shows this card again.
      if (card.classList.contains('is-leaving')) { card.hidden = true; card.classList.remove('is-leaving'); }
    }, 300);
  };

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('filter-btn-active', active);
        b.classList.toggle('filter-btn-inactive', !active);
        b.setAttribute('aria-checked', String(active));
      });
      cards.forEach((card) => {
        if (matches(card, btn.dataset.filter)) { card.classList.remove('is-leaving'); show(card); }
        else hide(card);
      });
    })
  );
}

// ============================================================
// 7b. VEHICLE GALLERY (opened by the eye icon on a fleet card)
// ============================================================

function initGallery() {
  const modal = $('#gallery-modal');
  const track = $('#gallery-track');
  const counter = $('#gallery-counter');
  const navButtons = $$('[data-gallery-nav]');
  let lastFocus = null;

  const updateCounter = () => {
    const total = track.children.length;
    const index = Math.min(total - 1, Math.round(track.scrollLeft / (track.clientWidth || 1)));
    counter.textContent = `${index + 1} / ${total}`;
  };

  const open = (vehicle, trigger) => {
    lastFocus = trigger;
    $('#gallery-title').textContent = vehicle.name;
    $('#gallery-meta').textContent = `${SIZE_LABELS[vehicle.size]} • ${vehicle.type}`;
    $('#gallery-book').dataset.bookingType = vehicle.priceLocal ? 'local' : 'outstation';
    track.innerHTML = vehicle.images.map((src, i) =>
      `<div class="gallery-slide"><img src="${esc(src)}" alt="${esc(vehicle.name)} photo ${i + 1}" class="w-full h-full object-cover" loading="lazy"></div>`
    ).join('');
    navButtons.forEach((b) => { b.hidden = vehicle.images.length < 2; });
    track.scrollTo({ left: 0, behavior: 'instant' });
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    updateCounter();
    $('#gallery-close').focus();
  };

  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  const slide = (direction) => track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-gallery]');
    if (opener) return open(VEHICLES[Number(opener.dataset.gallery)], opener);
    if (e.target.closest('[data-gallery-close]')) close();
  });
  $('#gallery-prev').addEventListener('click', () => slide(-1));
  $('#gallery-next').addEventListener('click', () => slide(1));

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') slide(-1);
    if (e.key === 'ArrowRight') slide(1);
  });

  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateCounter(); ticking = false; });
  }, { passive: true });
}

// ============================================================
// 8. TESTIMONIAL CAROUSEL
// ============================================================

function initCarousel() {
  const track = $('#carousel-track');
  const slides = $$('[data-slide]', track);
  const prevBtn = $('#carousel-prev');
  const nextBtn = $('#carousel-next');
  const dotsBox = $('#carousel-dots');

  let index = 0;
  let maxIndex = 0;
  let timer = null;

  const perView = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);

  const render = () => {
    track.style.transform = `translateX(${-index * slides[0].offsetWidth}px)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= maxIndex;
    $$('button', dotsBox).forEach((dot, i) => {
      const active = i === index;
      dot.setAttribute('aria-selected', String(active));
      dot.className = `h-2 rounded-full ${active ? 'w-8 bg-gold-500' : 'w-2 bg-luxury-300 dark:bg-slate-600 hover:bg-luxury-400 dark:hover:bg-slate-500'}`;
      dot.style.transition = 'all 300ms';
    });
  };

  const goTo = (i) => { index = Math.min(Math.max(i, 0), maxIndex); render(); };
  const next = () => goTo(index < maxIndex ? index + 1 : 0);
  const prev = () => goTo(index > 0 ? index - 1 : maxIndex);

  const measure = () => {
    maxIndex = Math.max(0, slides.length - perView());
    if (index > maxIndex) index = maxIndex;
    render();
  };

  dotsBox.innerHTML = slides.map((_, i) => `<button type="button" role="tab" aria-label="Go to testimonial ${i + 1}" data-dot="${i}"></button>`).join('');
  dotsBox.addEventListener('click', (e) => { const dot = e.target.closest('[data-dot]'); if (dot) { goTo(Number(dot.dataset.dot)); restartAuto(); } });
  prevBtn.addEventListener('click', () => { prev(); restartAuto(); });
  nextBtn.addEventListener('click', () => { next(); restartAuto(); });

  const startAuto = () => { if (!prefersReducedMotion) timer = setInterval(next, 5000); };
  const restartAuto = () => { clearInterval(timer); startAuto(); };

  const root = $('#carousel');
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restartAuto);

  window.addEventListener('resize', measure);
  measure();
  startAuto();
}

// ============================================================
// 9. CONTACT FORM
// ============================================================

function initContactForm() {
  const form = $('#contact-form');
  const tabs = $$('[data-tab]', form);

  // Phone accepts digits only, capped at 10 (also covers paste).
  $('#phone').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
  });
  const localSet = $('#fieldset-local');
  const outSet = $('#fieldset-outstation');
  const tripType = $('#outTripType');
  const multiPanel = $('#multicity-panel');
  const citiesBox = $('#additional-cities');
  const cityCount = $('#city-count');
  const limitNotice = $('#city-limit-notice');
  const destLabel = $('#outDestinationLabel');
  const MAX_EXTRA_CITIES = 4; // plus the main destination = 5 cities

  // Default every date picker to "today or later".
  const today = new Date().toISOString().split('T')[0];
  $$('[data-min-today]', form).forEach((input) => { input.min = today; });

  // --- Local / Outstation tabs ---
  function setTab(type) {
    const isLocal = type === 'local';
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === type;
      tab.setAttribute('aria-selected', String(active));
      tab.className = `tab-btn ${active ? 'tab-btn-active' : 'tab-btn-inactive'} flex-1 py-3 px-4 text-sm`;
    });
    const [shown, hidden] = isLocal ? [localSet, outSet] : [outSet, localSet];
    hidden.hidden = true;
    hidden.disabled = true; // disabled fields are skipped by validation and submission
    shown.hidden = false;
    shown.disabled = false;
    shown.classList.remove('fieldset-enter');
    void shown.offsetWidth;
    shown.classList.add('fieldset-enter');
  }
  tabs.forEach((tab) => tab.addEventListener('click', () => setTab(tab.dataset.tab)));

  // Links elsewhere on the page can preselect a tab (footer, fleet cards).
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-booking-type]');
    if (link) setTab(link.dataset.bookingType);
  });
  const urlType = new URLSearchParams(location.search).get('type');
  if (urlType === 'local' || urlType === 'outstation') setTab(urlType);

  // --- Multi-city ---
  function renderCities() {
    const isMulti = tripType.value === 'multicity';
    multiPanel.hidden = !isMulti;
    destLabel.textContent = isMulti ? 'Destination City 1 of 5' : 'Destination City';
    if (!isMulti) limitNotice.hidden = true;
    cityCount.textContent = `${citiesBox.children.length + 1} of 5`;
  }

  function addCity() {
    if (citiesBox.children.length >= MAX_EXTRA_CITIES) { limitNotice.hidden = false; return; }
    const n = citiesBox.children.length + 2;
    const row = document.createElement('div');
    row.className = 'flex items-end gap-3';
    row.innerHTML = `
      <div class="relative min-w-0 flex-1">
        <label class="label">Destination City ${n}</label>
        <input type="text" name="destinationCity${n}" class="input-field" placeholder="Enter destination city ${n}" required>
      </div>
      <button type="button" class="mb-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-red-300 hover:text-red-600 dark:border-slate-700 dark:text-luxury-300 dark:hover:text-red-400" aria-label="Remove destination city ${n}">
        ${outlineIcon('M6 18L18 6M6 6l12 12', 'h-5 w-5')}
      </button>`;
    citiesBox.appendChild(row);
    limitNotice.hidden = true;
    renderCities();
  }

  // Re-number the remaining rows after one is removed.
  function renumberCities() {
    [...citiesBox.children].forEach((row, i) => {
      const n = i + 2;
      $('label', row).textContent = `Destination City ${n}`;
      const input = $('input', row);
      input.name = `destinationCity${n}`;
      input.placeholder = `Enter destination city ${n}`;
      $('button', row).setAttribute('aria-label', `Remove destination city ${n}`);
    });
  }

  citiesBox.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('button');
    if (!removeBtn) return;
    removeBtn.parentElement.remove();
    limitNotice.hidden = true;
    renumberCities();
    renderCities();
  });
  $('#add-city').addEventListener('click', addCity);
  tripType.addEventListener('change', renderCities);

  function resetOutstationState() {
    tripType.value = 'roundtrip';
    citiesBox.innerHTML = '';
    limitNotice.hidden = true;
    renderCities();
  }

  // --- Submit ---
  const submitBtn = $('#submit-btn');
  const label = $('#submit-label');
  const loading = $('#submit-loading');
  const success = $('#form-success');
  const error = $('#form-error');

  const setSubmitting = (on) => {
    submitBtn.disabled = on;
    label.classList.toggle('hidden', on);
    loading.classList.toggle('hidden', !on);
    loading.classList.toggle('inline-flex', on);
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // honeypot filled: silently drop

    setSubmitting(true);
    success.hidden = true;
    error.hidden = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !(result.success === true || result.success === 'true')) {
        throw new Error(result.message || 'Form submission failed');
      }
      success.hidden = false;
      form.reset();
      resetOutstationState();
    } catch (err) {
      // FormSubmit rejects every request until the form's owner clicks the activation email link.
      $('#form-error-text').textContent = /activation/i.test(err.message)
        ? 'We couldn\u2019t send your enquiry right now. Please tap the WhatsApp button below to message us directly.'
        : 'Your enquiry couldn\u2019t be sent. Please tap the WhatsApp button below to message us directly, or try again.';
      error.hidden = false;
      console.error('Form error:', err);
    } finally {
      setSubmitting(false);
    }
  });

  renderCities();
}

// Hero search copies its fields into the local-ride form and jumps to it.
function initHeroSearch() {
  const search = $('#hero-search');
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    $('#localPickup').value = $('#hs-from').value;
    $('#localDrop').value = $('#hs-to').value;
    $('#localDate').value = $('#hs-date').value;
    $('.tab-btn[data-tab="local"]').click();
    scrollToElement($('#contact-form'));
    // Focus the first field still empty once the eased scroll has finished.
    setTimeout(() => {
      const empty = ['#localPickup', '#localDrop', '#localDate'].map((s) => $(s)).find((el) => !el.value);
      (empty || $('#localPickup')).focus({ preventScroll: true });
    }, prefersReducedMotion ? 0 : 1300);
  });
}

// ============================================================
// 10. START
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderHeroImages();
  renderNavLinks();
  renderSocialLinks();
  renderFleet();
  renderVehicleOptions();
  renderCare();
  renderExperience();
  renderHow();
  renderTestimonials();
  fillContactLinks();

  initTheme();
  initNavbar();
  initSmoothAnchors();
  initFleetFilter();
  initGallery();
  initCarousel();
  initContactForm();
  initHeroSearch();
  initReveal();
  initCounters();
  initMagneticButtons();
});
