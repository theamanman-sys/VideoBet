/* ── Video Data (from YouTube RSS feed) ── */
const youtubeVideos = [
  {
    id: 'ulCGyn4fcKI',
    title: 'Videobet Podcast Episode 4: The Development of African Cinema',
    description: 'Films Discussed: Cairo Station (1958), Black Girl (1966), Yeelen (1987), Teza (2008), Atlantics (2019). A deep dive into the evolution of African cinema.',
    fullDescription: 'Films Discussed:\n-Cairo Station (1958) Dir. Youssef Chahine\n-Black Girl (1966) Dir. Ousmane Sembène\n-Yeelen (1987) Dir. Souleymane Cissé\n-Teza (2008) Dir. Haile Gerima\n-Atlantics (2019) Dir. Mati Diop\n\nCredits\n-Director: Beza Hailu Lemma\n-Producers: Bonny Tesfaye and Heromen Sintayehu\n-Camera operators: Eshetu Baye, Eyob Getachew and Endeguena Mulu\n-Sound: Hozam Kemera\n-Editor: Heromen Sintayehu',
    date: 'May 17, 2026',
    views: '2,343',
    category: 'podcast'
  },
  {
    id: 'JBAPC6Hvoso',
    title: 'Launching Soon',
    description: 'Where silence hums, frames linger, and Addis watches itself dream. A teaser for the upcoming Videobet production.',
    fullDescription: 'Where silence hums, frames linger, and Addis watches itself dream.\n\nProduction: Videobet\nDirected by: Beza Hailu Lemma\nWritten by: Teka Haile\nProduced by: Bonny Tesfaye, Beza Hailu Lemma, Bandamlak Yimenu\n\nCast: Leul, W/ro Assefa, Adrasha, Yetayal',
    date: 'Jan 20, 2026',
    views: '809',
    category: 'trailer'
  },
  {
    id: 'CNtJrircaNo',
    title: 'Videobet Shorts: Ep 05 — Close-Up by Abbas Kiarostami',
    description: 'Come see the film on Friday, November 7th. Abbas Kiarostami\'s \'Close-Up\' concludes our series The Roads of Abbas Kiarostami.',
    fullDescription: 'Come see the film they\'re talking about tomorrow, Friday November 7th.\nAbbas Kiarostami\'s \'Close-Up\' will conclude our series \'The Roads of Abbas Kiarostami\'.\nSee you there!\n\nProduction: Videobet\nProducers: Beza Hailu Lemma, Bonny Tesfaye, Bandamlak Yimenu\nDirectors: Yanet Assefa, Dave',
    date: 'Nov 6, 2025',
    views: '422',
    category: 'shorts'
  },
  {
    id: 'Lw8XueLnU88',
    title: 'Videobet Shorts: EP 4 — Taste of Cherry by Abbas Kiarostami',
    description: 'Abbas Kiarostami\'s \'Taste of Cherry\' continues our five film series by the Iranian master. Screening at Century Cinema.',
    fullDescription: 'Come see the film they\'re talking about on Friday, October 24 at Century Cinema at 6PM.\nAbbas Kiarostami\'s \'Taste of Cherry\' continues our five film series by the Iranian master.\nSee you there!',
    date: 'Oct 24, 2025',
    views: '253',
    category: 'shorts'
  },
  {
    id: 'iZeBBkAOOE8',
    title: 'Videobet Shorts: Ep 03 — Through the Olive Trees by Abbas Kiarostami',
    description: 'Abbas Kiarostami\'s \'Through the Olive Trees\' continues our five film series by the Iranian master.',
    fullDescription: 'Come see the film they\'re talking about on Friday, October 10 at Century Cinema at 6PM.\nAbbas Kiarostami\'s \'Through the Olive Trees\' continues our five film series by the Iranian master.\n\nProduction: Videobet\nProducer: Bonny Tesfaye, Beza Hailu Lemma, Bandamlak Yimenu\nDirector: Beza Hailu Lemma\nWriters: Freab Mesfin, Dave, Yanet Assefa',
    date: 'Oct 8, 2025',
    views: '233',
    category: 'shorts'
  },
  {
    id: 'hgfPsRhRz0g',
    title: 'Videobet Shorts: Ep 02 — And Life Goes On by Abbas Kiarostami',
    description: 'Kiarostami\'s \'And Life Goes On\' continues our five film series by the Iranian master. Screening at Century Cinema.',
    fullDescription: 'Come see the film they\'re talking about on Friday, September 12 at Century Cinema at 6PM.\nAbbas Kiarostami\'s \'And Life Goes On\' continues our five film series by the Iranian master.\n\nProduction: Videobet\nProducer: Bonny Tesfaye, Beza Hailu Lemma, Bandamlak Yimenu\nDirector: Beza Hailu Lemma',
    date: 'Sep 9, 2025',
    views: '286',
    category: 'shorts'
  },
  {
    id: 'XezOY3I2zlc',
    title: 'Videobet Shorts: Ep 01 — Where\'s the Friend\'s House? by Abbas Kiarostami',
    description: 'Kiarostami\'s \'Where is the Friend\'s House\' kicks off our five film series by the Iranian master. Screening at Century Cinema.',
    fullDescription: 'Come see the film they\'re talking about on Friday, August 29 at Century Cinema at 6PM.\nAbbas Kiarostami\'s \'Where is the Friend\'s House\' kicks off our five film series by the Iranian master.\n\nProduction: Videobet\nProducer: Bonny Tesfaye, Beza Hailu Lemma, Bandamlak Yimenu\nDirector: Beza Hailu Lemma',
    date: 'Aug 27, 2025',
    views: '526',
    category: 'shorts'
  },
  {
    id: 'j0N3v4V7Xr8',
    title: 'ቪዲዮቤት ክፍል 4 በቅርብ ቀን',
    description: 'Episode 4 coming soon. A new guest and their top 5 film picks — stay tuned.',
    fullDescription: 'ቪዲዮቤት ክፍል 4 የፊታችን እሁድ ይለቀቃል። በአዲሱ ክፍል አንድ ታዋቂ የሙዚቃ ባለሙያ እና የሚወዳቸውን 5 ፊልሞች ይዘንላችሁ እንቀርባለን።',
    date: 'Mar 17, 2025',
    views: '401',
    category: 'podcast'
  },
  {
    id: 'XL99u8Zqyp8',
    title: 'ከልዑል ሸዋፈራው ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ — Sexy Beast',
    description: 'A discussion on Jonathan Glazer\'s \'Sexy Beast\' — one of Leul Shewaferaw\'s top 5 picks.',
    fullDescription: 'የቪዲዮቤት አዘጋጅ የልዑል ሸዋፈራው ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ ስለሆነው የጆናታን ግሌዘር \'ሴክሲ ቢስት\' ያደረጉት ውይይት።',
    date: 'Mar 6, 2025',
    views: '348',
    category: 'discussion'
  },
  {
    id: 'ruxJkpcbJ98',
    title: 'ከልዑል ሸዋፈራው ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ — To Sleep With Anger',
    description: 'A discussion on Charles Burnett\'s \'To Sleep With Anger\' — one of Leul Shewaferaw\'s top 5 picks.',
    fullDescription: 'የቪዲዮቤት አዘጋጅ የልዑል ሸዋፈራው ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ ስለሆነው የቻርልስ በርኔት \'ቱ ስሊፕ ዊዝ አንገር\' ያደረጉት ውይይት።',
    date: 'Feb 24, 2025',
    views: '407',
    category: 'discussion'
  },
  {
    id: 'HvFyZsz77vk',
    title: 'ቪዲዮቤት ክፍል 3 — አምስት ፊልሞች ከልዑል ሸዋፈራው ጋር',
    description: 'Episode 3 — Film producer Leul Shewaferaw talks about production, his experience, and top 5 movies.',
    fullDescription: 'በክፍል ሶስት፣ የቪዲዮቤት ፖድካስት አዘጋጅ ከፊልም ፕሮዲውሰር ባለሙያ ልዑል ሸዋፈራው ጋር ስለ ፊልም ፕሮዳክሽን ዘርፍ፣ በዘርፉ ላይ ስላለው ልምድ እና ስለሚወዳቸው 5 ፊልሞች ውይይት ያደርጋሉ።\n\nአዘጋጆች: በአንዳምላክ ይመኑ, ቤዛ ሃይሉ ለማ\nፕሮዲውሰር: ቦኒ ተስፋዬ\nኤዲተር: ሱራፌል ታምሩ\n\nTimestamps:\n0:00 Intro\n7:20 Career and experience\n44:11 To Sleep with Anger\n55:07 Trainspotting\n1:02:04 Sexy Beast\n1:07:48 Summer Of Soul\n1:13:47 Pan\'s Labyrinth',
    date: 'Feb 23, 2025',
    views: '1,770',
    category: 'podcast'
  },
  {
    id: 'A1Z-3Piz7wI',
    title: 'Losing Ground Screening — Thank You',
    description: 'Many thanks to everyone who came out to the screening of Kathleen Collins\'s Losing Ground.',
    fullDescription: 'Many thanks to everyone who came out to the screening of Kathleen Collins\'s Losing Ground.',
    date: 'Feb 23, 2025',
    views: '282',
    category: 'shorts'
  },
  {
    id: '0Yn_AlF9OJ8',
    title: 'የ Losing Ground ፊልም እይታ በሴንቸሪ ሲኒማ',
    description: 'A screening of the 1982 classic \'Losing Ground\' at Century Cinema.',
    fullDescription: 'ነገ ሃሙስ ከምሽቱ 12ሰዐት ላይ \'Losing Ground\' የተሰኘውን የ1982 አ.ም. የአሜሪካ ፊልም በሴንቸሪ ሲኒማ የምናሳይ ይሆናል። በቦታው ተገኝተው እይታውን ይቀላቀሉ!',
    date: 'Feb 19, 2025',
    views: '323',
    category: 'shorts'
  },
  {
    id: 'JdZKvDYFzRU',
    title: 'ከአብረሃም ገዛኸኝ ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ — 12 Angry Men',
    description: 'A discussion on Sidney Lumet\'s \'12 Angry Men\' — one of Abraham Gezahagne\'s top 5 picks.',
    fullDescription: 'የቪዲዮቤት አዘጋጆች የአብረሃም ገዛኸኝ ምርጥ 5 ፊልም ምርጫዎች ውስጥ አንዱ ስለሆነው የሲድኒ ሉሜት \'ትዌልቭ አንግሪ ሜን\' ያደረጉት ውይይት።',
    date: 'Feb 12, 2025',
    views: '721',
    category: 'discussion'
  },
  {
    id: 'Jci0fu2VFto',
    title: 'ቪዲዮቤት ክፍል 2 — አምስት ፊልሞች ከአብረሃም ገዛኸኝ ጋር',
    description: 'Episode 2 — A conversation with film expert Abraham Gezahagne about his work and top 5 films.',
    fullDescription: 'በክፍል ሁለት የቪዲዮቤት ፖድካስት አዘጋጆች ከስመጥሩ የፊልም ባለሙያ አብረሃም ገዛኸኝ ጋር ስለሰራቸው ፊልሞች፣ ተከታታይ ድራማዎች እና ስለሚወዳቸው 5 ፊልሞች ውይይት ያደርጋሉ።\n\nአዘጋጆች: በአንዳምላክ ይመኑ, ቤዛ ሃይሉ ለማ\nፕሮዲውሰር: ቦኒ ተስፋዬ\nኤዲተር: ዮሃንስ እርገተቃል\n\nTimestamps:\n00:00 Intro\n22:00 Mizewochu\n28:34 The Athlete\n30:03 Lomi Shita\n38:23 Yenegen Alwoldem\n49:41 Yegir Esat & Besintu\n1:01:24 The Athlete\n1:07:55 12 Angry Men\n1:22:30 No Country For Old Men\n1:36:08 Citizen Kane\n1:44:11 MARA',
    date: 'Feb 9, 2025',
    views: '7,101',
    category: 'podcast'
  },
  {
    id: 'HuGynsdFTPs',
    title: 'Top 10 Movies of 2024',
    description: 'Episode 1 — Our hosts dive into an in-depth discussion about the best films of 2024.',
    fullDescription: 'Our hosts dive into an in-depth discussion about the best films of 2024, counting down the top 10 movies that defined the year.',
    date: 'Dec 2024',
    views: '',
    category: 'podcast'
  }
];

