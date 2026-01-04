export default function Education() {
  return (
    <section id="education" className="bg-surface py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10">Education</h3>

        <div className="space-y-6">

          {/* Degree */}
          <div className="border border-border rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h4 className="text-xl font-semibold">
                B.Sc Computer Science
              </h4>
              <span className="text-primary font-medium">
                74%
              </span>
            </div>
            <p className="text-muted mt-2">
              Rajapalayam Rajus’ College
            </p>
          </div>

          {/* HSC */}
          <div className="border border-border rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h4 className="text-xl font-semibold">
                Higher Secondary (HSC)
              </h4>
              <span className="text-primary font-medium">
                85%
              </span>
            </div>
            <p className="text-muted mt-2">
              P.A.C.M. Higher Secondary School
            </p>
          </div>

          {/* SSLC */}
          <div className="border border-border rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h4 className="text-xl font-semibold">
                Secondary School (SSLC)
              </h4>
              <span className="text-primary font-medium">
                79%
              </span>
            </div>
            <p className="text-muted mt-2">
              P.A.C.M. Higher Secondary School
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
