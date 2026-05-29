# MOJO MOBILE SUITES SALON — Pricing Menu
*The Real Personal Touch*

> All services are by appointment only. A $25 non-refundable deposit is required at booking.
> Seniors receive 25% off all services. Leave a review and receive 5% off your next visit.

---

## 💇 HAIR SERVICES

| Service | Price |
|---|---|
| Hair Cut | $35–$100 |
| Razor Cut | $75–$100 |
| Bang Trim | $20 |
| Hair Wash | $10–$20 |
| Blowout | $45–$75 |
| Updo | $85–$150 |

---

## 🎨 HAIR COLOR

| Service | Price |
|---|---|
| Single Process (touch up to full color) | $85–$150 |
| Highlights Special Effects (partial) | $12/Foil |
| Highlights or Lowlights Half a Head | $165–$185 |
| Highlights or Lowlights Full Head | $195–$250 |
| Fashion Vivid Hair Colors | $220–$300 |
| Balayage or Ombré Half | $165–$185 |
| Balayage or Ombré Full | $200–$250 |
| Air Touch Highlights Half | $200–$250 |
| Air Touch Highlights Full | $350–$400 |
| Air Touch Balayage Half | $220–$275 |
| Air Touch Balayage Full | $350–$450 |
| Color Gloss | $75–$120 |
| Toner | $45–$75 |
| Double Process | $160–$250 |
| Corrective Color | Upon consultation |

---

## 🧴 HAIR TREATMENT

| Service | Price |
|---|---|
| Moroccan Oil Deep Treatment | $45–$65 |
| Olaplex Treatment | $45–$75 |

---

## 🌀 RETEXTURE HAIR TREATMENT

| Service | Price |
|---|---|
| Body Waves | $120–$200 |
| Keratin Treatment or Brazilian Blowout | $275–$400 |

---

## 💍 BRIDAL SERVICES

| Service | Price |
|---|---|
| Bridal Hair / Make Up | Upon consultation |
| Make Up | $100–$175 |

---

## 🪒 SHAVING SERVICES

| Service | Price |
|---|---|
| Royal Shave | $40–$50 |
| Shape Up | $25–$35 |
| Beard Trim | $10–$25 |

---

## 🌿 WAXING AND THREADING

| Service | Price |
|---|---|
| Eyebrows Master Shape | $20–$25 |
| Almond Treatment to Nurture Eyebrows | $10 |
| Chin | $15 |
| Lip | $10–$15 |
| Eyebrows + Lip | $35–$40 |
| Eyebrows + Lip + Chin | $45–$65 |
| Full Face | $55–$70 |
| Full Leg | $55–$75 |
| Full Leg with Bikini Line | $95–$115 |
| Bikini Line | $35–$45 |
| Brazilian Bikini | $55–$75 |
| Half Leg (Lower / Upper Leg) | $45–$75 |
| Half Leg (Lower / Upper Leg) with Bikini | $75–$110 |
| Underarm | $25–$35 |
| Arm (Half / Full) | $35–$55 |

---

## 👁️ EYELASH EXTENSIONS

*Available in Short, Medium, Long, and Mix*

| Service | Price |
|---|---|
| Short Lashes (Full Set) | $65–$130 |
| Medium Lashes (Full Set) | $75–$140 |
| Long Lashes (Full Set) | $85–$165 |
| Mix of Lashes (3 Options) | $120–$200 |
| Refill of Lashes | $45–$75 |
| Eyelash Tint | $35–$45 |

---

## 💆 MASSAGE

| Service | Price |
|---|---|
| Scalp Massage | $25–$35 |

---

## 🚐 RENTAL & BOOKING

| Detail | Info |
|---|---|
| Daily Rental Rate | $525/day for 7 hours |
| Mileage Fee | +$12/mile with driver |
| Non-Refundable Deposit | $25 (required at booking) |
| Senior Discount | 25% off all services |
| Review Discount | 5% off next visit for leaving a rating/comment |

---

## 📋 BOOKING FORM FIELDS

When booking an appointment, clients will provide:
- **Name**
- **Date**
- **Time**
- **Style / Service Requested**
- **Estimated Price**

---

## 💻 WEBSITE IMPLEMENTATION PLAN — Pricing Section

### Goal
Display all 8 service categories and 47+ services in a clean, visually appealing pricing page that matches the Mojo Mobile Suites brand (purple, white, gray palette).

### Layout Options
- **Tabbed Layout** — One tab per service category; user clicks to switch. Best for mobile.
- **Accordion Layout** — Each category collapses/expands. Clean and compact.
- **Full Scroll Layout** — All categories listed vertically with sticky category nav on the side. Best for desktop.

**Recommended:** Accordion on mobile, full scroll with sticky sidebar on desktop.

### Design Specs
- Background: deep purple gradient or soft purple-tinted card backgrounds
- Category headers: white text on purple band or purple text on white card
- Price column: right-aligned, bold, gray or purple
- "Upon consultation" items: italicized in accent color
- Discounts banner: pinned near the top — senior 25% off, review 5% off
- Deposit notice: styled callout box at top of section

### Components to Build
- [ ] Pricing page or section route (`/pricing` or `#services`)
- [ ] Category header component (icon + label + divider)
- [ ] Service row component (name + price, responsive)
- [ ] "Upon consultation" badge/tag
- [ ] Discount callout banner (senior + review)
- [ ] Rental & booking info card
- [ ] Booking form CTA button linking to booking section

### Test Cases for Pricing Section
| Test | Expected Result |
|---|---|
| All 47 services render | No missing rows |
| Prices display correctly | Range format (e.g. $35–$100) consistent |
| "Upon consultation" items render | Styled differently from priced items |
| Senior discount notice visible | "25% off for seniors" clearly shown |
| Review discount notice visible | "5% off for leaving a review" clearly shown |
| Deposit notice visible | "$25 non-refundable deposit" shown at top |
| Rental info displays correctly | $525/day, $12/mile, 7 hrs all present |
| Mobile layout readable | No horizontal overflow, text not clipped |
| Booking CTA button works | Links or scrolls to booking form |

---

*Pricing document for: Mojo Mobile Suites Salon*
*Version: 1.0 — Initial Draft*
*Source: Client-provided service menu (photos)*