/* ── State ── */
let currentFilter = 'all';
const dom = {};

function init() {
  dom.grid = document.getElementById('video-grid');
  dom.modalOverlay = document.getElementById('modal-overlay');
  dom.modal = document.getElementById('modal');

  renderGrid('all');

  document.getElementById('filter-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderGrid(currentFilter);
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu-btn')) {
      document.getElementById('nav').classList.toggle('nav-open');
      return;
    }
    const card = e.target.closest('.video-card');
    if (card) { showDetail(card.dataset.videoId); return; }

    const playBtn = e.target.closest('[data-video-play]');
    if (playBtn) { closeModal(); openYouTubePlayer(playBtn.dataset.videoPlay); return; }

    const action = e.target.closest('[data-action]');
    if (action) {
      switch (action.dataset.action) {
        case 'close-modal': closeModal(); break;
      }
      return;
    }
  });

  dom.modalOverlay.addEventListener('click', (e) => {
    if (e.target === dom.modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeYouTubePlayer(); closeModal(); }
  });

  document.getElementById('preloader').classList.add('hidden');
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function renderGrid(filter) {
  const items = filter === 'all'
    ? youtubeVideos
    : youtubeVideos.filter(v => v.category === filter);

  dom.grid.innerHTML = items.map(v => `
    <div class="video-card" data-video-id="${v.id}">
      <div class="video-thumb">
        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${escHtml(v.title)}" loading="lazy">
        <div class="video-play"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
        <span class="video-badge ${v.category}">${v.category}</span>
      </div>
      <div class="video-card-body">
        <h3>${escHtml(v.title)}</h3>
        <div class="video-meta">${v.date}${v.views ? ' · ' + v.views + ' views' : ''}</div>
        <p>${escHtml(v.description)}</p>
      </div>
    </div>
  `).join('');
}

