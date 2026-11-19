// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { dummyResumeData } from '../assets/assets';
// import { Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react';

// import PersonalInfoForm from '../components/PersonalInfoForm';
// import ResumePreview from '../components/ResumePreview';
// import TemplateSelector from '../components/TemplateSelector';
// import ColorPicker from '../components/ColorPicker';
// import ProfessionalSummary from '../components/ProfessionalSummary';
// import ExperienceForm from '../components/ExperienceForm';
// import EducationForm from '../components/EducationForm';
// import ProjectForm from '../components/ProjectForm';
// import SkillsForm from '../components/SkillsForm';

// function ResumeBuilder() {
//   const { resumeId } = useParams();

//   const [resumeData, setResumeData] = useState({
//     _id: "",
//     personal_info: {},
//     professional_summary: "",
//     experience: [],
//     education: [],
//     projects: [],
//     skills: [],
//     template: 'classic',
//     public: false,
//   });

//   const loadExistingResume = async () => {
//     const resume = dummyResumeData.find(resume => resume._id === resumeId)
//     if (resume) {
//       setResumeData(resume)
//       document.title = resume.title
//     }
//   }

//   const [activeSectionIndex, setActiveSectionIndex] = useState(0);
//   const [removeBackground, setRemoveBackground] = useState(false);

//   const section = [
//     { id: "personal", name: "Personal Info", icon: User },
//     { id: "summary", name: "Summary", icon: FileText },
//     { id: "experience", name: "Experience", icon: Briefcase },
//     { id: "education", name: "Education", icon: GraduationCap },
//     { id: "projects", name: "Projects", icon: FolderIcon },
//     { id: "skills", name: "Skills", icon: Sparkles },
//   ]

//   const activeSection = section[activeSectionIndex];

//   useEffect(() => {
//     loadExistingResume()
//   }, [])


//   const changeResumeVisibility = async () => {
//     setResumeData({...resumeData,public: !resumeData.public})
//   }

//   const handleShare = ()=>{
//     const frontendUrl = window.location.href.split('/app/')[0];
//     const resumeUrl = frontendUrl + '/view/' + resumeId;

//     if(navigator.share){
//       navigator.share({url: resumeUrl, text: "My Resume",})
//     }else{
//       alert('Share not supported on this browser.')
//     }
//   }

//   const downloadResume = ()=>{
//     window.print();
//   }

//   return (
//     <div>
//       <div className='max-w-7xl mx-auto px-4 py-6'>
//         <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
//           <ChevronLeft className='size-4' />
//           Back to Dashboard</Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-8">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* left panel - form */}
//           <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
//             <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
//               {/* progress bar using activeSectionIndex */}
//               <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
//               <hr className='absolute top-0 left-0 h-1 bg-linear-to-r from-blue-400
//             to-blue-500 border-none transition-all duration-2000'
//                 style={{ width: `${activeSectionIndex * 100 / (section.length - 1)}%` }}
//               />

//               {/* section navigation */}
//               <div className='flex items-center gap-2'>
//                 <div>
//                   <TemplateSelector selectedTemplate={resumeData.template} 
//                   onChange={(template)=> setResumeData(prev => ({...prev, template}))}/>
//                   <ColorPicker selectedColor={resumeData.accent_color} onChange={(color) =>setResumeData(prev =>({...prev, accent_color: color}))}/>
//                 </div>

//                 <div className='flex items-center'>
//                   {activeSectionIndex !== 0 && (
//                     <button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//                       className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium
//                   text-gray-600 hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
//                       <ChevronLeft className='size-4' /> Previous
//                     </button>
//                   )}

//                   <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, section.length - 1))}
//                     className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium
//                   text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === section.length - 1 && 'opacity-50'}`}
//                     disabled={activeSectionIndex === section.length - 1}>
//                     Next <ChevronRight className='size-4' />
//                   </button>
//                 </div>
//               </div>

//             {/*Form content*/}
//             <div className="space-y-6">
//               {activeSection.id === 'personal' && (
//                 <PersonalInfoForm data={resumeData.personal_info} 
//                 onChange={(data)=>setResumeData(prev => ({...prev, personal_info:data}))}
//                 removeBackground={removeBackground} setRemoveBackground={setRemoveBackground}/>
//               )}

//               {activeSection.id === 'summary' && (
//                 <ProfessionalSummary data={resumeData.professional_summary}
//                 onChange={(data)=> setResumeData(prev=> ({...prev, professional_summary: data}))}
//                 setResumeData={setResumeData}/>
//               )}

//               {activeSection.id === 'experience' && (
//                 <ExperienceForm data={resumeData.experience}
//                 onChange={(data)=> setResumeData(prev => ({...prev, experience: data}))}
//               />
//               )}

//                {activeSection.id === 'education' && (
//                 <EducationForm data={resumeData.education}
//                 onChange={(data)=> setResumeData(prev => ({...prev, education: data}))}
//               />
//               )}

