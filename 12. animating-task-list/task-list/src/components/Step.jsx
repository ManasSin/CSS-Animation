import React from "react";
import { motion } from "framer-motion";

const Step = ({ step, currentStep }) => {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "completed";
  return (
    <div className="relative">
      <motion.div
        animate={status}
        variants={{
          active: {
            scale: 1,
            // opacity: 1,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          completed: {
            scale: 1.25,
            // opacity: 0,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        animate={status}
        variants={{
          inactive: {
            backgroundColor: "#fff",
            borderColor: "rgb(226 232 240)",
            color: "rgb(148 163 184)",
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#3b82f6",
            color: "#3b82f6",
          },
          completed: {
            backgroundColor: "#3b82f6",
            borderColor: "#3b82f6",
            color: "#3b82f6",
          },
        }}
        transition={{ duration: 0.3 }}
        className={`
            h-10 w-10 border-[3px] rounded-full flex items-center justify-center font-semibold relative
            `}
        // ${
        //   status === "active"
        //     ? `border-blue-400 bg-white text-blue-500`
        //     : status === "completed"
        //     ? `bg-blue-500 text-white`
        //     : `border-slate-200 bg-white text-slate-400`
        // }
      >
        <div className="flex items-center justify-center">
          {status === "completed" ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.4,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
export default Step;
