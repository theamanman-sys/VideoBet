const Translator = {
  _gtCache: {},

  async googleTranslate(text, target = 'am') {
    if (!text || text.length > 3000) return text;
    const key = `${target}:${text.slice(0, 200)}`;
    if (this._gtCache[key]) return this._gtCache[key];
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = await res.json();
      const result = data?.[0]?.map(s => s[0]).filter(Boolean).join('') || text;
      this._gtCache[key] = result;
      return result;
    } catch { return text; }
  },

  async fetchFromTMDB(item) {
    if (!item?.tmdb_id) return null;
    const data = await API.fetchTranslations(item.tmdb_id, item.type === 'tv' ? 'tv' : 'movie');
    if (!data?.translations) return null;
    const am = data.translations.find(t => t.iso_639_1 === 'am');
    if (!am?.data) return null;
    return {
      title: am.data.title || am.data.name || null,
      overview: am.data.overview || null,
      tagline: am.data.tagline || null,
    };
  },

  async translateItem(item) {
    if (!item?.tmdb_id) return;
    const tmdb = await this.fetchFromTMDB(item);
    if (tmdb) {
      if (tmdb.title) item._amTitle = tmdb.title;
      if (tmdb.overview) item._amOverview = tmdb.overview;
      if (tmdb.tagline) item._amTagline = tmdb.tagline;
    }
    if (i18n.current === 'am') {
      const title = item._tmdbTitle || item.title || '';
      const overview = item._overview || item.overview || '';
      const tagline = item._tagline || '';
      if (!item._amTitle && title) item._amTitle = await this.googleTranslate(title);
      if (!item._amOverview && overview) item._amOverview = await this.googleTranslate(overview);
      if (!item._amTagline && tagline) item._amTagline = await this.googleTranslate(tagline);
    }
  },

  async translateEpisodes(item, episodes) {
    if (!episodes?.length || i18n.current !== 'am') return;
    await Promise.all(episodes.map(async (ep) => {
      if (!ep._amName && ep.name) ep._amName = await this.googleTranslate(ep.name);
      if (ep.overview && !ep._amOverview) ep._amOverview = await this.googleTranslate(ep.overview);
    }));
  }
};

window.Translator = Translator;
