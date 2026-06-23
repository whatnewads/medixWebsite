// Single source for FAQ Q&A — rendered on /faqs AND mirrored into FAQPage JSON-LD,
// so the two can never drift. Copy is guardrail-checked (§8): framed as care, never
// recordkeeping. The escalation answer is deliberately affirmative.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is Medix?",
    answer:
      "Occupational telemedicine for jobsites. When a worker is hurt, a licensed paramedic connects by video and audio in seconds and guides your certified crew through assessment and care.",
  },
  {
    question: "Who's on the other end of the call?",
    answer:
      "Licensed mid-level clinicians — paramedics and EMTs experienced in occupational health.",
  },
  {
    question: "How does care happen if the clinician is remote?",
    answer:
      "Your own first-aid/CPR/AED-certified team leads, foremen, or supers are the hands on site; the Medix clinician assesses the worker over video and walks them through each step in real time.",
  },
  {
    question: "What can be handled on site?",
    answer:
      "Care within first-aid and CPR scope — what a trained responder can safely do under live clinical guidance. The clinician's job is to get the right care to the worker, fast.",
  },
  {
    question: "What about serious injuries?",
    answer:
      "If a worker is unstable or needs a higher level of care, the clinician escalates immediately — directing to emergency services or the right next step. Medix is built to get people the care they need, not to keep anyone from it.",
  },
  {
    question: "What's the first-aid bag?",
    answer:
      "When a site comes online, Medix ships a stocked first-aid bag and tracks its contents, so the clinician knows exactly what's on hand.",
  },
  {
    question: "Who is Medix for?",
    answer:
      "General contractors running medium, non-permanent projects — roughly 25–250 workers, often remote, where help could otherwise be far from the gate.",
  },
  {
    question: "What does it cost?",
    answer:
      "We're onboarding early sites now. Join the waitlist and we'll share details.",
  },
];
