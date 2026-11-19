// import React from 'react';
// import { Sparkle } from 'lucide-react';

// const ProfessionalSummary = ({ data, onChange, setResumeData }) => {
//     return (
//         <div className='space-y-4'>
//             <div className="flex items-center justify-between">
//                 <div>
//                     <h3 className='flex items-center gap-2 text-lg font-semibold
//             text-gray-900'>Professional Summary</h3>
//                     <p className="text-sm text-gray-500">Add summary for your resume here</p>
//                 </div>
//                 <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
//         text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity50'>
//                     <Sparkle className="size-4" />
//                     AI Enhance
//                 </button>
//             </div>

//             <div className='mt-6'>
//                 <textarea value={data || ""} onChange={(e) => onChange(e.target.value)} rows={7}
//                     className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg
//           focus:ring focus:ring-blue-300 focus:border-blue-300 outline-none
//           transition-colors resize-none' placeholder='Write a compelling professional summary
//           that highlights your key strengths and career objectives...'  />
//                 <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>
//                     Kepp it concise(3-4 sentences) and focus on your most relevent acievments and skills.</p>
//             </div>
//         </div>
//     )
// }

// export default ProfessionalSummary




import React from 'react';
import { FileText, Wand2 } from 'lucide-react';

const ProfessionalSummary = ({ data, onChange, setResumeData }) => {
  const textValue = data || '';
  const trimmedText = textValue.trim();
  const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
  const charCount = textValue.length;

  const getLengthStatus = () => {
    if (!wordCount) {
      return {
        label: 'Empty',
        tone: 'text-slate-500 bg-slate-100',
        note: 'Aim for 3–4 concise sentences (roughly 40–80 words) highlighting core impact and skills.',
      };
    }
    if (wordCount < 25) {
      return {
        label: 'Short draft',
        tone: 'text-amber-700 bg-amber-50 border-amber-200',
        note: 'Consider adding 1–2 measurable achievements or domain strengths.',
      };
    }
    if (wordCount <= 90) {
      return {
        label: 'Ideal length',
        tone: 'text-[#1f758c] bg-[#31adcd]/12 border-[#31adcd]/25',
        note: 'Strong, scannable summary length for most resume templates.',
      };
    }
    return {
      label: 'A bit lengthy',
      tone: 'text-amber-700 bg-amber-50 border-amber-200',
      note: 'Trim extra filler so recruiters can spot your key value quickly.',
    };
  };

  const status = getLengthStatus();

  return (
    <div className="space-y-4">
      {/* Header & AI Action */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
            <FileText className="size-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Professional Summary</h3>
            <p className="text-xs text-slate-500">
              Add a crisp overview of your experience, strengths, and career goals.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#31adcd]/30 bg-[#31adcd]/10 px-3 py-1.5 text-xs font-semibold text-[#217e96] transition-all hover:border-[#31adcd]/50 hover:bg-[#31adcd]/18 focus:outline-none focus:ring-2 focus:ring-[#31adcd]/35 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Wand2 className="size-3.5 text-[#31adcd]" />
          <span>AI Enhance</span>
        </button>
      </div>

      {/* Textarea & Status Bar */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition-colors focus-within:border-[#31adcd] focus-within:ring-3 focus-within:ring-[#31adcd]/15">
        <textarea
          value={data || ''}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="block w-full resize-none border-0 bg-transparent px-4 py-3.5 text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 focus:outline-none"
          placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
        />

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/80 px-4 py-2 text-xs">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${status.tone}`}
          >
            {status.label}
          </span>

          <div className="flex items-center gap-3 font-medium text-slate-500">
            <span>{wordCount} words</span>
            <span className="text-slate-300">•</span>
            <span>{charCount} chars</span>
          </div>
        </div>
      </div>

      {/* Concise Writing Tip */}
      <p className="text-center text-xs text-slate-500">{status.note}</p>
    </div>
  );
};

export default ProfessionalSummary;