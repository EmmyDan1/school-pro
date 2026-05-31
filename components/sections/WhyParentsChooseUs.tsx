export default function WhyParentsChooseUs() {
  const points = [
    "Safe, structured learning environment",
    "Strong academic foundation built for confidence",
    "Experienced teachers focused on individual growth",
    "Clear communication between school and parents",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            Built on trust,
            <span className="block text-slate-500">
              designed for children to thrive.
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Everything we do is centered around safety, structure, and meaningful learning.
          </p>
        </div>

        {/* SIMPLE LIST (NOT GRID / NOT CARDS) */}
        <div className="mt-14 space-y-5 max-w-2xl">

          {points.map((text, i) => (
            <div key={i} className="flex items-start gap-4">

              {/* DOT */}
              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-slate-900 shrink-0" />

              {/* TEXT */}
              <p className="text-slate-700 text-lg leading-relaxed">
                {text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}