//               {activeSection.id === 'projects' && (
//                 <ProjectForm data={resumeData.project}
//                 onChange={(data)=> setResumeData(prev => ({...prev, project: data}))}
//               />
//               )}

//                {activeSection.id === 'skills' && (
//                 <SkillsForm data={resumeData.skills}
//                 onChange={(data)=> setResumeData(prev => ({...prev, skills: data}))}
//               />
//               )}
//             </div>
//             <button className='bg-linear-to-br from-blue-100 to-blue-300 ring-blue-400 
//             text-blue-600 ring hover:ring-blue-400 transition-all rounded-md px-6 py-2 mt-6 text-sm'>
//               Save Changes
//             </button>
//             </div>
//           </div>

//           {/* Right panel - Preview */}
//           <div className="lg:col-span-7 max-lg:mt-6">
//             <div className='relative w-full'>
//               <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
//                 {resumeData.public && (
//                   <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br
//                   from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring
//                   transition-colors'>
//                     <Share2Icon className='size-4'/> Share
//                   </button>
//                 )}
//                 <button onClick={changeResumeVisibility} className='flex items-center p-2 px-2 gap-2 text-xs bg-linear-to-br from-purple-100 
//                 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors'>
//                   {resumeData.public ? <EyeIcon className='size-4' /> :
//                   <EyeOffIcon className='size-4' />}
//                   {resumeData.public ? 'public' : 'private'}
//                 </button>
//                 <button onClick={downloadResume} className='flex items-center p-2 px-2 gap-2 text-xs bg-linear-to-br from-green-100 
//                 to-green-200 text-green-600 ring-green-300 rounded-lg hover:ring transition-colors'>
//                   <DownloadIcon className='size-4'/> Download
//                 </button>
//               </div>
//             </div>

//             <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color}/>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default ResumeBuilder





import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummyResumeData } from '../assets/assets';
import {
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  FileText,
  FolderGit2,
  GraduationCap,
  Save,
  Share2,
  Sparkles,
  User,
} from 'lucide-react';

import PersonalInfoForm from '../components/PersonalInfoForm';
import ResumePreview from '../components/ResumePreview';
import TemplateSelector from '../components/TemplateSelector';
import ColorPicker from '../components/ColorPicker';
import ProfessionalSummary from '../components/ProfessionalSummary';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import ProjectForm from '../components/ProjectForm';
import SkillsForm from '../components/SkillsForm';

const SECTIONS = [
  { id: 'personal', name: 'Personal', icon: User },
  { id: 'summary', name: 'Summary', icon: FileText },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'projects', name: 'Projects', icon: FolderGit2 },
  { id: 'skills', name: 'Skills', icon: Sparkles },
];

