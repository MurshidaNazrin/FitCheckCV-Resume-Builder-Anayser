// import React, { useEffect, useState } from 'react'
// import { Plus, UploadCloudIcon, Pencil,Pen,Trash, X } from 'lucide-react';
// import { dummyResumeData } from '../assets/asset';
// import {useNavigate} from 'react-router-dom';

// function Dashboard() {
//   const colors = ['#1F3864','#333333','#168F8B','#4A2C5A','#1E4D2B']
  
//   const [allResumes, setAllResumes] = useState([]);
//   const [showCreateResume, setShowCreateResume] = useState(false);
//   const [showUploadResume, setShowUploadResume] = useState(false);
//   const [title, setTitle] = useState('');
//   const [resume, setResume] = useState(null);
//   const [editResumeId, setEditResumeId] = useState('');

//   const navigate = useNavigate();

//   const loadAllResumes = async () => {
//     setAllResumes(dummyResumeData);
//   }

//   const createResume =  async(event)=>{
//   event.preventDefault();
//   setShowCreateResume(false);
//   navigate(`/app/builder/resume123`);
//   }

//   const uploadResume = async (event) => {
//     event.preventDefault();
//   setShowUploadResume(false);
//   navigate(`/app/builder/resume123`);
//   }

//   const editTitle = async (event) => {
//      event.preventDefault();
//   }

//   const deleteResume = async (resumeId) => {
//      const confirm = window.confirm('Are you sure you want to delete resume?');
//      if(confirm){
//       setAllResumes(prev => prev.filter(resume => resume.id !== resumeId))
//      }
//   }

//   useEffect(()=>{
//    loadAllResumes();
//   },[]);
//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 t0-slate-700
//         bg-clip-text text-transparent sm:hidden">Welcome, Joe Doe</p>

//         <div className="flex gap-4">
//           <button onClick={()=>setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center
//           justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group
//           hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer'>
//             <Plus className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-blue-400 text-white
//          rounded-full'/>
//             <p className='text-sm group-hover:text-blue-400 transition-all duration-300'>Create Resume</p>
//           </button>

//           <button onClick={()=> setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center
//           justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group
//           hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer'>
//             <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-blue-400 text-white
//          rounded-full'/>
//             <p className='text-sm group-hover:text-blue-400 transition-all duration-300'>Upload Existing</p>
//           </button>
//         </div>

//         <hr className='border-slate-300 my-6 sm:w-76.25'/>

//         {/* list of resumes that user already created */}
//         <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
//           {allResumes.map((resume,index)=>{
//            const baseColor = colors[index % colors.length];
//            return(
//             <button key={index} onClick={()=> navigate(`/app/builder/${resume.id}`)} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center
//             justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer'
//             style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,borderColor: baseColor + 40}}>

//             <Pencil className='size-7 group-hover:scale-105 transition-all' style={{color: baseColor}}/>
//             <p className='text-sm group-hover:scale-105 transition-all px-2 text-center'
//             style={{color:baseColor}}>{resume.title}</p>

//             <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all
//             duration-300 px-2 text-center' style={{baseColor: + 90}}>
//               Updated On {new Date(resume.updatedAt).toLocaleDateString()}</p>

//             <div onClick={(e)=>e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
//               <Pen onClick={()=>{setEditResumeId(resume.id); setTitle(resume.title)}} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
//               <Trash onClick={()=> deleteResume(resume.id)} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
//             </div>
//             </button>



//            )
//           })}
//         </div>

//        { showCreateResume && (
//         <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} 
//         className='fixed inset-0 bg/black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//           <div onClick={e => e.stopPropagation()}>
//             <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
//             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder='Enter Resume Title' 
//             className="w-full px-4 py-2 focus:border-blue-400 ring-blue-400" required/>
//             <button className='w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors'>Create Resume</button>
//             <X className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' 
//             onClick={()=> {setShowCreateResume(false); setTitle('')}}/>
//           </div>
//         </form>
//        )}

