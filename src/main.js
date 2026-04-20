import './style.css'

const baseUrl = import.meta.env.BASE_URL

const screenshots = [
  { src: `${baseUrl}screenshots/main-viewer.png`, title: 'Main Diagnostic Viewer' },
  { src: `${baseUrl}screenshots/mpr-viewer.png`, title: 'MPR Workspace' },
  { src: `${baseUrl}screenshots/3D%20Viewer%20-%20Bone.png`, title: 'VTK Bone Volume Viewer' },
  { src: `${baseUrl}screenshots/ai-dock.png`, title: 'AI Assistant Dock' },
]

const features = [
  {
    title: 'Diagnostic 2D Viewer',
    text: 'Browse studies quickly with window/level, measurements, cine controls, and a responsive DICOM viewing workflow.',
  },
  {
    title: 'MPR and 3D Pipeline',
    text: 'Build diagnostic volumes from full-fidelity series data and extend into MPR, surface extraction, and VTK-based volume rendering.',
  },
  {
    title: 'Scalable Architecture',
    text: 'Separate lightweight browsing data from diagnostic series loading so the viewer remains practical even with large patient libraries.',
  },
  {
    title: 'AI-Ready Workflow',
    text: 'Attach the current diagnostic image context to assistant workflows without conflating preview imagery and diagnostic rendering.',
  },
]

const stack = [
  'C++20',
  'Qt 6',
  'VTK',
  'Future ITK',
  'PostgreSQL',
  'GDCM',
  'OpenCV',
  'Cross-platform desktop design',
]

const milestones = [
  'Lazy hierarchy loading for large datasets',
  'Series-level previews instead of per-slice preview bloat',
  'Background import with progress reporting',
  'MPR workflow from diagnostic volume data',
  'VTK volume-rendering integration for long-term 3D growth',
]

const roadmap = [
  'VTK-based MPR viewer to unify advanced 2D and 3D rendering',
  'Volume-render preprocessing service expansion for bone, lung, and future organ presets',
  'ITK-backed segmentation and label-volume workflows',
  'Multi-structure rendering and organ-specific presets',
  'Product hardening toward professional medical imaging software expectations',
]

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar">
        <div class="brand-block">
          <span class="eyebrow">Medical Imaging Software</span>
          <span class="brand">DicomViewer</span>
        </div>
        <div class="actions">
          <a class="button button-secondary" href="#screenshots">Screenshots</a>
          <a class="button button-primary" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Professional-grade foundation</span>
          <h1>Desktop DICOM viewing built for diagnostic workflows, MPR, and long-term 3D growth.</h1>
          <p class="lead">
            DicomViewer is a C++/Qt medical imaging application focused on diagnostic rendering,
            scalable data loading, and a rendering architecture that can grow into serious VTK and ITK workflows.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">Open Repository</a>
            <a class="button button-secondary" href="#architecture">Read Architecture</a>
          </div>
          <ul class="meta-list">
            <li>Desktop-first medical imaging workflow</li>
            <li>Diagnostic series loading and raw-pixel rendering</li>
            <li>VTK direction for long-term 3D and MPR</li>
          </ul>
        </div>

        <div class="hero-panel">
          <div class="hero-panel-card">
            <span class="panel-label">Current Product Direction</span>
            <h2>Clinical viewer foundation with a rendering stack that can mature over years, not months.</h2>
            <div class="stats-grid">
              <div>
                <span class="stat-label">Core Viewer</span>
                <strong>2D + MPR</strong>
              </div>
              <div>
                <span class="stat-label">3D Direction</span>
                <strong>VTK Volume Rendering</strong>
              </div>
              <div>
                <span class="stat-label">Segmentation Space</span>
                <strong>Future ITK</strong>
              </div>
              <div>
                <span class="stat-label">Audience</span>
                <strong>Radiology Software Engineering</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>

    <main>
      <section class="section" id="screenshots">
        <div class="section-head">
          <span class="eyebrow">Screenshots</span>
          <h2>Current application views</h2>
          <p>Real screenshots from the running application, not mockups.</p>
        </div>
        <div class="gallery-grid">
          ${screenshots.map((shot) => `
            <figure class="shot-card">
              <img src="${shot.src}" alt="${shot.title}" />
              <figcaption>${shot.title}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>

      <section class="section" id="features">
        <div class="section-head">
          <span class="eyebrow">Capabilities</span>
          <h2>Built around diagnostic correctness first</h2>
          <p>The product architecture separates preview paths, diagnostic rendering paths, and long-term rendering integration points.</p>
        </div>
        <div class="feature-grid">
          ${features.map((feature) => `
            <article class="feature-card">
              <h3>${feature.title}</h3>
              <p>${feature.text}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section split-section" id="architecture">
        <div>
          <span class="eyebrow">Architecture</span>
          <h2>Engineering choices made for growth</h2>
          <p>
            The viewer uses lightweight hierarchy browsing for scale, upgrades to diagnostic series for raw-pixel workflows,
            and is now moving toward VTK as the long-term rendering module while leaving room for future ITK-based segmentation.
          </p>
        </div>
        <div class="pill-group">
          ${stack.map((item) => `<span class="pill">${item}</span>`).join('')}
        </div>
      </section>

      <section class="section dual-columns">
        <article class="panel-card">
          <span class="eyebrow">Current Milestones</span>
          <h2>What is already working</h2>
          <ul class="plain-list">
            ${milestones.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
        <article class="panel-card">
          <span class="eyebrow">Awaiting Features</span>
          <h2>What comes next</h2>
          <ul class="plain-list">
            ${roadmap.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      </section>

      <section class="section cta-section">
        <div class="cta-card">
          <div>
            <span class="eyebrow">Open Source Project</span>
            <h2>Explore the codebase and follow the product direction.</h2>
            <p>
              The project is evolving from a Qt-based medical image viewer into a longer-term platform with VTK rendering
              and room for future ITK segmentation workflows.
            </p>
          </div>
          <div class="cta-actions">
            <a class="button button-primary" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">View on GitHub</a>
            <a class="button button-secondary" href="#screenshots">See Screenshots</a>
          </div>
        </div>
      </section>
    </main>
  </div>
`
