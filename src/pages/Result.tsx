import AuditResult from "../components/AuditResult";
import SummaryBox from "../components/SummaryBox";

function Result() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Audit Results
      </h1>

      <AuditResult />
      <SummaryBox />
    </div>
  );
}

export default Result;