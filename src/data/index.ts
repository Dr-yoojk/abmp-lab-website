import pubAdvs2026Fig1 from '../imports/pub-advs2026-fig1.jpg'
import pubCey2026Fig1 from '../imports/pub-cey2026-fig1.jpg'
import pubCssc2026Fig1 from '../imports/pub-cssc2026-fig1.jpg'
import pubAenm2026Fig1 from '../imports/pub-aenm2026-fig1.jpg'
import pubEsm2025Fig1 from '../imports/pub-esm2025-fig1.jpg'
import pubAfm2024Fig1 from '../imports/pub-afm2024-fig1.jpg'
import pubEsm2023Fig1 from '../imports/pub-esm2023-fig1.jpg'
import pubCej2023aFig1 from '../imports/pub-cej2023a-fig1.jpg'
import pubCej2023bFig1 from '../imports/pub-cej2023b-fig1.jpg'
import pubJmca2022Fig1 from '../imports/pub-jmca2022-fig1.jpg'
import pubNano2022aFig1 from '../imports/pub-nano2022a-fig1.jpg'
import pubNano2022bFig1 from '../imports/pub-nano2022b-fig1.jpg'
import pubEsm2022Fig1 from '../imports/pub-esm2022-fig1.jpg'
import pubJmca2021Fig1 from '../imports/pub-jmca2021-fig1.jpg'
import pubAcsami2021Fig1 from '../imports/pub-acsami2021-fig1.jpg'
import labLifeHanbinBirthday1 from '../imports/lab-life-hanbin-birthday-1.jpg'
import labLifeHanbinBirthday2 from '../imports/lab-life-hanbin-birthday-2.jpg'
import labLifeByeongjinBirthday1 from '../imports/lab-life-byeongjin-birthday-1.jpg'
import labLifeByeongjinBirthday2 from '../imports/lab-life-byeongjin-birthday-2.jpg'
import labLifeOebinRestaurantFlyer from '../imports/lab-life-oebin-restaurant-flyer.jpg'
import galleryBatterySymposium2026 from '../imports/gallery-battery-symposium-2026.jpg'
import awardsDasolKwonCeremony from '../imports/awards-dasol-kwon-ceremony.jpg'
import awardsDasolKwonList from '../imports/awards-dasol-kwon-list.png'
import researchCntNetworks from '../imports/research-cnt-networks.jpg'
import researchWetSlurryProcess from '../imports/research-wet-slurry-process.jpg'
import researchVietnamDeputyPmVisit1 from '../imports/research-vietnam-deputy-pm-visit-1.jpg'
import researchVietnamDeputyPmVisit2 from '../imports/research-vietnam-deputy-pm-visit-2.jpg'
import researchVietnamDeputyPmVisit3 from '../imports/research-vietnam-deputy-pm-visit-3.jpg'
import galleryKwonAdvsPaper from '../imports/gallery-kwon-advs-paper.jpg'
import awardsJiwonWooPoster2026 from '../imports/awards-jiwon-woo-poster-2026.jpg'
import kecsFall20261Group from '../imports/kecs-fall-2026-1-group.jpg'
import kecsFall20262JiwonTalk from '../imports/kecs-fall-2026-2-jiwon-talk.jpg'
import kecsFall20263JiwonTalk from '../imports/kecs-fall-2026-3-jiwon-talk.jpg'
import kecsFall20264MinsooPoster from '../imports/kecs-fall-2026-4-minsoo-poster.jpg'
import kecsFall20265SeogwiDawon from '../imports/kecs-fall-2026-5-seogwi-dawon.jpg'
import kecsFall20266Photobooth from '../imports/kecs-fall-2026-6-photobooth.jpg'
import kcers2026YooInvited1 from '../imports/kcers-2026-yoo-invited-1.jpg'
import kcers2026YooInvited2 from '../imports/kcers-2026-yoo-invited-2.jpg'
import kcers2026YooInvitedAbstract from '../imports/kcers-2026-yoo-invited-abstract.jpg'
import labLifeKistAutumnFesta1 from '../imports/lab-life-kist-autumn-festa-1.jpg'
import labLifeKistAutumnFesta2 from '../imports/lab-life-kist-autumn-festa-2.jpg'

