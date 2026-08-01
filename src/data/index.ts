// ── Site-wide data ────────────────────────────────────────────────────────────

export const PI = {
  name: 'Dr. Jung-Keun Yoo',
  title: 'Principal Investigator',
  position: 'Senior Research Scientist',
  affiliation: 'Korea Institute of Science and Technology (KIST)',
  department: 'Division of Energy & Environment Technology',
  email: 'jkyoo@kist.re.kr',
  phone: '+82-2-958-5441',
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format',
  bio: `Dr. Jung-Keun Yoo leads the Advanced Battery Materials & Process Laboratory at KIST, where his team investigates next-generation electrode fabrication methods and advanced carbon nanomaterials. With a career spanning both fundamental electrochemistry and scalable manufacturing, Dr. Yoo bridges the gap between laboratory innovation and industrial application.

His pioneering work on dry electrode processing and CNT conductive networks has attracted collaboration from leading battery manufacturers across East Asia and Europe. He received his Ph.D. in Chemical Engineering from KAIST and completed postdoctoral training at MIT's Research Laboratory of Electronics.`,
  education: [
    { degree: 'Ph.D. Chemical Engineering', institution: 'KAIST', year: '2008' },
    { degree: 'Postdoctoral Fellow', institution: 'MIT Research Laboratory of Electronics', year: '2010' },
    { degree: 'B.S. Chemical Engineering', institution: 'Seoul National University', year: '2003' },
  ],
  stats: [
    { value: '60+', label: 'Publications' },
    { value: '25', label: 'H-index' },
    { value: '2,664+', label: 'Citations' },
    { value: '4', label: 'Tech Transfers' },
  ],
}

export interface TeamMember {
  name: string
  role: string
  degree: string
  research: string
  photo: string
  email?: string
  year?: string
}

export const CURRENT_MEMBERS: TeamMember[] = [
  {
    name: 'Sungho Park',
    role: 'Senior Researcher',
    degree: 'Ph.D., KAIST',
    research: 'GeoDict digital twin, electrode microstructure simulation',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&auto=format',
    email: 'shpark@kist.re.kr',
  },
  {
    name: 'Jiyeon Kim',
    role: 'Ph.D. Candidate',
    degree: 'M.S., Seoul National University',
    research: 'Dry electrode process, PTFE fibrillation mechanics',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format',
    email: 'jykim@kist.re.kr',
  },
  {
    name: 'Hyunjoon Lee',
    role: 'Ph.D. Candidate',
    degree: 'B.S., POSTECH',
    research: 'CNT conductive additives, thick electrode characterization',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format',
    email: 'hjlee@kist.re.kr',
  },
  {
    name: 'Yuna Jung',
    role: 'M.S. Candidate',
    degree: 'B.S., Yonsei University',
    research: 'Fluorine-free binders, aqueous electrode processing',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format',
    email: 'ynjung@kist.re.kr',
  },
  {
    name: 'Minjun Kwon',
    role: 'M.S. Candidate',
    degree: 'B.S., Korea University',
    research: 'Design of experiments, RSM-guided process optimization',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format',
    email: 'mjkwon@kist.re.kr',
  },
  {
    name: 'Dahye Seo',
    role: 'Research Assistant',
    degree: 'B.S., KAIST',
    research: 'EIS characterization, electrochemical testing protocols',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format',
    email: 'dhseo@kist.re.kr',
  },
]

export const ALUMNI: TeamMember[] = [
  {
    name: 'Jihwan Cho',
    role: 'Ph.D. 2023',
    degree: 'Now at Samsung SDI',
    research: 'Dry electrode process scale-up',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format',
    year: '2023',
  },
  {
    name: 'Minji Park',
    role: 'M.S. 2023',
    degree: 'Now at LG Energy Solution',
    research: 'Aqueous binder systems',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&auto=format',
    year: '2023',
  },
  {
    name: 'Seungmin Han',
    role: 'Ph.D. 2022',
    degree: 'Postdoc, MIT',
    research: 'CNT network percolation',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&auto=format',
    year: '2022',
  },
  {
    name: 'Areum Shin',
    role: 'M.S. 2022',
    degree: 'Now at SK Innovation',
    research: 'Electrode microstructure analysis',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&auto=format',
    year: '2022',
  },
]

export interface Publication {
  title: string
  authors: string
  journal: string
  year: number
  volume: string
  doi: string
  impactFactor: number
  isCorresponding: boolean
  coverImage: string
  isCoverArticle?: boolean
  abstract?: string
}

