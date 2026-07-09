# Blog Writing Rules

This is the brand-agnostic writing system behind every blog post this skill produces. It comes
from a custom-instructions prompt that already worked well across brands — this file keeps that
same logic, just packaged so it can be read and applied consistently inside a skill rather than
re-pasted as a system prompt per brand chat.

Read this in full before writing any blog post. Read `references/claims-policy.md` separately —
it's short, strict, and matters enough to get its own file so it never gets skimmed.

**Purpose of every post:** rank higher on search engines through genuinely SEO-optimized content
— not just optimized in a technical sense, but actually useful enough to earn the ranking. Every
guideline below serves that one goal: helpfulness and SEO performance are not in tension here, they
reinforce each other.

---

## At a glance — what every post must deliver

- **Length** — adjustable per request (see Length section below; default ~800–1,500 words if
  nothing more specific is given)
- **Semantic keywords** — natural variation of the primary keyword and related terms throughout;
  never stuffed, never repeated mechanically
- **Internal & external links** — internal links from the brand's real sitemap, woven directly into
  the body copy (not listed separately); external links only when citing a real source from the
  knowledgebase or one the user explicitly provides (see Internal & external linking below)
- **Readability** — written at roughly a Grade 6–8 reading level, regardless of how technical the
  industry is (see Readability section below)
- **Images & alt text** — the post should note where an image would naturally help, even though
  this skill doesn't generate or place actual images (see Images & Alt Text below)

---

## Voice

Write like a knowledgeable human who understands the business, the audience, and the problem being
solved — not like a content mill. Match the tone documented in the brand's knowledgebase (message
block library, tone-of-voice notes, past content) rather than defaulting to a generic "helpful
blog" voice.

**Avoid:**
- Overly generic introductions ("In today's fast-paced world...")
- Repeating the same point in different words to pad length
- Corporate buzzwords with no substance
- AI-sounding stock phrases — "game-changer," "unlock your potential," "seamless experience" — unless
  the brand's own documented voice specifically uses them
- Overpromising results
- Unsupported statistics
- Excessive em dashes
- Keyword stuffing
- Long, dense paragraphs

**Prefer:**
- Clear explanations and specific examples
- Brand-relevant details pulled from the knowledgebase
- Practical guidance the reader can actually act on
- Simple, confident language
- Smooth transitions between sections
- Conversion-focused but non-pushy CTAs

---

## SEO logic

- Match the likely **search intent** behind the topic — informational, commercial, local,
  navigational, or transactional. The knowledgebase's buyer psychology profiles and cluster
  documents usually already describe what stage of awareness and intent a topic's target persona
  is in — use that instead of guessing fresh.
- Use the primary keyword naturally in the title, introduction, at least one heading, and
  conclusion — never force it in if it reads awkwardly.
- **Semantic keyword variation:** weave secondary keywords, related terms, and natural phrasing
  variations of the primary keyword throughout the post. Say the same concept multiple ways across
  the article rather than repeating the exact same phrase — this is what search engines reward and
  what keeps the post from reading like it's stuffed. Never repeat the primary keyword verbatim
  more than a handful of times in a 900–1,300 word post; lean on synonyms and related phrasing for
  every other mention.
- Cover the related subtopics a reader would actually expect on this topic (semantic SEO) — this
  is what separates a useful article from thin content.
- Structure for scannability: short paragraphs, clear H2/H3 hierarchy, lists and comparisons only
  where they genuinely improve clarity (not by default).
- Helpfulness beats keyword density every time — if a choice has to be made, choose useful.

---

## Structure

Every blog post produces these pieces, but they don't all end up in the same place — some are
metadata for SEO plugin fields, some are the actual WordPress-paste-ready content, and one is
QA-only for the agency's own reference. Keep these three buckets straight:

**Metadata (goes in WordPress/Yoast/RankMath fields, NOT pasted into the post body):**
1. SEO Title
2. Meta Description
3. URL Slug
4. Primary Keyword
5. Secondary Keywords
6. Search Intent

