# Mojo Mobile Suites Salon — Website Project Plan

---

## 1. Client Brief (Organized from Notes)

**Business Name:** MOJO MOBILE SUITES SALON
**Tagline:** *The Real Personal Touch*

| Detail | Info |
|---|---|
| Phone | (212) 731-9918 |
| Location | Manhattan Avenue, Manhattan, NY 10025 |
| Hours | Monday – Sunday, 6:00 AM – 9:00 PM |
| Type | Unisex Mobile Salon |
| Licensed & Insured | Yes |

### Brand Identity
- **Colors:** Purple (dominant), White, Gray — very little Black
- **Tone:** Personal, professional, vibrant, colorful, and appealing
- **Key Brand Message:** Great looks with professionalism as our top priority, on all levels and fronts.

### Services Offered
- Full unisex salon services (by appointment only)
- Nail services
- Pull-up mobile unit at location for parties and events
- Upon appointment: a multitude of services available upon request

### Amenities Provided Onboard
- Internet (Wi-Fi)
- Cable TV
- Music
- Phone charging
- Complimentary drinks 🍸

### Pricing & Specials
- **Rental Rate:** $525/day for 7 hours + $12/mile with driver
- **Non-Refundable Deposit:** $25 required at booking
- **Senior Discount:** 25% off
- **Social Media Review Discount:** 5% off for leaving a comment/rating

