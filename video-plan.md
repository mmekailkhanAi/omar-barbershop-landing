# Omar Barbershop — Three-Video Direction

## Recommendation

Three videos are enough and are the strongest number for this landing page. Each video should have a different job: the hero establishes the premium atmosphere, the services video demonstrates craft and material detail, and the supplied transformation video provides authentic proof of the barber’s work. A fourth or fifth video would likely dilute the page rhythm, increase loading cost, and make the experience feel more like a social feed than a considered barbershop brand.

## Video 1 — Hero atmosphere

Use the fresh hero prompt already provided. It should be a new original cinematic scene that matches the website’s charcoal, walnut, antique-brass, and warm-ivory mood without copying the reference image’s people, faces, identity, pose, or exact composition.

Recommended treatment: 8–10 seconds, 16:9 landscape, slow cinematic dolly, muted autoplay, no generated text, and a dark text-safe area on the left. The hero image should remain the poster frame and mobile fallback until the video is available.

## Video 2 — Services / precision craft

Use the following Veo prompt:

> Use the Omar Barbershop hero image only as a mood and color reference. Do not preserve or copy the people, faces, identity, pose, composition, or exact objects from the reference. Create an entirely new original cinematic scene for the Services section of a premium Houston barbershop website.
>
> Create an 8–10 second, 16:9, high-resolution editorial grooming video showing the quiet precision behind a finished cut. Begin with an original macro close-up of a dark walnut workstation: polished scissors, a black comb, straight razor, soft shaving brush, folded hot towel, antique-brass tray, and understated grooming bottles without readable labels. The camera makes a slow lateral slider move across the station while warm light travels over the metal edges and wood grain.
>
> Halfway through the shot, a professional barber’s gloved hand enters naturally, selects the comb and straight razor, and prepares them beside the towel with one controlled movement. Then transition focus from the tools to a softly blurred barber chair and mirror in the background, suggesting the appointment about to begin. Keep the visual action minimal, tactile, and believable. The craft should feel deliberate rather than theatrical.
>
> Use deep charcoal shadows, dark walnut, muted antique brass, warm tungsten practicals, soft daylight, realistic metal reflections, shallow depth of field, subtle 35mm film grain, and premium editorial color grading. Keep the composition slightly weighted to the right, leaving calmer negative space on the left for service copy. The camera should feel expensive because of its physical movement, lighting, material detail, and pacing.
>
> End with the same workstation arrangement and a similar focus distance as the opening frame so the video can loop smoothly. No dialogue and no audio-dependent action; design it for muted website autoplay.
>
> Avoid copied identities, copied composition, text, captions, subtitles, logos, watermarks, readable product labels, extra people, distorted hands, extra fingers, warped tools, duplicated objects, flickering lights, fast edits, neon colors, purple gradients, dramatic smoke, artificial plastic surfaces, and generic stock-video styling.

Recommended treatment: place this as a 4:5 or 3:4 visual panel beside the service list on desktop, with a cropped center-safe version on mobile. It should not autoplay with sound. Use `preload="metadata"`, `muted`, `playsInline`, `loop`, and `poster`.

## Video 3 — Interior tour / atmosphere

Use the following Veo prompt:

