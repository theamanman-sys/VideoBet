const LANG_KEY = 'videobet_lang';

const i18n = {
  current: localStorage.getItem(LANG_KEY) || 'en',

  strings: {
    en: {
      'Home': 'Home',
      'Trending': 'Trending',
      'Movies': 'Movies',
      'TV Shows': 'TV Shows',
      'VideoBet': 'VideoBet',
      'Trending Movies': 'Trending Movies',
      'Trending TV Shows': 'Trending TV Shows',
      'Now Playing in Theaters': 'Now Playing in Theaters',
      'Latest Movies': 'Latest Movies',
      'Featured': 'Featured',
      'Popular TV Shows': 'Popular TV Shows',
      'Ethiopian Movies': 'Ethiopian Movies',
      'Search': 'Search',
      'Play Now': 'Play Now',
      'More Info': 'More Info',
      'Close': 'Close',
      'Loading...': 'Loading...',
      'Loading the latest content for you...': 'Loading the latest content for you...',
      'Trailer': 'Trailer',
      'Rating': 'Rating',
      'Year': 'Year',
      'Status': 'Status',
      'Language': 'Language',
      'Runtime': 'Runtime',
      'Director': 'Director',
      'Popularity': 'Popularity',
      'Budget': 'Budget',
      'Revenue': 'Revenue',
      'Content Rating': 'Content Rating',
      'Seasons': 'Seasons',
      'Episodes': 'Episodes',
      'Network': 'Network',
      'Created By': 'Created By',
      'Production': 'Production',
      'Cast': 'Cast',
      'Overview': 'Overview',
      'Similar Titles': 'Similar Titles',
      'Playback Progress': 'Playback Progress',
      'Season': 'Season',
      'Episode': 'Episode',
      'No episodes available': 'No episodes available',
      'Loading episodes...': 'Loading episodes...',
      'All': 'All',
      'People': 'People',
      'Type to search movies & TV shows...': 'Type to search movies & TV shows...',
      'Type to search movies, TV shows & people...': 'Type to search movies, TV shows & people...',
      'No results found': 'No results found',
      'Try a different search term for': 'Try a different search term for',
      'Search failed': 'Search failed',
      'Could not load data.': 'Could not load data.',
      'Check your connection.': 'Check your connection.',
      'See all results →': 'See all results →',
      'Filmography': 'Filmography',
      'No biography available.': 'No biography available.',
      'VideoBet loaded': 'VideoBet loaded',
      'Failed to load content.': 'Failed to load content.',
      'No media selected': 'No media selected',
      'Retry': 'Retry',
      'View Full Channel →': 'View Full Channel →',
      'Browse': 'Browse',
      'New Releases': 'New Releases',
      'About': 'About',
      'Privacy Policy': 'Privacy Policy',
      'Terms of Service': 'Terms of Service',
      'DMCA': 'DMCA',
      'Contact': 'Contact',
      'All rights reserved.': 'All rights reserved.',
      'Video Bet — Discover Cinema': 'Video Bet — Discover Cinema',
      'Film conversations, podcast episodes, and cinema discussions': 'Film conversations, podcast episodes, and cinema discussions',
      'Person': 'Person',
      'Movie': 'Movie',
      'TV': 'TV',
      'General': 'General',
      'h': 'h',
      'm': 'm',
      'Top 10 Movies of 2024': 'Top 10 Movies of 2024',
      'Our hosts dive into an in-depth discussion about the best films of the year.': 'Our hosts dive into an in-depth discussion about the best films of the year.',
      'Abraham Gezahagne Interview': 'Abraham Gezahagne Interview',
      'Leul Shewaferaw Interview': 'Leul Shewaferaw Interview',
      'To Sleep with Anger': 'To Sleep with Anger',
      'A discussion on Charles Burnett\'s classic — one of Leul Shewaferaw\'s top 5 picks.': 'A discussion on Charles Burnett\'s classic — one of Leul Shewaferaw\'s top 5 picks.',
      'A conversation with film expert Abraham Gezahagne about his work and top 5 films.': 'A conversation with film expert Abraham Gezahagne about his work and top 5 films.',
      'Film producer Leul Shewaferaw talks about production, his experience, and top 5 movies.': 'Film producer Leul Shewaferaw talks about production, his experience, and top 5 movies.',
      'Watch': 'Watch',
      'in high definition.': 'in high definition.',
      'Episode': 'Episode',
      'Autoplay Next Episode': 'Autoplay Next Episode',
      'Next Episode': 'Next Episode',
      'No more episodes': 'No more episodes',
    },

    am: {
      'Home': 'መነሻ',
      'Trending': 'ተወዳጅ',
      'Movies': 'ፊልሞች',
      'TV Shows': 'የቲቪ ፕሮግራሞች',
      'VideoBet': 'ቪዲዮቤት',
      'Trending Movies': 'ተወዳጅ ፊልሞች',
      'Trending TV Shows': 'ተወዳጅ የቲቪ ፕሮግራሞች',
      'Now Playing in Theaters': 'በሲኒማ ቤቶች እየታየ ያለ',
      'Latest Movies': 'አዳዲስ ፊልሞች',
      'Featured': 'ተለይተው የቀረቡ',
      'Popular TV Shows': 'ታዋቂ የቲቪ ፕሮግራሞች',
      'Ethiopian Movies': 'የኢትዮጵያ ፊልሞች',
      'Search': 'ፈልግ',
      'Play Now': 'አሁን አጫውት',
      'More Info': 'ተጨማሪ መረጃ',
      'Close': 'ዝጋ',
      'Loading...': 'በማስመጣት ላይ...',
      'Loading the latest content for you...': 'አዳዲስ ይዘቶችን እያመጣልን ነው...',
      'Trailer': 'የማስታወቂያ ቪዲዮ',
      'Rating': 'ደረጃ',
      'Year': 'ዓመት',
      'Status': 'ሁኔታ',
      'Language': 'ቋንቋ',
      'Runtime': 'ርዝመት',
      'Director': 'ዳይሬክተር',
      'Popularity': 'ተወዳጅነት',
      'Budget': 'በጀት',
      'Revenue': 'ገቢ',
      'Content Rating': 'የይዘት ደረጃ',
      'Seasons': 'ምዕራፎች',
      'Episodes': 'ክፍሎች',
      'Network': 'አውታር',
      'Created By': 'ፈጣሪ',
      'Production': 'አዘጋጅ',
      'Cast': 'ተዋንያን',
      'Overview': 'አጠቃላይ እይታ',
      'Similar Titles': 'ተመሳሳይ ፊልሞች',
      'Playback Progress': 'የመጫወቻ ሂደት',
      'Season': 'ምዕራፍ',
      'Episode': 'ክፍል',
      'No episodes available': 'ምንም ክፍሎች የሉም',
      'Loading episodes...': 'ክፍሎችን በማስመጣት ላይ...',
      'All': 'ሁሉም',
      'People': 'ሰዎች',
      'Type to search movies & TV shows...': 'ፊልሞች እና የቲቪ ፕሮግራሞችን ለመፈለግ ይፃፉ...',
      'Type to search movies, TV shows & people...': 'ፊልሞች፣ የቲቪ ፕሮግራሞች እና ሰዎችን ለመፈለግ ይፃፉ...',
      'No results found': 'ምንም ውጤት አልተገኘም',
      'Try a different search term for': 'ለዚህ የተለየ የፍለጋ ቃል ይሞክሩ',
      'Search failed': 'ፍለጋ አልተሳካም',
      'Could not load data.': 'ውሂብ መጫን አልተቻለም።',
      'Check your connection.': 'ግንኙነትዎን ያረጋግጡ።',
      'See all results →': 'ሁሉንም ውጤቶች ይመልከቱ →',
      'Filmography': 'የፊልም ስራዎች',
      'No biography available.': 'የህይወት ታሪክ የለም።',
      'VideoBet loaded': 'ቪዲዮቤት ተጭኗል',
      'Failed to load content.': 'ይዘት መጫን አልተሳካም።',
      'No media selected': 'ምንም ሚዲያ አልተመረጠም',
      'Retry': 'ደግሞ ሞክር',
      'View Full Channel →': 'ሙሉ ቻናል ይመልከቱ →',
      'Browse': 'ማሰስ',
      'New Releases': 'አዳዲስ ልቀቶች',
      'About': 'ስለኛ',
      'Privacy Policy': 'የግላዊነት ፖሊሲ',
      'Terms of Service': 'የአገልግሎት ውሎች',
      'DMCA': 'DMCA',
      'Contact': 'አግኙን',
      'All rights reserved.': 'መብቱ በህግ የተጠበቀ ነው።',
      'Video Bet — Discover Cinema': 'ቪዲዮቤት — ሲኒማን ያግኙ',
      'Film conversations, podcast episodes, and cinema discussions': 'የፊልም ውይይቶች፣ የፖድካስት ክፍሎች እና የሲኒማ ውይይቶች',
      'Person': 'ሰው',
      'Movie': 'ፊልም',
      'TV': 'ቲቪ',
      'General': 'አጠቃላይ',
      'h': 'ሰ',
      'm': 'ደ',
      'Top 10 Movies of 2024': 'የ2024 ምርጥ 10 ፊልሞች',
      'Our hosts dive into an in-depth discussion about the best films of the year.': 'አቅራቢዎቻችን ስለ ዓመቱ ምርጥ ፊልሞች ጥልቅ ውይይት ያደርጋሉ።',
      'Abraham Gezahagne Interview': 'የአብረሃም ገዛኸኝ ቃለ መጠይቅ',
      'Leul Shewaferaw Interview': 'የልዑል ሸዋፈራው ቃለ መጠይቅ',
      'To Sleep with Anger': 'ቶ ስሊፕ ዊዝ አንጀር',
      'A discussion on Charles Burnett\'s classic — one of Leul Shewaferaw\'s top 5 picks.': 'ስለ ቻርልስ በርኔት ክላሲክ ፊልም ውይይት — ከልዑል ሸዋፈራው ምርጥ 5 ምርጫዎች አንዱ።',
      'A conversation with film expert Abraham Gezahagne about his work and top 5 films.': 'ከፊልም ኤክስፐርት አብረሃም ገዛኸኝ ጋር ስለ ስራው እና ምርጥ 5 ፊልሞች ውይይት።',
      'Film producer Leul Shewaferaw talks about production, his experience, and top 5 movies.': 'የፊልም ፕሮዲዩሰር ልዑል ሸዋፈራው ስለ ፕሮዳክሽን፣ ልምዱ እና ምርጥ 5 ፊልሞች ያወራል።',
      'Watch': 'ተመልከት',
      'in high definition.': 'ከፍተኛ ጥራት።',
      'Autoplay Next Episode': 'ቀጣይ ክፍል በራስ-ሰር አጫውት',
      'Next Episode': 'ቀጣይ ክፍል',
      'No more episodes': 'ሌላ ክፍል የለም',
    }
  },

  t(key) {
    const lang = this.strings[this.current];
    return lang && lang[key] !== undefined ? lang[key] : key;
  },

  setLang(lang) {
    if (!this.strings[lang]) return;
    this.current = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    this.applyToDOM();
  },

  applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      el.title = this.t(key);
    });
  },

  init() {
    document.documentElement.lang = this.current;
    this.applyToDOM();
  }
};

function __(key) {
  return i18n.t(key);
}

window.__ = __;
window.i18n = i18n;