export const PUBLICATIONS: Publication[] = [
  // 2026
  {
    title: 'Scalable Dry Electrode Fabrication via Sequential PTFE Fibrillation and Hot-Calendering for High-Energy Lithium-Ion Batteries',
    authors: 'Kim, J., Park, S., Lee, H., Yoo, J.-K.',
    journal: 'Advanced Energy Materials',
    year: 2026,
    volume: '16, 2501124',
    doi: '10.1002/aenm.202501124',
    impactFactor: 24.4,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1609564134002-5ec3fcba0d05?w=120&h=160&fit=crop&auto=format',
    isCoverArticle: true,
  },
  {
    title: 'Machine Learning-Guided Design of Experiments for Dry Electrode Process Parameter Optimization',
    authors: 'Kwon, M., Yoo, J.-K.',
    journal: 'Journal of Power Sources',
    year: 2026,
    volume: '625, 235802',
    doi: '10.1016/j.jpowsour.2026.235802',
    impactFactor: 9.2,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&h=160&fit=crop&auto=format',
  },
  // 2025
  {
    title: 'Microstructure-Resolved Digital Twin of Li-Ion Battery Composite Cathodes Using GeoDict Finite-Element Platform',
    authors: 'Park, S., Jung, Y., Yoo, J.-K.',
    journal: 'Journal of The Electrochemical Society',
    year: 2025,
    volume: '172, 020548',
    doi: '10.1149/1945-7111/ad8c4a',
    impactFactor: 3.9,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=120&h=160&fit=crop&auto=format',
    isCoverArticle: true,
  },
  {
    title: 'Fluorine-Free Carboxymethyl Cellulose / Styrene-Butadiene Rubber Binder System for High-Areal-Capacity NMC811 Cathodes',
    authors: 'Jung, Y., Seo, D., Yoo, J.-K.',
    journal: 'Electrochimica Acta',
    year: 2025,
    volume: '503, 144872',
    doi: '10.1016/j.electacta.2025.144872',
    impactFactor: 6.9,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=160&fit=crop&auto=format',
  },
  {
    title: 'Single-Walled Carbon Nanotube Conductive Network Percolation in Thick NMC622 Electrodes: Effect of Dispersion Protocol',
    authors: 'Lee, H., Kim, J., Yoo, J.-K.',
    journal: 'ACS Applied Materials & Interfaces',
    year: 2025,
    volume: '17, 12441–12453',
    doi: '10.1021/acsami.4c18341',
    impactFactor: 9.5,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&h=160&fit=crop&auto=format',
  },
  // 2024
  {
    title: 'Tortuosity Factor Measurement of Thick Graphite Anodes via Electrochemical Impedance Spectroscopy and X-ray Tomography',
    authors: 'Park, S., Lee, H., Yoo, J.-K.',
    journal: 'Carbon',
    year: 2024,
    volume: '218, 118712',
    doi: '10.1016/j.carbon.2024.118712',
    impactFactor: 10.9,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=160&fit=crop&auto=format',
    isCoverArticle: true,
  },
  {
    title: 'Comparative Study of Solvent-Free and Slurry-Cast Electrodes: Microstructure, Mechanical Integrity, and Rate Capability',
    authors: 'Kim, J., Yoo, J.-K.',
    journal: 'Energy Storage Materials',
    year: 2024,
    volume: '71, 103618',
    doi: '10.1016/j.ensm.2024.103618',
    impactFactor: 18.9,
    isCorresponding: true,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=160&fit=crop&auto=format',
  },
]

