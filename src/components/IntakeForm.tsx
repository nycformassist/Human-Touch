import { useState } from 'react';

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    catalyst: '',
    outcome: '',
    programInterest: 'The Human Anchor™ Assessment'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an issue submitting your form. Please email directly at healthcarebyvalentine@gmail.com.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error connecting to the submission service.');
    }
  };

  return (
    <section id="intake" className="py-32 bg-[#F8F5F1] px-6 lg:px-12">
      <div className="max-w-3xl mx-auto bg-white p-8 lg:p-16 border border-[#2E2E2E]/10 shadow-sm">
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest text-[#59604E] uppercase mb-4 block font-sans">
            Confidential Application
          </span>
          <h2 className="text-3xl lg:text-4xl mb-4 text-[#2E2E2E]">Client Intake & Assessment</h2>
          <p className="text-[#2E2E2E]/80 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            Please provide context regarding your current operational baseline and objectives so we can determine if The VSM Institute™ is the right fit for your needs.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <h3 className="text-2xl text-[#2E2E2E]">Application Received</h3>
            <p className="text-[#2E2E2E]/80 font-sans max-w-md mx-auto">
              Your confidential intake has been secured. Valentine Saint Martin will review your profile and reach out via email to schedule your preliminary clinical consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-sans">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Current Role / Industry</label>
                <input 
                  type="text" 
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                  placeholder="e.g., Executive, Founder, Healthcare"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">What is the primary catalyst for reaching out today?</label>
              <textarea 
                name="catalyst"
                rows={4}
                required
                value={formData.catalyst}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                placeholder="Share details about executive fatigue, burnout, or nervous system dysregulation you are currently navigating..."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">What does a successful outcome look like for you?</label>
              <textarea 
                name="outcome"
                rows={3}
                required
                value={formData.outcome}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                placeholder="What operational or physical baseline are you trying to restore?"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Program of Interest</label>
              <select 
                name="programInterest"
                value={formData.programInterest}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
              >
                <option value="The Human Anchor™ Assessment">The Human Anchor™ Initial Assessment ($225)</option>
                <option value="Executive Resilience Program">Executive Resilience Program (Multi-Week)</option>
                <option value="Corporate Workshop">Corporate / Team Workshop Inquiry</option>
                <option value="Unsure / Let's Discuss">Unsure / Let's Discuss during consultation</option>
              </select>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                className="w-full bg-[#2E2E2E] text-[#F8F5F1] py-4 text-sm font-sans tracking-wide hover:bg-[#B38A58] transition-colors duration-300"
              >
                Submit Secure Application
              </button>
              <p className="text-xs text-[#2E2E2E]/50 mt-4">
                All submissions are strictly confidential and protected by professional privacy standards.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}