### Social Media
- **Instagram:** [@mojomobilesuites](https://www.instagram.com/mojomobilesuites)

### Booking Fields
- Person (Name)
- Date
- Time
- Style / Service
- Price

---

## 2. AI Prompt (for Generating or Describing the Website)

> **Prompt:**
>
> Design and build a vibrant, production-ready website for **MOJO MOBILE SUITES SALON** — a licensed and insured, unisex mobile salon based in Manhattan, NY. The tagline is *"The Real Personal Touch."*
>
> **Brand & Visual Direction:**
> Use a bold, luxurious color palette dominated by deep purple, with white and gray accents and minimal use of black. The background should be colorful, rich, and visually appealing — not flat or plain. Use elegant, distinctive typography that feels personal yet professional. Add subtle motion and micro-interactions for a premium feel.
>
> **Pages / Sections to Include:**
>
> 1. **Hero Section** — Full-width with salon name, tagline ("The Real Personal Touch"), a brief brand statement about professionalism, and a CTA button for booking an appointment.
> 2. **About Section** — Short paragraph highlighting that Mojo Mobile Suites is a personal, licensed & insured, unisex mobile salon providing a multitude of services. Use the word "personal" meaningfully multiple times.
> 3. **Services Section** — Cards or list showcasing services including full salon services, nail services, and party/event pull-up bookings. Note that all services are by appointment only.
> 4. **Amenities Section** — Highlight onboard amenities: Wi-Fi, Cable TV, Music, Phone Charging, and Complimentary Drinks.
> 5. **Pricing & Rentals Section** — Display the rental rate ($525/day for 7 hrs + $12/mile with driver), non-refundable $25 deposit, 25% senior discount, and a note about the 5% discount for social media reviews/ratings.
> 6. **Booking Form** — Fields: Name, Date, Time, Style/Service, Price. Clearly note that all bookings require a $25 non-refundable deposit and are appointment-only.
> 7. **Reviews / Rating Section** — A comment and rating section. Include a note that leaving a review earns 5% off their next visit. Link to or embed Instagram (@mojomobilesuites).
> 8. **Contact & Social Section** — Phone: (212) 731-9918, Location: Manhattan Avenue, Manhattan, NY 10025, Hours: Mon–Sun 6AM–9PM. Include social media link(s) and a QR code linking to the Instagram page (@mojomobilesuites).
> 9. **Footer** — Business name, tagline, phone, hours, address, Instagram link, licensed & insured badge.
>
> **Technical Requirements:**
> - Responsive (mobile-first)
> - Social media links integrated (Instagram: @mojomobilesuites)
> - QR code generated for the Instagram profile or website URL
> - Colorful, dynamic background (gradient mesh or layered purple/white/gray tones)
> - Smooth scroll, hover states, and section animations

---

## 3. Website Build Plan

### Phase 1 — Setup & Design Foundation
- [ ] Establish color tokens: `--color-primary: #7B2FBE` (deep purple), `--color-light: #F5F0FF`, `--color-gray: #9E9E9E`, `--color-white: #FFFFFF`, `--color-accent: #C084FC`
- [ ] Select typography: display font (e.g., Playfair Display or Cormorant Garamond) + body font (e.g., DM Sans or Lato)
- [ ] Build gradient/mesh background system
- [ ] Set up responsive grid and layout scaffolding

### Phase 2 — Core Sections (HTML/CSS/JS or React)
- [ ] Hero section with animated headline and CTA
- [ ] About section with brand copy
- [ ] Services cards (Salon, Nails, Party Pull-Up, Custom Requests)
- [ ] Amenities icon grid (Wi-Fi, TV, Music, Charging, Drinks)
- [ ] Pricing & Rentals section with styled cards
- [ ] Senior discount + review discount callouts

### Phase 3 — Interactive Features
- [ ] Booking form (Name, Date, Time, Style, Price) with deposit notice
- [ ] Comment & rating section (static UI or linked to a review platform)
- [ ] Instagram social media link integration
- [ ] QR code generation (linking to Instagram or main URL)
- [ ] Smooth scroll and section entrance animations

### Phase 4 — Contact & Footer
- [ ] Contact block with phone, address, hours
- [ ] Social media icons linked to @mojomobilesuites
- [ ] Footer with all business info + licensed & insured badge

### Phase 5 — Polish & QA
- [ ] Mobile responsiveness audit (320px, 375px, 768px, 1440px)
- [ ] Color contrast / accessibility check
- [ ] Cross-browser test (Chrome, Safari, Firefox, Edge)
- [ ] Form validation testing
- [ ] Performance check (image optimization, load time)

---

## 4. Test Plan

### 4.1 Visual / UI Tests
| Test | Expected Result | Pass? |
|---|---|---|
| Hero renders correctly on mobile (375px) | Full-width, no overflow, readable CTA | — |
| Hero renders on desktop (1440px) | Centered layout, large typography | — |
| Brand colors match spec | Purple dominant, white/gray accents, minimal black | — |
| All sections visible without horizontal scroll | No overflow on any device width | — |
| QR code is scannable and points to correct URL | Redirects to @mojomobilesuites Instagram | — |
| Instagram link opens correct profile | @mojomobilesuites IG page loads | — |

### 4.2 Functional Tests
| Test | Expected Result | Pass? |
|---|---|---|
| Booking form submits with all fields filled | Success message or redirect shown | — |
| Booking form blocks submission if fields empty | Validation errors appear inline | — |
| Deposit notice visible before form submission | "$25 non-refundable deposit required" clearly shown | — |
| Rating/comment section accepts input | User can type and submit a review | — |
| Phone number link works on mobile | Tapping (212) 731-9918 opens dialer | — |
| Social media icons are clickable | Correct platform pages open | — |

### 4.3 Content Accuracy Tests
| Test | Expected Result | Pass? |
|---|---|---|
| Business name displayed correctly | "MOJO MOBILE SUITES SALON" | — |
| Tagline correct | "The Real Personal Touch" | — |
| Phone number correct | (212) 731-9918 | — |
| Address correct | Manhattan Avenue, Manhattan, NY 10025 | — |
| Hours correct | Monday – Sunday, 6:00 AM – 9:00 PM | — |
| Rental rate correct | $525/day for 7 hrs + $12/mile with driver | — |
| Non-refundable deposit shown | $25 non-refundable deposit | — |
| Senior discount shown | 25% off | — |
| Review discount shown | 5% off for leaving a rating/comment | — |
| Licensed & insured badge present | Visible in footer or about section | — |

### 4.4 Responsive / Cross-Browser Tests
| Device / Browser | Test | Pass? |
|---|---|---|
| iPhone SE (375px) | Layout intact, no overflow | — |
| iPhone 14 Pro (393px) | Booking form usable | — |
| iPad (768px) | Grid adapts to tablet layout | — |
| Desktop Chrome (1440px) | Full layout renders correctly | — |
| Desktop Safari | No style regressions | — |
| Desktop Firefox | Animations and fonts load | — |
| Android Chrome | QR code and form work | — |

### 4.5 Accessibility Tests
| Test | Expected Result | Pass? |
|---|---|---|
| Color contrast ratio ≥ 4.5:1 on body text | Passes WCAG AA | — |
| All images have alt text | Screen reader can describe them | — |
| Form fields have labels | Accessible to assistive technology | — |
| Tab navigation works through all interactive elements | No keyboard traps | — |

---

## 5. Notes & Open Items

- **QR Code:** Will be generated pointing to `https://www.instagram.com/mojomobilesuites` or the live website URL once finalized.
- **Booking Backend:** Client needs to confirm if booking form should send email, connect to a scheduling tool (e.g., Calendly, Square Appointments), or be a static form.
- **Payment for Deposit:** Confirm if the $25 deposit should be collected via online payment (Stripe, Square, PayPal) or handled manually.
- **Review Platform:** Confirm if reviews/ratings are a static section, embedded Google Reviews, or a custom form.
- **Domain:** Confirm desired domain name (e.g., `mojomobilesuites.com`).

---

*Document prepared for: Mojo Mobile Suites Salon*
*Version: 1.0 — Initial Planning Draft*