//        {showUploadResume && (
//          <form onSubmit={uploadResume} onClick={()=> setShowUploadResume(false)} 
//         className='fixed inset-0 bg/black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//           <div onClick={e => e.stopPropagation()}>
//             <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
//             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder='Enter Resume Title' 
//             className="w-full px-4 py-2 focus:border-blue-400 ring-blue-400" required/>
//             <div>
//               <label htmlFor="resume-input" className='block text-sm text-slate-700'>
//                 Select Resume File
//                 <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400
//                 border-dashed rounded-md p-4 py-10 my-4 hover:border-blue-400 hover:text-blue-500 cursor-pointer transition-colors'>
//                 {resume ? (
//                   <p className='text-blue-400'>{resume.name}</p>
//                 ):(
//                   <>
//                   < UploadCloudIcon className='size-14 stroke-1'/>
//                   <p>Upload Resume</p>
//                   </>
//                 )}
//                 </div>
//               </label>
//               <input type="file" name="resume-input" id="resume-input" accept='.pdf' hidden onChange={(e)=>setResume(e.target.files[0])}/>
//             </div>
//             <button className='w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors'>Upload Resume</button>
//             <X className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' 
//             onClick={()=> {setShowUploadResume(false); setTitle('')}}/>
//           </div>
//         </form>
//        )}

//        { editResumeId && (
//         <form onSubmit={editTitle} onClick={()=> setEditResumeId('')} 
//         className='fixed inset-0 bg/black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//           <div onClick={e => e.stopPropagation()}>
//             <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
//             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder='Enter Resume Title' 
//             className="w-full px-4 py-2 focus:border-blue-400 ring-blue-400" required/>

//             <button className='w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors'>Update</button>
//             <X className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' 
//             onClick={()=> {setEditResumeId(''); setTitle('')}}/>
//           </div>
//         </form>
//        )}


//       </div>
//     </div>
//   )
// }

// export default Dashboard


