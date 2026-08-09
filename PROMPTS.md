# InterviewOS — Claude Vibe Coding Prompts

> Step-by-step prompts for building the InterviewOS hackathon project.

## Prompt 1

Act as a Senior Full Stack Engineer and Product Designer.

Build the foundation for a premium SaaS application called "InterviewOS" using Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion and Lucide React.

This is an AI Technical Interview Platform, not a chatbot.

Only create the project foundation. Do NOT implement interview logic, APIs or AI features.

Requirements:
- Production-ready folder structure
- Global layout
- Responsive Navbar
- Collapsible Sidebar
- Dark theme
- Reusable UI components (Button, Card, Badge, Progress, Modal, Input, Textarea, Skeleton, Toast)
- Responsive design (mobile-first)
- Smooth page transitions
- Premium SaaS styling inspired by Linear, Vercel and Notion
- Clean typography and spacing
- Glassmorphism with subtle animations

Create only these routes:
- /
- /interview
- /report

Each route should have a beautiful placeholder layout ready for future development.

Keep the code modular, reusable, scalable and build-error free. Do not rewrite existing files unnecessarily.


## Prompt 2

Continue from the existing project. Do not recreate or modify the existing architecture. Only build the Landing Page (/).

The landing page should immediately communicate that InterviewOS is an AI-powered technical interview platform for the ABTalks AI Cohort.

Create a premium SaaS experience inspired by Linear, Stripe and Vercel. Avoid generic AI-generated layouts.

Include:
- Beautiful hero section with animated headline, subtitle and CTA ("Start Mock Interview")
- Animated background with subtle gradients and floating particles
- Statistics section (Candidates Interviewed, AI Topics, Interview Accuracy, Avg. Feedback Score)
- "How It Works" section with 4 animated steps
- "Why InterviewOS" section highlighting adaptive interviews, follow-up questions, personalized feedback and context awareness
- Feature cards with hover animations
- FAQ accordion
- Modern footer

Use Framer Motion for smooth entrance, hover and scroll animations.

The page must be fully responsive, accessible and optimized for mobile, tablet and desktop.

Keep components reusable, maintain the existing design system and do not implement interview functionality yet.


## Prompt 3

Continue from the existing project. Do not modify the Landing Page or Design System. Build only the Candidate Dashboard and Candidate Selection flow.

Use the provided candidates.json to populate real candidate data. Do not create fake candidates.

Create a beautiful dashboard where users can browse and select any candidate before starting an interview.

The dashboard should include:
- Search by name
- Filter by job role
- Filter by experience level
- Responsive candidate cards
- Candidate avatar (generated initials)
- Name, Job Role, Experience, Education
- Completion status
- Missions Completed
- Commit Days
- First Attempt Success Rate
- Quick summary of strengths and weak areas based on completed, skipped and failed missions.

When a candidate is selected, navigate to `/interview` while storing the selected candidate and session information.

Add smooth card hover effects, loading skeletons, empty states and subtle animations.

The UI should feel premium like Linear and Stripe dashboards, fully responsive and production-ready.

Do not implement AI interview logic yet. Only build the dashboard, candidate selection flow and state management.


## Prompt 4

Continue from the existing project. Do not modify the Landing Page, Dashboard, or Design System. Build only the Interview Workspace (/interview).

The interface should feel like a real technical interview platform, not a chatbot.

Use the selected candidate data to display:
- Candidate profile summary
- Current interview progress (Question X of 8)
- Topics covered
- Interview timer
- Current difficulty (Easy/Medium/Hard)
- Current interview stage

The main area should include:
- AI interviewer card
- One question displayed at a time
- Large answer textarea
- Character counter
- Previous/Next navigation (disabled where appropriate)
- Submit Answer button
- Loading animation while AI is thinking

Add a right sidebar (or bottom section on mobile) showing:
- Candidate overview
- Skills to be assessed
- Live interview progress
- Interview tips
- Session status

Include:
- Smooth Framer Motion animations
- Auto-scroll to new questions
- Keyboard shortcut (Ctrl/Cmd + Enter) to submit
- Responsive layout for mobile, tablet, and desktop
- Loading, empty, and error states

Do NOT implement AI generation or API calls yet. Use temporary placeholder questions and answers. Focus only on creating a premium, interactive interview experience with reusable components.


## Prompt 5

Continue from the existing project. Do not modify the UI or existing components. Implement the complete interview engine and API.

Follow the provided technical-spec.md exactly by creating POST /api/interview. Use sessionId to maintain interview state across requests.

Load curriculum.json and candidates.json. When a candidate starts an interview, analyze:
- Completed missions
- Skipped missions
- Failed missions
- Number of attempts
- Learning signals

Generate a personalized interview plan of at least 8 questions covering at least 4 curriculum days. Prioritize completed topics while identifying weak areas from skipped or failed missions.

The API should:
- Start a new interview session
- Maintain conversation history
- Return one question at a time
- Track question count and covered topics
- Store interview progress in memory
- Return proper loading and error responses

Connect the Interview UI to this API using React hooks and loading states.

Do not generate feedback yet. Do not implement adaptive follow-up logic yet. Use placeholder questions generated from the curriculum if an LLM is not connected.

Write clean, modular and production-ready code without breaking the existing UI.


## Prompt 6

Continue from the existing project. Do not modify the UI or existing API structure.

Use the attached curriculum.json and candidates.json to make the interviewer intelligent.

Integrate Gemini (or the configured LLM) to conduct the interview.