function showDetail(videoId) {
  const v = youtubeVideos.find(x => x.id === videoId);
  if (!v) return;

  dom.modal.innerHTML = `
    <button class="modal-close" data-action="close-modal">✕</button>
    <img class="modal-backdrop" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" alt="${escHtml(v.title)}" onerror="this.style.display='none'">
    <div class="modal-body">
      <div class="detail-title-row">
        <h2>${escHtml(v.title)}</h2>
      </div>
      <div class="video-meta-detail">
        <span>${escHtml(v.date)}</span>
        ${v.views ? '<span>' + escHtml(v.views) + ' views</span>' : ''}
        <span class="video-badge ${v.category}" style="position:static;display:inline-block">${v.category}</span>
      </div>
      <div class="video-full-description">${escHtml(v.fullDescription)}</div>
      <div class="modal-actions">
        <button class="btn btn-primary" data-video-play="${v.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Play Video
        </button>
        <button class="btn btn-secondary" data-action="close-modal">Close</button>
      </div>
    </div>
  `;
  dom.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  dom.modalOverlay.classList.remove('active');
  dom.modal.innerHTML = '';
  document.body.style.overflow = '';
}

function openYouTubePlayer(videoId) {
  const frame = document.getElementById('youtube-frame');
  const modal = document.getElementById('youtube-modal');
  if (!frame || !modal) return;
  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeYouTubePlayer() {
  const frame = document.getElementById('youtube-frame');
  const modal = document.getElementById('youtube-modal');
  if (frame) frame.src = '';
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

init();