export interface Publication {
  id: string
  title: string
  authors: string
  journal: string
  year: number
  link: string
  doi?: string
  volume?: string
  impactFactor?: number
  isCorresponding?: boolean
  coverImage?: string
  isCoverArticle?: boolean
  abstract?: string
}

// Single source of truth for lab publications — the Publications page and
// the Home page "Featured Publications" section both read from this array,
// so updating it here keeps both pages in sync. The first 4 entries are
// shown as "Featured Publications" on both pages (PUBLICATIONS.slice(0, 4)),
// so their order matters; the rest just need to be grouped correctly by year.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    year: 2026,
    title: 'A Dispersant-Driven Carbon-Binder Domains Homogeneity in High-Energy-Density Electrodes for Lithium-Ion Batteries',
    authors: 'D.S. Kwon, M.Y. Seo, J. Ahn, Y.J. Jeong, W. Shin, W. Ko, M.J. Kim, J. Lee, W.Y. Jeon, M.J. Choi, K.I. Kim, J.J. Eom, S.Y. Oh, H. Lee, J. Bang, J. Kim, Y.J. Kim, J.K. Yoo',
    journal: 'Advanced Science',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/advs.77293',
    coverImage: pubAdvs2026Fig1,
  },
  {
    id: 'p2',
    year: 2026,
    title: 'Concurrently Achieving 10 mAh cm⁻² and Ultralow Binder Content via Active-Surface-Guided Fibrillation for Fab-Scale Dry-Processed Lithium-ion Batteries',
    authors: 'J. Park, H. Oh, J.H. Lim, S. Jung, N. Yoo, J.K. Yoo, K.M. Jeong, K.Y. Park',
    journal: 'Advanced Energy Materials',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202504005',
    coverImage: pubAenm2026Fig1,
  },
  {
    id: 'p3',
    year: 2026,
    title: 'Ultrahigh-Mass-Loading Electrodes With Enhanced Homogeneity Using a High-Concentration Slurry for Lithium-Ion Batteries',
    authors: 'J.K. Park, W. Shin, W. Jo, H.J. Lee, W.Y. Jeon, J. Ahn, J. Yoon, Y.J. Jeong, J. Oh, M. Kang, M.J. Choi, J. Joo, J. Kim, S.K. Cho, J.D. Park, J. Nam, J.K. Yoo',
    journal: 'Carbon Energy',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/cey2.70108',
    coverImage: pubCey2026Fig1,
  },
  {
    id: 'p4',
    year: 2026,
    title: 'Fluorine-Free Binder Strategies for High-Nickel Cathodes: Toward PFAS-Free Lithium-Ion Batteries',
    authors: 'W. Shin, D.S. Kwon, M. Kim, J. Woo, H.G. Jung, J. Bang, J. Shim, J.K. Yoo',
    journal: 'ChemSusChem',
    link: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/cssc.202501943',
    coverImage: pubCssc2026Fig1,
  },
  {
    id: 'p5',
    year: 2025,
    title: 'Enhancing Structural Flexibility in P2-type Ni-Mn-based Na-layered Cathodes for High Power-Capability and Fast Charging/Discharging Performance',
    authors: 'B. Ku, J. Ahn, H. Lee, H. Ahn, J. Lee, H. Kweon, M. Choi, H.G. Jung, K. Ihm, E. Sim, J.K. Yoo, J. Kim',
    journal: 'Energy Storage Materials',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405829724007566',
    coverImage: pubEsm2025Fig1,
  },
  {
    id: 'p6',
    year: 2024,
    title: 'A Fluorine-Free Binder with Organic-Inorganic Crosslinked Networks Enabling Structural Stability of Ni-Rich Layered Cathodes in Lithium-Ion Batteries',
    authors: 'J. Jang, J. Ahn, J. Ahn, U. Jeong, J. Yoon, J.K. Park, W. Shin, M.J. Kang, M.K. Cho, D.J. Kang, J. Kim, J.K. Yoo, H.G. Im',
    journal: 'Advanced Functional Materials',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adfm.202410866',
    coverImage: pubAfm2024Fig1,
  },
  {
    id: 'p7',
    year: 2023,
    title: 'Stable High-Voltage Operation of Oxygen Redox in P2-type Na-Layered Oxide Cathode at Fast Discharging via Enhanced Kinetics',
    authors: 'B. Ku, H. Ahn, S. Lee, J. Ahn, M. Choi, J. Kang, H. Park, J. Kim, A.Y. Kim, H.G. Jung, J.K. Yoo, J. Kim',
    journal: 'Energy Storage Materials',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405829723003306',
    coverImage: pubEsm2023Fig1,
  },
  {
    id: 'p8',
    year: 2023,
    title: 'Gel Polymer Electrolyte with Improved Adhesion Property Based on Poly(4-hydroxybutyl acrylate) for Lithium-Ion Batteries',
    authors: 'H.J. Choi, Y.J. Jeong, H.S. Choi, J.S. Kim, J. Ahn, W. Shin, B.M. Jung, E. Cho, H.J. Lee, J.H. Choi, M.J. Choi, J. Yoon, J.W. Yi, G.T. Hwang, J.K. Yoo, K. Chung',
    journal: 'Chemical Engineering Journal',
    link: 'https://www.sciencedirect.com/science/article/pii/S1385894723044042',
    coverImage: pubCej2023aFig1,
  },
  {
    id: 'p9',
    year: 2023,
    title: 'Highly Efficient Oxidation of Single-Walled Carbon Nanotubes in Liquid Crystalline Phase and Dispersion for Applications in Li-Ion Batteries',
    authors: 'J.H. Kim, J. Ahn, H.M. Kim, J.Y. Cho, D.G. Lee, Y. Oh, J.H. Park, J.S. Kim, J.K. Yoo, J.T. Han',
    journal: 'Chemical Engineering Journal',
    link: 'https://www.sciencedirect.com/science/article/pii/S1385894723000815',
    coverImage: pubCej2023bFig1,
  },
  {
    id: 'p10',
    year: 2022,
    title: 'A High-Energy Conversion-Type Cathode Activated by Amorpholization for Li Rechargeable Batteries',
    authors: 'Y. Lee, J. Kang, J. Ahn, W. Ko, H. Park, S. Lee, S. Lee, J.K. Yoo, J. Kim',
    journal: 'Journal of Materials Chemistry A',
    link: 'https://pubs.rsc.org/ta/article-abstract/10/37/20080/789574',
    coverImage: pubJmca2022Fig1,
  },
  {
    id: 'p11',
    year: 2022,
    title: 'Synergetic Effect of Hybrid Conductive Additives for High-Capacity and Excellent Cyclability in Si Anodes',
    authors: 'B.I. Yoo, H.M. Kim, M.J. Choi, J.K. Yoo',
    journal: 'Nanomaterials',
    link: 'https://www.mdpi.com/2079-4991/12/19/3354',
    coverImage: pubNano2022aFig1,
  },
  {
    id: 'p12',
    year: 2022,
    title: 'Solvent-Free Fabrication of Thick Electrodes in Thermoplastic Binders for High Energy Density Lithium-Ion Batteries',
    authors: 'H.M. Kim, B.I. Yoo, J.W. Yi, M.J. Choi, J.K. Yoo',
    journal: 'Nanomaterials',
    link: 'https://www.mdpi.com/2079-4991/12/19/3320',
    coverImage: pubNano2022bFig1,
  },
  {
    id: 'p13',
    year: 2022,
    title: 'A Novel Organosilicon-Type Binder for LiCoO2 Cathode in Li-Ion Batteries',
    authors: 'J. Ahn, H.G. Im, Y. Lee, D. Lee, H. Jang, Y. Oh, K. Chung, T. Park, M.K. Um, J.W. Yi, J. Kim, D.J. Kang, J.K. Yoo',
    journal: 'Energy Storage Materials',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405829722001945',
    coverImage: pubEsm2022Fig1,
  },
  {
    id: 'p14',
    year: 2021,
    title: 'K1.5VOPO4F0.5: A Novel High-Power and High-Voltage Cathode for Rechargeable K-Ion Batteries',
    authors: 'H. Park, W. Ko, Y. Lee, J. Kang, J. Ahn, J.K. Yoo, J. Kim',
    journal: 'Journal of Materials Chemistry A',
    link: 'https://pubs.rsc.org/ta/article-abstract/9/19/11802/749474',
    coverImage: pubJmca2021Fig1,
  },
  {
    id: 'p15',
    year: 2021,
    title: 'Multifunctional Additives for High-Energy-Density Lithium-Ion Batteries: Improved Conductive Additive/Binder Networks and Enhanced Electrochemical Properties',
    authors: 'J. Ahn, B. Park, J. Kim, M.K. Um, J.W. Yi, J.K. Yoo',
    journal: 'ACS Applied Materials & Interfaces',
    link: 'https://pubs.acs.org/doi/abs/10.1021/acsami.1c00848',
    coverImage: pubAcsami2021Fig1,
  },
]

