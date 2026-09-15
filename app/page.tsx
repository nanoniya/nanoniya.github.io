import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xinyi Chen — HCI Researcher",
  description:
    "Xinyi Chen studies human-AI collaboration, human-centered NLP, multi-agent systems, and creativity support.",
};

const publications = [
  {
    venue: "CHI '26",
    title: "DuoDrama: Supporting Screenplay Refinement Through LLM-Assisted Human Reflection",
    authors: "Yuying Tang, Xinyi Chen, Haotian Li, Xing Xie, Xiaojuan Ma, Huamin Qu",
    citation: "In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems",
    keywords: ["Human-AI Co-Creation", "LLM Agents", "Interactive Narrative"],
    href: "https://doi.org/10.1145/3772318.3790568",
  },
  {
    venue: "AEI",
    title: "LLM-Enabled Generative Cultural Product Design with Symbolic Semantic Representation",
    authors: "Yang Yin, Xinyi Chen, Yingpin Chen, Yuchen Hong, Jinhe Li, Xiyuan Zhang, Chunlei Chai, Hao Fan",
    citation: "Advanced Engineering Informatics, vol. 69, part C, article 103993, 2026",
    keywords: ["Generative Design", "Cultural Computing", "Semantic Representation"],
    href: "https://doi.org/10.1016/j.aei.2025.103993",
  },
  {
    venue: "ISCID '25",
    title: "Can a Chatbot Win Your Heart? The Impact of Diverse Role Settings in Anthropomorphic Chatbots on User Preferences",
    authors: "Xinyi Chen, Shiyin Ding, Shaobin Hou, Chunlei Chai",
    citation: "2025 18th International Symposium on Computational Intelligence and Design (ISCID), pp. 85–88",
    keywords: ["Conversational AI", "Anthropomorphism", "User Preference"],
    href: "https://doi.org/10.1109/ISCID68789.2025.00026",
  },
  {
    venue: "ISCID '23",
    title: "DesignGPT: Multi-Agent Collaboration in Design",
    authors: "Shiying Ding, Xinyi Chen, Yan Fang, Wenrui Liu, Yiwu Qiu, Chunlei Chai",
    citation: "2023 16th International Symposium on Computational Intelligence and Design (ISCID), pp. 204–208",
    keywords: ["Multi-Agent Systems", "Design Collaboration", "LLMs"],
    href: "https://doi.org/10.1109/ISCID59865.2023.00056",
  },
];

const news = [
  {
    date: "Jun 2026",
    before: "Joined the ",
    highlight: "Center for Metaverse and Computational Creativity",
    after: " at HKUST as a Research Intern, advising by Prof. Pan Hui.",
  },
  {
    date: "Jan 2026",
    before: "Our project ",
    highlight: "DuoDrama on LLM-assisted reflection for screenplay refinement",
    after: " was accepted by CHI 2026.",
    href: "https://doi.org/10.1145/3772318.3790568",
  },
  {
    date: "Jan 2026",
    before: "Our work on ",
    highlight: "LLM-enabled generative cultural product design",
    after: " was published in Advanced Engineering Informatics.",
    href: "https://doi.org/10.1016/j.aei.2025.103993",
  },
];

