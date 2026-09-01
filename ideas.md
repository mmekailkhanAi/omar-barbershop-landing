# Omar Barbershop — Design Direction

## Three initial approaches

### Theme Name: Brass & Black Atelier
Very Brief Intro: A cinematic neighborhood barbershop identity built from charcoal, warm wood, brushed brass, and editorial typography. It makes the craft feel considered and premium while keeping the welcome human.
Probability: 0.07

### Theme Name: Houston Sunday Paper
Very Brief Intro: A tactile, print-inspired direction with cream paper, ink-black type, rust accents, and modular editorial blocks. It emphasizes local character and a relaxed, independent voice.
Probability: 0.03

### Theme Name: Cutline Utility
Very Brief Intro: A sharper, modern direction with steel, off-white, and signal orange, using measurement marks and direct utility-focused copy. It feels precise, energetic, and highly appointment-oriented.
Probability: 0.08

## Chosen approach: Brass & Black Atelier

### Design Movement
Contemporary hospitality editorial, borrowing the restraint of premium grooming campaigns and the material honesty of a classic barbershop interior.

### Core Principles
1. **Craft is the hero.** The cut, the hand, and the tools receive visual priority over decorative branding.
2. **Warm precision.** Dark surfaces and crisp typography are softened by brass, timber, and conversational copy.
3. **Asymmetry with breathing room.** Sections use offset columns, oversized type, and deliberate negative space instead of centered template blocks.
4. **Local confidence.** Houston is named plainly and repeatedly; the page feels like a real place, not an abstract lifestyle brand.

### Color Philosophy
Charcoal creates a calm, confident foundation and lets the hero imagery carry atmosphere. A restrained brass accent signals finish and craft without looking flashy. Warm ivory gives long-form copy a tactile paper-like contrast, while a muted clay accent adds a human, skin-and-wood warmth to key moments.

### Layout Paradigm
A vertical editorial flow: a full-bleed cinematic hero, then alternating dark and ivory bands with offset content rails, oversized section numerals, and narrow utility columns for hours, address, and booking. The rhythm should feel closer to a fashion editorial than a generic service business page.

### Signature Elements
- A brass hairline rule paired with oversized section indices such as “01 / The cut”.
- Small uppercase utility labels with wide tracking, used as navigation and metadata.
- A floating booking rail that becomes a compact bottom action bar on mobile.

### Interaction Philosophy
Interactions should feel tactile and direct: buttons lift subtly, service rows reveal their details with a short transform, navigation anchors glide to their sections, and the booking action stays within easy reach. No ornamental motion should compete with the haircut imagery.

### Animation
Use transform and opacity only. Hero copy enters with a staggered upward reveal; the brass rule draws in by scaleX; service rows shift a few pixels on hover; image layers use a restrained translateY parallax. All nonessential motion is disabled under prefers-reduced-motion.

### Typography System
Display: **DM Serif Display**, used for the main hero statement, section titles, and short pull quotes. Body and utility: **Manrope**, used for paragraphs, navigation, buttons, labels, prices, and metadata. Hero title is large and tightly tracked; supporting text stays compact with generous line height. Avoid all-caps for long copy.

### Brand Essence
Omar Barbershop is Houston’s precise, personable grooming stop for clients who want a cut that feels right and a barber who takes the time to get there. Personality: **meticulous, welcoming, assured**.

### Brand Voice
Headlines are short, specific, and craft-led. CTAs are direct without sounding transactional. Microcopy is warm, plainspoken, and never overclaims.

Example lines:
- “A better cut starts with taking the time.”
- “Leave sharper than you arrived.”

### Wordmark & Logo
Use a compact monogram concept built from an interlocking **O** and **B**: two offset brass arcs that also suggest a barber’s comb and a clean fade gradient. Pair it with a restrained wordmark set in DM Serif Display, never as a default browser treatment.

### Signature Brand Color
**Omar Brass — #B88A52**, a muted antique brass that feels ownable, warm, and grounded in the shop’s material palette.

## Design Read

```yaml
artifact: one-page local barbershop landing page
audience: Houston clients looking for a trusted haircut, beard service, or shave
visual-language: cinematic grooming editorial with neighborhood warmth
mode: greenfield
visual-variance: 7
motion-intensity: 4
information-density: 5
asset-dependence: 8
brand-fidelity: 7
```

## Content system

The page will include a hero with “Leave sharper than you arrived,” a concise about section, a service menu grounded in the supplied list, three verbatim review highlights, business hours, the Bellaire Boulevard location, tap-to-call contact, Google Maps directions, Instagram, and a persistent “Book your chair” CTA. No unsupported awards, history, prices, or testimonials will be added. The available Booksy prices are shown only for the explicitly listed services and are labeled as booking information rather than generalized pricing.

## Style Decisions

- Use the supplied cinematic hero image as the primary visual anchor.
- Keep all factual business information grounded in the supplied source material.
- Use a dark charcoal / brass / ivory palette with serif display type and sans-serif utility copy.
- Avoid generic pill-heavy SaaS patterns, purple gradients, and excessive rounded cards.
