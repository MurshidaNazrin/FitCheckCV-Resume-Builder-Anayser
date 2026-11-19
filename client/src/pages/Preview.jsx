// import React, { useEffect, useState } from 'react';
// import { dummyResumeData } from '../assets/assets';
// import { useParams } from 'react-router-dom';
// import ResumePreview from '../components/ResumePreview';
// import Loader from '../components/Loader';
// import { ArrowLeftIcon } from 'lucide-react';

// const Preview = () => {
//   const {resumeId } = useParams();

//   const [isLoading, setLoading] = useState(false);
//   const [resumeData, setResumeData] = useState(null);

//   const loadResume= async ()=>{
//     setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
//   }

//   useEffect(()=>{
//     loadResume()
//   },[])
//   return resumeData ? (
//     <div className='bg-slate-100'>
//       <div className="max-w-3xl mx-auto py-10">
//         <ResumePreview data={resumeData} template={resumeData.template}
//         accentColor={resumeData.accent_color} classes='py-4 bg-white'/>
//       </div>
//     </div>
//   ):(
//     <div>
//       {isLoading ? <Loader /> : (
//        <div className='flex flex-col items-center justify-center h-screen'>
//         <p className='text-center text-6xl text-slate-400 font-medium'>Resume not found</p>
//         <a href="/" className='mt-6 bg-blue-300 hover:bg-blue-500 text-white rounded-full 
//         px-6 h-9 m-1 ring-offset-1 ring-1 ring-blue-400 flex items-center transition-colors'>
//           <ArrowLeftIcon className='mr-2 size-4'/>
//           go to home page
//         </a>
//          </div>
//       )}
//     </div>
//   )
// }

// export default Preview



import React, { useEffect, useState } from 'react';
import { dummyResumeData } from '../assets/assets';
import { useParams } from 'react-router-dom';
import ResumePreview from '../components/ResumePreview';
import Loader from '../components/Loader';
import { ArrowLeft, FileCheck2, FileQuestion, Printer } from 'lucide-react';

const Preview = () => {
  const { resumeId } = useParams();

  const [isLoading, setLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(dummyResumeData.find((resume) => resume._id === resumeId) || null);
  };

  useEffect(() => {
    loadResume();
  }, []);

  return resumeData ? (
    <div className="min-h-screen bg-slate-100/90 text-slate-800">
      {/* Top Preview Status & Quick Action Bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <a
              href="/"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:border-[#31adcd]/40 hover:bg-[#31adcd]/8 hover:text-[#217e96]"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Home</span>
            </a>

            <div className="hidden h-4 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2 min-w-0">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
                <FileCheck2 className="size-4" />
              </span>
              <div className="truncate">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Shared Resume Preview
                </p>
                <p className="truncate text-xs font-bold text-slate-800">
                  {resumeData.title || resumeData.personal_info?.full_name || 'Candidate Resume'}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#31adcd] px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
          >
            <Printer className="size-3.5" />
            <span>Print / Save</span>
          </button>
        </div>
      </header>

      {/* Document Stage */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 print:p-0">
        <div className="mb-3 flex items-center justify-between px-1 text-xs text-slate-500 print:hidden">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="size-2 rounded-full bg-[#31adcd]" />
            Template: <strong className="capitalize text-slate-700">{resumeData.template || 'Classic'}</strong>
          </span>
          <span className="text-[11px] text-slate-400">ID: {resumeId}</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg ring-1 ring-slate-900/5 print:rounded-none print:border-0 print:shadow-none print:ring-0">
          <ResumePreview
            data={resumeData}
            template={resumeData.template}
            accentColor={resumeData.accent_color}
            classes="py-4 bg-white"
          />
        </div>
      </main>
    </div>
  ) : (
    <div className="min-h-screen bg-slate-50">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#31adcd]/12 text-[#31adcd]">
              <FileQuestion className="size-7" />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#31adcd]">
              404 • Preview Unavailable
            </p>
            <h1 className="mt-1.5 text-2xl font-bold text-slate-900">Resume not found</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              The resume link may be invalid, private, or no longer available.
            </p>

            <a
              href="/"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#31adcd] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#31adcd]/25 transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
            >
              <ArrowLeft className="size-4" />
              <span>Go to home page</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
