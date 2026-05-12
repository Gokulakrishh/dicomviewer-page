import './style.css'

const baseUrl = import.meta.env.BASE_URL
const workflowGif = `${baseUrl}screenshots/main-viewer.gif`

const screenshots = [
  {
    src: `${baseUrl}screenshots/main-viewer.png`,
    title: 'Main DICOM viewer',
    text: 'Primary VTK slice viewing workflow with study context, viewer tools, and annotation panels.',
  },
  {
    src: `${baseUrl}screenshots/mpr-viewer.png`,
    title: 'MPR workspace',
    text: 'Multi-planar review path under active verification for geometry, spacing, and clinical-correctness evidence.',
  },
  {
    src: `${baseUrl}screenshots/3D%20Viewer%20-%20Bone.png`,
    title: '3D volume viewer',
    text: 'VTK-based 3D rendering direction for CT volume visualization and future controlled expansion.',
  },
]

const capabilityGroups = [
  {
    title: 'Viewing',
    items: [
      'DICOM file and folder import',
      'Main 2D VTK slice viewer',
      'DICOM-derived WL/WW defaults with controlled fallback presets',
      'Zoom, pan, slice/frame navigation, and crosshair workflows',
    ],
  },
  {
    title: 'Measurements',
    items: [
      'Distance, polyline, angle, and rectangle ROI baseline',
      'Per-slice and per-frame annotation persistence',
      'Annotation deletion and review workflows under verification',
      'Clinical correctness evidence tracked under CAPA-002',
    ],
  },
  {
    title: 'Advanced Review',
    items: [
      'MPR viewing path under active geometry verification',
      'VTK 3D volume viewing path under active maturation',
      'Multi-frame XA cine viewing under representative dataset testing',
      'HU statistics and calcium workflow remain planned, not release-claimed',
    ],
  },
  {
    title: 'Quality Foundation',
    items: [
      'Local SQLite persistence with no desktop database credentials',
      'Original DICOM files remain unmodified',
      'Audit, crash-log, and CAPA documentation foundation started',
      'Malformed DICOM handling tracked under CAPA-001',
    ],
  },
]

const statusRows = [
  ['Product name', 'Cross Axial Dicom Viewer'],
  ['Current stage', 'Pre-release demo baseline under development'],
  ['Current use boundary', 'Education, research, and controlled product evaluation only'],
  ['Regulatory status', 'Not approved for diagnosis or treatment'],
  ['Current storage', 'Local SQLite metadata, previews, and derived annotations'],
  ['Source DICOM policy', 'Original DICOM files are treated as canonical input and are not modified'],
]

const stack = [
  'C++20',
  'Qt 6',
  'VTK',
  'GDCM',
  'SQLite',
  'CMake',
  'Vite',
]

