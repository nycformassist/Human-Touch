import { useState } from 'react';

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    preferredExperience: 'Human Anchor Signature Experience'
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
            Confidential Questionnaire
          </span>
          <h2 className="text-3xl lg:text-4xl mb-4 text-[#2E2E2E]">Client Intake Assessment</h2>
          <p className="text-[#2E2E2E]/80 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            Please share a few details about what you are currently experiencing and your wellness goals so we can determine the right path forward together.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <h3 className="text-2xl text-[#2E2E2E]">Thank You</h3>
            <p className="text-[#2E2E2E]/80 font-sans max-w-md mx-auto">
              Your intake assessment has been received. Valentine Saint Martin will review your submission and reach out via email to schedule your complimentary video consultation.
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
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">What are you currently experiencing?</label>
              <textarea 
                name="experience"
                rows={4}
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                placeholder="Share details about stress, tension, or life transitions you are navigating..."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">What are your primary wellness goals?</label>
              <textarea 
                name="goals"
                rows={3}
                required
                value={formData.goals}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
                placeholder="What would you like to achieve through our work together?"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2E2E2E]/70 mb-2">Preferred Experience Interest</label>
              <select 
                name="preferredExperience"
                value={formData.preferredExperience}
                onChange={handleChange}
                className="w-full bg-[#F8F5F1] border border-[#2E2E2E]/20 p-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#B38A58]"
              >
                <option value="Human Anchor Intro Experience">Human Anchor Intro Experience (60 Min — $175)</option>
                <option value="Human Anchor Signature Experience">Human Anchor Signature Experience (90 Min — $250)</option>
                <option value="The Deep Reset Experience">The Deep Reset Experience (2 Hours — $325)</option>
                <option value="Unsure / Let's Discuss">Unsure / Let's Discuss during consultation</option>
              </select>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                className="w-full bg-[#2E2E2E] text-[#F8F5F1] py-4 text-sm font-sans tracking-wide hover:bg-[#B38A58] transition-colors duration-300"
              >
                Submit Confidential Intake Assessment
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