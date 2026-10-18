import './style.css'

const baseUrl = import.meta.env.BASE_URL
const workflowGif = `${baseUrl}screenshots/main-viewer.gif`

const screenshots = [
  {
    src: `${baseUrl}screenshots/main-viewer.png`,
    title: 'Main DICOM viewer',
    text: 'Browse imaging examinations and their image groups, scroll through slices, adjust brightness and contrast, and add annotations.',
  },
  {
    src: `${baseUrl}screenshots/mpr-viewer.png`,
    title: 'Multi-planar reconstruction (MPR)',
    text: 'View a scan across the body, from the front, and from the side. Verification of orientation and geometry is still in progress.',
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

const glossary = [
  ['Study & series', 'A study is an imaging examination. It can contain several series: groups of images acquired or reconstructed in a particular way.'],
  ['CT & MRI', 'Computed tomography (CT) uses X-rays to create cross-sectional images. Magnetic resonance imaging (MRI, also called MR) uses magnetic fields and radio waves.'],
  ['Slice & MPR', 'A slice is a cross-sectional view through the body. Multi-planar reconstruction (MPR) uses a suitable image volume to show other viewing planes.'],
  ['XA & cine', 'XA means X-ray angiography, imaging used to visualize blood vessels. Cine playback shows an image sequence over time, like a short movie.'],
  ['WL/WW', 'Window level and window width control the range of image intensities displayed, changing brightness and contrast to help inspect different structures.'],
  ['ROI', 'A region of interest is a selected part of an image, such as an area marked for closer inspection or measurement.'],
]

const partnerTopics = [
  {
    title: 'Define the intended use',
    text: 'Which users, imaging workflows, and use environments should the first product serve? Which activities and claims should remain outside its scope?',
  },
  {
    title: 'Connect risks to evidence',
    text: 'How should we evaluate wrong-patient or wrong-series selection, incorrect orientation, measurement errors, and misleading exported images?',
  },
  {
    title: 'Shape the quality process',
    text: 'Help plan requirements, risk documentation, change control, and traceability between requirements and tests while the product is still being shaped.',
  },
  {
    title: 'Plan verification and validation',
    text: 'Help define representative datasets, acceptance criteria, usability evaluation, and the evidence needed for the intended use and target market.',
  },
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
    target: 'Alongside development',
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
          <a href="#dicom-basics">What is DICOM?</a>
          <a href="#capabilities">Features</a>
          <a href="#status">Status</a>
          <a href="#collaboration">Collaboration</a>
        </div>
      </nav>

      <div class="hero-content" id="top">
        <p class="eyebrow">DICOM viewer for controlled evaluation</p>
        <h1 id="page-title">Cross Axial Dicom Viewer</h1>
        <p class="hero-lead">
          Desktop software for opening medical scans, exploring image slices and 3D views,
          and marking areas for review. We are developing Cross Axial with feedback from
          clinicians, engineers, and potential quality partners.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#dicom-basics">Understand the Viewer</a>
          <a class="button button-secondary" href="#workflow">Watch Workflow</a>
          <a class="button button-secondary" href="#collaboration">For Potential Partners</a>
        </div>
      </div>
    </header>

    <main>
      <section class="notice-band" aria-label="Regulatory notice">
        <strong>Important boundary:</strong>
        This software is currently intended for education, research, and controlled evaluation only.
        It is not approved for diagnosis, treatment, clinical decision-making, or regulatory-certified use.
      </section>

      <section class="section" id="dicom-basics" aria-labelledby="basics-title">
        <div class="section-head">
          <p class="eyebrow">Start here · No imaging background needed</p>
          <h2 id="basics-title">What is a DICOM viewer?</h2>
          <p>
            A DICOM viewer is software for opening and exploring medical imaging data.
            It gives a person tools to move through a scan, adjust how images appear,
            and inspect or annotate structures.
          </p>
        </div>
        <div class="basics-grid">
          <article class="explainer-card">
            <span class="concept-label">The standard</span>
            <h3>DICOM keeps images and context together</h3>
            <p>
              DICOM stands for <strong>Digital Imaging and Communications in Medicine</strong>.
              It defines how medical images and related information are stored and exchanged.
              That information can include the patient, examination, image orientation, and acquisition details.
            </p>
            <p class="source-note">Reference: <a href="https://dicom.nema.org/medical/dicom/current/output/chtml/part01/chapter_1.html">Official DICOM standard overview</a>.</p>
          </article>
          <article class="explainer-card">
            <span class="concept-label">The application</span>
            <h3>The viewer makes a scan explorable</h3>
            <p>
              A scan can contain many images or frames. A viewer organizes them into examinations
              and image groups, then provides controls for scrolling, playback, contrast, and measurement.
              Suitable datasets can also be explored in other planes or as a 3D volume.
            </p>
            <p>Cross Axial is our desktop application for developing and evaluating these workflows.</p>
          </article>
        </div>
        <aside class="example-note">
          <h3>A simple example</h3>
          <p>
            Imagine a CT examination as a stack of cross-sectional images. A viewer lets you move
            through that stack one slice at a time, adjust the display, and inspect the same volume
            from different directions. Cross Axial demonstrates these interactions for evaluation.
          </p>
        </aside>

        <div class="imaging-flow" aria-labelledby="imaging-flow-title">
          <h3 id="imaging-flow-title">Where a viewer fits</h3>
          <ol class="flow-steps">
            <li><span class="step-number" aria-hidden="true">01</span><h4>Acquire</h4><p>A scanner creates images during an examination.</p></li>
            <li><span class="step-number" aria-hidden="true">02</span><h4>Store or export</h4><p>A hospital archive stores the study, or its images are exported as DICOM files.</p></li>
            <li class="flow-current"><span class="step-number" aria-hidden="true">03</span><h4>Open in a viewer</h4><p>Cross Axial currently opens local files for image exploration and evaluation.</p></li>
            <li><span class="step-number" aria-hidden="true">04</span><h4>Review and discuss</h4><p>Evaluators inspect the workflow and share feedback on usability and behavior.</p></li>
          </ol>
          <p class="flow-caption">
            A PACS (Picture Archiving and Communication System) manages an imaging archive.
            The current Cross Axial demo works with local files; it does not require a connection to a hospital archive.
          </p>
        </div>
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
            The current build is meant to be reviewed by clinicians, engineers, and quality specialists for feedback.
            It is not released as a diagnostic workstation and should not be used for clinical decisions.
          </p>
        </div>

        <div class="status-grid">
          <table class="status-table">
            <tbody>
              ${statusRows.map(([label, value]) => `
                <tr>
                  <th scope="row">${label}</th>
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
              <img src="${shot.src}" alt="${shot.title}" loading="lazy" />
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

      <section class="section" id="imaging-terms" aria-labelledby="terms-title">
        <div class="section-head">
          <p class="eyebrow">A short imaging glossary</p>
          <h2 id="terms-title">The terms behind the features</h2>
          <p>Open any term for a plain-language explanation.</p>
        </div>
        <div class="glossary-list">
          ${glossary.map(([term, explanation]) => `
            <details>
              <summary>${term}</summary>
              <p>${explanation}</p>
            </details>
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

      <section class="section partner-section" id="collaboration" aria-labelledby="partner-title">
        <div class="section-head">
          <p class="eyebrow">For potential quality and clinical partners</p>
          <h2 id="partner-title">Help shape the product and its evidence</h2>
          <p>
            We are exploring collaboration with people experienced in Software as a Medical Device (SaMD)
            quality assurance and clinical workflows. The immediate conversation is about intended use,
            product risks, and how to build a credible evaluation process around this early viewer.
          </p>
        </div>
        <div class="capability-grid partner-topics">
          ${partnerTopics.map((topic) => `
            <article class="capability-card">
              <h3>${topic.title}</h3>
              <p>${topic.text}</p>
            </article>
          `).join('')}
        </div>
        <div class="discussion-note">
          <h3>A starting point for a conversation</h3>
          <p>
            After reviewing the workflow and current limitations, which use case would you scope first,
            and what evidence would you need to assess it? We are open to discussing an advisory role
            or a longer-term collaboration as the project develops.
          </p>
        </div>
      </section>

      <section class="closing-panel">
        <div>
          <p class="eyebrow">An early product, open to collaboration</p>
          <h2>Explore the viewer. Help define what comes next.</h2>
        </div>
        <a class="button button-primary" href="#collaboration">Explore Collaboration</a>
      </section>
    </main>
  </div>
`
