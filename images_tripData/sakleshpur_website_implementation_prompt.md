# Website Implementation Prompt: Sakleshpur Tours, Routes & Cab Quotes

## Your role and objective
You are working inside my existing website project in VS Code. Implement a polished, customer-friendly Tours and Routes section using the complete content below. Make actual project changes, not just recommendations. Follow the existing framework, component patterns, branding, typography, and navigation. Do not rebuild the website or introduce unnecessary dependencies.

## Inspect the project first
- Inspect the project structure, existing pages, reusable components, image folders, styling, and booking/contact functionality.
- Identify the most appropriate existing page or section for this content. Extend it where possible; otherwise create a Tours and Routes page and connect it to existing navigation.
- Preserve unrelated content, existing functionality, and project conventions.
- Do not invent the business name, phone number, WhatsApp number, address, operating hours, cab fares, vehicle categories, or service guarantees. Reuse confirmed project data only.

## Mandatory image requirements
### 1. Use images from my project folders
- Inspect ALL relevant existing image/asset folders before choosing images.
- Using suitable images already present in my folders is MANDATORY. Do not ignore local assets and replace everything with downloaded images.
- Match local images to the relevant places or route themes using filenames and visual inspection where available. Do not label an uncertain image as a specific destination.
- Use relevant local images prominently in route cards, detail sections, or the hero. Reuse existing paths where practical and do not delete original files.
- If no suitable local images can be identified, report that specific blocker. Do not claim the mandatory local-image requirement is satisfied by an unrelated image.

### 2. Download additional images only if required
- If local assets do not adequately cover a route or destination, search, inspect, and download additional relevant images ONLY through the VS Code integrated browser.
- Do not use external browsers, standalone web-search tools, terminal download commands, curl, wget, scripts, APIs, or other download channels for image acquisition.
- If the integrated browser is unavailable or cannot download files, do not bypass this restriction. Continue with suitable local assets and clearly report the missing capability or image coverage.
- Use real, destination-relevant photographs. Do not generate AI images or use unrelated stock photos that misrepresent the places.
- Prefer sources with clear reuse permission. Do not assume that images appearing in search results are free to use. Avoid watermarked images and comply with license and attribution requirements.
- Download permitted images into the project's established asset folder; do not hotlink remote images.
- Maintain a small image-source record with the local filename, destination or theme, original source URL, creator if provided, license or permission, and required attribution. Mark existing local assets as user-provided; do not invent their license.

### 3. Image presentation
- Use responsive image sizing, consistent aspect ratios, appropriate cropping, descriptive alt text, and lazy loading for below-the-fold images.
- Do not stretch images. Ensure the primary subject remains visible on mobile.
- Prefer distinct images for different route cards where available. Do not force repetition merely to fill space.
- Optimize assets using existing project tooling without damaging originals or introducing unnecessary dependencies.

## Content and accuracy rules
- Use the copy below as the content source. Minor edits for grammar and consistency are allowed, but preserve every route, approximate distance, and suggested stop.
- Distances are user-provided estimates, not verified map calculations. Label them as approximate. Do not invent travel times, exact stop order, map coordinates, or a guaranteed one-day itinerary.
- Treat destination lists as suggested stops, not a promise that every attraction can be covered in one trip.
- Do not claim 'most liked', 'highest rated', 'best price', guaranteed low crowds, free activities, or verified popularity without supporting business evidence.
- Do not add unsupported facts about opening hours, access, permits, safety, accessibility, activity availability, or religious practices.
- Keep the pilgrimage route welcoming and respectful.
- Cab prices have NOT been supplied. Use 'Request a Quote' or 'Get My Trip Quote'. Do not invent prices, discounts, starting fares, or inclusions.
- Tolls and parking are explicitly excluded from the cab fare. Other activity and admission charges are unconfirmed; do not describe them as included or excluded without confirmed project information.
- Do not present spelling normalization as independent verification. Where a place name is ambiguous, preserve the supplied name and flag it in the implementation summary rather than silently substituting another destination.

## Recommended page structure and interaction
1. Hero with headline, supporting copy, a relevant local image, and a quote/customisation CTA.
2. Short explanation that routes are flexible suggestions.
3. Six visually distinct route cards showing route name, theme, approximate distance, short description, and a relevant image.
4. Accessible expandable route details or existing route-detail components containing ALL suggested stops and customisation copy. Avoid hiding content in inaccessible hover-only interactions.
5. Personalised cab-quote section.
6. Custom-trip CTA.
7. Clearly visible distance, itinerary, toll, and parking notes.

