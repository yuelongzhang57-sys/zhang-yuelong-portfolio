import React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Brush,
  ChevronDown,
  Clapperboard,
  Compass,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";
import "./styles.css";

const portfolioUrl = "https://fcnvxiev6q7k.feishu.cn/wiki/Emk5wKG9nimkMVk8XSTcimXFnye";

const experience = [
  {
    period: "2026.03 - 2026.06",
    company: "汇嘉达科技（武汉）有限公司",
    role: "内容运营",
    points: [
      "负责抖音、视频号矩阵账号定位、选题、脚本与视频制作，稳定获得日均 10-15 条客资。",
      "独立执行展会筹备、物料设计与客户接待，累计接待客户 100+，收集有效线索 50+。",
      "搭建 AIGC 内容制作 SOP 与线上获客培训体系，覆盖学员 50+。",
    ],
  },
  {
    period: "2025.12 - 2026.02",
    company: "杭州知行元科技有限公司",
    role: "AI商业内容制作",
    points: [
      "使用 Nano Banana、可灵、即梦、Stable Diffusion、ComfyUI 生成商业美术资产。",
      "参与品牌 TVC 广告项目，从客户需求、创意构思、AI 生成到最终交付完整推进。",
    ],
  },
  {
    period: "2025.07 - 2025.10",
    company: "武汉木瓜法宝科技有限公司",
    role: "新媒体运营",
    points: [
      "从 0 到 1 搭建多个垂直领域账号，打造 3 条播放量 100 万+ 视频，单条最高获赞 5 万+。",
      "通过投放数据优化人群定向与素材策略，累计获取精准客户线索 100+。",
    ],
  },
];

const featuredProjects = [
  {
    title: "AIGC 商业视觉资产",
    tag: "AI IMAGE / TVC",
    image: "assets/project-lion.jpg",
    href: "./projects/aigc-film.html",
    desc: "以 AI 生成、分镜与后期优化为核心，服务商业广告中的高质感视觉资产生产。",
  },
  {
    title: "品牌内容矩阵",
    tag: "CONTENT / GROWTH",
    image: "assets/project-canal.jpg",
    href: "./projects/campus-experience.html",
    desc: "围绕账号定位、用户画像、脚本表达与数据复盘，搭建可持续增长的内容矩阵。",
  },
  {
    title: "空间与环境视觉",
    tag: "VISUAL / SPACE",
    image: "assets/project-waterfront.jpg",
    href: "./projects/spatial-visual.html",
    desc: "从环境设计背景出发，把空间叙事、视觉秩序与品牌体验整合到项目表达中。",
  },
  {
    title: "作品集档案",
    tag: "SELECTED WORKS",
    image: "assets/project-field.jpg",
    href: portfolioUrl,
    desc: "更多视觉设计、AI 运营与品牌内容项目整理在飞书作品集中，后续可替换为真实项目截图。",
  },
];

const strengths = [
  {
    icon: <Wand2 size={28} />,
    title: "AI 内容生产",
    text: "熟悉 Stable Diffusion、ComfyUI、可灵、即梦等工具，能把创意提示词、画面生成和交付流程串起来。",
  },
  {
    icon: <Brush size={28} />,
    title: "视觉设计表达",
    text: "具备环境设计与视觉设计背景，擅长用版式、色彩、空间感和图像叙事建立清晰的视觉秩序。",
  },
  {
    icon: <Target size={28} />,
    title: "内容策略增长",
    text: "有矩阵账号从 0 到 1 搭建经验，能结合用户画像、热点洞察与数据反馈优化内容方向。",
  },
  {
    icon: <Compass size={28} />,
    title: "项目协同落地",
    text: "经历过商业内容、线下活动和培训体系搭建，能在创意、执行、复盘之间保持稳定推进。",
  },
];

