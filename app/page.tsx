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
    citation: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, Barcelona, Spain, April 2026.",
    keywords: ["Human-AI Co-Creation", "LLM Agents", "Interactive Narrative"],
    href: "https://doi.org/10.1145/3772318.3790568",
  },
  {
    year: "2026",
    venue: "AEI",
    title: "LLM-enabled Generative Cultural Product Design with Symbolic Semantic Representation",
    authors: "Yang Yin, Xinyi Chen, Yingpin Chen, Yuchen Hong, Jinhe Li, Xiyuan Zhang, Chunlei Chai, Hao Fan",
    citation: "Advanced Engineering Informatics, vol. 69, part C, article 103993, January 2026.",
    keywords: ["Generative Design", "Cultural Computing", "Semantic Representation"],
    href: "https://doi.org/10.1016/j.aei.2025.103993",
  },
  {
    year: "2025",
    venue: "ISCID ’25",
    title: "Can a Chatbot Win Your Heart? The Impact of Diverse Role Settings in Anthropomorphic Chatbots on User Preferences",
    authors: "Xinyi Chen, Shiyin Ding, Shaobin Hou, Chunlei Chai",
    citation: "2025 18th International Symposium on Computational Intelligence and Design (ISCID), pp. 85–88, 2025.",
    keywords: ["Conversational AI", "Anthropomorphism", "User Preference"],
    href: "https://doi.org/10.1109/ISCID68789.2025.00026",
  },
  {
    year: "2023",
    venue: "ISCID ’23",
    title: "DesignGPT: Multi-Agent Collaboration in Design",
    authors: "Shiying Ding, Xinyi Chen, Yan Fang, Wenrui Liu, Yiwu Qiu, Chunlei Chai",
    citation: "2023 16th International Symposium on Computational Intelligence and Design (ISCID), pp. 204–208, 2023.",
    keywords: ["Multi-Agent Systems", "Design Collaboration", "LLMs"],
    href: "https://doi.org/10.1109/ISCID59865.2023.00056",
  },
];

const news = [
  {
    date: "May 2026",
    before: "Joined the ",
    highlight: "Center for Metaverse and Computational Creativity (MC2)",
    after: " at HKUST as a research assistant, working with Prof. Pan Hui.",
  },
  {
    date: "Apr 2026",
    before: "Our paper ",
    highlight: "DuoDrama",
    after: " on LLM-assisted reflection for screenplay refinement was published.",
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
        <a className="wordmark" href="#about">Xinyi Chen</a>
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
            <img src="/profile.jpg" alt="Xinyi Chen holding a cat" />
          </figure>
          <nav className="profileLinks" aria-label="Profile links">
            <a href="https://scholar.google.com/citations?user=5ORGHRIAAAAJ&hl=zh-CN&oi=sra" target="_blank" rel="noreferrer"><span className="linkIcon" aria-hidden="true">G</span><span>Google Scholar</span></a>
            <a href="mailto:cadrenaline@zju.edu.cn"><span className="linkIcon" aria-hidden="true">@</span><span>Email</span></a>
            <a href="https://www.linkedin.com/in/xinyi-chen-9521b73b5/?isSelfProfile=true" target="_blank" rel="noreferrer"><span className="linkIcon" aria-hidden="true">in</span><span>LinkedIn</span></a>
            <a href="/Xinyi_Chen_CV_20260904.pdf" download><span className="linkIcon" aria-hidden="true">▤</span><span>Curriculum Vitae</span></a>
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
                <div className="pubYear">{publication.year}</div>
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

      <section className="academicSection backgroundSection" id="background">
        <header className="sectionHeader compactHeader">
          <h2 className="sectionIndex">Background</h2>
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
