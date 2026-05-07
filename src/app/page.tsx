'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  DollarSign, 
  GraduationCap, 
  Clock, 
  Search, 
  Users,
  Building2,
  ChevronRight,
  TrendingUp,
  ClipboardList,
  Star,
  Trash2,
  BookOpen,
  Trophy,
  BarChart3,
  Lightbulb,
  Compass,
  LayoutGrid,
  CheckCircle2,
  AlertCircle,
  Coins
} from 'lucide-react';
import { UNIVERSITIES, University } from './types';

// 환율 설정 (예: 1달러 = 1,350원)
const EXCHANGE_RATE = 1350;

// Currency Utility
const formatKRW = (usdString: string) => {
  const usd = parseInt(usdString.replace(/[^0-9]/g, ''));
  const krw = usd * EXCHANGE_RATE;
  
  if (krw >= 100000000) {
    const eok = Math.floor(krw / 100000000);
    const man = Math.floor((krw % 100000000) / 10000);
    return `약 ${eok}억 ${man > 0 ? man + '만' : ''}원`;
  } else {
    const man = Math.floor(krw / 10000);
    return `약 ${man}만원`;
  }
};

// Timezone Utility
const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTIme = (date: Date, timeZone?: string) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timeZone || 'Asia/Seoul',
    }).format(date);
  };

  const getDayLabel = (date: Date, timeZone: string) => {
    const local = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const target = new Date(date.toLocaleString('en-US', { timeZone }));
    if (target.getDate() < local.getDate()) return 'Yesterday';
    if (target.getDate() > local.getDate()) return 'Tomorrow';
    return 'Today';
  };

  return {
    kst: formatTIme(time),
    est: formatTIme(time, 'America/New_York'),
    cst: formatTIme(time, 'America/Chicago'),
    pst: formatTIme(time, 'America/Los_Angeles'),
    labels: {
      est: getDayLabel(time, 'America/New_York'),
      cst: getDayLabel(time, 'America/Chicago'),
      pst: getDayLabel(time, 'America/Los_Angeles'),
    }
  };
};

