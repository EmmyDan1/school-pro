export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="section py-6 lg:py-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <p className="text-xl font-semibold text-slate-900">
              15+ Years
            </p>
            <p className="text-sm text-slate-500">
              Academic Excellence
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">
              500+ Students
            </p>
            <p className="text-sm text-slate-500">
              Enrolled
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">
              Safe Campus
            </p>
            <p className="text-sm text-slate-500">
              Child Protection First
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">
              Modern Learning
            </p>
            <p className="text-sm text-slate-500">
              Tech-Enabled Classes
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}