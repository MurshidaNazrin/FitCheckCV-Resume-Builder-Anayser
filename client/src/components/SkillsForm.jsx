// import { Plus, Sparkle, X } from 'lucide-react';
// import React, { useState } from 'react'

// const SkillsForm = ({data, onChange}) => {
//     const [newSkill, setNewSkill] = useState("");

//     const addSkill = ()=>{
//       if(newSkill.trim() && !data.includes(newSkill.trim())){
//         onChange([...data, newSkill.trim()])
//         setNewSkill("");
//       }  
//     }

//    const removeSkill = (index)=>{
//     onChange(data.filter((_,i)=> i !== index))
//    } 

//    const handleKeyPress = (e)=> {
//     if(e.key === 'Enter'){
//         e.preventDefault();
//         addSkill();
//     }
//    } 
//   return (
//     <div className='space-y-4'>
//      <div>  
//       <h3 className='flex items-center gap-2 text-lg font-semibold
//       text-gray-900'>Skills</h3>
//       <p className='text-sm text-gray-500'>Add your technical and soft skills</p>
//     </div>

//     <div className='flex gap-2'>
//        <input type="text" placeholder='Enter a skill (e.g., JavaScript, Project Management'
//        className='flex-1 px-3 py-2 text-sm' onChange={(e)=>setNewSkill(e.target.value)}
//        value={newSkill}  onKeyDown={handleKeyPress} 
//        />

//        <button onClick={addSkill} disabled={!newSkill.trim} 
//        className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-300 text-white 
//        rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
//         <Plus className='size-4'/>Add
//        </button> 
//     </div>

//     {data.length > 0 ?(
//         <div className='flex flex-wrap gap-2'>
//             {data.map((skill,index)=>(
//                 <span key={index} className='flex items-center gap-1 px-3 py-1 bg-blue-100
//                 text-blue-800 rounded-full text-sm'>
//                  {skill}
//                  <button onClick={()=> removeSkill(index)} className='ml-1 hover:bg-blue-200
//                  rounded-full p-0.5 transition-colors'>
//                     <X className='w-3 h-3'/>
//                  </button>
//                  </span>
//             ))}
//         </div>
//     ):(
//         <div className='text-center py-6 text-gray-500'>
//             <Sparkle className='w-10 h-10 mx-auto mb-2 text-gray-300'/>
//             <p>No skills added yet.</p>
//             <p className='text-sm'>Add your technical and soft skills above.</p>
//         </div>
//     )}

//     <div className='bg-blue-50 rounded-lg'>
//         <p className='text-sm text-blue-800'><strong>Tip:</strong>Add 8-12 relevent skills. Include both technical 
//         skills (programming languages, tools) and soft skills (leadership, communication).</p>
//     </div>
//   </div> 
//   )
// }

// export default SkillsForm



import {
  AlertCircle,
  Award,
  CheckCircle2,
  Lightbulb,
  Plus,
  Wrench,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

const SkillsForm = ({ data = [], onChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const trimmedInput = newSkill.trim();
  const isDuplicate =
    Boolean(trimmedInput) &&
    data.some((skill) => skill.toLowerCase() === trimmedInput.toLowerCase());

  const targetMax = 12;
  const progressPercent = Math.min((data.length / targetMax) * 100, 100);
  const isOptimalRange = data.length >= 8 && data.length <= 15;

  return (
    <div className="space-y-5">
      {/* Header & Skill Target Status Bar */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#31adcd]/12 text-[#31adcd]">
              <Wrench className="size-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Skills</h3>
              <p className="text-xs text-slate-500">
                Add your core technical tools, frameworks, and soft skills.
              </p>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
              isOptimalRange
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-[#31adcd]/25 bg-[#31adcd]/10 text-[#217e96]'
            }`}
          >
            {isOptimalRange && <CheckCircle2 className="size-3.5 text-emerald-600" />}
            {data.length} / {targetMax} Recommended
          </span>
        </div>

        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
          <div
            className="h-full rounded-full bg-[#31adcd] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Add Skill Input Row */}
      <div className="space-y-1.5">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a skill (e.g., React, TypeScript, Team Leadership)"
            className={`flex-1 rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all ${
              isDuplicate
                ? 'border-amber-400 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/15'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#31adcd] focus:ring-3 focus:ring-[#31adcd]/15'
            }`}
            onChange={(e) => setNewSkill(e.target.value)}
            value={newSkill}
            onKeyDown={handleKeyPress}
          />

          <button
            type="button"
            onClick={addSkill}
            disabled={!newSkill.trim() || isDuplicate}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#31adcd] px-4 py-2.5 text-sm font-semibold text-white shadow-2xs transition-all hover:bg-[#2795b1] focus:outline-none focus:ring-2 focus:ring-[#31adcd]/40 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus className="size-4" />
            Add
          </button>
        </div>

        {isDuplicate && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>&ldquo;{trimmedInput}&rdquo; is already in your skills list.</span>
          </p>
        )}
      </div>

      {/* Skills Tag Cloud vs Empty State */}
      {data.length > 0 ? (
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Added Skills ({data.length})
            </span>
            <span className="text-[11px] text-slate-400">Press Enter to add quickly</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.map((skill, index) => (
              <span
                key={index}
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#31adcd]/30 bg-[#31adcd]/10 py-1.5 pl-3 pr-2 text-xs font-semibold text-[#1e7890] transition-all hover:border-[#31adcd]/60 hover:bg-[#31adcd]/15"
              >
                <span className="size-1.5 rounded-full bg-[#31adcd]" />
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  title={`Remove ${skill}`}
                  className="ml-0.5 rounded-full p-0.5 text-[#217e96]/70 transition-colors hover:bg-rose-500/15 hover:text-rose-600"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-8 text-center">
          <div className="mx-auto mb-2.5 flex size-11 items-center justify-center rounded-full bg-[#31adcd]/10 text-[#31adcd]">
            <Award className="size-5" />
          </div>
          <p className="text-sm font-semibold text-slate-800">No skills added yet</p>
          <p className="mt-1 text-xs text-slate-500">
            Type a skill above and press <span className="font-semibold text-[#217e96]">Enter</span>{' '}
            or click <span className="font-semibold text-[#217e96]">Add</span>.
          </p>
        </div>
      )}

      {/* Pro Tip Callout */}
      <div className="flex items-start gap-2.5 rounded-xl border border-[#31adcd]/25 bg-[#31adcd]/8 p-3.5">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-[#31adcd]" />
        <p className="text-xs leading-relaxed text-slate-700">
          <strong className="font-semibold text-[#1e7890]">Tip:</strong> Aim for{' '}
          <span className="font-semibold">8–12 relevant skills</span>. Balance hard technical
          skills (languages, frameworks, tools) with soft skills (leadership, communication).
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;