Use the existing design system. Aim for a welcoming travel-business presentation with readable spacing and concise copy, not a dense spreadsheet-style layout. Ensure usability at mobile, tablet, and desktop sizes.

### CTA behavior
- Connect CTAs to the existing booking, enquiry, contact, or WhatsApp flow using confirmed project details.
- Where supported, prefill the selected route name in the existing enquiry flow.
- Do not invent contact details or add a fake submission-success state.
- If no working enquiry destination exists, explain the missing configuration and use a clear, honest fallback rather than a broken or misleading button.
- Do not add a new backend or collect personal information through an unconnected form.

---

# Complete Website Content

## Hero
**Page title:** Sakleshpur Sightseeing & Customised Cab Tours

**Headline:** Scenic journeys. Flexible plans. Memories to take home.

**Supporting copy:** From scenic viewpoints and waterfalls to historic temples and peaceful hill escapes, choose a journey that suits your interests.

Our suggested routes are a starting point for planning your trip. You're free to customise your itinerary, choose your preferred stops, and explore at your own pace. Share what you have in mind, and we'll help you plan a journey around your preferences.

**Closing line:** You choose the experiences. We take care of the drive.

**Primary CTA:** Get My Trip Quote
**Secondary CTA:** Explore Suggested Routes

## Cab Fares & Trip Quotes
**Headline:** Your trip, your preferences, your personalised quote.

Tell us your travel date, pickup location, number of passengers, and preferred route. We'll help you plan your sightseeing journey and provide a cab quote for your trip.

**CTA:** Get My Trip Quote

## Route 1: Scenic Hills, Temples & Waterfalls
**Theme:** A recommended choice for scenic views and trekking
**Approximate travel distance:** 130 km

Enjoy a journey that brings together hill views, temple visits, trekking stops, and waterfalls. This route is a good choice for travellers who want a mix of sightseeing and outdoor exploration.

**Suggested places to explore:**
1. Bettada Bhairaveshwara Temple & viewpoints
2. Pandavara Betta
3. Ettina Bhuja trekking point
4. Manjehalli Abbi Falls
5. Manjarabad Fort
6. Devaramane viewpoint
7. Devarunda Temple

**Make it yours:** Let us know whether you'd prefer more time for trekking, photography, or relaxed sightseeing.
**CTA:** Plan My Scenic Trip

## Route 2: Offbeat Trails & Nature Escapes
**Theme:** For travellers who enjoy exploring beyond the usual stops
**Approximate travel distance:** 125 km

Take a different path with a route centred on grasslands, viewpoints, waterfalls, and hill trails. Combine relaxed sightseeing with a little adventure, choosing the stops that suit your interests and energy levels.

**Suggested places to explore:**
1. Hethur grasslands
2. Bisle Ghat viewpoints
3. Patla Hills trekking point
4. Mankanahalli Ridge Point
5. Mukanamane Waterfalls
6. Mallalli Waterfalls
7. Hosahalli shooting spot
8. Gavi Hills jeep safari

**Make it yours:** Choose a gentler nature outing or include trekking and a jeep safari in your preferred itinerary.
**CTA:** Plan My Offbeat Escape

## Route 3: Heritage, Temples & Waterside Views
**Theme:** A thoughtful blend of culture, spirituality & leisure
**Approximate travel distance:** 125 km

Plan a journey around historic temples, spiritual stops, and time by the water. This route brings together heritage sightseeing and a more relaxed pace, with a boating stop for those who wish to include it.

**Suggested places to explore:**
1. Belur Chennakeshava Temple
2. Yagachi Dam
3. Halebeedu Temple
4. Halebeedu Jain Temple
5. Yagachi Dam backwaters boating point
6. Pushpagiri Temple

**Make it yours:** Spend more time exploring the temples or balance your visits with a leisurely waterside stop.
**CTA:** Plan My Heritage Tour

## Route 4: Sacred Temples & Pilgrimage Journey
**Theme:** A journey centred on devotion and meaningful visits
**Approximate travel distance:** 200 km

Bring together your preferred temple visits in a personalised pilgrimage itinerary. This suggested route includes spiritual destinations and a vintage-car museum stop for travellers who would like to add variety to their journey.

