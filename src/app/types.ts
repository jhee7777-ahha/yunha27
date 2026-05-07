export interface University {
  id: string;
  name: string;
  major: string;
  employmentStrength: string;
  faRequest: string;
  location: string;
  undergradSize: number;
  coa: string;
  type: string;
  traits: string;
  image: string;
  timeZone: string;
  deadlines: {
    early: string;
    regular: string;
    css: string;
  };
}

export const UNIVERSITIES: University[] = [
  {
    id: "mit",
    name: "MIT",
    major: "Applied Mathematics / Economics (STEM)",
    employmentStrength: "최상 (퀀트/금융/컨설팅)",
    faRequest: "동일 (Need-blind)",
    location: "MA / Cambridge",
    undergradSize: 4600,
    coa: "$85,900",
    type: "사립",
    traits: "최상위권 공대, FA 매우 강력, 퀀트/핀테크 최적",
    image: "/univ-images/mit.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/15" }
  },
  {
    id: "harvard",
    name: "Harvard",
    major: "Statistics / Applied Math (STEM)",
    employmentStrength: "최상 (금융/컨설팅)",
    faRequest: "동일 (Need-blind)",
    location: "MA / Cambridge",
    undergradSize: 7200,
    coa: "$82,000",
    type: "사립",
    traits: "이론+네트워크 최강, 글로벌 인맥, FA 강력",
    image: "/univ-images/harvard.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/01" }
  },
  {
    id: "princeton",
    name: "Princeton",
    major: "OR & Financial Engineering (STEM)",
    employmentStrength: "최상 (퀀트 직결)",
    faRequest: "동일 (Need-blind)",
    location: "NJ / Princeton",
    undergradSize: 5200,
    coa: "$86,000",
    type: "사립",
    traits: "물리/수학 기반 최적, 퀀트 리서치 최강",
    image: "/univ-images/princeton.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/01" }
  },
  {
    id: "yale",
    name: "Yale",
    major: "Statistics & Data Science (STEM)",
    employmentStrength: "최상 (금융/리서치)",
    faRequest: "동일 (Need-blind)",
    location: "CT / New Haven",
    undergradSize: 6500,
    coa: "$84,000",
    type: "사립",
    traits: "균형 잡힌 교육, 강력한 FA 보조, 리서치 중심",
    image: "/univ-images/yale.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/02", css: "02/01" }
  },
  {
    id: "columbia",
    name: "Columbia",
    major: "Operations Research (STEM)",
    employmentStrength: "최상 (월가 직결)",
    faRequest: "불리 (Need-aware)",
    location: "NY / NYC",
    undergradSize: 8000,
    coa: "$90,000",
    type: "사립",
    traits: "뉴욕 위치적 이점, 월스트리트 인턴십 최적",
    image: "/univ-images/columbia.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/15" }
  },
  {
    id: "upenn",
    name: "UPenn (Wharton)",
    major: "Finance / Statistics (STEM)",
    employmentStrength: "최상 (IB/PE 직결)",
    faRequest: "불리 (Need-aware)",
    location: "PA / Philadelphia",
    undergradSize: 10000,
    coa: "$85,000",
    type: "사립",
    traits: "비즈니스 스쿨 1위, 금융권 파워 네트워킹",
    image: "/univ-images/upenn.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/05", css: "02/01" }
  },
  {
    id: "chicago",
    name: "UChicago",
    major: "Economics / Statistics (STEM)",
    employmentStrength: "최상 (퀀트/IB)",
    faRequest: "불리 (Need-aware)",
    location: "IL / Chicago",
    undergradSize: 7500,
    coa: "$88,000",
    type: "사립",
    traits: "학구적 분위기, 경제학 학파 본산, 퀀트 선호",
    image: "/univ-images/uchicago.png",
    timeZone: "America/Chicago",
    deadlines: { early: "11/01", regular: "01/04", css: "02/01" }
  },
  {
    id: "stanford",
    name: "Stanford",
    major: "Mathematical & Computational Science (STEM)",
    employmentStrength: "최상 (실리콘밸리/금융)",
    faRequest: "불리 (Need-aware)",
    location: "CA / Stanford",
    undergradSize: 7700,
    coa: "$87,000",
    type: "사립",
    traits: "혁신/창업 정신, 테크+금융 융합 최강",
    image: "/univ-images/stanford.png",
    timeZone: "America/Los_Angeles",
    deadlines: { early: "11/01", regular: "01/05", css: "02/15" }
  },
  {
    id: "cornell",
    name: "Cornell",
    major: "Operations Research / Statistics (STEM)",
    employmentStrength: "우수 (금융/엔지니어링)",
    faRequest: "불리 (Need-aware)",
    location: "NY / Ithaca",
    undergradSize: 15500,
    coa: "$83,000",
    type: "사립",
    traits: "실무 중심 교육, 광범위한 동문 네트워크",
    image: "/univ-images/cornell.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/02", css: "02/15" }
  },
  {
    id: "nyu",
    name: "NYU (Stern)",
    major: "Finance / Business Analytics (STEM)",
    employmentStrength: "최상 (월가 직결)",
    faRequest: "불리 (Need-aware)",
    location: "NY / NYC",
    undergradSize: 26000,
    coa: "$89,000",
    type: "사립",
    traits: "맨해튼 심장부, 월가 인턴십의 성지",
    image: "/univ-images/nyu.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/15" }
  },
  {
    id: "cmu",
    name: "Carnegie Mellon",
    major: "Computational Finance / Stats (STEM)",
    employmentStrength: "최상 (퀀트 트레이딩)",
    faRequest: "불리 (Need-aware)",
    location: "PA / Pittsburgh",
    undergradSize: 7000,
    coa: "$82,000",
    type: "사립",
    traits: "컴퓨팅 파워 최강, 퀀트 트레이딩 선호 1위",
    image: "/univ-images/cmu.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/01", css: "02/15" }
  },
  {
    id: "caltech",
    name: "Caltech",
    major: "Applied & Computational Math (STEM)",
    employmentStrength: "최상 (퀀트 리서치)",
    faRequest: "동일 (Need-blind)",
    location: "CA / Pasadena",
    undergradSize: 1000,
    coa: "$84,000",
    type: "사립",
    traits: "소수 정예, 연구 역량 최상, 수학적 깊이",
    image: "/univ-images/caltech.png",
    timeZone: "America/Los_Angeles",
    deadlines: { early: "11/01", regular: "01/03", css: "01/15" }
  },
  {
    id: "duke",
    name: "Duke",
    major: "Economics / Statistical Science (STEM)",
    employmentStrength: "우수 (금융/컨설팅)",
    faRequest: "불리 (Need-aware)",
    location: "NC / Durham",
    undergradSize: 6800,
    coa: "$85,000",
    type: "사립",
    traits: "강력한 동문 결속력, 남부의 하버드",
    image: "/univ-images/duke.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/02", css: "02/01" }
  },
  {
    id: "dartmouth",
    name: "Dartmouth",
    major: "Quantitative Social Science (STEM)",
    employmentStrength: "우수 (IB/컨설팅)",
    faRequest: "동일 (Need-blind)",
    location: "NH / Hanover",
    undergradSize: 4500,
    coa: "$83,000",
    type: "사립",
    traits: "작지만 강력한 공동체, 학부 교육 중심",
    image: "/univ-images/dartmouth.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/02", css: "02/01" }
  },
  {
    id: "brown",
    name: "Brown",
    major: "Applied Math - Economics (STEM)",
    employmentStrength: "우수 (금융/리서치)",
    faRequest: "동일 (Need-blind)",
    location: "RI / Providence",
    undergradSize: 7100,
    coa: "$86,000",
    type: "사립",
    traits: "유연한 학제(Open Curriculum), 창의적 인재 선호",
    image: "/univ-images/brown.png",
    timeZone: "America/New_York",
    deadlines: { early: "11/01", regular: "01/05", css: "02/01" }
  }
];
