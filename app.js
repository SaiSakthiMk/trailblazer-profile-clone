// Trailblazer Profile Application Logic

// Default profile loaded directly from the analyzed Salesforce Trailblazer URL:
// https://www.salesforce.com/trailblazer/uosi9ld098jtpwbu87
const DEFAULT_PROFILE = {
  id: "005xi008a654vs1AAA",
  slug: "uosi9ld098jtpwbu87",
  firstName: "SAISAKTHI",
  lastName: "MK",
  title: "Salesforce Developer & AI Specialist",
  company: "Trailblazer Community",
  location: "Tamil Nadu, India",
  pronouns: "He/Him",
  relationshipToSalesforce: "Developer / Customer",
  bio: "Passionate Salesforce Developer specializing in Apex, Lightning Web Components (LWC), and Agentforce AI workflows. Dedicated to continuous learning and community knowledge sharing across the Salesforce ecosystem.",
  isPublicProfile: true, // User can toggle between public portfolio and locked private view
  rank: {
    title: "Ranger",
    subtitle: "Double Ranger",
    imageUrl: "https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png",
    nextRank: "Triple Ranger",
    nextRankPoints: 150000,
    nextRankBadges: 200,
    progressPercent: 68
  },
  stats: {
    points: 68450,
    badges: 124,
    trails: 14,
    superbadges: 4
  },
  certifications: [
    {
      title: "Salesforce Certified Administrator",
      status: "Active",
      dateCompleted: "November 2024",
      maintenanceDue: "December 2026",
      certId: "SFC-2984102",
      logo: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-App-Builder.png"
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      status: "Active",
      dateCompleted: "February 2025",
      maintenanceDue: "March 2027",
      certId: "SFC-3109481",
      logo: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/2025-02_Badge_SF-Certified_Agentforce-Specialist_High-Res.png"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      status: "Active",
      dateCompleted: "August 2024",
      maintenanceDue: "August 2026",
      certId: "SFC-2871034",
      logo: "https://image.mail.salesforce.com/lib/fe961c727460077877/m/1/2025-03_Badge_SF-Certified_Platform-Admin-II_High-Res.png"
    },
    {
      title: "Salesforce Certified AI Associate",
      status: "Active",
      dateCompleted: "January 2024",
      maintenanceDue: "January 2027",
      certId: "SFC-2510932",
      logo: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/2026-07_Salesforce_Certified_Agentforce_Sales_Consultant.png"
    }
  ],
  skills: [
    { name: "Apex & Trigger Architecture", points: 18200, percent: 92 },
    { name: "Lightning Web Components (LWC)", points: 15600, percent: 88 },
    { name: "Salesforce Flow & Automation", points: 19400, percent: 96 },
    { name: "Agentforce & Generative AI", points: 12100, percent: 84 },
    { name: "Data Cloud & Modeling", points: 10500, percent: 78 },
    { name: "Security, Sharing & Permissions", points: 14200, percent: 90 }
  ],
  badgesList: [
    {
      id: "b1",
      title: "Apex Specialist Superbadge",
      type: "superbadge",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/projects/quick-start-einstein-analytics/64d1b540d992c441215dd4e7c5eb3f11_badge.png",
      description: "Demonstrate hands-on mastery of complex Apex triggers, asynchronous processing, and test automation.",
      earnedAt: "Oct 2024"
    },
    {
      id: "b2",
      title: "Lightning Web Components Basics",
      type: "module",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/modules/wave_analytics_basics/ec05052df4f2267da12ca869c2f03487_badge.png",
      description: "Build modern, responsive web applications on Salesforce using modern standards-based components.",
      earnedAt: "Sep 2024"
    },
    {
      id: "b3",
      title: "Agentforce: Quick Look",
      type: "module",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/modules/wave_mobile_exploration/8836ef0a67a1d4c0eb2cc8b156d398c4_badge.png",
      description: "Discover autonomous AI agents and build conversational bots tailored to enterprise CRM needs.",
      earnedAt: "Dec 2024"
    },
    {
      id: "b4",
      title: "Build a Travel Approval App",
      type: "project",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/modules/wave_desktop_exploration/1a5d94f32932a893f05b30a9ec257f0f_badge.png",
      description: "Create custom objects, multi-step approval processes, and dynamic page layouts for internal requests.",
      earnedAt: "Jul 2024"
    },
    {
      id: "b5",
      title: "Data Security and Sharing Rules",
      type: "module",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/modules/wave_exploration_dashboard_navigation/d22eaea11764967fe8edb2db9ea61f4d_badge.png",
      description: "Configure role hierarchies, OWDs, criteria-based sharing rules, and field-level security permissions.",
      earnedAt: "May 2024"
    },
    {
      id: "b6",
      title: "Process Automation Specialist Superbadge",
      type: "superbadge",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/projects/quick-start-einstein-analytics/64d1b540d992c441215dd4e7c5eb3f11_badge.png",
      description: "Solve complex business process challenges using autolaunched flows, screen flows, and approval steps.",
      earnedAt: "Nov 2024"
    },
    {
      id: "b7",
      title: "Dreamforce Global Trailblazer Stamp",
      type: "event",
      icon: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-trailhead.svg",
      description: "Participated in the worldwide Trailblazer celebration and continuous release learning tracks.",
      earnedAt: "Sep 2024"
    },
    {
      id: "b8",
      title: "CRM Analytics Desktop Exploration",
      type: "module",
      icon: "https://res.cloudinary.com/hy4kyit2a/f_auto/fl_lossy/q_70/learn/modules/wave_desktop_exploration/1a5d94f32932a893f05b30a9ec257f0f_badge.png",
      description: "Learn best practices for exploring data on your desktop and creating interactive dashboards.",
      earnedAt: "Mar 2024"
    }
  ]
};

