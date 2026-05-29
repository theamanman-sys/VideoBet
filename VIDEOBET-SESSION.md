# VideoBet — Session Notes

## Project Overview

**videobet.co** — A streaming and film culture website with TMDB/VidAPI movie/TV playback and a dedicated YouTube channel section.

- Dark theme, glass-morphism UI, vanilla JS/CSS/HTML, SPA-style
- Based in Ethiopia — mix of English and Amharic content
- Focus on African cinema and film discourse

---

## YouTube Channel

- **Handle**: `@videobet_et`
- **Channel ID**: `UCe-dwO_r_EppHk13L_CZX_w`
- **Uploads Playlist ID**: `UUe-dwO_r_EppHk13L_CZX_w`
- **16 videos** — podcast episodes, film discussions, shorts, trailers

### Extracted Media URLs

**Channel Banner (hero background)**:
```
https://yt3.googleusercontent.com/cHmJhPCn_XkezOH__q10Z9OU6TirEBM0nWumAhXIQuYVLhWZqSPQq-EDWsJdayINPlJVw7mS4OY=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj
```

**Channel Avatar**:
```
https://yt3.googleusercontent.com/ee_P4B8Suz5o19hawcGI5mWwTiAciB_oOoAiaJ4vyuNkMG2gY1orXDrMOLnwfG12V0y4aKwXiw=s160-c-k-c0x00ffffff-no-rj
```

---

## File Structure

```
/
├── index.html          # Main SPA — hero, carousels, search, modals, player
├── youtube.html        # Dedicated YouTube channel page
├── css/
│   └── style.css       # All styles (shared)
├── js/
│   ├── app.js          # Core logic — state, rendering, API calls, YouTube
│   ├── youtube.js      # YouTube page logic — grid, filters, modals
│   └── api.js          # TMDB & VidAPI integration
```

---

## Key Features Implemented

- Hero carousel with timer/dots/parallax
- Movie/TV carousels (trending, now playing, latest, popular)
- Search overlay with TMDB movie/TV search
- Detail modal with cast, facts, trailer, TV season/episode selector
- Player page with TV season/episode sidebar controls
- YouTube section on index.html (4 video cards)
- Dedicated youtube.html page with channel banner hero, filterable video grid, detail modal, embedded player
- Race condition fix for TV episode loading (per-request ID counter)
- Modal scroll fix, episode detail enrichment, TV selector timing fix

---

## UI Changes (Final)

- **Nav link**: "YouTube" → "VideoBet"
- **Section heading**: "Videobet YouTube" → "VideoBet"
- **Footer link**: "YouTube Channel" → "VideoBet"
- **Subscribe / Visit Channel buttons**: Removed from both index.html and youtube.html
- **youtube.html hero**: Uses actual channel banner as background with dark gradient overlay + channel avatar
