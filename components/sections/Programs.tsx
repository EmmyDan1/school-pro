const programs = [
  {
    stage: "Early Years",
    title: "A joyful start to learning.",
    description:
      "Children develop confidence, curiosity, communication, and social skills through guided exploration and play.",
    image:
       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
  },
  {
    stage: "Primary School",
    title: "Building strong academic foundations.",
    description:
      "Students develop literacy, numeracy, critical thinking, and the discipline required for long-term success.",
    image:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop"
  },
  {
    stage: "Secondary School",
    title: "Preparing future leaders.",
    description:
      "Advanced learning, leadership opportunities, and future-focused education designed to unlock potential.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-12 bg-[#fafafa]"
    >
      <div className="section">

        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Learning Journey
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Every stage thoughtfully designed for growth.
          </h2>
        </div>

        <div className="mt-20 space-y-32">

          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative">
                <div className="overflow-hidden rounded-[32px]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="max-w-lg">

                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  {program.stage}
                </p>

                <h3 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {program.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}