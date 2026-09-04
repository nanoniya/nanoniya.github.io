import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xinyi Chen — Human-AI Interaction Researcher",
  description:
    "Xinyi Chen studies human-AI collaboration, human-centered NLP, multi-agent systems, and creativity support.",
};

const publications = [
  {
    year: "2026",
    venue: "CHI ’26",
    title: "DuoDrama: Supporting Screenplay Refinement Through LLM-Assisted Human Reflection",
    authors: "Yuying Tang, Xinyi Chen, Haotian Li, Xing Xie, Xiaojuan Ma, Huamin Qu",
    note: "CHI 2026",
    keywords: ["Human-AI Co-Creation", "LLM Agents", "Interactive Narrative"],
    href: "https://doi.org/10.1145/3772318.3790568",
  },
  {
    year: "2026",
    venue: "Advanced Engineering Informatics",
    title: "LLM-enabled Generative Cultural Product Design with Symbolic Semantic Representation",
    authors: "Yang Yin, Xinyi Chen, Yingpin Chen, Yuchen Hong, Jinhe Li, Xiyuan Zhang, Chunlei Chai, Hao Fan",
    note: "JCR Q1 · IF 9.9",
    keywords: ["Generative Design", "Cultural Computing", "Semantic Representation"],
    href: "https://doi.org/10.1016/j.aei.2025.103993",
  },
  {
    year: "2025",
    venue: "ISCID ’25",
    title: "Can a Chatbot Win Your Heart? The Impact of Diverse Role Settings in Anthropomorphic Chatbots on User Preferences",
    authors: "Xinyi Chen, Shiyin Ding, Shaobin Hou, Chunlei Chai",
    note: "pp. 85–88",
    keywords: ["Conversational AI", "Anthropomorphism", "User Preference"],
    href: "https://doi.org/10.1109/ISCID68789.2025.00026",
  },
  {
    year: "2023",
    venue: "ISCID ’23",
    title: "DesignGPT: Multi-Agent Collaboration in Design",
    authors: "Shiying Ding, Xinyi Chen, Yan Fang, Wenrui Liu, Yiwu Qiu, Chunlei Chai",
    note: "pp. 204–208",
    keywords: ["Multi-Agent Systems", "Design Collaboration", "LLMs"],
    href: "https://doi.org/10.1109/ISCID59865.2023.00056",
  },
];

const researchExperience = [
  {
    period: "Jul 2026–Present",
    place: "ARK Lab, HKUST",
    role: "Research Intern · advised by Prof. Xin Tong",
    title: "Cross-device multi-agent collaboration",
    body: "Investigating how agents on heterogeneous devices can share task context, coordinate complementary capabilities, and maintain continuity across device transitions while preserving user control.",
    tags: ["Multi-agent systems", "Cross-device", "User control"],
  },
  {
    period: "May 2026–Present",
    place: "MC2, HKUST",
    role: "Research Assistant · advised by Prof. Pan Hui",
    title: "Complementary LLM feedback selection for creative writing",
    body: "Built a pipeline that selects a compact set of complementary reviewers under a fixed attention budget using observed feedback behavior rather than persona labels; evaluated alternative mechanisms and refined the method based on negative results.",
    tags: ["Human-centered NLP", "Creative writing", "LLM evaluation"],
  },
  {
    period: "Feb–Sep 2025",
    place: "HCI Initiative, HKUST",
    role: "Research Intern · advised by Prof. Xiaojuan Ma",
    title: "Co-creative scriptwriting through embodied role-play and reflection",
    body: "Built a full-stack research prototype with multi-agent workflows and semantic retrieval. Led pilot and main studies, data processing, and quantitative analysis across 23 test iterations.",
    tags: ["LLM agents", "User study", "Full-stack"],
  },
  {
    period: "Oct 2023–Feb 2025",
    place: "IABC Lab, Zhejiang University",
    role: "Graduate Researcher · advised by Prof. Chunlei Chai",
    title: "Human-AI video production, parametric design, and model evolution",
    body: "Developed multimodal video-production workflows, an automated Blender packaging pipeline, and an interactive genetic-algorithm prototype using Geometry Nodes and the Blender Python API.",
    tags: ["Generative AI", "Blender", "Prototyping"],
  },
  {
    period: "Dec 2023–Jun 2024",
    place: "Future Design Lab, Zhejiang University",
    role: "Research Intern",
    title: "Fine-tuning workflows for apparel design",
    body: "Curated garment datasets, evaluated generation quality, and compared virtual try-on, detail-preservation, and style-transfer methods.",
    tags: ["Fine-tuning", "Evaluation", "Datasets"],
  },
  {
    period: "May–Jul 2022",
    place: "X-Reality Center, Northeastern University",
    role: "Research Assistant · advised by Prof. Tianhan Gao",
    title: "Multi-terminal virtual simulation teaching platform",
    body: "Led web prototyping and interaction design for a cloud-rendered teaching platform used by universities.",
    tags: ["React", "Interaction design", "XR"],
  },
];

