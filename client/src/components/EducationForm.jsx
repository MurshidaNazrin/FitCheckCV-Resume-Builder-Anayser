// import { GraduationCap, Plus, Trash2 } from 'lucide-react';
// import React from 'react'

// const EducationForm = ({ data, onChange }) => {
//     const addEducation = () => {
//         const newEducation = {
//             institution: "",
//             degree: "",
//             field: "",
//             graduation_date: "",
//             cgpa: ""
//         };

//         onChange([...data, newEducation]);
//     }

//     const removeEducation = (index) => {
//         const updated = data.filte((_, i) => i !== index);
//         onChange(updated);
//     }

//     const updateEducation = (index, field, value) => {
//         const updated = [...data];
//         updated[index] = { ...updated[index], [field]: value };
//         onChange(updated);
//     }

//     return (
//         <div className='space-y-6'>
//             <div className="flex items-center justify-between">
//                 <div>
//                     <h3 className='flex items-center gap-2 text-lg font-semibold
//             text-gray-900'>Education</h3>
//                     <p className="text-sm text-gray-500">Add your education details here</p>
//                 </div>
//                 <button onClick={addEducation} className='flex items-center gap-2 px-3 py-1 text-sm bg-blue-100
//         text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'>
//                     <Plus className="size-4" />
//                     Add Education
//                 </button>
//             </div>

//             {data.length === 0 ? (
//                 <div className='text-center py-8 text-gray-500'>
//                     <GraduationCap className='w-12 h-12 mx-auto mb-3 text-gray-300' />
//                     <p>No education details added yet.</p>
//                     <p className="text-sm">Click "Add Education" to get started.</p>
//                 </div>
//             ) : (
//                 <div className='space-y-4'>
//                     {data.map((education, index) => (
//                         <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
//                             <div className='flex justify-between items-start'>
//                                 <h4>Education #{index + 1}</h4>
//                                 <button onClick={() => removeEducation(index)} className='text-red-500
//                                 hover:text-red-700 transition-colors'>
//                                     <Trash2 className='size-4' />
//                                 </button>
//                             </div>

//                             <div className='grid md:grid-cols-2 gap-3'>
//                                 <input value={education.institution || ""} onChange={(e) => updateEducation(index, "institution", e.target.value)}
//                                     type="text" placeholder='Institution Name' className="px-3 py-2 text-sm"
//                                 />
                            
//                                 <input value={education.degree || ""} onChange={(e) => updateEducation(index, "degree", e.target.value)}
//                                     type="text" placeholder="Degree (e.g. Bachelor's, Master's )" className="px-3 py-2 text-sm"
//                                 />
                     

                            
//                                 <input value={education.field || ""} onChange={(e) => updateEducation(index, "field", e.target.value)}
//                                     type="text" placeholder='Field of Study' className="px-3 py-2 text-sm"
//                                 />
                            
//                                 <input value={education.graduation_date || ""} onChange={(e) => updateEducation(index, "graduation_date", e.target.value)}
//                                     type="month" className="px-3 py-2 text-sm"
//                                 />
//                             </div>

//                             <input value={education.cgpa || ""} onChange={(e) => updateEducation(index, "cgpa", e.target.value)}
//                                     type="text" className="px-3 py-2 text-sm" placeholder='CGPA {optional)'
//                                 />
//                         </div>
//                     ))}
//                 </div>)}
//         </div>

//     )
// }

// export default EducationForm




import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Percent,
  Plus,
  Trash2,
} from 'lucide-react';
import React from 'react';

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      field: '',
      graduation_date: '',
      cgpa: '',
    };

    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const completedEntries = data.filter(
    (edu) =>
      edu.institution?.trim() &&
      edu.degree?.trim() &&
      edu.graduation_date
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Status Bar */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
              <GraduationCap className="size-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Education</h3>
              <p className="text-xs text-slate-500">
                Add your academic qualifications, degrees, and certifications.
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
              onClick={addEducation}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#31adcd] px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40"
            >
              <Plus className="size-4" />
              Add Education
            </button>
          </div>
        </div>
      </div>

      {/* Empty State vs Education Cards */}
      {data.length === 0 ? (
        <div
          onClick={addEducation}
          className="group cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-10 text-center transition-all hover:border-[#31adcd]/60 hover:bg-[#31adcd]/4"
        >
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#31adcd]/10 text-[#31adcd] transition-transform group-hover:scale-105">
            <GraduationCap className="size-6" />
          </div>
          <p className="text-sm font-semibold text-slate-800">No education details added yet</p>
          <p className="mt-1 text-xs text-slate-500">
            Click <span className="font-semibold text-[#217e96]">&ldquo;Add Education&rdquo;</span>{' '}
            to include your university, college, or coursework.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((education, index) => {
            const isEntryComplete =
              Boolean(education.institution?.trim()) &&
              Boolean(education.degree?.trim()) &&
              Boolean(education.graduation_date);

            const cgpaTrimmed = education.cgpa?.trim() || '';
            const isCgpaInvalid =
              Boolean(cgpaTrimmed) && !/^[0-9]+(\.[0-9]+)?\s*(%|\s*\/\s*[0-9]+(\.[0-9]+)?)?$/.test(cgpaTrimmed);

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
                        {education.degree?.trim() || `Education #${index + 1}`}
                      </h4>
                      {education.institution?.trim() && (
                        <p className="text-[11px] text-slate-500">{education.institution}</p>
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
                      onClick={() => removeEducation(index)}
                      title="Remove education"
                      className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-4 sm:p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Institution Name */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Landmark className="size-3.5 text-[#31adcd]" />
                        Institution Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={education.institution || ''}
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        type="text"
                        placeholder="e.g., IIT Madras, University of Calicut"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Degree */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Award className="size-3.5 text-[#31adcd]" />
                        Degree <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={education.degree || ''}
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        type="text"
                        placeholder="e.g., B.Tech, M.Sc., Bachelor's"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Field of Study */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <BookOpen className="size-3.5 text-[#31adcd]" />
                        Field of Study
                      </label>
                      <input
                        value={education.field || ''}
                        onChange={(e) => updateEducation(index, 'field', e.target.value)}
                        type="text"
                        placeholder="e.g., Computer Science & Engineering"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>

                    {/* Graduation Date */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Calendar className="size-3.5 text-[#31adcd]" />
                        Graduation Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        value={education.graduation_date || ''}
                        onChange={(e) => updateEducation(index, 'graduation_date', e.target.value)}
                        type="month"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 outline-none transition-all hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15"
                      />
                    </div>
                  </div>

                  {/* CGPA / Score */}
                  <div className="space-y-1.5 pt-1">
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <Percent className="size-3.5 text-[#31adcd]" />
                        CGPA / Percentage
                      </span>
                      <span className="text-[11px] font-normal text-slate-400">Optional</span>
                    </label>

                    <input
                      value={education.cgpa || ''}
                      onChange={(e) => updateEducation(index, 'cgpa', e.target.value)}
                      type="text"
                      placeholder="e.g., 8.7 / 10 or 85%"
                      className={`w-full rounded-xl border px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all md:max-w-xs ${
                        isCgpaInvalid
                          ? 'border-amber-400 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/15'
                          : 'border-slate-200 bg-white hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15'
                      }`}
                    />

                    {isCgpaInvalid && (
                      <p className="flex items-center gap-1 text-[11px] font-medium text-amber-600">
                        <AlertCircle className="size-3.5 shrink-0" />
                        Use a numeric score like 8.5, 8.5/10, or 85%.
                      </p>
                    )}
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

export default EducationForm;