// import {BriefcaseBusiness, Plus, Trash2, Sparkle } from 'lucide-react'
// import React from 'react'

// const ExperienceForm = ({ data, onChange }) => {
//    const addExperience = ()=> {
//     const newExperience = {
//         company: "",
//         position: "",
//         start_date: "",
//         end_date: "",
//         description: "",
//         is_current: false
//     };
//     onChange([...data, newExperience]);

//     }

//     const removeExperience = (index) => {
//         const updated = data.filter((_, i) => i !== index);
//         onChange(updated);
//     }

//     const updateExperience = (index, field, value) => {
//         const updated = [...data];
//         updated[index] = { ...updated[index], [field]: value };
//         onChange(updated);
//     }
//     return (
//         <div className='space-y-6'>
//             <div className="flex items-center justify-between">
//                 <div>
//                     <h3 className='flex items-center gap-2 text-lg font-semibold
//             text-gray-900'>Professional Experience</h3>
//                     <p className="text-sm text-gray-500">Add  your job experience here</p>
//                 </div>
//                 <button onClick={addExperience} className='flex items-center gap-2 px-3 py-1 text-sm bg-blue-100
//         text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'>
//                     <Plus className="size-4" />
//                     Add Experience
//                 </button>
//             </div>

//             {data.length === 0 ? (
//                 <div className='text-center py-8 text-gray-500'>
//                     <BriefcaseBusiness className='w-12 h-12 mx-auto mb-3 text-gray-300'/>
//                     <p>No work experience added yet.</p>
//                     <p className="text-sm">Click "Add Experience" to get started.</p>
//                 </div>
//             ) : (
//                 <div className='space-y-4'>
//                     {data.map((experience, index) => (
//                         <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
//                             <div className='flex justify-between items-start'>
//                                 <h4>Experience #{index + 1}</h4>
//                                 <button onClick={() => removeExperience(index)} className='text-red-500
//                     hover:text-red-700 transition-colors'>
//                                     <Trash2 className='size-4' />
//                                 </button>
//                             </div>

//                             <div className='grid md:grid-cols-2 gap-3'>
//                                 <input value={experience.company || ""} onChange={(e) => updateExperience(index, "company", e.target.value)}
//                                     type="text" placeholder='Company Name' className="px-3 py-2 text-sm rounded-lg"
//                                 />
                            

                            
//                                 <input value={experience.position || ""} onChange={(e) => updateExperience(index, "position", e.target.value)}
//                                     type="text" placeholder='Job Title' className="px-3 py-2 text-sm rounded-lg"
//                                 />
                            

                            
//                                 <input value={experience.start_date || ""} onChange={(e) => updateExperience(index, "start_date", e.target.value)}
//                                     type="month" className="px-3 py-2 text-sm rounded-lg"
//                                 />
                            

                            
//                                 <input value={experience.end_date || ""} onChange={(e) => updateExperience(index, "end_date", e.target.value)}
//                                     type="month" disabled={experience.is_current} className="px-3 py-2 text-sm rounded-lg disabled:bg-gray-100"
//                                 />
//                             </div>

//                             <label>
//                                 <input type='checkbox' checked={experience.is_current || false} onChange={(e) => { updateExperience(index, "is_current", e.target.checked ? true : false); }}
//                                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-300"
//                                 />
//                                 <span className='text-sm text-gray-700'>Currently working here</span>
//                             </label>

//                             <div className="space-y-2">
//                                 <div className='flex items-center justify-between'>
//                                     <label className='text-sm font-medium text-gray-700'>Job Description</label>
//                                     <button className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700
//                                 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
//                                         <Sparkle className='w-3 h-3' />
//                                         Enhance with AI
//                                     </button>
//                                 </div>
//                                 <textarea value={experience.description || ""} onChange={(e)=>{updateExperience(index,"description",e.target.value)}} 
//                                 rows="4" className='w-full text-sm px-3 py-2 rounded-lg resize-none'
//                                 placeholder='Describe your key responsibilities and achievements...'></textarea>
//                             </div>
//                         </div>
//                     ))}
//                 </div>)}
//         </div>
//     )
// }

// export default ExperienceForm




import {
  AlertCircle,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  Plus,
  Trash2,
  Wand2,
} from 'lucide-react';
import React from 'react';

