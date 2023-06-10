import { useState } from "react";
import Step from "../components/Step";

function MultiStep() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen flex items-start bg-gradient-to-br from-slate-400 to-slate-900 pt-40">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8 ">
          <Step step={1} currentStep={currentStep} />
          <Step step={2} currentStep={currentStep} />
          <Step step={3} currentStep={currentStep} />
          <Step step={4} currentStep={currentStep} />
        </div>

        <div className="px-8 pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-4/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() =>
                setCurrentStep(currentStep < 2 ? currentStep : currentStep - 1)
              }
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
            >
              Back
            </button>
            <button
              onClick={() =>
                setCurrentStep(currentStep > 4 ? currentStep : currentStep + 1)
              }
              className={`${
                currentStep > 4 ? "pointer-events-none opacity-50" : ""
              } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiStep;
