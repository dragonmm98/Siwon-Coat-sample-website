import React,{useEffect,useState} from 'react';
import{createRoot}from'react-dom/client';
import{ArrowUpRight,ArrowDown,ArrowUp,Menu,X,Sun,Factory,Warehouse,Beef,Ship,Building2}from'lucide-react';
import'./style.css';

const copy={
kr:{
 nav:['회사소개','성능','기술','제품','적용분야','연혁','시공사례','문의'],
 hero:['패각 자원순환 차열 솔루션','지붕의 열을 막고,','내일을 시원하게.','전남의 폐각 자원을 기능성 차열 소재로 전환해 산업 지붕의 열 유입을 줄입니다.','기술 알아보기','문의하기'],
 about:['시원코트 소개','버려지는 패각을','차열 자원으로.','시원코트는 전남의 폐각 무기성분을 기능성 충전재로 전환하고, 차열도료와 표준 시공, 현장 검증, AI 성능관리를 하나의 서비스로 제공합니다.'],
 problem:['산업 현장의 문제','태양빛은 흡수되면','지붕을 가열합니다.','넓은 산업 지붕이 흡수한 열은 전도·복사·대류를 통해 실내로 전달되어 작업환경과 냉방비 부담을 높입니다.'],
 tech:['핵심 기술','패각에서 시작한','자원순환 차열 기술.','패각 전처리, 미세 분쇄, 기능화 공정을 거친 무기성분이 태양복사열을 반사하는 기능성 충전재가 됩니다.'],
 product:['제품 01','시원코트 쿨','차열도료.','높은 일사 반사율과 온도 저감, 에너지 절감, 내후성을 목표로 설계된 한국산 산업 지붕용 차열도료입니다.'],
 usage:['적용 분야','넓고 뜨거운 지붕부터','먼저 시원하게.','기존 지붕 위에 적용할 수 있어 대규모 구조 변경 없이 산업 현장의 열부하를 줄이는 첫 단계가 됩니다.'],
 timeline:['시원코트 연혁','빠르게 실행하고,','현장에서 증명합니다.','법인 설립부터 기술 인정, 지원사업 선정, 전남테크노파크 입주까지 실행과 검증을 이어가고 있습니다.'],
 project:['시공 / 현장 실증','표준 시공으로','완성되는 성능.','현장 진단, 바탕면 정리, 프라이머, 차열도료, 검수·품질보증까지 일관된 공정으로 관리합니다.'],
 contact:['전남 · 베트남 · 글로벌','지역에서 만들고,','세계의 지붕을 식힙니다.','제품 구매, 현지 실증, 공동생산·라이선스 및 전략적 파트너십을 상담합니다.']
},
en:{
 nav:['About','Performance','Technology','Product','Applications','Timeline','Projects','Contact'],
 hero:['Circular cooling from shell resources','Block the heat above.','Cool the future below.','We transform discarded shells into functional heat-reflective materials for industrial roofs.','Our technology','Contact us'],
 about:['About SIWONCOAT','Waste shells become','a cooling resource.','We combine circular materials, reflective coatings, standard installation, field verification and AI performance management.'],
 problem:['The challenge','Sunlight heats','industrial roofs.','Absorbed solar heat enters buildings through conduction, radiation and convection, raising indoor temperatures and cooling costs.'],
 tech:['Core technology','Circular cooling technology','born from shells.','Pre-treated, micronized and functionalized shell minerals become a high-performance solar-reflective filler.'],
 product:['Product 01','SIWONCOAT Cool','Heat-reflective paint.','A Korean industrial roof coating engineered for high solar reflectance, lower temperatures, energy savings and durability.'],
 usage:['Applications','Start with the largest,','hottest roofs.','Applied over existing roofs, the coating reduces heat load without major structural construction.'],
 timeline:['Our timeline','Built quickly,','proven in the field.','From incorporation to climate-tech recognition and entry into Jeonnam TechnoPark, SIWONCOAT continues to execute and verify.'],
 project:['Installation / field proof','Performance completed by','standard installation.','We manage a consistent process from diagnosis and preparation to primer, coating, inspection and warranty.'],
 contact:['Jeonnam · Vietnam · Global','Made locally,','cooling roofs worldwide.','Talk to us about purchasing, field trials, co-production, licensing and strategic partnerships.']
}};
const ids=['about','performance','technology','product','applications','timeline','projects','contact'];
const Head=({a})=><><p className="eyebrow">{a[0]}</p><h2>{a[1]}<br/><em>{a[2]}</em></h2><p className="desc">{a[3]}</p></>;
export default function App(){const[lang,setLang]=useState('kr'),[open,setOpen]=useState(false),[navTone,setNavTone]=useState('over-dark');const c=copy[lang];
useEffect(()=>{let frame;const updateNavTone=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const header=document.querySelector('header');const y=(header?.offsetHeight||88)+2;const section=document.elementFromPoint(window.innerWidth/2,y)?.closest('.panel');const isLight=section&&(section.classList.contains('light')||section.classList.contains('product'));setNavTone(isLight?'over-light':'over-dark')})};updateNavTone();window.addEventListener('scroll',updateNavTone,{passive:true});window.addEventListener('resize',updateNavTone);return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',updateNavTone);window.removeEventListener('resize',updateNavTone)}},[]);
return <main>
<header className={navTone}><a className="logo" href="#home"><img src="/assets/siwoncoat-logo.png" alt="시원코트 로고"/></a><nav className={open?'open':''}>{c.nav.map((x,i)=><a key={x} href={'#'+ids[i]} onClick={()=>setOpen(false)}>{x}</a>)}<div className="langs"><button onClick={()=>setLang('en')}>EN</button><button onClick={()=>setLang('kr')}>KR</button></div></nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
<section id="home" className="panel hero dark"><video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/assets/hero-industrial-roof.png"><source src="/assets/siwoncoat-hero.mp4" type="video/mp4"/></video><div className="shade"></div><div className="inner hero-copy"><p className="eyebrow">{c.hero[0]}</p><h1>{c.hero[1]}<br/><em>{c.hero[2]}</em></h1><p className="desc">{c.hero[3]}</p><div className="actions"><a href="#technology">{c.hero[4]}<ArrowUpRight/></a><a href="#contact">{c.hero[5]}<ArrowUpRight/></a></div></div><a className="down" href="#about">아래로 보기 <ArrowDown/></a></section>
<section id="about" className="panel light"><div className="inner"><Head a={c.about}/><div className="stats"><div><b>10<sup>°C</sup></b><span>강진군 축사 현장 온도 저감</span></div><div><b>5<sup>단계</sup></b><span>표준 시공 공정</span></div><div><b>AI</b><span>시공 전후 성능관리</span></div></div><small className="note">* 2026.06.07 전남 강진군 축사 현장 실증: 지붕 표면 36°C → 26°C.</small></div></section>
<section id="performance" className="panel navy"><div className="inner split"><div><Head a={c.problem}/><ol>{['태양복사열 흡수','지붕 표면 가열','실내 열 유입','냉방비와 전력 부담'].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol></div><div className="thermo"><Sun/><div><b>36°C</b><small>시공 전</small></div><ArrowDown/><div className="cool"><b>26°C</b><small>시공 후</small></div></div></div></section>
<section id="technology" className="panel tech light"><div className="inner split"><div><Head a={c.tech}/></div><div className="tech-photo"><img src="/assets/solar-reflection.png" alt="차열도료의 태양열 반사 원리"/><div className="benefits"><b>높은 일사<br/>반사율</b><b>지붕 표면<br/>온도 저감</b><b>내후성 및<br/>내구성</b></div></div></div></section>
<section id="product" className="panel product"><div className="inner split"><div className="product-photo"><img src="/assets/siwoncoat-product.png" alt="시원코트 차열도료 18kg 제품"/></div><div><Head a={c.product}/><div className="specs"><span>포장 단위 <b>18 KG</b></span><span>적용 대상 <b>금속 · 콘크리트 지붕</b></span><span>시공 방식 <b>롤러 · 스프레이</b></span><span>작동 방식 <b>무전력 패시브 차열</b></span></div><a className="linebtn" href="#contact">제품자료 요청 <ArrowUpRight/></a></div></div></section>
<section id="applications" className="panel applications light"><div className="inner"><Head a={c.usage}/><div className="use-grid">{[
['/assets/factory-comparison.png',Factory,'산업시설 · 제조공장','대면적 금속 지붕의 열 유입 저감'],
['/assets/logistics-facility.png',Warehouse,'물류센터 · 보관창고','제품과 작업공간의 열부하 관리'],
['/assets/roof-application.jpeg',Beef,'농축산시설 · 축사','가축 열 스트레스와 실내온도 부담 완화'],
['/assets/hero-industrial-roof.png',Ship,'해외 고온다습 지역','베트남을 시작으로 현지 실증과 확장']].map(([img,Icon,title,text])=><article key={title}><img src={img} alt={title}/><div><Icon/><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
<section id="timeline" className="panel timeline navy"><div className="inner split"><div><Head a={c.timeline}/><img className="timeline-photo" src="/assets/factory-team.png" alt="시원코트 기술 개발팀"/></div><div className="milestones">{[
['2026.05.04','주식회사 시원코트 법인 설립','자원순환 차열 솔루션 사업화 시작'],
['2026.06','KEITI 기후테크 해커톤 입상','기후기술의 가능성과 실행력 인정'],
['2026.06','산업공정부산물 활용사업 선정','폐각 자원의 기능성 소재 전환 추진'],
['2026.07','전남테크노파크 입주','연구·제품화·글로벌 실증 기반 강화']].map((m,i)=><article key={m[0]+i}><span>{m[0]}</span><div><h3>{m[1]}</h3><p>{m[2]}</p></div></article>)}</div></div></section>
<section id="projects" className="panel projects navy"><div className="inner"><Head a={c.project}/><div className="cards">{[
['/assets/roof-coating.png','01 — 바탕면 정리','고압세척 및 표면 준비'],
['/assets/roof-application.jpeg','02 — 차열도료','롤러·스프레이를 이용한 균일 시공'],
['/assets/roof-verification.png','03 — 현장 검증','도막 완성 및 온도 성능 확인']].map(x=><article key={x[1]}><img className="pic" src={x[0]} alt={x[2]}/><small>{x[1]}</small><b>{x[2]}</b></article>)}</div></div></section>
<section id="contact" className="panel contact dark"><div className="orb"></div><div className="inner"><Head a={c.contact}/><div className="contacts"><a href="tel:0617223369"><span>01</span>전화 061-722-3369 · 010-9086-3369<ArrowUpRight/></a><a href="mailto:whp77@naver.com"><span>02</span>이메일 WHP77@NAVER.COM<ArrowUpRight/></a><a href="https://www.siwoncoat.com"><span>03</span>제품·시공·파트너십 문의<ArrowUpRight/></a></div><footer>© 2026 SIWONCOAT <span>패각 자원순환 차열 솔루션</span><a href="#home">맨 위로 <ArrowUp/></a></footer></div></section>
</main>}

const rootElement=typeof document!=='undefined'?document.getElementById('root'):null;
if(rootElement)createRoot(rootElement).render(<App/>);