> Use the Omar Barbershop hero image only as a mood, material, and color reference. Do not preserve or copy the people, faces, identity, pose, exact room layout, or exact camera composition from the reference. Create an entirely new original interior scene for the Our Approach or Find Us section of a premium Houston barbershop website.
>
> Create an 8–12 second, 16:9, high-resolution cinematic interior-tour video inside a refined independent neighborhood barbershop. Start just inside the front entrance during early evening. The camera glides slowly forward at eye level through a warm, atmospheric space with deep charcoal walls, dark walnut cabinetry, antique-brass details, black leather barber chairs, softly glowing mirror lights, folded towels, and carefully arranged tools.
>
> Move past one empty chair and a walnut station, then reveal a second station in the distance. Allow a large mirror to catch subtle, realistic reflections while soft Houston street light appears through the front window. The camera should finish on a welcoming barber chair and station, creating the feeling of entering a place where every detail has been considered. Keep the street view abstract and softly blurred; the shop remains the subject.
>
> Use smooth gimbal movement, realistic architectural perspective, restrained lens distortion, gentle focus transitions, soft volumetric light, rich charcoal shadows, warm walnut tones, muted antique brass, subtle clay warmth, natural reflections, and understated 35mm film grain. The pace should be calm, intimate, premium, and welcoming — not like a real-estate tour and not like a fast social-media montage.
>
> End close to the opening angle and exposure so the video can loop naturally. No dialogue, no audio-dependent action, no text, no logos, no watermarks, no readable signage, no copied identities, no crowds, no warped architecture, no flickering lamps, no fast camera movement, no whip pans, no abrupt cuts, no neon lighting, and no sterile empty salon.

Recommended treatment: use this as a wide atmospheric band in the Find Us section, ideally above the address and hours. On mobile, display it as a 16:9 or 4:5 cropped panel before the location details.

## Supplied transformation video — authentic proof

The supplied clip is approximately 28 seconds, vertical 9:16, and follows a clear before/process/after structure. It includes a strong precision-detailing moment around 0:06–0:10, a finished-cut reveal around 0:20, and a client reaction near 0:27. It is the most authentic asset of the three because it shows real work rather than an atmospheric reconstruction.

Recommended treatment: use it in a dedicated “The work speaks” or “Before / after” section between the services and reviews. Keep it in a portrait frame rather than stretching it into a desktop background. On desktop, place it in a tall editorial card beside a short copy block; on mobile, let it become a full-width vertical card with a clear play control. Because the current clip contains a burned-in “Crazy Transformation” title and music, do not overlay another headline on top of the first frame. Keep it muted by default, with an explicit play/unmute control if sound is retained.

## Website placement map

| Video | Section | Desktop treatment | Mobile treatment | Role |
|---|---|---|---|---|
| Hero atmosphere | Hero | Full-bleed 16:9 background with dark left text-safe overlay | Full-bleed crop with image poster fallback | Establish mood and premium first impression |
| Services precision | Services | 4:5 or 3:4 panel beside service rows | Full-width 4:5 panel below intro copy | Show craft, tools, and tactile detail |
| Transformation clip | Work / proof | Portrait editorial card beside before/after copy | Full-width vertical card with play control | Provide authentic proof and personality |
| Interior tour | Find us / visit | Wide atmospheric band above location details | Cropped media panel above address | Show the place and create arrival anticipation |

## Implementation behavior

Every video should use a poster image, `muted`, `playsInline`, `loop`, and `preload="metadata"`. Use `IntersectionObserver` to begin playback only when a video enters the viewport, and pause it when it leaves. This prevents three videos from competing for bandwidth at page load.

Respect `prefers-reduced-motion: reduce`: show the poster image instead of autoplaying motion. Provide a visible play button for the supplied transformation clip. Preserve the hero’s current still image as the first-load and mobile fallback so the page stays fast and visually complete even when video loading is delayed.

For the supplied vertical clip, remove or visually isolate the burned-in title by placing the clip inside a framed media card with the website’s own label outside the video. Do not stretch or distort the aspect ratio. If an edited clean version becomes available, use it as the preferred source while retaining the original as a fallback.

## Shared Veo settings

| Setting | Recommendation |
|---|---|
| Resolution | 4K or highest available |
| Motion | Slow, controlled, physically realistic |
| Audio | None or subtle ambience; website remains muted by default |
| Text | No generated text; add website copy separately |
| Color | Charcoal, dark walnut, antique brass, warm ivory, muted clay |
| Finish | Premium editorial grooming campaign, subtle 35mm grain |
| Looping | Opening and ending compositions should visually match |
| Identity | Generate new people and scenes; match only the brand vibe |