export default function Home() {
  const times = useCurrentTime();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'my-list' | 'guide'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniv, setSelectedUniv] = useState<University | null>(null);
  const [trackedSchools, setTrackedSchools] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('tracked_schools');
    if (saved) setTrackedSchools(JSON.parse(saved));
  }, []);

  const toggleTrack = (id: string) => {
    const next = trackedSchools.includes(id) 
      ? trackedSchools.filter(i => i !== id) 
      : [...trackedSchools, id];
    setTrackedSchools(next);
    localStorage.setItem('tracked_schools', JSON.stringify(next));
  };

  const filteredUniversities = UNIVERSITIES.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSchoolSizeLabel = (size: number) => {
    if (size < 5000) return "Small (소규모)";
    if (size < 10000) return "Medium (중규모)";
    return "Large (대규모)";
  };

  if (!isMounted) return <div className="min-h-screen bg-[#F8FAFC]" />;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Upper Navigation / Time Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <TrendingUp size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-tight text-slate-800">HAFS Finance Bridge</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ivy STEM / Quant / Finance</p>
            </div>
          </div>

          <div className="flex gap-4 items-center overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <TimeDisplay label="KOREA (KST)" time={times.kst} status="Local" color="indigo" />
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <TimeDisplay label="EST (NY/MA)" time={times.est} status={times.labels.est} />
            <TimeDisplay label="CST (IL/TX)" time={times.cst} status={times.labels.cst} />
            <TimeDisplay label="PST (CA)" time={times.pst} status={times.labels.pst} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Switcher */}
        <div className="flex bg-slate-100/80 backdrop-blur-sm p-1.5 rounded-2xl w-fit mb-10 border border-slate-200 shadow-sm">
          <TabButton 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
            label="Dashboard"
            icon={<LayoutGrid size={18} />}
          />
          <TabButton 
            active={activeTab === 'my-list'} 
            onClick={() => setActiveTab('my-list')}
            label={`My Shortlist (${trackedSchools.length})`}
            icon={<Star size={18} className={trackedSchools.length > 0 ? "text-amber-500 fill-amber-500" : ""} />}
          />
          <TabButton 
            active={activeTab === 'guide'} 
            onClick={() => setActiveTab('guide')}
            label="Prep Guide"
            icon={<Lightbulb size={18} />}
          />
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
               <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">University Dashboard</h2>
                  <p className="text-slate-500 mt-1">25개 타겟 대학의 상세 정보와 예상 COA를 확인하세요.</p>
               </div>
               <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="학교명, 전공, 지역 검색..."
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {filteredUniversities.map((univ) => (
                 <UnifiedUniversityCard 
                   key={univ.id}
                   univ={univ}
                   isTracking={trackedSchools.includes(univ.id)}
                   onToggleTrack={() => toggleTrack(univ.id)}
                   onClick={() => setSelectedUniv(univ)}
                   sizeLabel={getSchoolSizeLabel(univ.undergradSize)}
                 />
               ))}
            </div>
          </div>
        )}

        {activeTab === 'my-list' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
                   <Star className="text-amber-500 fill-amber-500" />
                   나의 관심 대학 리스트
                </h2>
                <p className="text-sm text-slate-500">별표 표시한 {trackedSchools.length}개 학교의 주요 마감 정보를 관리합니다.</p>
             </div>

             {trackedSchools.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                      <Star size={32} />
                   </div>
                   <h3 className="font-bold text-lg text-slate-900 tracking-tight">찜한 학교가 없습니다.</h3>
                   <p className="text-slate-500 mt-2 text-sm">Dashboard 탭에서 관심 있는 학교를 추가해 보세요!</p>
                </div>
             ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   <div className="lg:col-span-2 space-y-4">
                      {trackedSchools.map(id => {
                         const u = UNIVERSITIES.find(u => u.id === id);
                         return u ? (
                           <div key={id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-indigo-200 transition-colors">
                              <div className="flex-grow">
                                 <h3 className="font-bold text-lg text-slate-800">{u.name}</h3>
                                 <p className="text-xs text-slate-500 font-medium">{u.major}</p>
                                 <div className="flex gap-4 mt-3">
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-700 rounded-md border border-amber-100">CSS: {u.deadlines.css}</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100">Early: {u.deadlines.early}</span>
                                 </div>
                              </div>
                              <div className="flex gap-2 w-full md:w-auto">
                                 <TrackerStatus label="Common App" />
                                 <TrackerStatus label="CSS Profile" />
                                 <TrackerStatus label="Essays" />
                                 <button 
                                   onClick={() => toggleTrack(id)}
                                   className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                 >
                                   <Trash2 size={18} />
                                 </button>
                              </div>
                           </div>
                         ) : null;
                      })}
                   </div>

                   <div className="space-y-6">
                      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                         <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                           <ClipboardList size={20} className="text-indigo-600" />
                           공통 마일스톤
                         </h3>
                         <div className="space-y-4">
                            <CheckItem label="추천서 선생님 컨택 완료" />
                            <CheckItem label="SAT/ACT 점수 리포팅" />
                            <CheckItem label="은행 잔고 증명서(ISFS) 준비" />
                            <CheckItem label="포트폴리오 최종 업로드" />
                         </div>
                      </div>
                   </div>
                </div>
             )}
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
                   <Lightbulb className="text-indigo-600" />
                   합격 준비 전략 가이드
                </h2>
                <p className="text-sm text-slate-500">전공 및 대학별 준비를 위한 핵심 전략입니다.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GuideSection 
                  icon={<BookOpen className="text-indigo-600" />}
                  title="Academic Excellence"
                  items={[
                    { title: "Essential APs", content: "금융/STEM 필수: Calculus BC, Statistics, Macro/Micro Economics, Computer Science A" },
                    { title: "GPA & Rigor", content: "용인외대부고 커리큘럼 내에서 가장 난이도 높은 수학/과학 수업 이수 권장" },
                    { title: "Test Optional?", content: "최상위권(MIT 등)은 SAT/ACT 점수를 강력히 요구하는 추세로 복귀 중" }
                  ]}
                />
                <GuideSection 
                  icon={<Trophy className="text-amber-500" />}
                  title="Extracurricular Strategy"
                  items={[
                    { title: "Math Competitions", content: "AMC 10/12 성적 및 AIME 진출 여부는 Quant 경로에서 매우 강력한 신호" },
                    { title: "Finance Projects", content: "Wharton Investment Competition 참여 또는 주식/데이터 분석 블로그 운영" },
                    { title: "Leadership", content: "교내 경제/수학 동아리 장 또는 관련 컨퍼런스 기획 경험" }
                  ]}
                />
                <GuideSection 
                  icon={<BarChart3 className="text-emerald-600" />}
                  title="Financial Aid Strategy"
                  items={[
                    { title: "Need-Blind vs Aware", content: "유학생에게 Need-blind인 학교(Harvard, MIT 등)는 FA 신청이 합격에 영향 없음" },
                    { title: "Asset Documentation", content: "CSS Profile 작성 시 부모님 소득 및 자산 증빙 서류의 영문 번역 미리 준비" },
                    { title: "Private Scholarships", content: "대학 자체 지원금 외에 외부 재단 장학금(관정 등) 기회 탐색" }
                  ]}
                />
                <GuideSection 
                  icon={<AlertCircle className="text-rose-500" />}
                  title="Application Final Check"
                  items={[
                    { title: "Why Major Essay", content: "수학적 호기심이 어떻게 금융적 문제 해결로 이어졌는지 구체적 사례 제시" },
                    { title: "Timezone Management", content: "한국 시간과 미국 동부(EST) 마감 시간 차이로 인한 실수 주의 (앱 상단 시계 활용)" },
                    { title: "Interview Prep", content: "Alumni 인터뷰 시 전공 관련 시사 상식 및 본인의 열정 전달 연습" }
                  ]}
                />
             </div>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedUniv && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUniv(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            />
            <motion.div 
              layoutId={selectedUniv.id}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={selectedUniv.image} 
                  alt={selectedUniv.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h2 className="text-4xl font-bold tracking-tight">{selectedUniv.name}</h2>
                    <p className="flex items-center gap-1 text-indigo-100 opacity-90 mt-1"><MapPin size={16}/> {selectedUniv.location}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">추천 전공</h4>
                    <p className="font-bold text-xl text-slate-800 leading-tight">{selectedUniv.major}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Estimated COA (1년)</h4>
                    <div className="flex flex-col">
                       <p className="font-bold text-2xl text-indigo-600">{selectedUniv.coa}</p>
                       <p className="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1">
                          <Coins size={14} />
                          {formatKRW(selectedUniv.coa)} <span className="text-[10px] font-normal opacity-70">(환율 1,350원 기준)</span>
                       </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 grid grid-cols-3 gap-4">
                  <DetailCap icon={<Building2 size={18}/>} label="Type" value={selectedUniv.type} />
                  <DetailCap icon={<Users size={18}/>} label="Size" value={`${selectedUniv.undergradSize.toLocaleString()} 학부생`} />
                  <DetailCap icon={<Clock size={18}/>} label="Timezone" value={selectedUniv.timeZone} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                   <DeadlineCard label="Early" date={selectedUniv.deadlines.early} color="indigo" />
                   <DeadlineCard label="Regular" date={selectedUniv.deadlines.regular} color="slate" />
                   <DeadlineCard label="CSS Profile" date={selectedUniv.deadlines.css} color="amber" />
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold border-b border-slate-200 pb-2 text-slate-800">지원 및 취업 조건</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">유학생 취업 & STEM</p>
                      <p className="font-semibold text-sm leading-relaxed text-slate-700">{selectedUniv.employmentStrength}</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">FA 신청 가이드</p>
                      <p className="font-semibold text-sm leading-relaxed text-slate-700">{selectedUniv.faRequest}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedUniv(null)}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg"
                >
                  Close Explorer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function UnifiedUniversityCard({ univ, isTracking, onToggleTrack, onClick, sizeLabel }: { 
  univ: University, 
  isTracking: boolean, 
  onToggleTrack: () => void, 
  onClick: () => void,
  sizeLabel: string 
}) {
  return (
    <motion.div 
      layoutId={univ.id}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col md:flex-row overflow-hidden"
      onClick={onClick}
    >
      <div className="md:w-64 h-48 md:h-auto relative overflow-hidden flex-shrink-0">
        <img 
          src={univ.image} 
          alt={univ.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleTrack();
          }}
          className={`absolute top-4 left-4 p-2 rounded-full transition-all z-10 shadow-lg ${
            isTracking ? 'bg-amber-500 text-white' : 'bg-white/90 text-slate-300 hover:text-amber-500'
          }`}
        >
          <Star size={18} fill={isTracking ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex-grow p-6 md:p-8 flex flex-col md:flex-row gap-8">
         <div className="flex-grow space-y-4">
            <div>
               <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-widest">{univ.type}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{univ.location}</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{univ.name}</h3>
               <div className="flex items-center gap-3 mt-1">
                  <p className="text-sm font-bold text-indigo-400 flex items-center gap-1.5">
                     <GraduationCap size={16} />
                     {univ.major}
                  </p>
                  <div className="h-3 w-px bg-slate-200" />
                  <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                     <Coins size={14} />
                     {univ.coa} <span className="text-[10px] font-normal opacity-60">({formatKRW(univ.coa)})</span>
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Campus Profile</span>
                  <div className="flex items-center gap-2">
                     <Users size={14} className="text-slate-400" />
                     <span className="text-xs font-semibold text-slate-700">{sizeLabel}</span>
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Strategy Insight</span>
                  <div className="flex items-center gap-2">
                     <Compass size={14} className="text-slate-400" />
                     <span className="text-xs font-semibold text-slate-700 truncate">{univ.traits.split(',')[0]}</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="md:w-48 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
            <div className="space-y-3">
               <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-400">Early</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{univ.deadlines.early}</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-400">Regular</span>
                  <span className="font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md">{univ.deadlines.regular}</span>
               </div>
               <div className={`text-[10px] font-bold text-center py-1 rounded-full mt-2 ${univ.faRequest.includes('불리') ? 'text-orange-500 bg-orange-50' : 'text-emerald-600 bg-emerald-50'}`}>
                  FA: {univ.faRequest}
               </div>
            </div>
            
            <div className="mt-6 flex justify-end">
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <ChevronRight size={20} />
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}

function GuideSection({ icon, title, items }: { icon: React.ReactNode, title: string, items: {title: string, content: string}[] }) {
   return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
         <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-50 rounded-2xl">
               {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
         </div>
         <div className="space-y-6">
            {items.map((item, i) => (
               <div key={i} className="group">
                  <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-1">
                     <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                     {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed pl-3.5 group-hover:text-slate-600 transition-colors">
                     {item.content}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
}

function TrackerStatus({ label }: { label: string }) {
   return (
      <div className="flex-1 min-w-[70px] bg-slate-50 p-2 rounded-xl border border-slate-100 text-center group cursor-pointer hover:border-indigo-300 transition-all">
         <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">{label}</p>
         <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mx-auto group-hover:bg-indigo-400" />
      </div>
   );
}

function DeadlineCard({ label, date, color }: { label: string, date: string, color: 'indigo' | 'slate' | 'amber' }) {
   const colors = {
      indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
      slate: 'bg-slate-50 border-slate-100 text-slate-700',
      amber: 'bg-amber-50 border-amber-100 text-amber-700'
   };
   return (
      <div className={`p-4 rounded-2xl border ${colors[color]} text-center`}>
         <p className="text-[9px] font-bold uppercase mb-1 opacity-70">{label}</p>
         <p className="font-bold text-sm whitespace-nowrap">{date}</p>
      </div>
   );
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
      <div className="w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center group-hover:border-indigo-400">
        <CheckCircle2 className="w-5 h-5 text-slate-200 group-hover:text-indigo-400 transition-colors" />
      </div>
      <span className="text-sm text-slate-600 group-hover:text-slate-900">{label}</span>
    </div>
  );
}

function TimeDisplay({ label, time, status, color = 'slate' }: { label: string, time: string, status: string, color?: string }) {
  const isIndigo = color === 'indigo';
  return (
    <div className={`flex flex-col min-w-[120px] transition-all`}>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${isIndigo ? 'text-indigo-600' : 'text-slate-400'}`}>
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <span className={`text-sm font-mono font-bold ${isIndigo ? 'text-indigo-900' : 'text-slate-700'}`}>{time}</span>
        <span className={`text-[10px] font-medium px-1 rounded ${status === 'Today' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function TabButton({ active, label, icon, onClick }: { active: boolean, label: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
        active 
          ? 'bg-white text-indigo-600 shadow-sm shadow-indigo-100 border border-slate-200' 
          : 'text-slate-500 hover:text-slate-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function DetailCap({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <div className="text-slate-400 mb-1">{icon}</div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{label}</span>
      <span className="text-[11px] font-bold text-slate-700 leading-tight">{value}</span>
    </div>
  );
}
