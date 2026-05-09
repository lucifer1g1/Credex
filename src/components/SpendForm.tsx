import { useNavigate } from "react-router-dom";

function SpendForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-3xl text-white">
      <h2 className="text-3xl font-bold mb-6">
        Tell us your AI stack
      </h2>

      <input
        className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        placeholder="Tool name (ChatGPT, Claude...)"
      />

      <input
        className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        placeholder="Plan (Plus, Team...)"
      />

      <input
        type="number"
        className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        placeholder="Monthly spend ($)"
      />
ber"
        className="w-
      <input
        type="number"
        className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        placeholder="Seats"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 transition p-4 rounded-xl font-bold"
      >
        Generate Audit
      </button>
    </div>
  );
}

export default SpendForm;