function ResumeBuilder() {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: 'Untitled Resume',
    personal_info: {},
    professional_summary: '',
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: 'classic',
    accent_color: '#31adcd',
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const activeSection = SECTIONS[activeSectionIndex];
  const progressPercentage = ((activeSectionIndex + 1) / SECTIONS.length) * 100;

  const triggerToast = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 2500);
  };

  useEffect(() => {
    const resume = dummyResumeData.find((item) => item._id === resumeId);
    if (resume) {
      setResumeData((prev) => ({
        ...prev,
        ...resume,
        accent_color: resume.accent_color || '#31adcd',
      }));
      document.title = `${resume.title} | Resume Builder`;
    }
  }, [resumeId]);

  const changeResumeVisibility = () => {
    const nextState = !resumeData.public;
    setResumeData((prev) => ({ ...prev, public: nextState }));
    triggerToast(nextState ? 'Resume is now public' : 'Resume set to private');
  };

  const handleSave = () => {
    // Connect your API save call here
    triggerToast('Changes saved successfully');
  };

  const handleShare = async () => {
    const frontendUrl = window.location.href.split('/app/')[0];
    const resumeUrl = `${frontendUrl}/view/${resumeId}`;

    if (navigator.share) {
      try {
        await navigator.share({ url: resumeUrl, title: resumeData.title, text: 'Check out my resume' });
      } catch (err) {
        // User cancelled share
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(resumeUrl);
      triggerToast('Public link copied to clipboard!');
    }
  };

  const downloadResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800">
      {/* Floating Toast Notification */}
      {statusMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-xl transition-all">
          <span className="flex size-5 items-center justify-center rounded-full bg-[#31adcd] text-white">
            <Check className="size-3.5" />
          </span>
          {statusMessage}
        </div>
      )}

      {/* Top Navigation & Action Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          {/* Left: Back & Resume Title */}
          <div className="flex items-center gap-4">
            <Link
              to="/app"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-all hover:border-[#31adcd]/40 hover:bg-[#31adcd]/5 hover:text-[#31adcd]"
            >
              <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Dashboard</span>
            </Link>

            <div className="hidden h-5 w-px bg-slate-200 sm:block" />

            <div className="hidden sm:block">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Editing Resume</p>
              <h1 className="text-sm font-semibold text-slate-800 truncate max-w-50">
                {resumeData.title || 'Untitled Resume'}
              </h1>
            </div>
          </div>

          {/* Right: Global Actions */}
          <div className="flex items-center gap-2.5">
            {resumeData.public && (
              <button
                onClick={handleShare}
                title="Share Public Link"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#31adcd]/30 bg-[#31adcd]/10 px-3 py-2 text-xs font-semibold text-[#2489a3] transition-all hover:bg-[#31adcd]/20"
              >
                <Share2 className="size-3.5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            )}

            <button
              onClick={changeResumeVisibility}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                resumeData.public
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {resumeData.public ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
              <span className="capitalize">{resumeData.public ? 'Public' : 'Private'}</span>
            </button>

            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <Download className="size-3.5 text-[#31adcd]" />
              <span>Export PDF</span>
            </button>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#31adcd]/25 transition-all hover:bg-[#2896b3] active:scale-[0.99]"
            >
              <Save className="size-3.5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* LEFT PANEL: Editor Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              {/* Top Progress Bar */}
              <div className="h-1.5 w-full bg-slate-100">
                <div
                  className="h-full bg-[#31adcd] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Customization Toolbar (Template & Color) */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) => setResumeData((prev) => ({ ...prev, template }))}
                  />
                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={(color) => setResumeData((prev) => ({ ...prev, accent_color: color }))}
                  />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Step {activeSectionIndex + 1} of {SECTIONS.length}
                </span>
              </div>

              {/* Interactive Section Stepper Pills */}
              <div className="border-b border-slate-100 px-5 py-3">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {SECTIONS.map((sec, idx) => {
                    const Icon = sec.icon;
                    const isActive = idx === activeSectionIndex;
                    const isCompleted = idx < activeSectionIndex;

                    return (
                      <button
                        key={sec.id}
                        onClick={() => setActiveSectionIndex(idx)}
                        className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-[#31adcd] text-white shadow-xs shadow-[#31adcd]/30'
                            : isCompleted
                            ? 'bg-[#31adcd]/10 text-[#23849e] hover:bg-[#31adcd]/20'
                            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                        }`}
                      >
                        <Icon className="size-3.5" />
                        <span>{sec.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Form Body */}
              <div className="p-6">
                <div className="mb-5">
                  <h2 className="text-lg font-bold text-slate-800">{activeSection.name} Details</h2>
                  <p className="text-xs text-slate-500">
                    Fill in your {activeSection.name.toLowerCase()} information to update the live preview.
                  </p>
                </div>

                <div className="space-y-6">
                  {activeSection.id === 'personal' && (
                    <PersonalInfoForm
                      data={resumeData.personal_info}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, personal_info: data }))}
                      removeBackground={removeBackground}
                      setRemoveBackground={setRemoveBackground}
                    />
                  )}

                  {activeSection.id === 'summary' && (
                    <ProfessionalSummary
                      data={resumeData.professional_summary}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, professional_summary: data }))}
                      setResumeData={setResumeData}
                    />
                  )}

                  {activeSection.id === 'experience' && (
                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, experience: data }))}
                    />
                  )}

                  {activeSection.id === 'education' && (
                    <EducationForm
                      data={resumeData.education}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, education: data }))}
                    />
                  )}

                  {activeSection.id === 'projects' && (
                    <ProjectForm
                      data={resumeData.project}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, project: data }))}
                    />
                  )}

                  {activeSection.id === 'skills' && (
                    <SkillsForm
                      data={resumeData.skills}
                      onChange={(data) => setResumeData((prev) => ({ ...prev, skills: data }))}
                    />
                  )}
                </div>
              </div>

              {/* Card Footer Navigation */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-6 py-4">
                <button
                  onClick={() => setActiveSectionIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={activeSectionIndex === 0}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" />
                  Previous
                </button>

                {activeSectionIndex < SECTIONS.length - 1 ? (
                  <button
                    onClick={() => setActiveSectionIndex((prev) => Math.min(prev + 1, SECTIONS.length - 1))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-[#31adcd]/25 transition-all hover:bg-[#2896b3]"
                  >
                    Next Section
                    <ChevronRight className="size-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-[#31adcd]/25 transition-all hover:bg-[#2896b3]"
                  >
                    <Check className="size-4" />
                    Finish & Save
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Live Document Preview */}
          <div className="lg:col-span-7 lg:sticky lg:top-20">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-200/50 p-3 sm:p-6 shadow-inner">
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#31adcd] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Live Preview
                  </span>
                </div>
                <span className="text-xs text-slate-400">A4 Standard Format</span>
              </div>

              <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5">
                <ResumePreview
                  data={resumeData}
                  template={resumeData.template}
                  accentColor={resumeData.accent_color}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumeBuilder;