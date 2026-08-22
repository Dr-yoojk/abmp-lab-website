import journalCoverConcurrently from '../imports/journal-cover-concurrently.jpg'
import journalCoverUltrahigh from '../imports/journal-cover-ultrahigh.jpg'
import journalCoverEnhancing from '../imports/journal-cover-enhancing.jpg'
import journalCoverFluorine from '../imports/journal-cover-fluorine.jpg'
import journalCoverStable from '../imports/journal-cover-stable.jpg'
import journalCoverGel from '../imports/journal-cover-gel.jpg'
import journalCoverHighly from '../imports/journal-cover-highly.jpg'
import journalCoverSynergetic from '../imports/journal-cover-synergetic.jpg'
import journalCoverOrganosilicon from '../imports/journal-cover-organosilicon.jpg'
import journalCoverMultifunctional from '../imports/journal-cover-multifunctional.jpg'
import journalCoverK15vopo4f05 from '../imports/journal-cover-k15vopo4f05.jpg'
import labLifeHanbinBirthday1 from '../imports/lab-life-hanbin-birthday-1.jpg'
import labLifeHanbinBirthday2 from '../imports/lab-life-hanbin-birthday-2.jpg'
import labLifeByeongjinBirthday1 from '../imports/lab-life-byeongjin-birthday-1.jpg'
import labLifeByeongjinBirthday2 from '../imports/lab-life-byeongjin-birthday-2.jpg'
import labLifeByeongjinBirthday3 from '../imports/lab-life-byeongjin-birthday-3.jpg'
import galleryBatterySymposium2026 from '../imports/gallery-battery-symposium-2026.jpg'
import awardsDasolKwonCeremony from '../imports/awards-dasol-kwon-ceremony.png'
import awardsDasolKwonList from '../imports/awards-dasol-kwon-list.png'

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
  id: string
  title: string
  authors: string
  journal: string
  year: number
  doi: string
  volume?: string
  impactFactor?: number
  isCorresponding?: boolean
  coverImage?: string
  isCoverArticle?: boolean
  abstract?: string
}

// Single source of truth for lab publications — the Publications page and
// the Home page "Featured Publications" section both read from this array,
// so updating it here keeps both pages in sync.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    year: 2026,
    title: 'Concurrently Achieving 10 mAh cm⁻² and Ultralow Binder Content via Active-Surface-Guided Fibrillation for Fab-Scale Dry-Processed Lithium-ion Batteries',
    authors: 'J. Park, H. Oh, J.H. Lim, S. Jung, N. Yoo, J.K. Yoo, K.M. Jeong, K.Y. Park',
    journal: 'Advanced Energy Materials',
    doi: '10.1002/aenm.202504005',
    coverImage: journalCoverConcurrently,
  },
  {
    id: 'p2',
    year: 2026,
    title: 'Ultrahigh-Mass-Loading Electrodes With Enhanced Homogeneity Using a High-Concentration Slurry for Lithium-Ion Batteries',
    authors: 'J.K. Park, W. Shin, W. Jo, H.J. Lee, W.Y. Jeon, J. Ahn, J. Yoon, Y.J. Jeong, J. Oh, J.K. Yoo',
    journal: 'Carbon Energy',
    doi: '10.1002/cey2.70108',
    coverImage: journalCoverUltrahigh,
  },
  {
    id: 'p3',
    year: 2025,
    title: 'Enhancing Structural Flexibility in P2-type Ni-Mn-based Na-layered Cathodes for High Power-Capability and Fast Charging/Discharging Performance',
    authors: 'B. Ku, J. Ahn, H. Lee, H. Ahn, J. Lee, H. Kweon, M. Choi, H.G. Jung, K. Ihm, E. Sim, J.K. Yoo, J. Kim',
    journal: 'Energy Storage Materials',
    doi: '10.1016/j.ensm.2024.103930',
    coverImage: journalCoverEnhancing,
  },
  {
    id: 'p4',
    year: 2024,
    title: 'A Fluorine-Free Binder with Organic-Inorganic Crosslinked Networks Enabling Structural Stability of Ni-Rich Layered Cathodes in Lithium-Ion Batteries',
    authors: 'J. Jang, J. Ahn, J. Ahn, U. Jeong, J. Yoon, J.K. Park, W. Shin, M.J. Kang, M. Cho, J.K. Yoo',
    journal: 'Advanced Functional Materials',
    doi: '10.1002/adfm.202410866',
    coverImage: journalCoverFluorine,
  },
  {
    id: 'p5',
    year: 2023,
    title: 'Stable High-Voltage Operation of Oxygen Redox in P2-type Na-Layered Oxide Cathode at Fast Discharging via Enhanced Kinetics',
    authors: 'B. Ku, H. Ahn, S. Lee, J. Ahn, M. Choi, J. Kang, H. Park, J. Kim, A.Y. Kim, J.K. Yoo',
    journal: 'Energy Storage Materials',
    doi: '10.1016/j.ensm.2023.102952',
    coverImage: journalCoverStable,
  },
  {
    id: 'p6',
    year: 2023,
    title: 'Gel Polymer Electrolyte with Improved Adhesion Property Based on Poly(4-hydroxybutyl acrylate) for Lithium-Ion Batteries',
    authors: 'H.J. Choi, Y.J. Jeong, H.S. Choi, J.S. Kim, J. Ahn, W. Shin, B.M. Jung, E. Cho, J.K. Yoo',
    journal: 'Chemical Engineering Journal',
    doi: '10.1016/j.cej.2023.145673',
    coverImage: journalCoverGel,
  },
  {
    id: 'p7',
    year: 2023,
    title: 'Highly Efficient Oxidation of Single-Walled Carbon Nanotubes in Liquid Crystalline Phase and Dispersion for Applications in Li-Ion Batteries',
    authors: 'J.H. Kim, J. Ahn, H.M. Kim, J.Y. Cho, D.G. Lee, Y. Oh, J.H. Park, J.S. Kim, J.K. Yoo',
    journal: 'Chemical Engineering Journal',
    doi: '10.1016/j.cej.2023.141350',
    coverImage: journalCoverHighly,
  },
  {
    id: 'p8',
    year: 2022,
    title: 'Synergetic Effect of Hybrid Conductive Additives for High-Capacity and Excellent Cyclability in Si Anodes',
    authors: 'B.I. Yoo, H.M. Kim, M.J. Choi, J.K. Yoo',
    journal: 'Nanomaterials',
    doi: '10.3390/nano12193354',
    coverImage: journalCoverSynergetic,
  },
  {
    id: 'p9',
    year: 2022,
    title: 'A Novel Organosilicon-Type Binder for LiCoO2 Cathode in Li-Ion Batteries',
    authors: 'J. Ahn, H.G. Im, Y. Lee, D. Lee, H. Jang, Y. Oh, K. Chung, T. Park, M.K. Um, J.K. Yoo',
    journal: 'Energy Storage Materials',
    doi: '10.1016/j.ensm.2022.04.005',
    coverImage: journalCoverOrganosilicon,
  },
  {
    id: 'p10',
    year: 2021,
    title: 'Multifunctional Additives for High-Energy-Density Lithium-Ion Batteries: Improved Conductive Additive/Binder Networks and Enhanced Electrochemical Properties',
    authors: 'J. Ahn, B. Park, J. Kim, M.K. Um, J.W. Yi, J.K. Yoo',
    journal: 'ACS Applied Materials & Interfaces',
    doi: '10.1021/acsami.1c00848',
    coverImage: journalCoverMultifunctional,
  },
  {
    id: 'p11',
    year: 2021,
    title: 'K1.5VOPO4F0.5: A Novel High-Power and High-Voltage Cathode for Rechargeable K-Ion Batteries',
    authors: 'H. Park, W. Ko, Y. Lee, J. Kang, J. Ahn, J.K. Yoo, J. Kim',
    journal: 'Journal of Materials Chemistry A',
    doi: '10.1039/D1TA02247D',
    coverImage: journalCoverK15vopo4f05,
  },
]

export const RESEARCH_AREAS = [
  {
    id: 'dry-electrode',
    title: 'Dry Electrode Processing',
    subtitle: 'Solvent-Free Fabrication',
    description: 'We develop scalable, solvent-free dry electrode manufacturing based on PTFE fibrillation. Our active-surface-guided fibrillation approach, achieved via carbon-nanotube-coated active materials, reduces kneading time by over 75% while enabling fab-scale (>100 g batch) electrodes with industrially relevant areal capacities exceeding 10 mAh cm⁻² at ultralow binder content — all while remaining compatible with roll-to-roll manufacturing.',
    details: [
      'Active-surface-guided PTFE fibrillation',
      'Carbon-nanotube-coated active material design',
      'Fab-scale (>100 g) roll-to-roll processing',
      'Ultralow binder content, NMP-free process',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&auto=format',
    color: '#003087',
  },
  {
    id: 'thick-slurry',
    title: 'Thick Electrode & High-Concentration Slurry',
    subtitle: 'Wet-Slurry Manufacturing',
    description: 'Alongside dry processing, we advance wet-slurry routes to ultrahigh-mass-loading electrodes for next-generation energy storage. Using an integrated binder–CNT composite (IBC) dispersion, we formulate high-solids-content (>77 wt%) slurries that deliver cathodes exceeding 12 mAh cm⁻² with improved coating homogeneity — work now extending into a dedicated national project on high-concentration slurry manufacturing for large-scale energy storage systems.',
    details: [
      'High-solids-content (>77 wt%) slurry formulation',
      'Integrated binder–CNT composite (IBC) dispersion',
      'Ultrahigh areal capacity (>12 mAh cm⁻²) electrodes',
      'Coating homogeneity for large-format ESS cells',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
    color: '#1a4aad',
  },
  {
    id: 'fluorine-free',
    title: 'Fluorine-Free Binder Development',
    subtitle: 'Sustainable Electrode Chemistry',
    description: "PVDF, the industry-standard binder, requires toxic NMP solvent and is increasingly restricted under PFAS regulations. We design fluorine-free alternatives — organosilicon and hydroxyl-rich siloxane nanohybrid binders — that match or exceed PVDF's adhesion and cycling performance on high-nickel and LiCoO2 cathodes, while eliminating fluorine chemistry entirely.",
    details: [
      'Organosilicon and siloxane nanohybrid binder design',
      'High-nickel (NCM811) and LiCoO2 cathode compatibility',
      'PFAS-free binder strategy development',
      'Adhesion, cohesion, and cycling stability evaluation',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format',
    color: '#2a5fc4',
  },
  {
    id: 'cnt',
    title: 'Carbon Nanotube Conductive Networks',
    subtitle: 'Carbon Nanotube Networks',
    description: 'Building on more than a decade of carbon nanotube dispersion and conductive-additive R&D — including multiple technology transfers to industry — we engineer SWCNT and hybrid CB/SWCNT conductive networks. Mild oxidation of SWCNTs in their liquid crystalline phase enables dispersant-free debundling, while hybrid CB/SWCNT additives improve cycling retention in silicon-based anodes.',
    details: [
      'SWCNT liquid-crystalline-phase oxidation and dispersion',
      'Hybrid CB/SWCNT conductive additive design',
      'Dispersant-free debundling methods',
      'Industry technology transfer track record',
    ],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&auto=format',
    color: '#003087',
  },
  {
    id: 'geodict',
    title: 'Digital Twin & Microstructure Simulation',
    subtitle: 'Computational Microstructure',
    description: 'In collaboration with our postdoctoral research team, we use the GeoDict simulation platform to build digital twins of composite electrode microstructures. These models let us evaluate tortuosity, transport pathways, and process-performance relationships computationally — before a single physical cell is built.',
    details: [
      'GeoDict-based digital twin construction',
      '3D electrode microstructure modeling',
      'Tortuosity and transport-pathway analysis',
      'Simulation-guided process optimization',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format',
    color: '#1a4aad',
  },
  {
    id: 'silicon-anode',
    title: 'Silicon Anode Materials',
    subtitle: 'High-Capacity Anode Design',
    description: "Silicon's high theoretical capacity comes with significant volume-expansion challenges during cycling. We are advancing porous silicon anode architectures and high-capacity, high-efficiency silicon materials for fast-charging, high-energy-density lithium-ion cells, currently supported by two national development programs.",
    details: [
      'Porous silicon anode architecture design',
      'Fast-charging silicon material development',
      'Volume-expansion mitigation via conductive networks',
      'Cell-level integration and scale-up',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
    color: '#2a5fc4',
  },
]

export interface Project {
  agencyCode: string
  agency: string
  title: string
  period: string
  status: string
}

// Sorted by start date, most recent first.
export const CURRENT_PROJECTS: Project[] = [
  {
    agencyCode: 'NRF',
    agency: '한국연구재단',
    title: '3D 테셀레이션 구조 기반 고출력 고안전 폼팩터프리 전지 설계 및 공정 핵심기술 개발',
    period: '2026.07 – 2030.12',
    status: 'Ongoing',
  },
  {
    agencyCode: 'NRF',
    agency: '한국연구재단',
    title: '단계적 접근을 통한 고안전성 비수계 리튬이온전지용 SAFE 발화 억제 소재 개발',
    period: '2025.04 – 2029.12',
    status: 'Ongoing',
  },
  {
    agencyCode: 'KEIT',
    agency: '한국산업기술기획평가원',
    title: '급속충전이 가능한 고에너지밀도 리튬이온전지용 고효율 실리콘 음극 소재 개발',
    period: '2024.04 – 2027.12',
    status: 'Ongoing',
  },
  {
    agencyCode: 'COMPA',
    agency: '과학기술사업화진흥원',
    title: '차세대 이차전지용 다공성 실리콘 음극재 기술고도화 및 실용화 제조기술 개발',
    period: '2023.04 – 2027.03',
    status: 'Ongoing',
  },
  {
    agencyCode: 'NRF',
    agency: '한국연구재단',
    title: '고에너지밀도 리튬이차전지용 후막전극 제조를 위한 고농도 슬러리 제조공정 개발',
    period: '2022.01 – 2026.12',
    status: 'Ongoing',
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

export interface NewsItem {
  id: number
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  photos: string[]
}

export const NEWS: NewsItem[] = [
  {
    id: 4,
    slug: '2026-battery-technology-symposium',
    category: 'Research',
    date: 'August 20–21, 2026',
    title: '2026 Battery Technology Symposium',
    excerpt: 'Our lab attended the 2026 Battery Technology Symposium (전지기술심포지엄) at the Korea Science & Technology Center, Seoul.',
    photos: [galleryBatterySymposium2026],
  },
  {
    id: 3,
    slug: 'dasol-kwon-outstanding-graduate-award',
    category: 'Awards',
    date: 'August 19, 2026',
    title: 'Dasol Kwon Wins Outstanding Graduate Award',
    excerpt: 'Congratulations to Dr. Dasol Kwon for winning the Outstanding Graduate Award at the 2026 KIST-School Excellence Awards Ceremony!',
    photos: [awardsDasolKwonCeremony, awardsDasolKwonList],
  },
  {
    id: 2,
    slug: 'byeongjin-parks-birthday',
    category: 'Lab life',
    date: 'August 14, 2026',
    title: "Byeongjin Park's Birthday",
    excerpt: "We celebrated Byeongjin Park's birthday with cake, then headed to KIST's guest dining hall for their limited-edition mal-bok chicken porridge special!",
    photos: [labLifeByeongjinBirthday1, labLifeByeongjinBirthday2, labLifeByeongjinBirthday3],
  },
  {
    id: 1,
    slug: 'han-bin-songs-birthday',
    category: 'Lab life',
    date: 'July 10, 2026',
    title: "Han Bin Song's Birthday",
    excerpt: "The lab celebrated Han Bin Song's birthday with cake and good cheer!",
    photos: [labLifeHanbinBirthday1, labLifeHanbinBirthday2],
  },
]
