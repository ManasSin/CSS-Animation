import { useState } from "react";
import * as Icons from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";

let titles = [
  ["Apple's newest iPhone is here", "Watch our July event"],
  [
    "Nintendo's Newsletter for July",
    "Introducing Strike, a 5-on-5 soccer game",
  ],
  ["Your funds have been processed", "See your latest deposit online"],
  ["This Week in Sports", "The finals are heating up"],
  ["Changelog update", "Edge subroutines and more"],
  ["React Hawaii is here!", "Time for fun in the sun"],
];

function Email() {
  const [messages, setMessages] = useState([...Array(9).keys()]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  const toggleMessage = (mid) => {
    if (selectedMessages.includes(mid)) {
      setSelectedMessages((messages) => messages.filter((id) => id !== mid));
    } else {
      setSelectedMessages((messages) => [mid, ...messages]);
    }
  };

  const addMessage = () => {
    const newId = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newId]);
  };

  const archiveMessages = () => {
    setMessages((messages) =>
      messages.filter((id) => !selectedMessages.includes(id))
    );
    setSelectedMessages([]);
  };

  return (
    <div className="h-screen min-w-full flex items-center justify-center overscroll-y-auto bg-gradient-to-br from-slate-500 to-slate-900 py-8 px-6 text-slate-600">
      <div className="mx-auto w-full h-full max-w-full lg:max-w-5xl flex-1 overflow-hidden rounded-2xl bg-white flex">
        {/* left side panel */}
        <div className="flex flex-col py-2 w-[45%] bg-slate-50">
          <div className="border-b px-5">
            <div className="flex justify-between py-2 text-right">
              <button
                onClick={addMessage}
                className="mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
              >
                <Icons.MailIcon className="h-5 w-5" />
              </button>
              <button
                onClick={archiveMessages}
                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
              >
                <Icons.ArchiveIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <ul className="overflow-y-scroll px-3 pt-2">
            <AnimatePresence initial={false}>
              {[...messages].reverse().map((mid) => (
                <motion.li
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ opacity: { duration: 0.3 } }}
                  key={mid}
                  className="relative py-0.5"
                >
                  <button
                    onClick={() => toggleMessage(mid)}
                    className={`block w-full cursor-pointer truncate rounded py-3 px-3 text-left
                  ${
                    selectedMessages.includes(mid)
                      ? "bg-blue-500"
                      : "hover:bg-slate-200"
                  }`}
                  >
                    <p
                      className={`${
                        selectedMessages.includes(mid)
                          ? "text-white"
                          : "text-slate-500"
                      }`}
                    >
                      {titles[mid % titles.length][0]}
                    </p>
                    <p
                      className={`${
                        selectedMessages.includes(mid)
                          ? "text-blue-200"
                          : "text-slate-400"
                      }`}
                    >
                      {titles[mid % titles.length][1]}
                    </p>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
        {/* right side */}
        <div className="flex-1 overflow-y-scroll border-1 px-8 py-8">
          <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(9).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-100" />
                <p className="h-4  rounded bg-slate-100" />
                <p className="h-4 w-4/6 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Email;