export interface ResearchArea {
  id: string
  navLabel: string
  title: string
  subtitle: string
  description: string[]
  details: string[]
  image?: string
  color: string
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'dry-electrode',
    navLabel: 'Dry Electrode Processing',
    title: 'Dry Electrode Processing',
    subtitle: 'Solvent-Free Fabrication',
    description: [
      'We develop scalable, solvent-free dry electrode manufacturing based on PTFE fibrillation. Our active-surface-guided fibrillation approach, achieved via carbon-nanotube-coated active materials, reduces kneading time by over 75% while enabling fab-scale (>100 g batch) electrodes with industrially relevant areal capacities exceeding 10 mAh cm⁻² at ultralow binder content — all while remaining compatible with roll-to-roll manufacturing.',
    ],
    details: [
      'Active-surface-guided PTFE fibrillation',
      'Carbon-nanotube-coated active material design',
      'Fab-scale (>100 g) roll-to-roll processing',
      'Ultralow binder content, NMP-free process',
    ],
    color: '#003087',
  },
  {
    id: 'thick-slurry',
    navLabel: 'Slurry & Coating',
    title: 'Thick Electrode & High-Concentration Slurry',
    subtitle: 'Wet-Slurry Manufacturing',
    description: [
      'We develop wet-slurry routes to ultrahigh-mass-loading electrodes using an integrated binder–CNT composite (IBC) dispersion. This approach enables high-solids-content (>77 wt%) slurries with uniform conductive-additive/binder distribution — reducing solvent usage by ~30% while achieving cathodes exceeding 12 mAh cm⁻² at low CNT content (0.6 wt% vs. 0.85 wt% conventional).',
      'Faster drying also improves coating speed, supporting energy-efficient, large-scale electrode manufacturing.',
    ],
    details: [
      'High-solids-content (>77 wt%) IBC slurry formulation',
      '~30% solvent reduction, faster drying & coating speed',
      'Ultrahigh areal capacity (>12 mAh cm⁻²) at low CNT content',
      'Coating homogeneity for large-format ESS cells',
    ],
    image: researchWetSlurryProcess,
    color: '#1a4aad',
  },
  {
    id: 'fluorine-free',
    navLabel: 'Fluorine-Free Binder',
    title: 'Fluorine-Free Binder Development',
    subtitle: 'Sustainable Electrode Chemistry',
    description: [
      "PVDF, the industry-standard binder, requires toxic NMP solvent and is increasingly restricted under PFAS regulations. We design fluorine-free alternatives — organosilicon and hydroxyl-rich siloxane nanohybrid binders — that match or exceed PVDF's adhesion and cycling performance on high-nickel and LiCoO2 cathodes, while eliminating fluorine chemistry entirely.",
    ],
    details: [
      'Organosilicon and siloxane nanohybrid binder design',
      'High-nickel (NCM811) and LiCoO2 cathode compatibility',
      'PFAS-free binder strategy development',
      'Adhesion, cohesion, and cycling stability evaluation',
    ],
    color: '#2a5fc4',
  },
  {
    id: 'cnt',
    navLabel: 'CNT Networks',
    title: 'Carbon Nanotube Networks',
    subtitle: 'Carbon Nanotube Networks',
    description: [
      'Building on more than a decade of carbon nanotube dispersion and conductive-additive R&D — including multiple technology transfers to industry — we engineer SWCNT and hybrid CB/SWCNT conductive networks. Mild oxidation of SWCNTs in their liquid crystalline phase enables dispersant-free debundling, while hybrid CB/SWCNT additives improve cycling retention in silicon-based anodes.',
      'Through the "Form-Factor-Free" battery project (KIER-led consortium, 2026–), we are extending this to SWCNT–GMS hybrid networks for flexible, high-output thick-film cathodes — combining SWCNT\'s electron transport with GMS\'s flexible compression-recovery.',
    ],
    details: [
      'SWCNT liquid-crystalline-phase oxidation and dispersion',
      'Hybrid CB/SWCNT conductive additive design',
      'SWCNT–GMS hybrid networks for flexible thick-film cathodes',
      'Dispersant-free debundling methods',
      'Industry technology transfer track record',
    ],
    image: researchCntNetworks,
    color: '#003087',
  },
  {
    id: 'geodict',
    navLabel: 'Digital Twin',
    title: 'Digital Twin & Microstructure Simulation',
    subtitle: 'Computational Microstructure',
    description: [
      'In collaboration with our postdoctoral research team, we use the GeoDict simulation platform to build digital twins of composite electrode microstructures. These models let us evaluate tortuosity, transport pathways, and process-performance relationships computationally — before a single physical cell is built.',
    ],
    details: [
      'GeoDict-based digital twin construction',
      '3D electrode microstructure modeling',
      'Tortuosity and transport-pathway analysis',
      'Simulation-guided process optimization',
    ],
    color: '#1a4aad',
  },
  {
    id: 'silicon-anode',
    navLabel: 'Silicon Anode',
    title: 'Silicon Anode Materials',
    subtitle: 'High-Capacity Anode Design',
    description: [
      "Silicon's high theoretical capacity comes with significant volume-expansion challenges during cycling. We are advancing porous silicon anode architectures and high-capacity, high-efficiency silicon materials for fast-charging, high-energy-density lithium-ion cells, currently supported by two national development programs.",
    ],
    details: [
      'Porous silicon anode architecture design',
      'Fast-charging silicon material development',
      'Volume-expansion mitigation via conductive networks',
      'Cell-level integration and scale-up',
    ],
    color: '#2a5fc4',
  },
]

