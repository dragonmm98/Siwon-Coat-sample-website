import React,{useEffect,useState} from 'react';
import{createRoot}from'react-dom/client';
import{ArrowUpRight,ArrowDown,ArrowUp,ArrowRight,Menu,X,Check,Sun,Factory,Warehouse,Beef,Ship,Recycle,Leaf,Download,Package,FlaskConical}from'lucide-react';
import'./style.css';

const copy={
kr:{
 nav:['회사소개','기술','제품','적용분야','지속가능성','시공사례','FAQ','문의'],
 hero:['패각 자원순환 차열 솔루션','지붕의 열을 막고,','내일을 시원하게.','전남의 폐각 자원을 기능성 차열 소재로 전환해 산업 지붕의 열 유입을 줄입니다.','기술 알아보기','문의하기','카탈로그 다운로드'],
 heroStats:[['40℃↓','지붕 표면 온도'],['27.4%↓','냉방 에너지'],['89.7%','일사 반사율']],
 about:['시원코트 소개','버려지는 패각을','차열 자원으로.','시원코트는 전남의 폐각 무기성분을 산업 지붕용 차열도료의 기능성 소재로 전환합니다.'],
 aboutBlocks:[['순환 소재','버려지는 패각을 가공해 차열 코팅에 사용하는 무기 충전재로 만듭니다.'],['통합 서비스','차열 소재, 표준 시공, 현장 검증과 성능관리를 하나의 과정으로 제공합니다.']],
 aboutStats:[['10','°C','강진군 축사 현장 온도 저감'],['5','단계','표준 시공 공정'],['AI','','시공 전후 성능관리']],
 aboutNote:'* 2026.06.07 전남 강진군 축사 현장 실증: 지붕 표면 36°C → 26°C.',
 solution:['문제와 해결','열이 들어오기 전에,','지붕에서 막습니다.','에어컨은 열이 들어온 뒤 대응하지만, 시원코트는 열이 들어오기 전에 반사해 막습니다.'],
 conv:['기존 냉방 방식','사후 대응','전력 필요','열 유입 후 작동','지속적인 에너지 비용'],
 siwon:['시원코트','사전 차단','무전력 작동','열을 외부로 반사','냉방 에너지 27.4% 절감'],
 tech:['핵심 기술','패각에서 시작한','자원순환 차열 기술.','시원코트는 지붕을 가열하는 태양에너지의 일부를 반사하는 차열 코팅 기술입니다.'],
 techBlocks:[['폐각 기반 충전재','패각 무기성분을 세척, 미세 분쇄하고 기능화해 코팅 소재로 활용합니다.'],['무전력 패시브 차열','작동 중 전력을 사용하지 않고 지붕의 태양열 유입을 줄입니다.']],
 techBenefits:[['높은 일사','반사율'],['지붕 표면','온도 저감'],['내후성 및','내구성']],
 shellTitle:'패각 공정',
 shellSteps:['패각 수거','세척·정제','분쇄·선별','코팅 배합'],
 applyTitle:'5단계 표준 시공',
 applySteps:['현장 진단','바탕면 정리','프라이머 도포','차열도료 2회 도포','건조·검수'],
 product:['제품 라인업','하나의 시스템,','두 개의 코팅.','지붕용 차열도료와 노면용 미끄럼방지 코팅이 함께 완성하는 차열 시스템입니다.'],
 items:[
  {name:'시원코트 차열 도막형 바닥재',tag:'지붕용 차열도료',specs:[['포장','18 KG'],['일사 반사율','89%'],['도포량','약 50㎡ / 통'],['적용','공장·창고·축사 지붕']]},
  {name:'시원코트 차열 도막형 바닥재',tag:'노면용 미끄럼방지 코팅',specs:[['포장','25 KG'],['일사 반사율','85%'],['도포량','약 30㎡ / 통'],['적용','광장·주차장·자전거도로·휴게공간']]}],
 usage:['적용 분야','넓고 뜨거운 지붕부터','먼저 시원하게.','시원코트는 강한 태양열에 노출되는 대면적 지붕을 위해 설계되었습니다.'],
 useCases:[['/assets/factory-comparison.png',Factory,'산업시설 · 제조공장','대면적 금속 지붕의 열 유입 저감'],['/assets/logistics-facility.png',Warehouse,'물류센터 · 보관창고','제품과 작업공간의 열부하 관리'],['/assets/roof-application.jpeg',Beef,'농축산시설 · 축사','가축 열 스트레스와 실내온도 부담 완화'],['/assets/hero-industrial-roof.png',Ship,'해외 고온다습 지역','베트남을 시작으로 현지 실증과 확장']],
 esg:['ESG · 지속가능성','폐각을 순환시켜,','탄소를 줄입니다.','전남의 풍부한 패각 폐기물을 업사이클링해 냉방 에너지 사용과 탄소 배출을 함께 줄입니다.'],
 esgLoop:[[Recycle,'패각 수거·선별'],[FlaskConical,'무기질 정제'],[Package,'차열 코팅'],[Sun,'에너지 절감'],[Leaf,'탄소 저감']],
 project:['시공 / 현장 실증','표준 시공으로','완성되는 성능.','시원코트의 성능은 올바른 바탕면 준비와 균일한 도막 시공으로 완성됩니다.'],
 projectSteps:[['/assets/roof-coating.png','01 — 바탕면 정리','고압세척 및 표면 준비'],['/assets/roof-application.jpeg','02 — 차열도료','롤러·스프레이를 이용한 균일 시공'],['/assets/roof-verification.png','03 — 현장 검증','도막 완성 및 온도 성능 확인']],
 faq:{heading:['자주 묻는 질문','시원코트에 대해','빠르게 확인하세요.','제품, 적용 대상, 시공 및 상담에 관한 주요 정보를 안내합니다.'],items:[['시원코트는 어떤 제품인가요?','시원코트 쿨은 높은 일사 반사율과 온도 저감을 목표로 개발된 산업 지붕용 친환경 차열도료입니다.'],['어떤 지붕에 적용할 수 있나요?','공장, 창고, 학교, 병원, 공동주택 등 금속 및 콘크리트 지붕에 적용할 수 있습니다. 현장 상태에 따라 사전 진단이 필요합니다.'],['폐각 자원은 어떻게 활용되나요?','전남에서 발생하는 폐각의 무기성분을 기능성 충전재로 전환해 차열 코팅 소재에 활용합니다.'],['시공과 제품 상담은 어떻게 신청하나요?','전화 061-722-3369 또는 이메일 WHP77@NAVER.COM으로 제품 구매, 현장 실증, 시공 및 파트너십을 문의할 수 있습니다.']]},
 contact:['전남 · 베트남 · 글로벌','지역에서 만들고,','세계의 지붕을 식힙니다.','제품 구매, 현지 실증, 공동생산·라이선스 및 전략적 파트너십을 상담합니다.'],
 contactLinks:[['tel:0617223369','전화 061-722-3369 · 010-9086-3369'],['mailto:whp77@naver.com','이메일 WHP77@NAVER.COM'],['https://www.siwoncoat.com','제품·시공·파트너십 문의']],
 footer:['패각 자원순환 차열 솔루션','맨 위로'],
 company:['(주)시원코트','대표 박원희','전남 순천시 전남테크노파크 305호']
},
en:{
 nav:['About','Technology','Products','Applications','Sustainability','Projects','FAQ','Contact'],
 hero:['Circular cooling from shell resources','Block the heat above.','Cool the future below.','We transform discarded shells into functional heat-reflective materials for industrial roofs.','Our technology','Contact us','Download catalog'],
 heroStats:[['40℃↓','Roof surface temp'],['27.4%↓','Cooling energy'],['89.7%','Solar reflectance']],
 about:['About SIWONCOAT','Waste shells become','a cooling resource.','SIWONCOAT converts reclaimed marine-shell minerals from Jeonnam into functional materials for heat-reflective roof coatings.'],
 aboutBlocks:[['Circular materials','Discarded shells are processed into mineral filler for SIWONCOAT coating technology.'],['Integrated delivery','SIWONCOAT combines coating materials, standardized installation, field verification and performance management.']],
 aboutStats:[['10','°C','Temperature reduction at a Gangjin livestock facility'],['5','steps','Standard installation process'],['AI','','Pre- and post-installation performance management']],
 aboutNote:'* Field demonstration on June 7, 2026, at a livestock facility in Gangjin, Jeonnam: roof surface temperature reduced from 36°C to 26°C.',
 solution:['Problem & solution','Block heat at the roof,','before it gets inside.','Air conditioning reacts after heat enters. Siwon Coat reflects and blocks it before it gets inside.'],
 conv:['Conventional cooling','Reactive response','Requires electricity','Runs after heat enters','Ongoing energy costs'],
 siwon:['Siwon Coat','Proactive protection','Zero-energy operation','Reflects heat outside','27.4% cooling savings'],
 tech:['Core technology','Circular cooling technology','born from shells.','SIWONCOAT reflects part of the solar energy that would otherwise heat the roof surface.'],
 techBlocks:[['Reclaimed-shell filler','Marine-shell minerals are cleaned, finely ground and functionalized for use in the coating.'],['Passive cooling','The coating reduces solar heat gain without consuming electricity during operation.']],
 techBenefits:[['High solar','reflectance'],['Lower roof-surface','temperature'],['Weather resistance','and durability']],
 shellTitle:'Shell process',
 shellSteps:['Collect shells','Wash & purify','Grind & grade','Formulate coating'],
 applyTitle:'5-step standard install',
 applySteps:['Site assessment','Surface prep','Apply primer','Apply 2 coats','Dry & inspect'],
 product:['Product lineup','One system,','two coatings.','A reflective roof coating and an anti-slip pavement coating form one complete cooling system.'],
 items:[
  {name:'SIWONCOAT Cool',tag:'Reflective roof coating',specs:[['Pack','18 KG'],['Solar reflectance','89%'],['Coverage','~50㎡ / pail'],['For','Factory · warehouse · livestock roofs']]},
  {name:'SIWONCOAT Surface',tag:'Anti-slip pavement coating',specs:[['Pack','25 KG'],['Solar reflectance','85%'],['Coverage','~30㎡ / pail'],['For','Plazas · parking · cycle paths · rest areas']]}],
 usage:['Applications','Start with the largest,','hottest roofs.','SIWONCOAT is intended for buildings with large roofs exposed to strong solar heat.'],
 useCases:[['/assets/factory-comparison.png',Factory,'Industrial facilities · factories','Reduce heat gain through large metal roofs'],['/assets/logistics-facility.png',Warehouse,'Logistics centers · warehouses','Manage heat loads affecting products and workspaces'],['/assets/roof-application.jpeg',Beef,'Agricultural facilities · livestock buildings','Reduce livestock heat stress and indoor-temperature burden'],['/assets/hero-industrial-roof.png',Ship,'Hot and humid overseas markets','Local field trials and expansion beginning in Vietnam']],
 esg:['ESG · Sustainability','Circular shells,','lower carbon.','We upcycle Jeonnam’s abundant shell waste to cut cooling energy use and carbon emissions together.'],
 esgLoop:[[Recycle,'Collect & sort shells'],[FlaskConical,'Mineral refining'],[Package,'Cool coating'],[Sun,'Energy savings'],[Leaf,'Carbon cut']],
 project:['Installation / field proof','Performance completed by','standard installation.','SIWONCOAT performance depends on correct surface preparation and consistent application.'],
 projectSteps:[['/assets/roof-coating.png','01 — Surface preparation','High-pressure cleaning and surface preparation'],['/assets/roof-application.jpeg','02 — Heat-reflective coating','Uniform application by roller or spray'],['/assets/roof-verification.png','03 — Field verification','Coating completion and temperature-performance verification']],
 faq:{heading:['Frequently asked questions','Learn about SIWONCOAT','at a glance.','Key information about the product, suitable roofs, installation and enquiries.'],items:[['What is SIWONCOAT?','SIWONCOAT Cool is an eco-friendly heat-reflective coating engineered to improve solar reflectance and reduce heat gain through industrial roofs.'],['Which roofs can use SIWONCOAT?','It is suitable for metal and concrete roofs on factories, warehouses, schools, hospitals and apartment buildings. A site assessment may be required.'],['How are reclaimed marine shells used?','Mineral components recovered from waste marine shells in Jeonnam are converted into functional filler for the heat-reflective coating.'],['How can I request product or installation advice?','Contact SIWONCOAT at +82-61-722-3369 or WHP77@NAVER.COM for purchasing, field trials, installation and partnership enquiries.']]},
 contact:['Jeonnam · Vietnam · Global','Made locally,','cooling roofs worldwide.','Talk to us about purchasing, field trials, co-production, licensing and strategic partnerships.'],
 contactLinks:[['tel:0617223369','Call +82-61-722-3369 · +82-10-9086-3369'],['mailto:whp77@naver.com','Email WHP77@NAVER.COM'],['https://www.siwoncoat.com','Product, installation & partnership enquiries']],
 footer:['Circular marine-shell heat-reflective solutions','Back to top'],
 company:['SIWON COAT Co., Ltd.','CEO Park Won-hee','Room 305, Jeonnam Technopark, Suncheon, Jeonnam']
}};
const ids=['about','technology','product','applications','esg','projects','faq','contact'];
const Head=({a})=><><p className="eyebrow">{a[0]}</p><h2>{a[1]}<br/><em>{a[2]}</em></h2><p className="desc">{a[3]}</p></>;
const AnswerBlocks=({items})=><div className="answer-blocks">{items.map(([heading,text])=><article key={heading}><h3>{heading}</h3><p>{text}</p></article>)}</div>;
export default function App(){const[lang,setLang]=useState('kr'),[open,setOpen]=useState(false),[navTone,setNavTone]=useState('over-dark');const c=copy[lang];const faqStructuredData={'@context':'https://schema.org','@type':'FAQPage',mainEntity:c.faq.items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))};
useEffect(()=>{let frame;const updateNavTone=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const header=document.querySelector('header');const y=(header?.offsetHeight||88)+2;const section=document.elementFromPoint(window.innerWidth/2,y)?.closest('.panel');const isLight=section&&(section.classList.contains('light')||section.classList.contains('product'));setNavTone(isLight?'over-light':'over-dark')})};updateNavTone();window.addEventListener('scroll',updateNavTone,{passive:true});window.addEventListener('resize',updateNavTone);return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',updateNavTone);window.removeEventListener('resize',updateNavTone)}},[]);


