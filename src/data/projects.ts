export type Project = {
  id: number
  title: string
  role: string
  duration: string
  link?: string
  tech: string[]
  summary: string
  problem: string
  process: string[]
  learnings: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Surgical Instrument Detection',
    role: 'Co-Author & ML Developer',
    duration: 'December 2024 – Present',
    tech: ['Python', 'PyTorch', 'YOLO', 'RF-DETR', 'Roboflow', 'BeautifulSoup'],
    summary:
      'Co-authoring a research paper focused on the accurate, real-time detection of surgical instruments from video, a critical task for medical AI.',
    problem:
      'The goal was to build a model that could accurately identify 19 different surgical instruments. The primary challenge was the lack of high-quality, annotated public datasets, which is a common bottleneck in medical AI.',
    process: [
      'Developed a large-scale web scraper using BeautifulSoup to gather thousands of images from medical journals and websites.',
      'Curated and annotated a robust custom dataset of 1,500 images.',
      'Systematically benchmarked state-of-the-art models (YOLO v8, v11, v12; RF-DETR) to find the best balance of speed and accuracy.',
      'Fine-tuned models with deep understanding of hyperparameters and data augmentation to prevent overfitting.',
    ],
    learnings:
      'Data quality is the most important factor in a successful ML project. Achieved 90% detection accuracy, demonstrating the value of careful dataset creation and systematic benchmarking.',
  },
  {
    id: 2,
    title: 'Scholar Weave',
    role: 'Back-End & Full-Stack Developer',
    duration: '2025 – Present',
    link: 'https://github.com/Prithiv-0/Scholarweave',
    tech: ['Go', 'React', 'Tailwind CSS', 'RDFLib', 'SPARQL', 'Cytoscape.js'],
    summary:
      'An ongoing project to build a web app for academic discovery, allowing users to visualize the connections between research papers, authors, and topics.',
    problem:
      "It's difficult to see the \"big picture\" of how different fields, papers, and authors influence each other. The goal is to make these connections visible and interactive.",
    process: [
      'Engineered the back-end using Go for high performance and excellent concurrency.',
      'Chose Go for its ability to query external APIs (OpenAlex, ORKG) efficiently.',
      'Currently designing services to generate and serve RDF graphs using semantic web standards (FOAF).',
      'Planning front-end in React and Tailwind CSS with Cytoscape.js for interactive graph visualizations.',
    ],
    learnings:
      'Designed a clean, scalable back-end architecture in Go. Deep dive into concurrent programming, API design, and semantic web technologies.',
  },
  {
    id: 3,
    title: 'Raifetch',
    role: 'Sole Developer',
    duration: '2025',
    tech: ['Rust', 'Rayon', 'TOML', 'Linux CLI'],
    summary:
      'A high-performance, multi-threaded CLI tool for Linux that displays system hardware and software information, inspired by tools like neofetch.',
    problem:
      'Wanted a system information tool that was "blazingly fast" and highly configurable, more so than many popular script-based tools. This was also a personal challenge to build a complete, real-world application in Rust.',
    process: [
      'Built from the ground up in Rust with speed as the primary goal.',
      'Used the Rayon library to parallelize all data-fetching tasks (CPU, RAM, OS, GPU simultaneously).',
      'Implemented a configuration system using .toml files for easy customization.',
      'Engineered a clean, modular rendering system handling both text and image-based logos with custom positioning.',
    ],
    learnings:
      'Deep knowledge of low-level systems programming in Rust, multi-threading with Rayon, and how to structure configurable command-line applications.',
  },
]

export const featuredProjects = projects.map((project) => ({
  id: project.id,
  title: project.title,
  role: project.role,
  tech: project.tech.slice(0, 3),
  desc: project.summary,
}))