export const RESEARCH_AREAS = [
  {
    id: 'dry-electrode',
    title: 'Dry Electrode Process',
    subtitle: 'Solvent-Free Fabrication',
    description: 'We develop scalable dry electrode manufacturing using PTFE fibrillation technology, entirely eliminating toxic NMP solvents. Our process achieves electrode densities and capacities competitive with conventional wet-slurry methods while dramatically reducing energy consumption and environmental impact.',
    details: [
      'PTFE fibrillation at controlled shear rates',
      'Hot-calendering parameter optimization',
      'Adhesion mechanics and delamination prevention',
      'Pilot-scale roll-to-roll processing',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&auto=format',
    color: '#003087',
  },
  {
    id: 'geodict',
    title: 'GeoDict Digital Twin',
    subtitle: 'Computational Microstructure',
    description: 'Using FIB-SEM tomography and the GeoDict simulation platform, we construct voxel-accurate 3D models of composite electrodes. These digital twins enable virtual prediction of tortuosity, effective transport coefficients, and electrochemical performance before a single physical cell is assembled.',
    details: [
      'FIB-SEM 3D tomographic reconstruction',
      'Tortuosity and effective diffusivity prediction',
      'Doyle-Fuller-Newman (DFN) model coupling',
      'Virtual electrode design and optimization',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format',
    color: '#1a4aad',
  },
  {
    id: 'fluorine-free',
    title: 'Fluorine-Free Binder',
    subtitle: 'Sustainable Electrode Chemistry',
    description: 'PVDF binders require toxic NMP solvent and are difficult to recycle. We engineer aqueous binder alternatives — CMC/SBR, PAA, and sodium alginate — that match or exceed PVDF performance while enabling water-based processing and end-of-life electrode recovery.',
    details: [
      'CMC/SBR and PAA binder formulation',
      'Interfacial adhesion and cohesion analysis',
      'Cycling stability under high stress conditions',
      'End-of-life recycle compatibility',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format',
    color: '#2a5fc4',
  },
  {
    id: 'cnt',
    title: 'CNT Conductive Additive',
    subtitle: 'Carbon Nanotube Networks',
    description: 'Single- and multi-walled carbon nanotubes form percolating conductive networks at far lower loading than carbon black, enabling thicker, higher-energy electrodes. We study dispersion protocols, surface functionalization, and network connectivity to maximize electronic conductivity.',
    details: [
      'SWCNT and MWCNT dispersion engineering',
      'Percolation threshold and network topology',
      'Surface chemistry and functionalization',
      'Conductive network in thick electrodes (>200 µm)',
    ],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&auto=format',
    color: '#003087',
  },
  {
    id: 'thick-electrode',
    title: 'Thick Electrode Analysis',
    subtitle: 'High-Energy Electrode Design',
    description: 'Thick electrodes (>200 µm) offer high areal capacity but suffer from ion transport limitations and mechanical fragility. We characterize rate-limiting phenomena using EIS, GITT, and X-ray tomography, then design electrode architectures that overcome these barriers.',
    details: [
      'EIS and GITT-based transport analysis',
      'X-ray CT and FIB-SEM characterization',
      'Pore structure gradient engineering',
      'Mechanical integrity under cycling stress',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
    color: '#1a4aad',
  },
  {
    id: 'doe',
    title: 'Design of Experiments',
    subtitle: 'Statistical Process Optimization',
    description: 'Complex electrode formulations have large multi-dimensional parameter spaces. We apply response surface methodology, Box-Behnken design, and machine learning to efficiently navigate this space — reducing optimization experiments by 70% compared to one-factor-at-a-time approaches.',
    details: [
      'Response Surface Methodology (RSM)',
      'Box-Behnken and Central Composite Design',
      'Machine learning-guided optimization',
      'Multi-objective Pareto front analysis',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
    color: '#2a5fc4',
  },
]

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=800&fit=crop&auto=format',
    tag: 'Featured Research',
    title: 'Dry Electrode Processing',
    subtitle: 'Solvent-free fabrication for sustainable battery manufacturing at scale',
    link: '#research',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=800&fit=crop&auto=format',
    tag: 'New Publication',
    title: 'GeoDict Digital Twin',
    subtitle: 'Microstructure-resolved simulation platform for next-generation electrode design',
    link: '#publications',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&auto=format',
    tag: 'Open Positions',
    title: 'Join ABMP Lab',
    subtitle: 'We are recruiting motivated Ph.D. students and postdoctoral researchers',
    link: '#contact',
  },
]

export const NEWS = [
  {
    id: 1,
    category: 'Research',
    date: 'June 15, 2026',
    title: 'ABMP Lab paper selected as cover article in Advanced Energy Materials',
    excerpt: 'Our recent work on scalable dry electrode fabrication was selected as the cover article for the July 2026 issue of Advanced Energy Materials.',
    photo: 'https://images.unsplash.com/photo-1609564134002-5ec3fcba0d05?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 2,
    category: 'Awards',
    date: 'May 22, 2026',
    title: 'Dr. Yoo receives the KIST Outstanding Researcher Award 2026',
    excerpt: 'Dr. Jung-Keun Yoo was honored with the KIST Outstanding Researcher Award in recognition of his contributions to sustainable battery electrode manufacturing.',
    photo: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 3,
    category: 'People',
    date: 'April 10, 2026',
    title: 'Jiyeon Kim wins Best Poster at the ECS Spring 2026 Meeting',
    excerpt: 'Ph.D. candidate Jiyeon Kim received the Best Poster Award at the Electrochemical Society Spring 2026 Meeting in Seattle for her work on PTFE fibrillation mechanics.',
    photo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 4,
    category: 'Lab Life',
    date: 'March 3, 2026',
    title: 'ABMP Lab welcomes three new M.S. candidates for Spring 2026',
    excerpt: 'We are excited to welcome Minjun Kwon, Dahye Seo, and Chanho Bae as new graduate students to the lab this semester.',
    photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 5,
    category: 'Research',
    date: 'February 18, 2026',
    title: 'New NRF grant awarded for fluorine-free binder development',
    excerpt: 'ABMP Lab received a 3-year National Research Foundation grant to develop next-generation fluorine-free binder systems for sustainable battery electrode manufacturing.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 6,
    category: 'Awards',
    date: 'January 8, 2026',
    title: 'Tech transfer agreement signed with leading battery manufacturer',
    excerpt: 'ABMP Lab has completed its fourth technology transfer, licensing dry electrode process know-how to a major battery cell manufacturer in Korea.',
    photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 7,
    category: 'Lab Life',
    date: 'December 15, 2025',
    title: 'ABMP Lab end-of-year symposium and team dinner',
    excerpt: 'The lab gathered to celebrate a productive 2025 with presentations from all lab members and a dinner at a traditional Korean restaurant in Seongbuk.',
    photo: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 8,
    category: 'People',
    date: 'November 20, 2025',
    title: 'Jihwan Cho successfully defends Ph.D. dissertation',
    excerpt: 'Congratulations to Dr. Jihwan Cho on the successful defense of his dissertation on dry electrode process scale-up. He will join Samsung SDI as a senior engineer.',
    photo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format',
  },
]