export interface GalleryPhoto {
  src: string
  // 'cover' (default) crops the photo to fill the slide; 'contain' shrinks
  // it to fit fully in frame — use for posters/screenshots where cropping
  // would cut off text.
  fit?: 'cover' | 'contain'
}

export interface NewsItem {
  id: number
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  photos: GalleryPhoto[]
  // Optional external link shown under the description (e.g. an abstract PDF)
  link?: { label: string; href: string }
}

export const NEWS: NewsItem[] = [
  {
    id: 10,
    slug: 'kecs-fall-meeting-2026',
    category: 'Research',
    date: 'November 18–20, 2026',
    title: 'DEEP Lab at the 51st KECS Fall Meeting, Jeju',
    excerpt: "Our lab joined the 51st Korean Electrochemical Society Fall Meeting at ICC Jeju. Jiwon Woo gave an oral presentation on the role of PTFE fibrillation in dry-electrode structure and performance, and Minsoo Lee presented a poster on SWCNT–mesoporous carbon hybrid networks for high-loading cathodes.",
    photos: [{ src: kecsFall20261Group }, { src: kecsFall20262JiwonTalk }, { src: kecsFall20263JiwonTalk, fit: 'contain' }, { src: kecsFall20264MinsooPoster, fit: 'contain' }, { src: kecsFall20265SeogwiDawon }, { src: kecsFall20266Photobooth, fit: 'contain' }],
  },
  {
    id: 8,
    slug: 'kist-autumn-festa-2026',
    category: 'Lab life',
    date: 'October 16, 2026',
    title: '2026 KIST Autumn Festa',
    excerpt: 'The lab joined the 2026 KIST Autumn Festa — an afternoon of games and team events with colleagues across the institute.',
    photos: [{ src: labLifeKistAutumnFesta2 }, { src: labLifeKistAutumnFesta1 }],
  },
  {
    id: 9,
    slug: 'kcers-2026-invited-talk-jung-keun-yoo',
    category: 'Research',
    date: 'October 1, 2026',
    title: 'Dr. Jung-Keun Yoo Gives Invited Talk at the Korean Ceramic Society',
    excerpt: "Dr. Jung-Keun Yoo delivered an invited talk at the 2026 Korean Ceramic Society meeting (COEX, Seoul): 'Design Strategies for Thick Electrodes in Lithium-Ion Batteries: Comparing Wet and Dry Processes and Structure–Performance Analysis' (리튬이차전지 후막 전극 설계 전략: 습·건식 공정 비교와 구조-성능 분석).",
    photos: [{ src: kcers2026YooInvited1 }, { src: kcers2026YooInvited2 }, { src: kcers2026YooInvitedAbstract, fit: 'contain' }],
    link: { label: 'Abstract (PDF)', href: 'https://www.kcersmeeting.or.kr/data/DownLoad/%EC%9C%A0%EC%A0%95%EA%B7%BC_%EC%B4%88%EB%A1%9D.pdf' },
  },
  {
    id: 5,
    slug: 'vietnamese-deputy-pm-visits-deep-lab',
    category: 'Research',
    date: 'September 8, 2026',
    title: 'Vietnamese Deputy PM Visits DEEP Lab',
    excerpt: 'Deputy Prime Minister Ho Quoc Dung of Vietnam visited KIST as part of an official delegation and observed a live coin-cell assembly demonstration at the DEEP Laboratory.',
    photos: [
      { src: researchVietnamDeputyPmVisit1 },
      { src: researchVietnamDeputyPmVisit2 },
      { src: researchVietnamDeputyPmVisit3 },
    ],
  },
  {
    id: 4,
    slug: '2026-battery-technology-symposium',
    category: 'Research',
    date: 'August 20–21, 2026',
    title: '2026 Battery Technology Symposium',
    excerpt: 'Our lab attended the 2026 Battery Technology Symposium (전지기술심포지엄) at the Korea Science & Technology Center, Seoul.',
    photos: [{ src: galleryBatterySymposium2026 }],
  },
  {
    id: 3,
    slug: 'dasol-kwon-outstanding-graduate-award',
    category: 'Awards',
    date: 'August 19, 2026',
    title: 'Da-Sol Kwon Wins Outstanding Graduate Award',
    excerpt: 'Congratulations to Dr. Da-Sol Kwon for winning the Outstanding Graduate Award at the 2026 KIST-School Excellence Awards Ceremony!',
    photos: [
      { src: awardsDasolKwonCeremony },
      { src: awardsDasolKwonList, fit: 'contain' },
    ],
  },
  {
    id: 2,
    slug: 'byeongjin-parks-birthday',
    category: 'Lab life',
    date: 'August 14, 2026',
    title: "Byeongjin Park's Birthday",
    excerpt: "We celebrated Byeongjin Park's birthday with cake, then headed to KIST's guest dining hall for their limited-edition mal-bok chicken porridge special!",
    photos: [
      { src: labLifeByeongjinBirthday1 },
      { src: labLifeByeongjinBirthday2 },
      { src: labLifeOebinRestaurantFlyer, fit: 'contain' },
    ],
  },
  {
    id: 6,
    slug: 'dasol-kwon-paper-accepted-advanced-science',
    category: 'Research',
    date: 'August 12, 2026',
    title: "Da-Sol Kwon's Paper Accepted in Advanced Science",
    excerpt: "Congratulations to Dr. Da-Sol Kwon on the acceptance of her paper, 'A Dispersant-Driven Carbon-Binder Domains Homogeneity in High-Energy-Density Electrodes for Lithium-Ion Batteries,' in Advanced Science!",
    photos: [{ src: galleryKwonAdvsPaper, fit: 'contain' }],
  },
  {
    id: 1,
    slug: 'han-bin-songs-birthday',
    category: 'Lab life',
    date: 'July 10, 2026',
    title: "Han Bin Song's Birthday",
    excerpt: "The lab celebrated Han Bin Song's birthday with cake and good cheer!",
    photos: [{ src: labLifeHanbinBirthday1 }, { src: labLifeHanbinBirthday2 }],
  },
  {
    id: 7,
    slug: 'jiwon-woo-best-poster-award-kecs-2026',
    category: 'Awards',
    date: 'April 3, 2026',
    title: 'Jiwon Woo Wins Best Poster Award at KECS 2026',
    excerpt: "Congratulations to Jiwon Woo on receiving the Best Poster Award at the Korean Electrochemical Society 2026 Spring Meeting (BEXCO, Busan) for 'Rheology-Guided Quantification of Structural Evolution and Performance Governed by PTFE Fibrillation in Dry Electrode for Lithium-Ion Batteries.'",
    photos: [{ src: awardsJiwonWooPoster2026, fit: 'contain' }],
  },
]