const ExperienceForm = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      start_date: '',
      end_date: '',
      description: '',
      is_current: false,
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const completedEntries = data.filter(
    (exp) =>
      exp.company?.trim() &&
      exp.position?.trim() &&
      exp.start_date &&
      (exp.is_current || exp.end_date)
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Status Bar */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
              <BriefcaseBusiness className="size-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Professional Experience</h3>
              <p className="text-xs text-slate-500">
                Add your work history, starting with your most recent role.
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
              onClick={addExperience}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
            >
              <Plus className="size-4" />
              Add Experience
            </button>
          </div>
        </div>
      </div>

      {/* Empty State vs Experience Cards */}
      {data.length === 0 ? (
        <div
          onClick={addExperience}
          className="group cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-10 text-center transition-all hover:border-[#31adcd]/60 hover:bg-[#31adcd]/4"
        >
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#31adcd]/10 text-[#31adcd] transition-transform group-hover:scale-105">
            <BriefcaseBusiness className="size-6" />
          </div>
          <p className="text-sm font-semibold text-slate-800">No work experience added yet</p>
          <p className="mt-1 text-xs text-slate-500">
            Click <span className="font-semibold text-[#217e96]">&ldquo;Add Experience&rdquo;</span>{' '}
            to highlight your roles and achievements.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((experience, index) => {
            const isDateRangeInvalid =
              !experience.is_current &&
              Boolean(experience.start_date) &&
              Boolean(experience.end_date) &&
              experience.end_date < experience.start_date;

            const isEntryComplete =
              Boolean(experience.company?.trim()) &&
              Boolean(experience.position?.trim()) &&
              Boolean(experience.start_date) &&
              (experience.is_current || Boolean(experience.end_date)) &&
              !isDateRangeInvalid;

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
                        {experience.position?.trim() || `Experience #${index + 1}`}
                      </h4>
                      {experience.company?.trim() && (
                        <p className="text-[11px] text-slate-500">{experience.company}</p>
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
                      onClick={() => removeExperience(index)}
                      title="Remove experience"
                      className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-4 sm:p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Building2 className="size-3.5 text-[#31adcd]" />
                        Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={experience.company || ''}
                        onChange={(e) => updateExperience(index, 'company', e.target.value)}
                        type="text"
                        placeholder="e.g., Infosys, Google"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Job Title */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <BadgeCheck className="size-3.5 text-[#31adcd]" />
                        Job Title <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={experience.position || ''}
                        onChange={(e) => updateExperience(index, 'position', e.target.value)}
                        type="text"
                        placeholder="e.g., Senior Frontend Developer"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Start Date */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Calendar className="size-3.5 text-[#31adcd]" />
                        Start Date
                      </label>
                      <input
                        value={experience.start_date || ''}
                        onChange={(e) => updateExperience(index, 'start_date', e.target.value)}
                        type="month"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* End Date */}
                    <div className="space-y-1.5">
                      <label className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-[#31adcd]" />
                          End Date
                        </span>
                        {experience.is_current && (
                          <span className="text-[11px] font-medium text-[#217e96]">Present</span>
                        )}
                      </label>
                      <input
                        value={experience.end_date || ''}
                        onChange={(e) => updateExperience(index, 'end_date', e.target.value)}
                        type="month"
                        disabled={experience.is_current}
                        className={`w-full rounded-xl border px-3.5 py-2 text-sm outline-none transition-all disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 ${
                          isDateRangeInvalid
                            ? 'border-rose-400 text-rose-700 focus:ring-3 focus:ring-rose-500/15'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Date Validation Warning */}
                  {isDateRangeInvalid && (
                    <div className="flex items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                      <AlertCircle className="size-4 shrink-0" />
                      <span>End date cannot be earlier than the start date.</span>
                    </div>
                  )}

                  {/* Current Role Checkbox */}
                  <label className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 px-3 py-2 transition-colors hover:border-[#31adcd]/40">
                    <input
                      type="checkbox"
                      checked={experience.is_current || false}
                      onChange={(e) => {
                        updateExperience(index, 'is_current', e.target.checked ? true : false);
                      }}
                      className="size-4 rounded border-slate-300 accent-[#31adcd] focus:ring-[#31adcd]/30"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      Currently working here
                    </span>
                  </label>

                  {/* Description & AI Enhance */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between gap-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Job Description
                      </label>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#31adcd]/30 bg-[#31adcd]/10 px-2.5 py-1 text-xs font-semibold text-[#217e96] transition-all hover:border-[#31adcd]/50 hover:bg-[#31adcd]/18 disabled:opacity-50"
                      >
                        <Wand2 className="size-3 text-[#31adcd]" />
                        Enhance with AI
                      </button>
                    </div>
                    <textarea
                      value={experience.description || ''}
                      onChange={(e) => updateExperience(index, 'description', e.target.value)}
                      rows="4"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      placeholder="Describe your key responsibilities, tech stack, and measurable achievements..."
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

export default ExperienceForm;