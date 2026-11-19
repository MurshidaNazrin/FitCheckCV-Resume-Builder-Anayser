// import { Plus, Trash2 } from 'lucide-react'
// import React from 'react'

// const ProjectForm = ({ data = [], onChange }) => {
//   const addProject = () => {
//     const newProject = {
//       name: "",
//       type: "",
//       description: "",
//     }
//     onChange([...data, newProject])
//   }

//   const removeProject = (index) => {
//     const updated = data.filter((_, i) => i !== index);
//     onChange(updated);
//   }

//   const updateProject = (index, field, value) => {
//     const updated = [...data];
//     updated[index] = { ...updated[index], [field]: value };
//     onChange(updated);
//   }
//   return (
//     <div className='space-y-6'>
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className='flex items-center gap-2 text-lg font-semibold
//             text-gray-900'>projects</h3>
//           <p className="text-sm text-gray-500">Add your projects here</p>
//         </div>
//         <button onClick={addProject} className='flex items-center gap-2 px-3 py-1 text-sm bg-blue-100
//         text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'>
//           <Plus className="size-4" />
//           Add Project
//         </button>
//       </div>


//       <div className='space-y-4 mt-4'>
//         {data.map((project, index) => (
//           <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
//             <div className='flex justify-between items-start'>
//               <h4>Project #{index + 1}</h4>
//               <button onClick={() => removeProject(index)} className='text-red-500
//                                 hover:text-red-700 transition-colors'>
//                 <Trash2 className='size-4' />
//               </button>
//             </div>

//             <div className='grid gap-3'>
//               <input value={project.name || ""} onChange={(e) => updateProject(index,"name", e.target.value)}
//                 type="text" placeholder='Project Name' className="px-3 py-2 text-sm rounded-lg"
//               />

//               <input value={project.type || ""} onChange={(e) => updateProject(index,"type", e.target.value)}
//                 type="text" placeholder="Project Type" className="px-3 py-2 text-sm rounded-lg"
//               />

//               <textarea rows={4} value={project.description || ""} onChange={(e) => updateProject(index, "description", e.target.value)}
//                 type="text" placeholder="Describe your project..." className="w-full px-3 py-2 text-sm rounded-lg resize-none"
//               />

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   )
// }

// export default ProjectForm


import {
  CheckCircle2,
  FileText,
  FolderGit2,
  Layers,
  Plus,
  Rocket,
  Trash2,
} from 'lucide-react';
import React from 'react';

const ProjectForm = ({ data = [], onChange }) => {
  const addProject = () => {
    const newProject = {
      name: '',
      type: '',
      description: '',
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const completedEntries = data.filter(
    (project) =>
      project.name?.trim() &&
      project.type?.trim() &&
      project.description?.trim()
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Status Bar */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
              <FolderGit2 className="size-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Projects</h3>
              <p className="text-xs text-slate-500">
                Showcase key applications, case studies, or personal builds.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {data.length > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#31adcd]/25 bg-[#31adcd]/10 px-2.5 py-1 text-xs font-semibold text-[#217e96]">
                <CheckCircle2 className="size-3.5 text-[#31adcd]" />
                {completedEntries}/{data.length} Complete
              </span>
            )}

            <button
              type="button"
              onClick={addProject}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
            >
              <Plus className="size-4" />
              Add Project
            </button>
          </div>
        </div>
      </div>

      {/* Empty State vs Project Cards */}
      {data.length === 0 ? (
        <div
          onClick={addProject}
          className="group cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-10 text-center transition-all hover:border-[#31adcd]/60 hover:bg-[#31adcd]/4"
        >
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#31adcd]/10 text-[#31adcd] transition-transform group-hover:scale-105">
            <FolderGit2 className="size-6" />
          </div>
          <p className="text-sm font-semibold text-slate-800">No projects added yet</p>
          <p className="mt-1 text-xs text-slate-500">
            Click <span className="font-semibold text-[#217e96]">&ldquo;Add Project&rdquo;</span>{' '}
            to highlight your best work and technical impact.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((project, index) => {
            const isEntryComplete =
              Boolean(project.name?.trim()) &&
              Boolean(project.type?.trim()) &&
              Boolean(project.description?.trim());

            const descLength = (project.description || '').length;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all hover:border-slate-300"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-6 items-center justify-center rounded-md bg-[#31adcd] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">
                        {project.name?.trim() || `Project #${index + 1}`}
                      </h4>
                      {project.type?.trim() && (
                        <p className="text-[11px] text-slate-500">{project.type}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        isEntryComplete
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {isEntryComplete ? 'Ready' : 'In Progress'}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      title="Remove project"
                      className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-4 sm:p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Project Name */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Rocket className="size-3.5 text-[#31adcd]" />
                        Project Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={project.name || ''}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                        type="text"
                        placeholder="e.g., AI Resume Builder, E-Commerce Platform"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Layers className="size-3.5 text-[#31adcd]" />
                        Project Type / Role
                      </label>
                      <input
                        value={project.type || ''}
                        onChange={(e) => updateProject(index, 'type', e.target.value)}
                        type="text"
                        placeholder="e.g., Full-Stack Web App, Open Source"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <FileText className="size-3.5 text-[#31adcd]" />
                        Project Description
                      </label>
                      <span className="text-[11px] font-medium text-slate-400">
                        {descLength} chars
                      </span>
                    </div>

                    <textarea
                      rows={4}
                      value={project.description || ''}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      placeholder="Describe the problem solved, core technologies used, and key outcomes..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;