/**
 * Knowledge base for the portfolio AI assistant.
 *
 * This is the ONLY information the assistant knows about Rithanya.
 * It is injected into the model's system prompt on every request.
 *
 * SAFE TO EDIT: keep everything here to resume-level, public info only.
 * Do NOT add anything you wouldn't put on a public resume (no home address,
 * personal phone, IDs, salary, etc.). The assistant cannot reveal what it
 * is never given here.
 */
export const KNOWLEDGE = `
# About Rithanya Sekar

Rithanya Sekar is an AI & Analytics professional, systems thinker, and tech strategist.
She is a results-driven Business Analyst and Product Owner with expertise in analytics,
AI systems, and digital transformation. She specializes in translating complex data into
actionable insights, optimizing workflows, and driving measurable business impact through
data-driven decision-making and stakeholder collaboration. Her strengths center on
AI-powered insights and systems thinking.

# Contact
- LinkedIn: https://www.linkedin.com/in/rithanya-sekar-/
- GitHub: https://github.com/Rithanya918
- Email: rithanyasekar09@gmail.com

# Education
- Master's in Information Systems Management — University of Maryland, Robert H. Smith
  School of Business (Aug 2023 – Dec 2024), GPA 3.7
- Bachelor of Technology in Information Technology — JNTUH College of Engineering,
  Hyderabad (2017 – 2021), GPA 3.53

# Experience

## Associate Product Manager – Analytics & AI Systems — Jungroo Learning (2021–2024)
Provided strategic data science consulting focused on AI adoption and analytics transformation.
- Owned the analytics and experimentation roadmap, driving a 15–20% rise in engagement and
  conversion through data-driven optimization.
- Established product vision, KPIs, and experimentation strategy, accelerating prioritization
  cycles by ~25% and boosting execution speed.
- Led end-to-end delivery of analytics products, translating business problems into scalable
  insights and dashboards, reducing decision latency by ~30%.
- Drove cross-functional execution and data governance, improving reporting accuracy by ~35%
  and informing executive roadmap decisions.

## Business Analyst — Jungroo Learning (2019–2021)
Embedded within cross-functional product teams; responsible for problem discovery,
data-driven decision support, experimentation, and stakeholder alignment across digital
learning platforms. Acted as a bridge between business, product, and technical teams.
- Analyzed learner and educator behavior across platform workflows, identifying friction
  points that led to ~18% improvement in feature adoption.
- Partnered with 6+ product and engineering teams to refine user stories and acceptance
  criteria, reducing requirement rework by ~30%.
- Built cohort-based performance analyses and insight reports influencing quarterly roadmap
  prioritization.
- Streamlined reporting and data-collection processes, cutting manual analysis effort by ~40%.

# Skills

- Product Management & Strategy: Product Roadmaps, Feature Prioritization, KPI Definition &
  Tracking, Leadership Reviews, Stakeholder Alignment, Change Management, Agile Scrum,
  Experiment Design, A/B Testing, BRDs & Specs, UAT Management, Risk Management
- AI & Machine Learning: Generative AI, LLMs, Agentic AI, Autonomous Workflows, LangChain,
  LangGraph, CrewAI, Microsoft AutoGen, MCP, Gemini, OpenAI API/SDK, Bedrock, ElevenLabs,
  Conversational AI, RAG Systems, Digital Twin Development, LangSmith
- Programming & Prototyping: Python, JavaScript, n8n (Automation), Gradio, API Development,
  API Integration, Rapid Prototyping
- Cloud & Data Platforms: AWS, Bedrock, Lambda, S3, GCP, Vertex AI, BigQuery, Azure,
  Snowflake, Kubernetes, Docker, MongoDB, SQL, PySpark
- SDLC & Infrastructure: CI/CD, Microservices, API Integration, Monitoring, Observability,
  Distributed Systems
- Analytics & Visualization: Power BI, Tableau, Looker, KPI Dashboards, Data-Driven Decision
  Making, Experiment Analysis, Data Visualization
- Tools & Delivery: Jira, Confluence, Figma, Airflow, Kafka, Technical Documentation,
  Cross-Functional Leadership

# Projects

- AROS – AI Reliability Overlay System: Detects and prevents AI hallucinations via real-time
  verification of responses across platforms like ChatGPT, Claude, and Gemini. Confidence
  scoring (0–100) with detailed breakdowns and color-coded risk insights.
  Tech: React, TypeScript, Vite, Tailwind CSS. Live: https://aros-1.lovable.app/
  Code: https://github.com/Rithanya918/AROS
- AI-Powered Travel Agent (Payanam): Intelligent travel booking assistant using GPT-3.5-turbo
  and LangGraph for flights, hotels, and packages via form and AI chat.
  Code: https://github.com/Rithanya918/Payanam
- Customer Booking Predictive Model (British Airways): ML model predicting flight booking
  completion; identifies 78% of customers who will complete bookings.
  Code: https://github.com/Rithanya918/British-Airways_Predictive-Modeling-of-Customer-Bookings
- AI-Driven Dynamic Pricing Engine: Pricing optimization using ML and real-time analytics —
  automated price recommendations, competitor monitoring, and executive insights.
  Code: https://github.com/Rithanya918/CGPricing/tree/master
- NYC Restaurant Inspection Dashboard: Interactive Tableau dashboard on inspection drivers —
  cuisine risk, persistent violators, borough deviations, Grade A trends (2020–2023), and
  spatial clustering via LISA / Moran's I.
- Pizza Sales Report: Sales trend analysis identifying top/least performers for business
  decisions. Tech: MySQL, Tableau, Snowflake, SQL.
- Customer Shopping Behavior Analysis: Retail transaction analysis of spending patterns,
  segments, and product preferences using Python, SQL, and Power BI.

# Certifications
- Professional Scrum Product Owner (PSPO) — Scrum.org (Feb 2026)
- AWS Certified AI Practitioner — AWS (Jan 2026)
- Microsoft Azure AI-900 — Microsoft Azure (Dec 2025)
- Oracle APEX Cloud Developer Professional — Oracle (Jul 2025)
- Oracle Cloud Infrastructure 2025 Data Science Professional — Oracle (Sep 2025)
- Lean Six Sigma Black Belt (Level III) (Aug 2025)
- Microsoft Business Analyst Professional — Coursera (Aug 2024)

# Roles she is interested in
Product Owner / Associate Product Manager, Business Analyst, AI/Analytics-focused product and
strategy roles, and roles combining data, AI systems, and digital transformation.
`;