const roadmap = [
  {
    phase: 'REL-001 demo baseline',
    target: 'Target: 2026-05-31',
    text: 'Stabilize non-diagnostic viewer workflows, package Windows/macOS builds, and record known limitations.',
  },
  {
    phase: 'Verification foundation',
    target: 'Next gate',
    text: 'Complete measurement/MPR correctness tests, corrupted DICOM handling tests, and representative XA cine checks.',
  },
  {
    phase: 'Regulatory foundation',
    target: 'After demo feedback',
    text: 'Harden SRS, risk controls, CAPA, release evidence, user manual, and traceability before regulated claims.',
  },
]

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header
      class="hero"
      aria-labelledby="page-title"
      style="background-image: linear-gradient(90deg, rgba(9, 20, 35, 0.92) 0%, rgba(9, 20, 35, 0.74) 43%, rgba(9, 20, 35, 0.24) 100%), url('${baseUrl}screenshots/main-viewer.png')"
    >
      <nav class="topbar" aria-label="Primary">
        <a class="brand-lockup" href="#top" aria-label="Cross Axial Dicom Viewer home">
          <img src="${baseUrl}cross-axial-icon.png" alt="" />
          <span>
            <strong>Cross Axial Dicom Viewer</strong>
            <small>DICOM viewer under controlled development</small>
          </span>
        </a>
        <div class="nav-actions">
          <a href="#status">Status</a>
          <a href="#screenshots">Screenshots</a>
          <a class="button button-light" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <div class="hero-content" id="top">
        <p class="eyebrow">Local-first DICOM viewing software</p>
        <h1 id="page-title">Cross Axial Dicom Viewer</h1>
        <p class="hero-lead">
          A C++/Qt and VTK-based DICOM viewer focused on controlled development, memory-aware workflows,
          local SQLite persistence, and a clear path toward SaMD-ready engineering evidence.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">Open Repository</a>
          <a class="button button-secondary" href="#screenshots">View Screenshots</a>
        </div>
      </div>
    </header>

    <main>
      <section class="notice-band" aria-label="Regulatory notice">
        <strong>Important boundary:</strong>
        This software is currently intended for education, research, and controlled evaluation only.
        It is not approved for diagnosis, treatment, clinical decision-making, or regulatory-certified use.
      </section>

      <section class="section workflow-section" id="workflow">
        <div class="workflow-copy">
          <p class="eyebrow">Workflow preview</p>
          <h2>See the viewer in motion</h2>
          <p>
            A short animated preview helps communicate the desktop workflow better than static screenshots alone:
            study browsing, image viewing, and interaction panels in the current baseline.
          </p>
        </div>
        <figure class="workflow-media">
          <img src="${workflowGif}" alt="Animated preview of Cross Axial Dicom Viewer workflow" loading="lazy" />
          <figcaption>Current non-diagnostic viewer workflow preview.</figcaption>
        </figure>
      </section>

      <section class="section" id="status">
        <div class="section-head">
          <p class="eyebrow">Current development status</p>
          <h2>Pre-release baseline with explicit claim boundaries</h2>
          <p>
            The project is being developed as local-first DICOM viewing software. The current public-facing position
            avoids unsupported diagnostic, PACS, AI, or cybersecurity claims while QMS-style evidence matures.
          </p>
        </div>

        <div class="status-grid">
          <table class="status-table">
            <tbody>
              ${statusRows.map(([label, value]) => `
                <tr>
                  <th>${label}</th>
                  <td>${value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="quality-panel">
            <p class="panel-kicker">Quality controls in progress</p>
            <h3>CAPA and verification gates are now part of the development record.</h3>
            <ul>
              <li>CAPA-001 tracks malformed or corrupted DICOM decode handling.</li>
              <li>CAPA-002 tracks missing clinical correctness evidence for measurements and MPR.</li>
              <li>REL-001 remains non-diagnostic unless evidence and claims are formally updated.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section" id="screenshots">
        <div class="section-head">
          <p class="eyebrow">Application views</p>
          <h2>Real screenshots from the current viewer</h2>
          <p>
            These images show the active desktop application direction: main viewing, MPR review, and VTK 3D rendering.
          </p>
        </div>
        <div class="gallery-grid">
          ${screenshots.map((shot) => `
            <figure class="shot-card">
              <img src="${shot.src}" alt="${shot.title}" />
              <figcaption>
                <strong>${shot.title}</strong>
                <span>${shot.text}</span>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </section>

      <section class="section" id="capabilities">
        <div class="section-head">
          <p class="eyebrow">Product scope</p>
          <h2>Built around separable viewer, annotation, and quality layers</h2>
          <p>
            The current architecture keeps source DICOM data separate from derived annotations and avoids loading heavy
            pixel data during hierarchy browsing wherever possible.
          </p>
        </div>
        <div class="capability-grid">
          ${capabilityGroups.map((group) => `
            <article class="capability-card">
              <h3>${group.title}</h3>
              <ul>
                ${group.items.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section technology-section" id="architecture">
        <div class="section-head">
          <p class="eyebrow">Architecture</p>
          <h2>Current technical stack</h2>
          <p>
            The desktop baseline uses Qt and VTK for viewing, GDCM for DICOM handling, and SQLite for local metadata,
            preview, and derived annotation persistence.
          </p>
        </div>
        <div class="stack-list">
          ${stack.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="section roadmap-section" id="roadmap">
        <div class="section-head">
          <p class="eyebrow">Roadmap</p>
          <h2>Next gates before broader release</h2>
        </div>
        <div class="roadmap-list">
          ${roadmap.map((item) => `
            <article>
              <p>${item.target}</p>
              <h3>${item.phase}</h3>
              <span>${item.text}</span>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="closing-panel">
        <div>
          <p class="eyebrow">Engineering baseline</p>
          <h2>Follow the release evidence as the project matures.</h2>
        </div>
        <a class="button button-primary" href="https://github.com/Gokulakrishh/DicomViewer" target="_blank" rel="noreferrer">View on GitHub</a>
      </section>
    </main>
  </div>
`
