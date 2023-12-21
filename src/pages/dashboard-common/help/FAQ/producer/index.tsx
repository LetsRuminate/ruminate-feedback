import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";

export default function ProducerSupport() {
  return (
    <div className="text-brand-black pb-8 flex-1">
      <div className="my-4 px-20">
        <Link to="/producer">
          <button>Dashboard</button>
        </Link>{" "}
        &gt; <span className="font-semibold">Help / FAQ</span>
      </div>
      <div className="border-t border-[#D9D9D9] px-20">
        <h2 className="mt-2 text-5xl font-anton font-medium">
          HOW TO USE FEEDBACK
        </h2>
        <div className="flex items-center justify-between mt-10 border-t border-b border-black py-5">
          <p>How do I start an evaluation?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>Where can I find completed evaluations on my products?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>Can I see the evaluations as they come in?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>Can I change the information about my business or products?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>Can I choose evaluators for my product?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>When will I get my evaluation results?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
      </div>
      <div className="border-t border-[#D9D9D9] px-20">
        <h2 className="mt-20 text-5xl font-anton font-medium">FOR PRODUCERS</h2>
        <div className="flex items-center justify-between mt-10 border-t border-b border-black py-5">
          <p>How do I know that I will receive a good quality of feedback?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>What is the time commitment for an evaluation?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>How long will it take for me to get the feedback?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>What certifications does Feedback recognize?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
        <div className="flex items-center justify-between border-b border-black py-5">
          <p>I have questions about my feedback. Who can I ask?</p>
          <MdAdd className="font-bold text-3xl" />
        </div>
      </div>
    </div>
  );
}