function App() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedProjects />
      <Strengths />
      <ContactFinal />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroMedia" aria-hidden="true">
        <img src="assets/project-waterfront.jpg" alt="" />
        <span className="floatShape shapeOne" />
        <span className="floatShape shapeTwo" />
        <span className="floatShape shapeThree" />
      </div>
      <div className="heroWash" />
      <nav className="nav">
        <a className="brand" href="#home" aria-label="回到首页">
          <span>ZY.</span>
          <small>Visual Designer / AI Operator</small>
        </a>
        <div className="navLinks" aria-label="页面导航">
          <a href="#about">经历</a>
          <a href="#projects">项目</a>
          <a href="#strengths">优势</a>
          <a href="#contact">联系</a>
        </div>
        <a className="navContact" href="mailto:596881032@qq.com">
          <Mail size={17} />
          联系我
        </a>
      </nav>

      <div className="heroInner pageShell">
        <div className="heroMeta">
          <span>2026 PORTFOLIO</span>
          <span>WUHAN / CHINA</span>
        </div>
        <h1>
          张跃龙
          <span>视觉设计师</span>
          <span>AI运营师</span>
        </h1>
        <div className="heroBottom">
          <p>
            我把视觉审美、AI 内容工具和增长运营放在同一个工作流里，
            让画面不只是好看，也能更轻盈地抵达用户。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              <Play size={18} fill="currentColor" />
              查看精选项目
            </a>
            <a className="ghostButton" href={portfolioUrl} target="_blank" rel="noreferrer">
              飞书作品集
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <a className="scrollCue" href="#about" aria-label="向下滚动">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section aboutSection" id="about">
      <div className="pageShell aboutGrid">
        <div className="portraitWrap">
          <img src="assets/portrait.jpg" alt="张跃龙个人照片" />
          <div className="portraitCaption">
            <Sparkles size={16} />
            Available from Jul 2026
          </div>
        </div>

        <div className="aboutContent">
          <SectionLabel eyebrow="PROFILE" title="个人经历" />
          <p className="leadText">
            我是张跃龙，华中农业大学风景园林硕士，本科为环境设计。我的实践横跨视觉设计、
            AI 商业内容制作、品牌内容运营与数据分析，希望把清晰审美、AIGC 工具链和内容增长放在同一张工作台上。
          </p>

          <div className="contactStrip">
            <a href="tel:13221819162">
              <Phone size={17} />
              13221819162
            </a>
            <a href="mailto:596881032@qq.com">
              <Mail size={17} />
              596881032@qq.com
            </a>
            <span>
              <MapPin size={17} />
              武汉
            </span>
          </div>

          <div className="resumePanels">
            <div className="panel">
              <h3>教育背景</h3>
              <p>2024.09 - 2027.06 / 华中农业大学 / 风景园林硕士</p>
              <p>2025.06 - 2025.08 / 新加坡国立大学 / 暑期交换生</p>
              <p>2019.09 - 2023.06 / 西安建筑科技大学 / 环境设计本科</p>
            </div>
            <div className="panel">
              <h3>工具栈</h3>
              <p>PS / PR / AE / SU / CAD / PPT</p>
              <p>ComfyUI / Stable Diffusion / 可灵 / 即梦 / Codex</p>
              <p>Python / Tableau / Excel / SQL 基础</p>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timelineItem" key={item.company}>
                <div>
                  <time>{item.period}</time>
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <a className="promptLink" href={portfolioUrl} target="_blank" rel="noreferrer">
            <Layers3 size={19} />
            查看作品集提示词与项目档案
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SelectedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [lens, setLens] = useState(null);

  useEffect(() => {
    if (!lens) return undefined;
    const timer = window.setTimeout(() => {
      window.location.assign(lens.href);
    }, 760);
    return () => window.clearTimeout(timer);
  }, [lens]);

  const activeIndex = hoveredIndex ?? 0;

  const handleHover = (index) => {
    if (lens) return;
    setHoveredIndex(index);
    setActiveProject(index);
  };

  const handleClick = (project, event) => {
    event.preventDefault();
    if (lens) return;
    const x = Number.isFinite(event.clientX) ? event.clientX : window.innerWidth / 2;
    const y = Number.isFinite(event.clientY) ? event.clientY : window.innerHeight / 2;
    setLens({ x, y, href: project.href });
  };

  return (
    <section className="section projectsSection" id="projects">
      <div className="pageShell">
        <div className="sectionHead">
          <SectionLabel eyebrow="SELECTED PROJECTS" title="精选项目" />
          <a className="textLink" href={portfolioUrl} target="_blank" rel="noreferrer">
            完整作品集 <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="projectDeck" aria-label="精选项目卡片">
          {featuredProjects.map((project, index) => {
            const distance = index - activeIndex;
            const isFront = index === activeIndex;
            return (
              <a
                className={`projectFlipCard${isFront ? " isFront" : ""}`}
                href={project.href}
                key={project.title}
                onMouseEnter={() => handleHover(index)}
                onFocus={() => handleHover(index)}
                onClick={(event) => handleClick(project, event)}
                style={{
                  "--card-tilt": `${(index - 1.5) * 7}deg`,
                  "--card-depth": `${Math.abs(distance) * 56}px`,
                  "--card-lift": `${Math.abs(distance) * -4}px`,
                  "--card-shift": `${(index - activeIndex) * 62}px`,
                  "--card-delay": `${index * 55}ms`,
                  "--card-scale": index === activeIndex ? 1 : 0.93,
                }}
              >
                <span className="projectFlipInner">
                  <span className="projectFace projectFaceFront">
                    <img src={project.image} alt={project.title} />
                    <span className="projectFrontWash" />
                    <span className="projectBadge">Hover to flip</span>
                    <strong>{project.title}</strong>
                  </span>
                  <span className="projectFace projectFaceBack">
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <em>
                      Open Project
                      <ArrowUpRight size={17} />
                    </em>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div
        className={`lensTransition${lens ? " isActive" : ""}`}
        aria-hidden="true"
        style={
          lens
            ? {
                "--lens-x": `${lens.x}px`,
                "--lens-y": `${lens.y}px`,
              }
            : undefined
        }
      >
        <span className="lensCore" />
        <span className="lensRing" />
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengthsSection" id="strengths">
      <div className="pageShell">
        <SectionLabel eyebrow="CAPABILITY" title="个人优势" />
        <div className="strengthGrid">
          {strengths.map((item) => (
            <article className="strengthCard" key={item.title}>
              <div className="iconBox">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFinal() {
  return (
    <section className="contactFinal" id="contact">
      <div className="pageShell contactInner">
        <span className="contactKicker">LET'S MAKE VISUAL CONTENT FEEL CLEARER</span>
        <h2>用干净的画面、清晰的内容和 AI 工作流，把想法推向真实交付。</h2>
        <div className="contactCards">
          <a href="mailto:596881032@qq.com">
            <Mail size={21} />
            596881032@qq.com
          </a>
          <a href="tel:13221819162">
            <Phone size={21} />
            13221819162
          </a>
          <a href={portfolioUrl} target="_blank" rel="noreferrer">
            <Clapperboard size={21} />
            Feishu Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ eyebrow, title }) {
  return (
    <div className="sectionLabel">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

