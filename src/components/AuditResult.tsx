function AuditResult() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4">
        Potential Savings: $80/month
      </h2>

      <div className="bg-slate-800 rounded-2xl p-5 mb-4">
        <h3 className="font-bold text-xl">
          ChatGPT Team → ChatGPT Plus
        </h3>

        <p className="text-slate-400 mt-2">
          Small teams rarely need Team features.
        </p>

        <p className="text-green-400 mt-3 font-bold">
          Save $20/month
        </p>
      </div>
    </div>
  );
}

export default AuditResult;