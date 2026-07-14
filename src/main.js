import './style.css'

const baseUrl = import.meta.env.BASE_URL
const workflowGif = `${baseUrl}screenshots/main-viewer.gif`

const screenshots = [
  {
    src: `${baseUrl}screenshots/main-viewer.png`,
    title: 'Main DICOM viewer',
    text: 'Patient, study, and series browsing with a focused slice viewer, WL/WW controls, and annotation panels.',
  },
  {
    src: `${baseUrl}screenshots/mpr-viewer.png`,
    title: 'MPR workspace',
    text: 'Axial, coronal, and sagittal review for CT/MR series, with geometry verification still in progress.',
  },
  {
    src: `${baseUrl}screenshots/3D%20Viewer%20-%20Bone.png`,
    title: '3D volume viewer',
    text: 'Volume visualization direction for CT datasets, currently intended for demonstration and feedback.',
  },
]

const capabilityGroups = [
  {
    title: 'Study Review',
    items: [
      'Open local DICOM studies from folders or exported media',
      'Browse patients, studies, and series in one desktop workspace',
      'Review CT, MR, and XA image data where supported',
      'Use slice scrolling, cine playback, zoom, pan, and WL/WW controls',
    ],
  },
  {
    title: 'Annotations',
    items: [
      'Create distance, polyline, angle, and rectangle ROI annotations',
      'Keep annotations linked to the correct slice or cine frame',
      'Review annotated slices from the annotation panel',
      'Delete annotations when they are no longer needed',
    ],
  },
  {
    title: 'Advanced Viewing',
    items: [
      'Open MPR views for multi-slice CT/MR series',
      'Use the 3D viewer for volume visualization feedback',
      'Play supported multi-frame XA cine sequences',
      'Export selected XA cine or CT/MR slice-series ranges as derived MP4 video',
    ],
  },
  {
    title: 'Evaluation Safety',
    items: [
      'Original DICOM files are not modified',
      'Exported videos are marked as derived and non-diagnostic',
      'Local-first storage avoids a hospital database connection for the demo',
      'Regulatory and clinical verification work is still in progress',
    ],
  },
]

const statusRows = [
  ['Product name', 'Cross Axial Dicom Viewer'],
  ['Current stage', 'Pre-release demo for feedback'],
  ['Current use boundary', 'Education, research, and controlled product evaluation only'],
  ['Regulatory status', 'Not approved for diagnosis or treatment'],
  ['Supported review direction', 'CT, MR, XA cine, MPR, 3D viewing, annotations, and video export'],
  ['Source DICOM policy', 'Original DICOM files remain unchanged'],
]

const reviewHighlights = [
  'CT and MR slice review',
  'XA cine playback',
  'MPR review',
  '3D volume preview',
  'WL/WW presets',
  'Distance and angle annotations',
  'ROI annotations',
  'Derived MP4 video export',
]

const roadmap = [
  {
    phase: 'Radiologist feedback baseline',
    target: 'Current focus',
    text: 'Collect feedback on CT/MR review, XA cine playback, annotations, MPR, 3D viewing, and exported review videos.',
  },
  {
    phase: 'Internal verification',
    target: 'Next gate',
    text: 'Verify measurement accuracy, MPR geometry, video export behavior, corrupted DICOM handling, and packaging.',
  },
  {
    phase: 'Regulatory preparation',
    target: 'After demo feedback',
    text: 'Refine intended use, risks, validation evidence, user manual, and traceability before any clinical claim.',
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
          <a href="#capabilities">Features</a>
          <a href="#status">Status</a>
          <a href="#screenshots">Screenshots</a>
        </div>
      </nav>

      <div class="hero-content" id="top">
        <p class="eyebrow">DICOM viewer for controlled evaluation</p>
        <h1 id="page-title">Cross Axial Dicom Viewer</h1>
        <p class="hero-lead">
          A desktop DICOM viewer being developed for CT, MRI, and XA cine review workflows, with
          local study browsing, MPR, 3D visualization, annotations, and derived video export for feedback.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#workflow">Watch Workflow</a>
          <a class="button button-secondary" href="#capabilities">Explore Features</a>
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
            The current workflow brings study browsing, image review, slice navigation, annotation panels,
            and viewer controls into one local desktop application.
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
          <h2>Designed for feedback before clinical claims</h2>
          <p>
            The current build is meant to be reviewed by technical users and radiologists for usability feedback.
            It is not released as a diagnostic workstation and should not be used for clinical decisions.
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
            <p class="panel-kicker">Clinical safety boundary</p>
            <h3>Useful for evaluation, not for diagnosis.</h3>
            <ul>
              <li>Measurements, ROI values, MPR geometry, and 3D views still require formal verification.</li>
              <li>Video export is derived, non-diagnostic output for review and communication only.</li>
              <li>Regulatory approval work is planned but not complete.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section" id="screenshots">
        <div class="section-head">
          <p class="eyebrow">Application views</p>
          <h2>Real screenshots from the current viewer</h2>
          <p>
            These images show the active desktop application direction: main viewing, MPR review, and 3D rendering.
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
          <h2>Features for radiology review feedback</h2>
          <p>
            The goal of the current demo is to make common review tasks visible and testable: open studies,
            inspect slices, play cine, annotate findings, and export derived videos for discussion.
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

      <section class="section technology-section" id="review-highlights">
        <div class="section-head">
          <p class="eyebrow">Review highlights</p>
          <h2>What a reviewer can try in the demo</h2>
          <p>
            The feature set is still under verification, but these workflows are already available for structured feedback.
          </p>
        </div>
        <div class="stack-list">
          ${reviewHighlights.map((item) => `<span>${item}</span>`).join('')}
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
          <p class="eyebrow">Feedback-ready demo</p>
          <h2>Built for review, refinement, and later verification.</h2>
        </div>
        <a class="button button-primary" href="#capabilities">Review Features</a>
      </section>
    </main>
  </div>
`
