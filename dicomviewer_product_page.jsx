export default function DicomViewerProductPage() {
  const repoUrl = "https://github.com/your-username/dicomviewer"; // TODO: replace
  const demoUrl = "https://your-demo-link.com"; // TODO: replace

  const screenshots = [
    // Add your screenshots here
    { src: "/screenshots/axial.png", title: "Axial View" },
    { src: "/screenshots/3d.png", title: "3D Reconstruction" },
    { src: "/screenshots/mpr.png", title: "Multi-Planar View" },
  ];

  const features = [
    {
      title: "Fast DICOM Loading",
      text: "Open and inspect CT, MRI, and radiology datasets with a responsive viewer designed for smooth interaction and efficient navigation.",
    },
    {
      title: "3D Volume Reconstruction",
      text: "Transform image slices into 3D visualizations for better anatomical understanding and a more intuitive diagnostic workflow.",
    },
    {
      title: "Multi-Planar Viewing",
      text: "Review axial, coronal, and sagittal perspectives to analyze structures from multiple angles with clarity.",
    },
    {
      title: "Measurement & Inspection Tools",
      text: "Support precise observation with essential image interaction tools such as zoom, pan, contrast adjustment, and structured inspection workflows.",
    },
  ];

  const stack = [
    "C++",
    "Qt",
    "VTK",
    "ITK",
    "DICOM",
    "Cross-Platform Architecture",
  ];

  const useCases = [
    "Medical imaging education and research",
    "Diagnostic imaging workflow prototyping",
    "3D anatomy visualization",
    "Radiology software engineering portfolios",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-600">
                Medical Imaging · Desktop Application
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                DicomViewer
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                A modern DICOM viewing application built for high-performance medical image exploration,
                3D reconstruction, and intuitive diagnostic interaction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Explore Features
                </a>
                <a
                  href={repoUrl}
                  target="_blank"
                  className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                >
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-2xl">
                <div className="rounded-[1.5rem] bg-zinc-950 p-5 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Preview</p>
                      <h3 className="text-xl font-semibold">Clinical Imaging Workspace</h3>
                    </div>
                    <div className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      CT · MRI · DICOM
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-zinc-900 p-4">
                      <div className="mb-3 h-40 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900" />
                      <p className="text-sm text-zinc-300">Axial slice viewer</p>
                    </div>
                    <div className="rounded-2xl bg-zinc-900 p-4">
                      <div className="mb-3 h-40 rounded-xl bg-gradient-to-br from-zinc-800 to-black" />
                      <p className="text-sm text-zinc-300">3D reconstruction viewport</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Load Time", "Optimized"],
                      ["Views", "2D + 3D"],
                      ["Target", "Desktop"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-2xl bg-zinc-900 p-4">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">{k}</p>
                        <p className="mt-2 text-lg font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Real application screenshots
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {screenshots.map((shot, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <img src={shot.src} alt={shot.title} className="w-full h-60 object-cover" />
              <div className="p-4 text-sm text-zinc-600">{shot.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Why DicomViewer</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for precision, speed, and visual clarity
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold">Technology Stack</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white shadow-2xl">
          <h2 className="text-3xl font-semibold">Explore the Project</h2>
          <div className="mt-6 flex gap-4">
            <a href={demoUrl} target="_blank" className="bg-white text-black px-5 py-3 rounded-xl">
              Live Demo
            </a>
            <a href={repoUrl} target="_blank" className="border px-5 py-3 rounded-xl">
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