**The paste-ready post itself (this is what the "Copy post" button copies, in this exact order):**
7. Blog Post body (H1 → H2s → H3s as needed, with internal and external links already woven in as
   real `<a>` tags — see Internal & external linking below)
8. Suggested CTA, formatted as a natural closing section (e.g. under a "Next Steps" or similarly
   natural H2 — not a bolted-on "CTA:" label)
9. Optional FAQ Section (3–5 FAQs, only when genuinely useful for the topic), formatted under an
   "FAQ" H2

**QA reference only (visible in the HTML output for the agency's own checking, never pasted):**
10. Internal Links Used — a list of which sitemap URLs were placed in the body and why, so it's
    easy to double-check the right pages were linked without re-reading the whole article
11. Notes / Assumptions (only when needed — see claims-policy.md)

The whole point of this split: items 7–9 should be exactly what gets pasted into WordPress's
content editor or any WYSIWYG box — nothing more, nothing less. No metadata, no QA notes, no
"here are the internal links" list cluttering the actual post.

**Starting point vs. final structure:** the Content Plan gives a rough H2 skeleton (usually 4
generic H2s) for each blog post. Treat that skeleton as a first draft of the shape, not a
requirement to fill in word-for-word. If the topic, search intent, or the knowledgebase's depth on
the subject calls for a different structure — more H2s, fewer, reordered, or H3s nested under a
section — restructure freely. The goal is the best possible article on this topic for this brand,
not a literal fill-in-the-blanks of the content plan's outline.

**Heading rules:**
- Exactly one H1 (the blog title, naturally — not a duplicate of the SEO title field if they
  differ slightly for readability)
- H2s for main sections
- H3s when a section has genuine sub-structure
- Bullet points only when they improve clarity over prose

---

## Length

Length is adjustable per request — don't lock onto one fixed count by default. If the user (or the
Content Plan entry) specifies a length or range, follow it. If nothing is specified, default to
the standard range below.

| Request | Word count |
|---|---|
| Short | ~600–800 words |
| Standard (default) | ~800–1,500 words |
| Long-form / in-depth | ~1,500–2,200 words |

Quality always outranks hitting an exact word count — don't pad to reach a number, and don't cut a
genuinely useful subtopic just to stay under one. If the user gives a specific custom range (e.g.
"1,000–1,200 words"), treat that as the target instead of the table above.

---

## CTA logic

Match the CTA to the reader's stage of awareness and the topic's commercial intent — pull the
brand's actual offers/CTAs from the knowledgebase rather than inventing a generic one.

| Topic type | CTA style |
|---|---|
| Educational / informational | Soft — "Learn more," "Explore our services," "Contact our team with questions" |
| Commercial | Stronger — "Schedule a consultation," "Request a quote," "Book an appointment," "Get started" |
| Local service business | Direct contact — call, WhatsApp, visit, book, depending on what the brand actually offers |
| Real estate / high-ticket | Inquiry-focused — tour, consultation, speak with a representative |
| SaaS / app-based | Sign-up, demo, download, or first-use action |

The CTA must connect naturally to the blog topic — never force a hard sales CTA onto a purely
educational piece just because it's available.

---

## Internal & external linking

Internal and external links both help SEO and credibility — but they work differently in this
skill, and both must be **woven directly into the body copy as real `<a>` links**, not listed
separately after the article. The post needs to be paste-ready: a list of "suggested links" below
the article doesn't help once it's pasted into WordPress, since that list won't get copied with it
(see Structure section above).

**Internal links:**
- Use the brand's sitemap/page list (from the Project knowledgebase or an uploaded CSV — see
  SKILL.md Step 1 for where to find it) to find real, exact URLs wherever a page topically fits the
  blog content — service pages, contact pages, project/case pages, location pages, FAQ pages, or
  related blog posts already published.
- Place the link inline, on a natural anchor phrase already in the sentence — never bolt on an
  awkward "click here" or a sentence that exists only to host the link.
- Always use the actual URL from the sitemap/CSV when there's a genuine topical match — don't
  describe the page type instead if a real match exists.
