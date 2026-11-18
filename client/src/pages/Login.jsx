import React from 'react';
import { Link } from 'react-router-dom';
import {ChevronRight, UserRound, Mail,Lock, Eye, EyeOff} from 'lucide-react';

function Login() {
  const query = new URLSearchParams(window.location.search);
  console.log(query);
  
  const urlState = query.get('state');
  const [state, setState] = React.useState(urlState || 'login');
  const [showPassword, setShowPassword] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${state} submitted:`, formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-linear-to-br from-[#6fcbe4] via-[#d7f3fa] to-white px-4 overflow-hidden">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#31adcd]/20 blur-3xl" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/85 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(49,173,205,0.18)] rounded-3xl px-8 py-10 text-center"
      >
        {/* Back Link */}
        <div className="text-left mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#238ca8] transition"
          >
            <ChevronRight width="14" height="14"/>
            Back to home
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-slate-900 text-3xl font-semibold tracking-tight">
          {state === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          {state === 'login'
            ? 'Please sign in to continue to your workspace'
            : 'Fill in your details to get started'}
        </p>

        {/* Name Field (Sign Up only) */}
        {state !== 'login' && (
          <div className="flex items-center mt-6 w-full bg-[#f2fafd] border border-[#cdebf4] focus-within:border-[#31adcd] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#6fcbe4]/25 h-12 rounded-full overflow-hidden px-5 gap-3 transition-all">
            <UserRound width="17" height="17" fill="none" stroke="currentColor" className="text-[#31adcd] shrink-0"/>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 border-none outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="flex items-center w-full mt-4 bg-[rgb(242,250,253)] border border-[#cdebf4] focus-within:border-[#31adcd] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#6fcbe4]/25 h-12 rounded-full overflow-hidden px-5 gap-3 transition-all">
          <Mail width="17" height="17" className="text-[#31adcd] shrink-0"/>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 border-none outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mt-4 w-full bg-[#f2fafd] border border-[#cdebf4] focus-within:border-[#31adcd] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#6fcbe4]/25 h-12 rounded-full overflow-hidden px-5 gap-3 transition-all">
          <Lock width="17" height="17" className="text-[#31adcd] shrink-0"/>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 border-none outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="text-slate-400 hover:text-[#238ca8] transition cursor-pointer"
          >
            {showPassword ? (
              <EyeOff width="16" height="16"/>
            ) : (
              <Eye width="16" height="16"/>
            )}
          </button>
        </div>

        {/* Forgot Password */}
        {state === 'login' && (
          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={() => alert('Reset password clicked')}
              className="text-xs font-medium text-[#238ca8] hover:text-[#1b7087] hover:underline cursor-pointer"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full h-12 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#31adcd] to-[#5ec4df] hover:from-[#279ab8] hover:to-[#4ab6d4] active:scale-[0.98] shadow-lg shadow-[#31adcd]/30 transition cursor-pointer"
        >
          {state === 'login' ? 'Sign In' : 'Create Account'}
        </button>

        {/* Toggle Mode */}
        <p className="text-slate-500 text-sm mt-6">
          {state === 'login' ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setState((prev) => (prev === 'login' ? 'register' : 'login'))}
            className="text-[#238ca8] font-semibold hover:underline ml-1.5 cursor-pointer"
          >
            {state === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