return <main>
<header className={navTone}><a className="logo" href="#home"><img src="/assets/siwoncoat-logo.png" alt="시원코트 로고"/></a><nav className={open?'open':''}>{c.nav.map((x,i)=><a key={x} href={'#'+ids[i]} onClick={()=>setOpen(false)}>{x}</a>)}<div className="langs"><button onClick={()=>setLang('en')}>EN</button><button onClick={()=>setLang('kr')}>KR</button></div></nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
<section id="home" className="panel hero dark"><video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/assets/hero-industrial-roof.png"><source src="/assets/siwoncoat-hero.mp4" type="video/mp4"/></video><div className="shade"></div><div className="inner hero-copy"><p className="eyebrow">{c.hero[0]}</p><h1>{c.hero[1]}<br/><em>{c.hero[2]}</em></h1><p className="desc">{c.hero[3]}</p><div className="actions"><a href="#technology">{c.hero[4]}<ArrowUpRight/></a><a href="#contact">{c.hero[5]}<ArrowUpRight/></a><a className="ghost" href="/assets/siwoncoat-catalog.pdf" download><Download/>{c.hero[6]}</a></div><div className="hero-stats">{c.heroStats.map(s=><div key={s[1]}><b>{s[0]}</b><span>{s[1]}</span></div>)}</div></div><a className="down" href="#about">아래로 보기 <ArrowDown/></a></section>
<section id="about" className="panel light"><div className="inner"><Head a={c.about}/><AnswerBlocks items={c.aboutBlocks}/><div className="stats">{c.aboutStats.map(([value,suffix,label])=><div key={label}><b>{value}{suffix&&<sup>{suffix}</sup>}</b><span>{label}</span></div>)}</div><small className="note">{c.aboutNote}</small></div></section>
<section id="solution" className="panel light compare-panel"><div className="inner"><Head a={c.solution}/><div className="compare"><article className="conv"><h3>{c.conv[0]}</h3>{c.conv.slice(1).map(x=><p key={x}><X/>{x}</p>)}</article><article className="good"><h3>{c.siwon[0]}</h3>{c.siwon.slice(1).map(x=><p key={x}><Check/>{x}</p>)}</article></div></div></section>
<section id="technology" className="panel tech light techx"><div className="inner"><div className="split"><div><Head a={c.tech}/><AnswerBlocks items={c.techBlocks}/></div><div className="tech-photo"><img src="/assets/solar-reflection.png" alt={lang==='kr'?'차열도료의 태양열 반사 원리':'Solar-reflection principle of the heat-reflective coating'}/><div className="benefits">{c.techBenefits.map(([line1,line2])=><b key={line1}>{line1}<br/>{line2}</b>)}</div></div></div><div className="steps-wrap"><div className="steprow"><h4>{c.shellTitle}</h4><div className="steps">{c.shellSteps.map((s,i)=><div key={s}><span>{i+1}</span>{s}</div>)}</div></div><div className="steprow"><h4>{c.applyTitle}</h4><div className="steps">{c.applySteps.map((s,i)=><div key={s}><span>{i+1}</span>{s}</div>)}</div></div></div></div></section>
<section id="product" className="panel product"><div className="inner"><Head a={c.product}/><div className="lineup">{c.items.map((p,i)=><article key={`${p.name}-${i}`} className="pcard"><div className="pmedia"><img src={i===0?'/assets/siwoncoat-product.png':'/assets/siwoncoat-surface-product.png'} alt={p.name}/></div><div className="pbody"><h3>{p.name}</h3><small className="ptag">{p.tag}</small><div className="specs">{p.specs.map(s=><span key={s[0]}>{s[0]} <b>{s[1]}</b></span>)}</div></div></article>)}</div><a className="linebtn" href="/assets/siwoncoat-catalog.pdf" download><Download/> {c.hero[6]}</a></div></section>
<section id="applications" className="panel applications light"><div className="inner"><Head a={c.usage}/><div className="use-grid">{c.useCases.map(([img,Icon,title,text])=><article key={title}><img src={img} alt={title}/><div><Icon/><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
<section id="esg" className="panel light esg"><div className="inner"><Head a={c.esg}/><div className="loop">{c.esgLoop.map(([Icon,label],i)=><React.Fragment key={label}><div className="node"><Icon/><span>{label}</span></div>{i<c.esgLoop.length-1&&<ArrowRight className="loparrow"/>}</React.Fragment>)}</div></div></section>
<section id="projects" className="panel projects navy"><div className="inner"><Head a={c.project}/><div className="cards">{c.projectSteps.map(x=><article key={x[1]}><img className="pic" src={x[0]} alt={x[2]}/><small>{x[1]}</small><b>{x[2]}</b></article>)}</div></div></section>
<section id="faq" className="panel faq light"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqStructuredData)}}/><div className="inner split"><Head a={c.faq.heading}/><div className="faq-list">{c.faq.items.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>{String(index+1).padStart(2,'0')}</span>{question}</summary><p>{answer}</p></details>)}</div></div></section>
<section id="contact" className="panel contact dark"><div className="orb"></div><div className="inner"><Head a={c.contact}/><div className="contacts">{c.contactLinks.map(([href,label],index)=><a key={href} href={href}><span>0{index+1}</span>{label}<ArrowUpRight/></a>)}<a href="/assets/siwoncoat-catalog.pdf" download><span>04</span>{c.hero[6]} (PDF)<Download/></a></div><div className="company">{c.company.map(x=><span key={x}>{x}</span>)}</div><footer>© 2026 SIWONCOAT <span>{c.footer[0]}</span><a href="#home">{c.footer[1]} <ArrowUp/></a></footer></div></section>
</main>}

const rootElement=typeof document!=='undefined'?document.getElementById('root'):null;
if(rootElement)createRoot(rootElement).render(<App/>);