- If no page in the sitemap clearly fits a natural linking opportunity, don't force one — note the
  gap in Notes / Assumptions instead of inventing a placeholder URL.
- 2–4 internal links per post is typical; don't over-link just to hit a number.
- After placing internal links in the body, also list which URLs were used and why in a separate
  QA-reference note (see Structure section) — this is for the agency's own double-checking, not
  part of the copy-paste payload.

**External links:**
- Only add an external link when there's a real source to cite — something already referenced in
  the brand's knowledgebase, or a source the user explicitly provides for this post. Don't go
  searching the web for sources to cite and don't invent one to look more credible.
- When a real external source is available and citing it would genuinely help (a stat, a
  regulation, an authoritative reference), link out to it the same way as an internal link — inline,
  on a natural anchor phrase.
- If there's no real source to cite, simply don't include an external link for that post. This is
  the common case — most posts won't have one, and that's fine.

---

## Local SEO

If the brand serves a specific city, region, or neighborhood (per the knowledgebase), weave that in
naturally — mention the service area, address local needs, reference nearby communities only when
actually documented. Don't repeat city names mechanically throughout the post; a few well-placed
mentions read better than keyword-stuffed geography.

---

## Readability

Target roughly a **Grade 6–8 reading level** for every post, regardless of industry — yes, even
for technical or B2B topics. This means:

- Shorter sentences over long, clause-heavy ones
- Common words over fancier synonyms when both say the same thing ("use" instead of "utilize,"
  "help" instead of "facilitate")
- One idea per sentence; one main point per paragraph
- Define a technical term in plain language the first time it's used, even in a B2B post, rather
  than assuming the reader already knows the jargon
- Active voice over passive voice in most sentences

This isn't about dumbing down the content — a Grade 6–8 reading level can still cover sophisticated
topics. It's about removing unnecessary friction between the reader and the information, which
also tends to perform better in search (easier-to-read content gets read further and shared more).

---

## Images & Alt Text

This skill doesn't generate or place actual images. But since images and alt text improve both SEO
and accessibility, add a brief one-line note at natural break points in the post (typically after
an H2 that introduces a concrete, visual concept) suggesting where an image would help and what its
alt text should communicate. Keep this light — one line, not a full image brief:

> *[Image suggestion: a photo showing the bill-payment app's home screen — alt text: "PayWise app
> home screen showing upcoming bill due dates"]*

These notes are for the agency's own production reference — they should NOT be inside the
copy-paste payload that gets pasted into WordPress (they'd show up as visible text in the published
post, which isn't the point). Place them as part of the visible HTML output but outside the
copyable body — see SKILL.md Step 5 for exactly where these fit in the output structure.

---

## Industry-specific care

Adapt tone and caution level to the industry, using whatever the knowledgebase indicates the brand's
industry is:

- **Medical, wellness, legal, financial, real estate:** extra care with claims (see
  claims-policy.md), avoid guarantees, avoid advice that should come from a licensed professional,
  use educational framing, encourage the reader to consult the business or a qualified professional.
- **Technical / B2B:** explain concepts clearly, focus on business impact and practical use cases,
  avoid unnecessary jargon unless the audience profile in the knowledgebase indicates they expect it.
- **Lifestyle, beauty, hospitality, consumer brands:** warmer, more visual, benefit-driven tone —
  focus on experience, confidence, convenience, transformation — while staying genuinely useful and
  search-focused, not just promotional.

---

## Final check before delivering each post

Before moving to the next blog post in the batch, confirm:

- The article actually answers the topic, not a generic adjacent topic
- The introduction is specific to this topic, not a reusable generic opener
- Structure is easy to scan
- The brand is represented accurately per the knowledgebase
- SEO title and meta description are clear and within length guidance
- The content sounds natural and human, not templated
- The CTA makes sense for this specific topic and brand
- No unsupported facts were invented (cross-check against claims-policy.md)
- The article would be genuinely useful to publish on the brand's site as-is or with light editing
