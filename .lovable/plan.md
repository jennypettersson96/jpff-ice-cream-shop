

## Problem

`HashRouter` uses the URL hash (`#`) for routing (e.g., `/#/`). When you click `<a href="#about">`, the browser interprets it as a route change to `/#/about` instead of scrolling to the element with `id="about"`.

## Solution

Replace the anchor `<a href="#about">` links with `onClick` handlers that use `document.getElementById().scrollIntoView()` for smooth scrolling.

### Changes — `src/pages/Index.tsx`

1. Replace all three nav `<a href="#...">` links with `<button>` or `<a>` elements that call a scroll function on click:
   ```tsx
   const scrollTo = (id: string) => {
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   };
   ```
2. Update nav links:
   ```tsx
   <button onClick={() => scrollTo("about")}>About Us</button>
   <button onClick={() => scrollTo("products")}>Our Ice Creams</button>
   <button onClick={() => scrollTo("contact")}>Contact</button>
   ```
3. Style buttons to match existing link styles.

This is a single-file change affecting ~10 lines.