function highlightAuthor(authors: string) {
  const [before, after] = authors.split("Xinyi Chen");
  return <>{before}<strong className="authorSelf">Xinyi Chen</strong>{after}</>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">Xinyi Chen</a>
        <div className="navLinks">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="/Xinyi_Chen_CV_20260904.pdf" download>CV ↗</a>
        </div>
      </nav>

      <section className="academicHero" id="top">
        <aside className="academicAside">
          <figure className="profilePhoto">
            <img src="/profile.jpg" alt="Xinyi Chen holding a cat" />
          </figure>
          <nav className="profileLinks" aria-label="Profile links">
            <a href="https://scholar.google.com/scholar?q=%22Xinyi+Chen%22+%22DuoDrama%22" target="_blank" rel="noreferrer"><span className="linkIcon" aria-hidden="true">G</span><span>Google Scholar</span></a>
            <a href="mailto:cadrenaline@zju.edu.cn"><span className="linkIcon" aria-hidden="true">@</span><span>Email</span></a>
            <a href="/Xinyi_Chen_CV_20260904.pdf" download><span className="linkIcon" aria-hidden="true">▤</span><span>Curriculum Vitae</span></a>
            <a href="https://www.linkedin.com/search/results/people/?keywords=Xinyi%20Chen%20Zhejiang%20University%20Human-AI" target="_blank" rel="noreferrer"><span className="linkIcon linkedinIcon" aria-hidden="true">in</span><span>LinkedIn</span></a>
            <a href="#publications"><span className="linkIcon" aria-hidden="true">≡</span><span>Publications</span></a>
          </nav>
        </aside>
        <div className="academicIntro">
          <h1 className="artName" aria-label="Xinyi Chen">
            <span className="artFirst">Xinyi</span>
            <span className="artLast">Chen</span>
            <i aria-hidden="true">✦</i>
          </h1>
          <p className="role">M.S. Student in Industrial Design Engineering · Zhejiang University</p>
          <div className="aboutBlock">
            <p className="introText">
              I am a master&apos;s student at Zhejiang University, advised by Prof. Chunlei Chai.
              I am currently a research intern at the AI &amp; Art for Knowledge &amp; Creativity
              (ARK) Lab and a research assistant at the Center for Metaverse and Computational
              Creativity (MC2) at HKUST, working with Prof. Xin Tong and Prof. Pan Hui.
              Previously, I worked with Prof. Xiaojuan Ma at the HCI Initiative, HKUST.
            </p>
          </div>
          <div className="aboutBlock researchBlock">
            <p className="introText">
              My research asks how generative and agentic AI systems can coordinate diverse
              perspectives and capabilities while keeping people meaningfully involved in
              reasoning and creative decisions. I approach this question through three connected directions:
            </p>
            <ul className="researchPoints">
              <li><strong>Reflective human-AI co-creation.</strong> I design role-based and experience-grounded interactions that help people examine alternatives instead of simply accepting AI output, as explored in DuoDrama for screenplay refinement.</li>
              <li><strong>Agent coordination and feedback selection.</strong> My current work investigates complementary LLM reviewers under limited human attention and multi-agent collaboration across heterogeneous devices.</li>
              <li><strong>Human-centered generative design.</strong> I explore semantic representations, multimodal workflows, and parametric systems that make AI-supported creative processes more controllable and aligned with human intent.</li>
            </ul>
          </div>
          <div className="aboutBlock futureBlock">
            <p className="introText">
              Across these projects, I combine interactive system building, agent workflow design,
              and empirical user studies. Looking forward, I aim to develop principles and systems
              for reflective, steerable, and context-aware human-AI collaboration—especially where
              language models mediate creative reasoning, feedback, and coordination.
            </p>
            <p className="availability">I am seeking PhD opportunities in HCI, Human-Centered NLP, and Human-Centered AI.</p>
          </div>
        </div>
      </section>

      <section className="academicSection" id="research">
        <header className="sectionHeader">
          <p className="sectionIndex">Research Interests</p>
          <h2>Research Interests</h2>
          <p>
            Three connected directions guide how I design systems, frame
            questions, and evaluate human-AI interaction.
          </p>
        </header>
        <div className="themeGrid">
          <article className="themeCard themeBlue">
            <div className="themeIcon" aria-hidden="true"><span>H</span><i>↔</i><span>AI</span></div>
            <p className="themeNumber">01</p>
            <h3>Human-AI Co-Creation</h3>
            <p>How can AI participate in creative work while preserving human reflection, authorship, and agency?</p>
            <small>Creative writing · Video production · Design support</small>
          </article>
          <article className="themeCard themeYellow">
            <div className="themeIcon agentIcon" aria-hidden="true"><span>A₁</span><span>A₂</span><span>A₃</span></div>
            <p className="themeNumber">02</p>
            <h3>Multi-Agent Interactive Systems</h3>
            <p>How should specialized agents coordinate with one another—and with people—in complex creative processes?</p>
            <small>LLM agents · Role-play · Mixed initiative</small>
          </article>
          <article className="themeCard themeCoral">
            <div className="themeIcon designIcon" aria-hidden="true"><span>意</span><i>→</i><span>形</span></div>
            <p className="themeNumber">03</p>
            <h3>Computational Design</h3>
            <p>How can semantic representations, parameters, and visual systems make generative design more controllable?</p>
            <small>Generative design · Visualization · Parametric modeling</small>
          </article>
        </div>
      </section>

      <section className="academicSection" id="publications">
        <header className="sectionHeader compactHeader">
          <p className="sectionIndex">02 / Publications</p>
          <h2>Publications</h2>
          <p>* denotes equal contribution.</p>
        </header>
        <div className="publicationList">
          {publications.map((publication) => {
            const publicationBody = (
              <>
                <div className="pubYear">{publication.year}</div>
                <div className="pubBody">
                  <p className="paperMeta">{publication.venue} · {publication.note}</p>
                  <h3>{publication.title}</h3>
                  <p>{highlightAuthor(publication.authors)}</p>
                  <div className="keywordList" aria-label="Publication keywords">
                    {publication.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
                  </div>
                </div>
                <div className="pubLink">{publication.href ? "↗" : ""}</div>
              </>
            );
            return publication.href ? (
              <a className="publicationRow" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>{publicationBody}</a>
            ) : (
              <div className="publicationRow" key={publication.title}>{publicationBody}</div>
            );
          })}
        </div>
      </section>

      <section className="academicSection" id="experience">
        <header className="sectionHeader compactHeader subtleHeader">
          <p className="sectionIndex">03 / Experience</p>
          <h2>Research experience</h2>
          <p>Labs, collaborations, and research systems from 2022 to the present.</p>
        </header>
        <div className="experienceList">
          {researchExperience.map((item, index) => (
            <article className="experienceRow" key={item.place}>
              <span className="timelineDot" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="expPeriod">{item.period}</div>
              <div className="expContent">
                <p className="expPlace">{item.place}</p>
                <p className="expRole">{item.role}</p>
                <h3>{item.title}</h3>
                <p className="expBody">{item.body}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academicSection backgroundSection" id="about">
        <header className="sectionHeader compactHeader">
          <p className="sectionIndex">04 / Background</p>
          <h2>Background</h2>
        </header>
        <div className="backgroundGrid">
          <div className="backgroundColumn">
            <h3>Education</h3>
            <div className="detailItem"><span>2023–Present</span><strong>Zhejiang University</strong><p>M.S. Industrial Design Engineering · GPA 4.34 / 5.00</p></div>
            <div className="detailItem"><span>2019–2023</span><strong>Northeastern University</strong><p>B.S. Digital Media Technology · Ranked 2 / 62</p></div>
          </div>
          <div className="backgroundColumn">
            <h3>Industry</h3>
            <div className="detailItem"><span>2025–2026</span><strong>Kaon (previously FlowGPT)</strong><p>AI Technology Operations Intern</p></div>
            <div className="detailItem"><span>2024</span><strong>Hangzhou Zaowu Technology</strong><p>Generative AI Engineer</p></div>
          </div>
          <div className="backgroundColumn skillsColumn">
            <h3>Tools &amp; methods</h3>
            <div className="skillList">{[
              "Python", "PyTorch", "TypeScript", "React", "LangChain", "Experimental design",
              "Quantitative analysis", "User studies", "Figma", "Blender", "Unity 3D", "DreamBooth", "LoRA",
            ].map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
        <div className="awards">
          <h3>Selected recognition</h3>
          <p><span>2024</span> Global Digital Intelligence Education Innovation Competition · Merit Award</p>
          <p><span>2022</span> International Mathematical Contest in Modeling · Third Prize</p>
          <p><span>2021</span> China National Scholarship</p>
        </div>
      </section>

      <footer>
        <div>
          <h2>Get in touch<span className="dot">.</span></h2>
          <p>I am interested in PhD opportunities and research collaborations in HCI, Human-Centered NLP, and Human-Centered AI.</p>
        </div>
        <a className="footerEmail" href="mailto:cadrenaline@zju.edu.cn">cadrenaline@zju.edu.cn ↗</a>
        <div className="footerBottom"><span>© 2026 Xinyi Chen</span><span>Hangzhou, China</span></div>
      </footer>
    </main>
  );
}