**Suggested places to explore:**
1. Dharmasthala Sri Manjunatha Temple
2. Sri Sadashiva Rudra Surya Temple
3. Sri Rama Kshethra
4. Manjusha Car Museum, Dharmasthala
5. Southadka Shri Mahaganapathi Temple
6. Kukke Sri Subramanya Swami Temple

**Make it yours:** Tell us which temples are your priority so we can help plan the route around your preferred visits.
**CTA:** Plan My Pilgrimage Trip

## Route 5: Coorg Scenic Getaway
**Theme:** Temples, waterfalls, viewpoints & memorable stops
**Approximate travel distance:** 250 km

Create your own Coorg sightseeing experience with a selection of temple visits, nature stops, and scenic viewpoints. Choose the places you're most excited to explore, from the Golden Temple to Raja's Seat or a Mandalpatti jeep safari.

**Suggested places to explore:**
1. Golden Temple
2. Dubare Elephant Camp
3. Kaveri Nisargadhama
4. Sri Omkareshwara Swami Temple
5. Abbey Falls
6. Madikeri Fort
7. Raja's Seat
8. Mandalpatti jeep safari

**Make it yours:** Pick your must-visit attractions, and we'll help shape a route around them.
**CTA:** Plan My Coorg Getaway

## Route 6: Chikkamagaluru Hills & Waterfalls
**Theme:** A scenic escape with peaks, lakes & nature stops
**Approximate travel distance:** 200 km

Enjoy a sightseeing journey built around hill views, lakes, and waterfalls. This suggested route offers a mix of outdoor exploration and relaxed stops, with room to personalise the experience.

**Suggested places to explore:**
1. Mullayanagiri Peak
2. Hirekolale Lake
3. Baba Budangiri & plantation views
4. Jhari Waterfalls
5. Manikyadhara Waterfalls
6. Mahatma Gandhi Park

**Make it yours:** Focus on hill viewpoints, waterfall visits, or a balanced mix of your favourite stops.
**CTA:** Plan My Chikkamagaluru Trip

## Have a Different Journey in Mind?
**Headline:** Let's plan it your way.

These routes are suggestions, not fixed packages. Whether you'd like to add a destination, skip a stop, or combine selected experiences, we're happy to help you customise your trip.

**Closing line:** Share your travel plans. Let's turn them into a memorable journey.
**CTA:** Customise My Trip

## A Few Things to Know
- Distances are approximate and may vary depending on your pickup location and customised itinerary.
- The listed attractions are suggested stops. Your final itinerary should account for travel time, time spent at each location, and access conditions.
- Toll and parking charges are payable separately and are not included in the cab fare. Thank you for your understanding.

---

## Implementation quality and acceptance criteria
- All six routes are implemented with the correct approximate distances and every suggested stop.
- Customer-facing copy is professional, friendly, and clear about customisation.
- Suitable existing local images are used prominently, with the selected paths recorded.
- Any additional image searches and downloads occur exclusively through the VS Code integrated browser, with source and reuse details recorded.
- No misleading destination imagery, fabricated fares, unsupported popularity claims, or invented contact details are introduced.
- Toll and parking exclusions are visible near the quote section or trip notes, not hidden only in a tooltip.
- Route details and controls are keyboard accessible and work on touch devices.
- Images load correctly, have appropriate alt text, and do not distort or cause unnecessary layout shifts.
- Navigation and enquiry CTAs work using the project's existing functionality, or missing configuration is explicitly reported.
- Existing project build, lint, and test commands are run where available. Do not claim checks passed if they were not run.
- Review the page in the VS Code integrated browser if available, including mobile and desktop layouts. If browser review is unavailable, report that limitation.
- Do not deploy, publish, purchase images, or make unrelated changes without explicit permission.

## Final implementation handoff
After making the changes, provide a concise summary containing:
1. Files and components changed.
2. Where the new content appears and how navigation reaches it.
3. Local images used and any additional downloaded images with their source/license records.
4. CTA destinations and any missing configuration.
5. Checks performed and actual results.
6. Unresolved destination-name ambiguities, image gaps, or content requiring business confirmation.

Proceed with implementation using the available project context. Ask questions only when a genuine blocker prevents a safe, accurate change; otherwise make reasonable, reversible decisions consistent with the existing website.