import React, { useEffect, useState } from 'react';
import { Plus, UploadCloud, FileText, Pencil, Trash2, X, Calendar } from 'lucide-react';
import { dummyResumeData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  
  const colors = ['#31adcd', '#1F3864', '#168F8B', '#4A2C5A', '#1E4D2B'];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [editResumeId, setEditResumeId] = useState('');

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData || []);
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  const resetModals = () => {
    setShowCreateResume(false);
    setShowUploadResume(false);
    setEditResumeId('');
    setTitle('');
    setResumeFile(null);
  };

  const createResume = async (event) => {
    event.preventDefault();
    resetModals();
    navigate(`/app/builder/resume123`);
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    if (!resumeFile) return;
    resetModals();
    navigate(`/app/builder/resume123`);
  };

  const editTitle = async (event) => {
    event.preventDefault();
    setAllResumes((prev) =>
      prev.map((item) =>
        item._id === editResumeId
          ? { ...item, title: title.trim(), updatedAt: new Date().toISOString() }
          : item
      )
    );
    resetModals();
  };

  const deleteResume = (resumeId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this resume?');
    if (isConfirmed) {
      setAllResumes((prev) => prev.filter((item) => item._id !== resumeId));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Welcome back, <span className="text-[#31adcd]">Joe Doe</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Create a new resume from scratch or upload an existing PDF to tailor it.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full sm:w-48 h-48 bg-white flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-200 group hover:border-[#31adcd] hover:bg-[#31adcd]/[0.03] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="p-3.5 rounded-full bg-[#31adcd]/10 text-[#31adcd] group-hover:bg-[#31adcd] group-hover:text-white transition-all duration-200">
              <Plus className="size-7" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 group-hover:text-[#31adcd] transition-colors">
                Create Resume
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Start fresh</p>
            </div>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full sm:w-48 h-48 bg-white flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-200 group hover:border-[#31adcd] hover:bg-[#31adcd]/[0.03] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="p-3.5 rounded-full bg-[#31adcd]/10 text-[#31adcd] group-hover:bg-[#31adcd] group-hover:text-white transition-all duration-200">
              <UploadCloud className="size-7" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 group-hover:text-[#31adcd] transition-colors">
                Upload Existing
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Import PDF</p>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-between mt-10 mb-5 border-b border-slate-200 pb-3">
          <h2 className="text-base font-semibold text-slate-700">
            Your Resumes ({allResumes.length})
          </h2>
        </div>

        {/* Resumes Grid */}
        {allResumes.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
            <p className="text-slate-500 text-sm">
              No resumes yet. Click <span className="font-medium text-[#31adcd]">Create Resume</span> above to build your first one.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {allResumes.map((item, index) => {
              const baseColor = colors[index % colors.length];
              return (
                <div
                  key={item.id || index}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/app/builder/${item._id}`)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/app/builder/${item._id}`)}
                  className="relative h-52 flex flex-col items-center justify-between p-4 rounded-xl border bg-white group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, #ffffff 30%, ${baseColor}15 100%)`,
                    borderColor: `${baseColor}35`,
                  }}
                >
                  {/* Top Action Buttons */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex justify-end gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <button
                      type="button"
                      title="Rename resume"
                      onClick={() => {
                        setEditResumeId(item._id);
                        setTitle(item.title);
                      }}
                      className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-600 hover:text-[#31adcd] shadow-xs transition-colors cursor-pointer"
                    >
                      <Pencil className="size-4" />
                    </button>
                    <button
                      type="button"
                      title="Delete resume"
                      onClick={() => deleteResume(item._id)}
                      className="p-1.5 rounded-lg bg-white/80 hover:bg-red-50 text-slate-600 hover:text-red-600 shadow-xs transition-colors cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>

                  {/* Center Icon & Title */}
                  <div className="flex flex-col items-center text-center my-auto px-2">
                    <div
                      className="p-3 rounded-xl mb-3 transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${baseColor}18`, color: baseColor }}
                    >
                      <FileText className="size-7" />
                    </div>
                    <p
                      className="text-sm font-semibold line-clamp-2 leading-snug"
                      style={{ color: baseColor }}
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="w-full pt-2 border-t border-slate-200/60 flex items-center justify-center gap-1 text-[11px] text-slate-400">
                    <Calendar className="size-3" />
                    <span>Updated {new Date(item.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal 1: Create Resume */}
        {showCreateResume && (
          <div
            onClick={resetModals}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <form
              onSubmit={createResume}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-7"
            >
              <button
                type="button"
                onClick={resetModals}
                className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <h2 className="text-xl font-bold text-slate-900">Create a New Resume</h2>
              <p className="text-sm text-slate-500 mt-1 mb-5">
                Give your resume a clear title (e.g., "Frontend Developer 2026").
              </p>

              <div className="mb-5">
                <label htmlFor="create-title" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Resume Title
                </label>
                <input
                  id="create-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resume title..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/20 transition-all"
                  autoFocus
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetModals}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium bg-[#31adcd] hover:bg-[#2693b0] text-white rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Create Resume
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Modal 2: Upload Resume */}
        {showUploadResume && (
          <div
            onClick={resetModals}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <form
              onSubmit={uploadResume}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-7"
            >
              <button
                type="button"
                onClick={resetModals}
                className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <h2 className="text-xl font-bold text-slate-900">Upload Existing Resume</h2>
              <p className="text-sm text-slate-500 mt-1 mb-5">
                Import a PDF resume to parse and edit it in the builder.
              </p>

              <div className="mb-4">
                <label htmlFor="upload-title" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Resume Title
                </label>
                <input
                  id="upload-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resume title..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/20 transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  PDF Document
                </span>
                <label
                  htmlFor="resume-input"
                  className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer ${
                    resumeFile
                      ? 'border-[#31adcd] bg-[#31adcd]/5 text-[#31adcd]'
                      : 'border-slate-300 text-slate-400 hover:border-[#31adcd] hover:text-[#31adcd] hover:bg-slate-50'
                  }`}
                >
                  <UploadCloud className="size-10 stroke-1.5" />
                  {resumeFile ? (
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-800">{resumeFile.name}</p>
                      <p className="text-xs text-[#31adcd] mt-0.5">Click to replace file</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-600">Click to select a PDF</p>
                      <p className="text-xs text-slate-400 mt-0.5">PDF files only (Max 10MB)</p>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="resume-input"
                  accept=".pdf"
                  hidden
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                />
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetModals}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!resumeFile}
                  className="px-5 py-2.5 text-sm font-medium bg-[#31adcd] hover:bg-[#2693b0] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Upload & Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Modal 3: Edit Resume Title */}
        {editResumeId && (
          <div
            onClick={resetModals}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <form
              onSubmit={editTitle}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-7"
            >
              <button
                type="button"
                onClick={resetModals}
                className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <h2 className="text-xl font-bold text-slate-900">Rename Resume</h2>
              <p className="text-sm text-slate-500 mt-1 mb-5">
                Update the display name for this resume.
              </p>

              <div className="mb-5">
                <label htmlFor="edit-title" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  New Title
                </label>
                <input
                  id="edit-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resume title..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/20 transition-all"
                  autoFocus
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetModals}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium bg-[#31adcd] hover:bg-[#2693b0] text-white rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;