const researchExperience = [
  {
    period: "Jun–Sep 2026",
    place: "MC2, HKUST",
    role: "Research Intern · advised by Prof. Pan Hui",
    title: "Human-AI collaborative feedback system",
    body: "Developed and evaluated an LLM-based feedback workflow for open-ended text revision. Under a unified evaluation schema, LLM-based evaluations were directionally aligned with human preference judgments. Manuscript under review.",
    tags: ["Human-centered NLP", "Creative feedback", "LLM evaluation"],
  },
  {
    period: "Jul–Sep 2026",
    place: "ARK Lab, HKUST",
    role: "Research Intern · advised by Prof. Xin Tong",
    title: "Cross-device multi-agent collaboration",
    body: "Developed and studied a cross-device multi-agent workflow for context sharing, capability coordination, and continuity across heterogeneous devices while preserving user control. Manuscript under review.",
    tags: ["Multi-agent systems", "Cross-device", "User control"],
  },
  {
    period: "Feb–Sep 2025",
    place: "HCI Initiative, HKUST",
    role: "Research Intern · advised by Prof. Xiaojuan Ma",
    title: "Experience-grounded feedback for screenplay reflection",
    body: "Built a full-stack multi-agent system combining character role-play with reflective feedback for screenplay revision. A formative study with nine professional screenwriters informed the design; a user study with fourteen participants showed improved feedback quality and alignment, as well as greater effectiveness, depth, and richness of reflection. Published at CHI 2026.",
    tags: ["Human-AI co-creation", "LLM agents", "User studies"],
  },
  {
    period: "Oct 2023–Feb 2025",
    place: "IABC Lab, Zhejiang University",
    role: "Graduate Researcher · advised by Prof. Chunlei Chai",
    title: "Human-AI collaborative video production",
    body: "Prototyped and iteratively tested a workflow that maps multimodal inputs to production-oriented video outputs; developed cinematic rule sets and prepared fine-tuning data.",
    tags: ["Generative AI", "Video production", "Fine-tuning"],
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
        <a className="wordmark" href="#about">
          <img className="catMark" src="./paw.png" alt="" aria-hidden="true" />
          <span>Xinyi Chen</span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>

      <section className="academicHero" id="about">
        <aside className="academicAside">
          <figure className="profilePhoto">
            <img src="./profile.jpg" alt="Xinyi Chen holding a cat" />
          </figure>
          <nav className="profileLinks" aria-label="Profile links">
            <a href="https://scholar.google.com/citations?user=5ORGHRIAAAAJ&hl=zh-CN&oi=sra" target="_blank" rel="noreferrer"><span className="linkIcon" aria-hidden="true">G</span><span>Google Scholar</span></a>
            <a href="mailto:ceterminateniya@gmail.com"><span className="linkIcon" aria-hidden="true">@</span><span>Email</span></a>
            <a href="https://www.linkedin.com/in/xinyi-chen-9521b73b5/?isSelfProfile=true" target="_blank" rel="noreferrer"><span className="linkIcon" aria-hidden="true">in</span><span>LinkedIn</span></a>
            <a href="./Xinyi_Chen_CV_20260915.pdf" download><span className="linkIcon" aria-hidden="true">▤</span><span>Curriculum Vitae</span></a>
          </nav>
        </aside>
        <div className="academicIntro">
          <h1 className="artName" aria-label="Xinyi Chen">
            <span className="artFirst">Xinyi</span>
            <span className="artLast">Chen</span>
            <i aria-hidden="true">✦</i>
          </h1>
          <p className="role">M.S. Student in Industrial Design Engineering · Zhejiang University</p>
          <div className="aboutBlock researchBlock">
            <p className="introText">
              I am a master&apos;s student at Zhejiang University, advised by Prof. Chunlei Chai.
              I am currently a research intern at the Center for Metaverse and Computational
              Creativity at HKUST (GZ), working with Prof. Pan Hui.
              Previously, I worked with Prof. Xiaojuan Ma at the HCI Initiative, HKUST.
            </p>
            <p className="introText">
              My research interests center on AI-supported creative thinking, particularly how
              interactive systems can help people develop ideas through feedback, reflection,
              and revision.
            </p>
            <p className="introText">
              I am interested in designing interactions that help creators consider different
              perspectives, articulate their intentions, and decide how to move their work forward.
              A central question for me is how AI can expand creative possibilities while leaving
              room for creators to exercise and develop their own judgment.
            </p>
            <p className="introText">
              Alongside system design, I am interested in evaluation methods that capture what
              makes AI assistance useful in creative work. I aim to develop metrics and benchmarks
              that account for creators&apos; goals and stages of the creative process, and investigate
              how these assessments relate to people&apos;s experiences and decisions.
            </p>
          </div>
          <p className="availability">I am seeking PhD opportunities in HCI and Human-Centered NLP.</p>
        </div>
      </section>

      <section className="academicSection" id="news">
        <header className="sectionHeader">
          <h2 className="sectionIndex">News</h2>
        </header>
        <div className="newsList">
          {news.map((item) => (
            <article className="newsRow" key={`${item.date}-${item.highlight}`}>
              <time>{item.date}</time>
              <p>
                {item.before}
                {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.highlight}</a> : <span className="newsHighlight">{item.highlight}</span>}
                {item.after}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="academicSection" id="publications">
        <header className="sectionHeader compactHeader">
          <h2 className="sectionIndex">Publications</h2>
        </header>
        <div className="publicationList">
          {publications.map((publication) => {
            return (
              <article className="publicationRow" key={publication.title}>
                <div className="pubBody">
                  <div className="publicationHeading">
                    <span className="venueBadge">{publication.venue}</span>
                    <h3><a href={publication.href} target="_blank" rel="noreferrer">{publication.title}</a></h3>
                  </div>
                  <p className="pubAuthors">{highlightAuthor(publication.authors)}</p>
                  <p className="pubCitation">{publication.citation}</p>
                  <div className="keywordList" aria-label="Publication keywords">
                    {publication.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="academicSection" id="experience">
        <header className="sectionHeader compactHeader subtleHeader">
          <h2 className="sectionIndex">Research Experience</h2>
        </header>
        <div className="experienceList">
          {researchExperience.map((item) => (
            <article className="experienceRow" key={item.place}>
              <time className="timelineDate">{item.period}</time>
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

      <section className="academicSection backgroundSection" id="background">
        <header className="sectionHeader compactHeader">
          <h2 className="sectionIndex">Background</h2>
        </header>
        <div className="backgroundGrid">
          <div className="backgroundColumn">
            <h3>Education</h3>
            <div className="detailItem"><span>2023–Present</span><strong>Zhejiang University</strong><p>M.S. Industrial Design Engineering</p></div>
            <div className="detailItem"><span>2019–2023</span><strong>Northeastern University</strong><p>B.S. Digital Media Technology</p></div>
          </div>
          <div className="backgroundColumn">
            <h3>Industry</h3>
            <div className="detailItem"><span>Nov 2025–May 2026</span><strong>Kaon (previously FlowGPT)</strong><p>AI Technology Operations Intern</p></div>
            <div className="detailItem"><span>Apr–Nov 2024</span><strong>Hangzhou Zaowu Technology</strong><p>Generative AI Engineer</p></div>
          </div>
          <div className="backgroundColumn skillsColumn">
            <h3>Tools &amp; methods</h3>
            <div className="skillList">{[
              "Python", "PyTorch", "TensorFlow", "scikit-learn", "TypeScript", "React", "Next.js",
              "FastAPI", "LangChain", "Semantic retrieval", "Prompt engineering", "Experimental design",
              "Interviews", "Think-aloud", "Thematic analysis", "Quantitative analysis", "Figma",
              "Blender", "C4D", "Unity 3D",
            ].map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
        <div className="awards">
          <h3>Awards(selected)</h3>
          <p><span>2024</span> Global Digital Intelligence Education Innovation Competition · Merit Award</p>
          <p><span>2022</span> Northeastern University · First-Class Merit Scholarship and Outstanding Student</p>
          <p><span>2022</span> International Mathematical Contest in Modeling · Third Prize</p>
          <p><span>2021</span> China National Scholarship</p>
        </div>
      </section>

      <footer className="assetCredit">
        Paw icon by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer">Freepik</a> — <a href="https://www.flaticon.com/free-icon/paw_8347745" target="_blank" rel="noreferrer">Flaticon</a>
      </footer>

    </main>
  );
}