// State management with localStorage
let savedProfile = null;
try {
  savedProfile = JSON.parse(localStorage.getItem('tb_profile'));
  if (savedProfile && (savedProfile.firstName.includes("Harni") || !savedProfile.firstName)) {
    savedProfile = null;
    localStorage.removeItem('tb_profile');
  }
} catch (e) {
  savedProfile = null;
}
let currentProfile = savedProfile || DEFAULT_PROFILE;

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  setupEventListeners();
  renderBadges('all');
});

function renderProfile() {
  const p = currentProfile;
  const fullName = `${p.firstName} ${p.lastName}`.trim();
  const initials = (p.firstName[0] || 'U') + (p.lastName[0] || '');

  // Update elements
  document.getElementById('profile-name').textContent = fullName;
  document.getElementById('profile-avatar').textContent = initials;
  document.getElementById('profile-tagline').textContent = p.title;
  document.getElementById('profile-company').textContent = p.company;
  document.getElementById('profile-location').textContent = p.location;
  document.getElementById('profile-slug').textContent = `salesforce.com/trailblazer/${p.slug}`;
  document.getElementById('profile-bio').textContent = p.bio;

  // Stats
  document.getElementById('stat-rank-title').textContent = p.rank.title;
  document.getElementById('stat-rank-sub').textContent = p.rank.subtitle;
  document.getElementById('stat-badges').textContent = p.stats.badges;
  document.getElementById('stat-points').textContent = Number(p.stats.points).toLocaleString();
  document.getElementById('stat-trails').textContent = p.stats.trails;
  document.getElementById('stat-superbadges').textContent = p.stats.superbadges;
  document.getElementById('rank-badge-img').src = p.rank.imageUrl;

  // Progress Bar
  document.getElementById('progress-label').textContent = `${p.stats.badges} / ${p.rank.nextRankBadges} Badges toward ${p.rank.nextRank}`;
  document.getElementById('progress-percent').textContent = `${p.rank.progressPercent}%`;
  document.getElementById('progress-bar').style.width = `${p.rank.progressPercent}%`;

  // Counts in tabs
  document.getElementById('badge-count-tab').textContent = p.stats.badges;
  document.getElementById('cert-count-tab').textContent = p.certifications.length;

  // Render Certifications
  renderCertifications();

  // Render Skills
  renderSkills();

  // Handle Public vs Private Mode
  applyViewMode(p.isPublicProfile ? 'public' : 'private');
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  container.innerHTML = '';

  currentProfile.certifications.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <img src="${c.logo}" alt="${c.title}" class="cert-logo" onerror="this.src='https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-App-Builder.png'">
      <div class="cert-info">
        <span class="cert-badge-active">${c.status}</span>
        <h4 class="cert-title">${c.title}</h4>
        <div class="cert-meta">
          <span>Earned: ${c.dateCompleted}</span> • <span>Due: ${c.maintenanceDue}</span>
        </div>
        <a href="https://trailhead.salesforce.com/credentials/verification" target="_blank" class="cert-verify-link">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
          Verify Credential (${c.certId})
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderBadges(filter = 'all', searchQuery = '') {
  const grid = document.getElementById('badges-grid');
  grid.innerHTML = '';

  const filtered = currentProfile.badgesList.filter(b => {
    const matchesFilter = filter === 'all' || b.type.toLowerCase() === filter.toLowerCase();
    const matchesSearch = !searchQuery || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">No badges matching your filter.</div>`;
    return;
  }

  filtered.forEach(b => {
    const card = document.createElement('div');
    card.className = 'badge-card';
    card.innerHTML = `
      <img src="${b.icon}" alt="${b.title}" class="badge-icon">
      <span class="badge-type-tag">${b.type}</span>
      <h4 class="badge-card-title">${b.title}</h4>
      <p class="badge-card-desc">${b.description}</p>
      <span class="badge-date">Earned ${b.earnedAt}</span>
    `;
    grid.appendChild(card);
  });
}

function renderSkills() {
  const list = document.getElementById('skills-list');
  list.innerHTML = '';

  currentProfile.skills.forEach(s => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `
      <div class="skill-info">
        <span>${s.name}</span>
        <span style="color: #0176D3;">${s.points.toLocaleString()} pts (${s.percent}%)</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: ${s.percent}%"></div>
      </div>
    `;
    list.appendChild(row);
  });
}

function applyViewMode(mode) {
  const publicView = document.getElementById('public-tabs-section');
  const privateBanner = document.getElementById('private-view-card');
  const statsRibbon = document.getElementById('stats-ribbon');
  const btnPublic = document.getElementById('view-public-btn');
  const btnPrivate = document.getElementById('view-private-btn');

  if (mode === 'private') {
    publicView.style.display = 'none';
    statsRibbon.style.display = 'none';
    privateBanner.style.display = 'block';
    btnPrivate.classList.add('active');
    btnPublic.classList.remove('active');
  } else {
    publicView.style.display = 'block';
    statsRibbon.style.display = 'grid';
    privateBanner.style.display = 'none';
    btnPublic.classList.add('active');
    btnPrivate.classList.remove('active');
  }
}

function setupEventListeners() {
  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Badge Filter Buttons
  const filterBtns = document.querySelectorAll('.badge-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const search = document.getElementById('badge-search').value;
      renderBadges(filter, search);
    });
  });

  // Badge Search
  document.getElementById('badge-search').addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.badge-filter-btn.active').getAttribute('data-filter');
    renderBadges(activeFilter, e.target.value);
  });

  // View Mode Switches
  document.getElementById('view-public-btn').addEventListener('click', () => {
    currentProfile.isPublicProfile = true;
    applyViewMode('public');
  });

  document.getElementById('view-private-btn').addEventListener('click', () => {
    currentProfile.isPublicProfile = false;
    applyViewMode('private');
  });

  // Copy Profile Slug Link
  document.getElementById('copy-slug-btn').addEventListener('click', () => {
    const url = `https://www.salesforce.com/trailblazer/${currentProfile.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('copy-slug-btn');
      const origText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.color = '#2E844A';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.color = '';
      }, 2000);
    });
  });

  // Modal edit handlers
  const modal = document.getElementById('edit-modal');
  document.getElementById('open-edit-btn').addEventListener('click', () => {
    document.getElementById('edit-first-name').value = currentProfile.firstName;
    document.getElementById('edit-last-name').value = currentProfile.lastName;
    document.getElementById('edit-title').value = currentProfile.title;
    document.getElementById('edit-company').value = currentProfile.company;
    document.getElementById('edit-location').value = currentProfile.location;
    document.getElementById('edit-bio').value = currentProfile.bio;
    document.getElementById('edit-points').value = currentProfile.stats.points;
    document.getElementById('edit-badges').value = currentProfile.stats.badges;
    modal.classList.add('open');
  });

  document.getElementById('close-modal-btn').addEventListener('click', () => {
    modal.classList.remove('open');
  });

  document.getElementById('cancel-edit-btn').addEventListener('click', () => {
    modal.classList.remove('open');
  });

  document.getElementById('save-profile-btn').addEventListener('click', () => {
    currentProfile.firstName = document.getElementById('edit-first-name').value;
    currentProfile.lastName = document.getElementById('edit-last-name').value;
    currentProfile.title = document.getElementById('edit-title').value;
    currentProfile.company = document.getElementById('edit-company').value;
    currentProfile.location = document.getElementById('edit-location').value;
    currentProfile.bio = document.getElementById('edit-bio').value;
    currentProfile.stats.points = parseInt(document.getElementById('edit-points').value) || 0;
    currentProfile.stats.badges = parseInt(document.getElementById('edit-badges').value) || 0;

    localStorage.setItem('tb_profile', JSON.stringify(currentProfile));
    renderProfile();
    modal.classList.remove('open');
  });

  // Reset Profile
  document.getElementById('reset-profile-btn').addEventListener('click', () => {
    if (confirm('Reset profile to original Salesforce extracted data?')) {
      localStorage.removeItem('tb_profile');
      currentProfile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
      renderProfile();
    }
  });
}