Requirements:
- Ask one question at a time.
- Generate questions only from topics the selected candidate has completed.
- Ask at least 8 questions covering 4+ curriculum days.
- Maintain complete conversation context using sessionId.
- Analyze every answer before generating the next question.
- Generate intelligent follow-up questions based on the candidate's previous response instead of using fixed questions.
- Adapt interview difficulty dynamically (Easy → Medium → Hard) according to answer quality.
- If the candidate struggles, simplify the next question or switch to another completed topic.
- If the candidate performs well, ask deeper implementation, architecture, trade-off or debugging questions.
- Never ask questions from skipped or failed topics unless using them to identify knowledge gaps near the end.

Maintain interview state including:
- Current question
- Covered curriculum days
- Conversation history
- Candidate performance
- Difficulty level
- Topic scores

Display a short "AI is analyzing your answer..." loading state before returning the next question.

Keep the interview natural, conversational and similar to a real technical interview instead of a scripted questionnaire.

Do not generate the final feedback report yet. That will be implemented in the next prompt.

Maintain clean architecture, reusable services and production-quality code.


## Prompt 7

Continue from the existing InterviewOS project. Do not redesign completed pages or replace the existing interview architecture.

Implement the final AI evaluation and `/report` page.

When the interview is completed, analyze the full session:
- Candidate profile
- Questions asked
- Candidate answers
- Answer evaluations
- Curriculum days/topics covered
- Difficulty progression
- Detected strengths and gaps

Generate structured feedback matching technical-spec.md exactly:

{
  summary: string,
  strengths: string[],
  gaps: string[],
  next: string[]
}

The feedback must be specific to the candidate and based on the actual interview, not generic AI advice.

Build a premium report page containing:
- Overall interview score
- Interview readiness level
- Technical knowledge score
- Problem-solving score
- Communication score
- Topic-wise performance
- Strengths
- Knowledge gaps
- Recommended curriculum days to revise
- Personalized next-step learning plan
- Interview timeline showing difficulty progression

Add interactive visualizations such as a skill radar, progress bars and animated score counters.

Make the report feel like feedback from a senior technical interviewer/recruiter, not a ChatGPT response.

Add:
- Download/print report
- Copy feedback
- Restart interview
- Smooth animations
- Responsive mobile layout
- Loading, error and empty states

Ensure the final API response returns `done: true` and the required `feedback` object exactly according to the technical specification.

Do not break the existing interview flow. Test the complete journey from candidate selection → interview → final report.


## Prompt 8

Continue from the completed InterviewOS project. Do not rebuild existing features. Treat the current implementation as the source of truth.

Perform a final production-quality polish and hackathon readiness pass.

Focus on:

1. RESPONSIVENESS
Test and fix the complete experience at:
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Remove horizontal overflow and fix spacing, typography, cards, charts, navigation and modals on small screens.

2. UX POLISH
Add subtle, purposeful Framer Motion animations:
- Page transitions
- Question transitions
- Score animations
- Card hover states
- Loading states
- Success/error feedback

Avoid excessive animations.

3. EDGE CASES
Handle:
- Empty candidate search
- Invalid candidate
- Empty answer
- API failure
- LLM failure/timeout
- Session expiration
- Refresh during interview
- Interview completion
- Missing report data

Never show raw errors to users.

4. API VALIDATION
Verify POST /api/interview follows technical-spec.md exactly, including sessionId, conversational turns, done state and final feedback structure.

5. QUALITY
Remove console errors, unused imports, duplicate components and unnecessary code. Improve accessibility, keyboard navigation, loading states and performance.

6. FINAL EXPERIENCE
Ensure the complete flow works:

Landing → Dashboard → Candidate → Interview → Adaptive Questions → Final Report

Do not add unnecessary features. Prioritize reliability, visual polish and smooth UX.

Finally run the production build and fix every build/runtime/type error you find.


## Prompt 9 — Futuristic Neural Particle System

Upgrade the existing InterviewOS UI with a unique futuristic interactive visual system. Do not rebuild existing pages or functionality.

Add a reusable "Neural Particle Field" background component using Canvas/WebGL or performant Canvas 2D.

Behavior:
- Hundreds of subtle particles form an evolving neural network.
- Particles gently drift in the background.
- Mouse movement creates a soft attraction/repulsion effect.
- Nearby particles dynamically connect with thin glowing lines.
- Cursor creates a subtle radial energy field.
- Clicking creates a short ripple/pulse through nearby particles.
- Keep the effect subtle and premium, never distracting from content.
- Reduce particle count and animation complexity on mobile/touch devices.
- Respect prefers-reduced-motion.

Use the effect selectively:
- Landing hero: strongest version
- Dashboard: subtle version
- Interview screen: very subtle version
- Report: minimal version

Add futuristic micro-interactions throughout:
- Cards react slightly toward the cursor
- Buttons have a soft magnetic hover effect
- Progress indicators animate when values change
- AI thinking state uses an animated neural pulse
- Score numbers smoothly count up
- Question transitions feel like an AI system processing new context

Maintain InterviewOS's dark premium aesthetic with restrained indigo/violet accent lighting.

IMPORTANT:
- Performance first.
- No excessive glow or animation.
- No animation should cause layout shifts.
- Avoid heavy libraries unless already installed.
- Keep the particle system reusable and configurable.
- Ensure the website remains smooth on mid-range laptops and mobile devices.
- Test mouse, touch, keyboard and reduced-motion behavior.

Do not change the existing API, interview logic, candidate data or report functionality.