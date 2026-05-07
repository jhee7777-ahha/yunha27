export interface University {
  id: string;
  name: string;
  major: string;
  isStem: boolean;
  employmentStrength: string;
  faNoRequest: string;
  faRequest: string;
  location: string;
  state: string;
  timeZone: "EST" | "CST" | "PST" | "MST";
  undergradSize: number;
  coa: string;
  type: string;
  traits: string;
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
    isStem: true,
    employmentStrength: "최상 (퀀트/금융/컨설팅)",
    faNoRequest: "동일",
    faRequest: "동일 (Need-blind)",
    location: "Cambridge, MA",
    state: "MA",
    timeZone: "EST",
    undergradSize: 4600,
    coa: "$85,900",
    type: "사립",
    traits: "최상위, FA 매우 강력",
    deadlines: { early: "11/01 (EA)", regular: "01/04", css: "11/30" }
  },
  {
    id: "harvard",
    name: "Harvard",
    major: "Statistics / Applied Math (STEM)",
    isStem: true,
    employmentStrength: "최상 (금융/컨설팅)",
    faNoRequest: "동일",
    faRequest: "동일 (Need-blind)",
    location: "Cambridge, MA",
    state: "MA",
    timeZone: "EST",
    undergradSize: 7200,
    coa: "$82,000",
    type: "사립",
    traits: "이론+네트워크 최강",
    deadlines: { early: "11/01 (REA)", regular: "01/01", css: "11/01" }
  },
  {
    id: "princeton",
    name: "Princeton",
    major: "Operations Research & Financial Engineering (STEM)",
    isStem: true,
    employmentStrength: "최상 (퀀트 직결)",
    faNoRequest: "동일",
    faRequest: "동일 (Need-blind)",
    location: "Princeton, NJ",
    state: "NJ",
    timeZone: "EST",
    undergradSize: 5200,
    coa: "$86,000",
    type: "사립",
    traits: "물리/수학 기반 최적",
    deadlines: { early: "11/01 (SCEA)", regular: "01/01", css: "11/01" }
  },
  {
    id: "yale",
    name: "Yale",
    major: "Statistics & Data Science (STEM)",
    isStem: true,
    employmentStrength: "최상 (금융/리서치)",
    faNoRequest: "동일",
    faRequest: "동일 (Need-blind)",
    location: "New Haven, CT",
    state: "CT",
    timeZone: "EST",
    undergradSize: 6500,
    coa: "$84,000",
    type: "사립",
    traits: "균형형, FA 강력",
    deadlines: { early: "11/01 (SCEA)", regular: "01/02", css: "11/10" }
  },
  {
    id: "columbia",
    name: "Columbia",
    major: "Operations Research (STEM)",
    isStem: true,
    employmentStrength: "최상 (월가 직결)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "NYC, NY",
    state: "NY",
    timeZone: "EST",
    undergradSize: 8000,
    coa: "$90,000+",
    type: "사립",
    traits: "위치 최고, 금융 직결",
    deadlines: { early: "11/01 (ED)", regular: "01/01", css: "11/15" }
  },
  {
    id: "upenn",
    name: "UPenn",
    major: "Systems Engineering (STEM)",
    isStem: true,
    employmentStrength: "최상 (금융 진입 가능)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "Philadelphia, PA",
    state: "PA",
    timeZone: "EST",
    undergradSize: 10000,
    coa: "$92,000",
    type: "사립",
    traits: "Wharton 연계 가능",
    deadlines: { early: "11/01 (ED)", regular: "01/05", css: "12/01" }
  },
  {
    id: "dartmouth",
    name: "Dartmouth",
    major: "Mathematics / Quantitative Social Science (STEM)",
    isStem: true,
    employmentStrength: "상 (금융 네트워크 강함)",
    faNoRequest: "유리",
    faRequest: "유리 (Need-aware but generous)",
    location: "Hanover, NH",
    state: "NH",
    timeZone: "EST",
    undergradSize: 4400,
    coa: "$88,000",
    type: "사립",
    traits: "소규모, 내향형 적합",
    deadlines: { early: "11/01 (ED)", regular: "01/02", css: "11/01" }
  },
  {
    id: "brown",
    name: "Brown",
    major: "Applied Math / Data Science (STEM)",
    isStem: true,
    employmentStrength: "상 (퀀트/데이터)",
    faNoRequest: "유리",
    faRequest: "유리 (Need-aware but generous)",
    location: "Providence, RI",
    state: "RI",
    timeZone: "EST",
    undergradSize: 7000,
    coa: "$87,000",
    type: "사립",
    traits: "자유로운 커리큘럼",
    deadlines: { early: "11/01 (ED)", regular: "01/02", css: "11/01" }
  },
  {
    id: "uchicago",
    name: "U Chicago",
    major: "Statistics / Data Science (STEM)",
    isStem: true,
    employmentStrength: "최상 (수학 금융)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "Chicago, IL",
    state: "IL",
    timeZone: "CST",
    undergradSize: 7600,
    coa: "$91,200",
    type: "사립",
    traits: "이론 금융 강점",
    deadlines: { early: "11/01 (ED1/EA)", regular: "01/02", css: "11/15" }
  },
  {
    id: "duke",
    name: "Duke",
    major: "Statistical Science / Math (STEM)",
    isStem: true,
    employmentStrength: "상 (컨설팅/금융)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "Durham, NC",
    state: "NC",
    timeZone: "EST",
    undergradSize: 6700,
    coa: "$88,000",
    type: "사립",
    traits: "밸런스 좋음",
    deadlines: { early: "11/01 (ED)", regular: "01/02", css: "11/15" }
  },
  {
    id: "northwestern",
    name: "Northwestern",
    major: "Data Science / Math (STEM)",
    isStem: true,
    employmentStrength: "상 (컨설팅/금융)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "Evanston, IL",
    state: "IL",
    timeZone: "CST",
    undergradSize: 8600,
    coa: "$89,000",
    type: "사립",
    traits: "안정적 취업",
    deadlines: { early: "11/01 (ED)", regular: "01/02", css: "12/01" }
  },
  {
    id: "vanderbilt",
    name: "Vanderbilt",
    major: "Mathematics / Data Science (STEM)",
    isStem: true,
    employmentStrength: "상 (금융/분석)",
    faNoRequest: "유리",
    faRequest: "유리 (상대적으로 generous)",
    location: "Nashville, TN",
    state: "TN",
    timeZone: "CST",
    undergradSize: 7100,
    coa: "$83,000",
    type: "사립",
    traits: "FA 비교적 우수",
    deadlines: { early: "11/01 (ED1)", regular: "01/01", css: "11/01" }
  },
  {
    id: "rice",
    name: "Rice",
    major: "Statistics / Applied Math (STEM)",
    isStem: true,
    employmentStrength: "상 (에너지 금융/데이터)",
    faNoRequest: "유리",
    faRequest: "유리 (generous)",
    location: "Houston, TX",
    state: "TX",
    timeZone: "CST",
    undergradSize: 4500,
    coa: "$80,000",
    type: "사립",
    traits: "소규모, 내향형 적합",
    deadlines: { early: "11/01 (ED)", regular: "01/04", css: "11/15" }
  },
  {
    id: "emory",
    name: "Emory",
    major: "Quantitative Sciences / Math (STEM)",
    isStem: true,
    employmentStrength: "상 (기업 금융/분석)",
    faNoRequest: "유리",
    faRequest: "유리 (generous)",
    location: "Atlanta, GA",
    state: "GA",
    timeZone: "EST",
    undergradSize: 7100,
    coa: "$84,000",
    type: "사립",
    traits: "남부 금융 허브",
    deadlines: { early: "11/01 (ED1)", regular: "01/01", css: "11/15" }
  },
  {
    id: "georgetown",
    name: "Georgetown",
    major: "Math / Statistics (STEM)",
    isStem: true,
    employmentStrength: "상 (국제 금융)",
    faNoRequest: "유리",
    faRequest: "불리 (Need-aware)",
    location: "Washington D.C",
    state: "DC",
    timeZone: "EST",
    undergradSize: 7900,
    coa: "$90,500",
    type: "사립",
    traits: "정책+금융 강점",
    deadlines: { early: "11/01 (EA)", regular: "01/10", css: "02/01" }
  }
];
