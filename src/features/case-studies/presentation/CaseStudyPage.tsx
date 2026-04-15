import { useMemo } from 'react';
import PageLayout from '../../../shared/ui/PageLayout/PageLayout';
import useActiveSection from '../../../shared/hooks/useActiveSection';
import SectionNav from './SectionNav';
import styles from './CaseStudyPage.module.css';

const SECTIONS = [
  { id: 'cs-overview', label: 'Overview' },
  { id: 'cs-discovery', label: 'Discovery' },
  { id: 'cs-pivot', label: 'Pivot' },
  { id: 'cs-rq', label: 'Research question' },
  { id: 'cs-literature', label: 'Literature' },
  { id: 'cs-findings', label: 'Findings' },
  { id: 'cs-mindsets', label: 'Mindsets' },
  { id: 'cs-insight', label: 'Insight' },
  { id: 'cs-next', label: 'Next steps' },
  { id: 'cs-limitations', label: 'Limitations' },
  { id: 'cs-reflection', label: 'Reflection' },
];

function CaseStudyPage() {
  const sectionIds = useMemo(() => SECTIONS.map(s => s.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <PageLayout variant="scrollable" theme="light">
      <SectionNav sections={SECTIONS} activeId={activeId} />

      <div className={styles.page}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>
          Why Won&#8217;t They Just <em>Use the Official System?</em>
        </h1>

        <p className={styles.intro}>
          An exploratory research project into why people inside organisations constantly work around the systems built to help them – what drives it, what sustains it, and what it might take to design something they&#8217;d actually choose to use.
        </p>

        <div className={styles.projectMeta}>
          <div className={styles.projectMetaCell}>
            <div className={styles.projectMetaLabel}>Type</div>
            <div className={styles.projectMetaValue}>Self-directed exploratory research</div>
          </div>
          <div className={styles.projectMetaCell}>
            <div className={styles.projectMetaLabel}>Methods</div>
            <div className={styles.projectMetaValue}>Reddit analysis,<br />Thematic analysis,<br />Literature review</div>
          </div>
          <div className={styles.projectMetaCell}>
            <div className={styles.projectMetaLabel}>Sources</div>
            <div className={styles.projectMetaValue}>75 Reddit threads,<br />5 academic papers</div>
          </div>
          <div className={styles.projectMetaCell}>
            <div className={styles.projectMetaLabel}>Year</div>
            <div className={styles.projectMetaValue}>2025</div>
          </div>
        </div>
      </div>

      {/* 01 Overview */}
      <section className={styles.section} id="cs-overview">
        <p className={styles.sectionLabel}>01 &nbsp; Overview</p>
        <h2 className={styles.sectionTitle}>Looking for a real problem</h2>
        <p className={styles.body}>I wanted to find a genuine user problem – not a made-up brief. I went to Reddit because it&#8217;s where people are honest about frustration. I searched across <strong>r/sysadmin</strong>, <strong>r/ITManagers</strong>, <strong>r/smallbusiness</strong>, and <strong>r/SaaS</strong> – communities full of people dealing with software tools as part of their everyday job. I was looking for recurring frustrations – the kind that showed up across different users, different company sizes, different industries, and pointed to something structural rather than incidental.</p>
        <p className={styles.body}>The project started with billing frustrations – but underneath every complaint about invoices, tool sprawl, and unauthorised purchases was a more fundamental question about why people bypass the systems built to help them. That question drives everything that follows.</p>
      </section>

      {/* 02 Discovery */}
      <section className={styles.section} id="cs-discovery">
        <p className={styles.sectionLabel}>02 &nbsp; Discovery</p>
        <h2 className={styles.sectionTitle}>Where the research started</h2>
        <p className={styles.body}>I started with AI-generated keyword prompts – phrases like &#8220;saas billing is a nightmare&#8221; and &#8220;unexpected invoice&#8221; – then developed my own as patterns emerged. I read through a much larger pool and selected 75 threads where the frustration was specific, recurring, and clearly tied to billing or subscription management. I collected quotes into a working document, used AI-assisted clustering to propose initial groupings, then reviewed and revised every category myself – collapsing, splitting, or rejecting groupings that didn&#8217;t hold up across the full dataset.</p>

        <table className={styles.samplingTable}>
          <thead>
            <tr>
              <th>Subreddit</th>
              <th>Threads</th>
              <th>Why this community</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>r/sysadmin</td>
              <td>29</td>
              <td>Shadow IT war stories, unauthorised purchases, licence tracking, and finance as a control lever – the operational frontline</td>
            </tr>
            <tr>
              <td>r/ITManagers</td>
              <td>10</td>
              <td>Spend visibility, SaaS sprawl, and dealing with Shadow IT after the fact – the management side of the problem</td>
            </tr>
            <tr>
              <td>r/SaaS</td>
              <td>7</td>
              <td>Subscription tracking, billing surprises, and account management – mostly from the vendor and buyer perspective</td>
            </tr>
            <tr>
              <td>r/smallbusiness</td>
              <td>3</td>
              <td>Subscription overwhelm where one person manages everything – a different failure mode than enterprise IT</td>
            </tr>
            <tr>
              <td>Other communities</td>
              <td>26</td>
              <td>r/cybersecurity, r/msp, r/aws, r/devops, r/azure and others – supplementary perspectives across roles and contexts</td>
            </tr>
          </tbody>
        </table>

        <h3 className={styles.subTitle}>10 billing and subscription pain points</h3>
        <div className={styles.painGrid}>
          <div className={styles.painItem}><span className={styles.painNum}>01</span><span className={styles.painText}>Managers buying tools without telling IT – appearing on budgets nobody approved</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>02</span><span className={styles.painText}>Unexpected cloud bills with no visibility into what was being spent or why</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>03</span><span className={styles.painText}>Auto-renewal traps – 30–60 day cancellation windows teams consistently missed</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>04</span><span className={styles.painText}>Shadow IT creating security and support nightmares IT couldn&#8217;t manage</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>05</span><span className={styles.painText}>No way to track which licences were actually being used</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>06</span><span className={styles.painText}>Former employees still holding access to paid tools months after leaving</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>07</span><span className={styles.painText}>Tool sprawl – multiple teams paying for overlapping products nobody owned</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>08</span><span className={styles.painText}>Finance being the only real lever to control unauthorised purchases</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>09</span><span className={styles.painText}>Subscription tracking done in spreadsheets always out of date</span></div>
          <div className={styles.painItem}><span className={styles.painNum}>10</span><span className={styles.painText}>IT held accountable for budget overruns on tools they never chose</span></div>
        </div>

        <div className={styles.pullquote}>
          <span className={styles.pullquoteMark}>&ldquo;</span>
          <blockquote className={styles.pullquoteText}>
            I&#8217;ve been tasked with finding EVERY SaaS subscription we are using at a 10,000+ employee company. Outside of going around to every employee and asking&#8230; I&#8217;m honestly stumped.
          </blockquote>
          <cite className={styles.pullquoteCite}>– r/sysadmin</cite>
        </div>

        <p className={styles.body}>These weren&#8217;t edge cases. They appeared consistently across company sizes, from 2-person startups to 10,000-employee enterprises.</p>
      </section>

      {/* 03 Pivot */}
      <section className={styles.section} id="cs-pivot">
        <p className={styles.sectionLabel}>03 &nbsp; The pivot</p>
        <h2 className={styles.sectionTitle}>Shadow IT was underneath everything</h2>
        <p className={styles.body}>As I mapped the pain points, I noticed Shadow IT wasn&#8217;t just one item on the list – it was underneath almost all of them. The unauthorised purchases, the invisible tools, the offboarding gaps, the budget confusion: they all traced back to the same root. People bypassing official IT systems to get work done.</p>
        <p className={styles.body}>That shifted the research question – from billing symptoms to the organisational behaviour causing them. So I stopped collecting quotes on billing and went to look at Shadow IT specifically.</p>
      </section>

      {/* Research Question */}
      <section className={styles.researchQuestion} id="cs-rq">
        <p className={styles.rqLabel}>The research question</p>
        <p className={styles.rqText}>Why do people constantly work around the official system – and what does that mean for design?</p>
      </section>

      {/* 04 Literature */}
      <section className={styles.section} id="cs-literature">
        <p className={styles.sectionLabel}>04 &nbsp; Literature review</p>
        <h2 className={styles.sectionTitle}>5 papers across 11 years</h2>

        <div className={styles.papers}>
          <div className={styles.paper}>
            <span className={styles.paperYear}>2014</span>
            <div>
              <div className={styles.paperTitle}>Shadow IT – A View From Behind the Curtain</div>
              <p className={styles.paperDesc}>Analysed 19,633 software instances at a Fortune 500 company. Found 15% of installed software was unauthorised, with nearly 59% of employees using unapproved networking apps.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>2017</span>
            <div>
              <div className={styles.paperTitle}>Perceptions of IT Managers on Shadow IT</div>
              <p className={styles.paperDesc}>Interviews with 16 senior IT managers. The two most cited reasons employees bypass IT: perceived as too slow and too expensive.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>2020</span>
            <div>
              <div className={styles.paperTitle}>Shadow IT – A Systematic Literature Review</div>
              <p className={styles.paperDesc}>Mapped why Shadow IT emerges, how organisations evaluate individual instances, and how user capability shapes the kind of Shadow IT that develops.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>2024</span>
            <div>
              <div className={styles.paperTitle}>Who is the IT Department Anyway</div>
              <p className={styles.paperDesc}>Survey of 450 employees and 32 interviews. Identified 10 distinct mindsets – 4 risk-averse, 6 risk-taking – explaining why the same policy produces different behaviours in different people.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>2025</span>
            <div>
              <div className={styles.paperTitle}>Understanding Shadow IT: IT Accessibility, Work Overload and Employee Strain</div>
              <p className={styles.paperDesc}>Quantitative study of 385 employees. Work overload and poor IT accessibility directly increase Shadow IT usage – mediated by employee strain. Shadow IT as a coping mechanism, not a preference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Findings */}
      <section className={styles.section} id="cs-findings">
        <p className={styles.sectionLabel}>05 &nbsp; What the literature found</p>
        <h2 className={styles.sectionTitle}>9 reasons why Shadow IT exists</h2>

        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>01</div><div className={styles.reasonTitle}>IT is too slow or too expensive</div><p className={styles.reasonDesc}>When employees need something and IT can&#8217;t respond fast enough, they find another way.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>02</div><div className={styles.reasonTitle}>Official tools are insufficient</div><p className={styles.reasonDesc}>When the approved tool doesn&#8217;t do what the job requires, employees find one that does.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>03</div><div className={styles.reasonTitle}>Client deadlines override policy</div><p className={styles.reasonDesc}>Employees can&#8217;t tell a client that work isn&#8217;t done because an approved tool isn&#8217;t available.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>04</div><div className={styles.reasonTitle}>People know the rules but break them</div><p className={styles.reasonDesc}>Most employees understand the policy and the risks. They still bypass when the official path feels worse.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>05</div><div className={styles.reasonTitle}>Underestimating risk</div><p className={styles.reasonDesc}>Many users assume organisational monitoring will catch anything dangerous, creating a false sense of protection.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>06</div><div className={styles.reasonTitle}>Personal habits blur into work</div><p className={styles.reasonDesc}>Tools people use privately – Drive, Dropbox, WhatsApp – migrate into work contexts naturally.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>07</div><div className={styles.reasonTitle}>Controls are easily bypassed</div><p className={styles.reasonDesc}>Even when IT tries to block tools, technically capable employees find workarounds.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>08</div><div className={styles.reasonTitle}>Response to overload and strain</div><p className={styles.reasonDesc}>When workload is high and tools are inadequate, employees reach for whatever works fastest.</p></div>
          <div className={styles.reasonCard}><div className={styles.reasonNum}>09</div><div className={styles.reasonTitle}>Fills genuine gaps</div><p className={styles.reasonDesc}>Not all Shadow IT is reckless. Some fills real gaps that official systems have failed to address.</p></div>
        </div>
      </section>

      {/* 06 Mindsets */}
      <section className={styles.section} id="cs-mindsets">
        <p className={styles.sectionLabel}>06 &nbsp; Why one policy never works</p>
        <h2 className={styles.sectionTitle}>10 distinct mindsets around Shadow&nbsp;IT</h2>
        <p className={styles.body}>The 2024 study didn&#8217;t just find that employees bypass IT – it found they do it for fundamentally different reasons. 10 distinct mindsets emerged, each with a different relationship to risk, rules, and organisational trust. A policy that works for someone who avoids Shadow IT out of genuine security awareness does nothing for someone bypassing IT because a client deadline feels more urgent than a ticket response time.</p>

        <div className={styles.mindsetSplit}>
          <div className={styles.mindsetColLeft}>
            <div className={styles.mindsetCount}>4</div>
            <div className={styles.mindsetType}>Risk-averse mindsets</div>
            <div className={styles.mindsetList}>
              <div className={styles.mindsetItem}>Avoids Shadow IT to stay out of trouble</div>
              <div className={styles.mindsetItem}>Deep IT knowledge makes them aware of the risks</div>
              <div className={styles.mindsetItem}>Lets the client or colleague carry the responsibility</div>
              <div className={styles.mindsetItem}>Learned from past mistakes, won&#8217;t repeat them</div>
            </div>
          </div>
          <div className={styles.mindsetColRight}>
            <div className={styles.mindsetCount}>6</div>
            <div className={styles.mindsetType}>Risk-taking mindsets</div>
            <div className={styles.mindsetList}>
              <div className={styles.mindsetItem}>Assumes everyone already knows the rules, skips the conversation</div>
              <div className={styles.mindsetItem}>Thinks they don&#8217;t use Shadow IT, but they do</div>
              <div className={styles.mindsetItem}>Assumes antivirus and anti-phishing cover everything</div>
              <div className={styles.mindsetItem}>Bends rules when a deadline is on the line</div>
              <div className={styles.mindsetItem}>Used Shadow IT for years without issues, feels untouchable</div>
              <div className={styles.mindsetItem}>Uses unauthorised tools because they&#8217;re free</div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Insight */}
      <section className={styles.section} id="cs-insight">
        <p className={styles.sectionLabel}>07 &nbsp; The unexpected finding</p>
        <h2 className={styles.sectionTitle}>Nobody agrees on how to fix it</h2>
        <p className={styles.body}>After mapping the Reddit findings against five academic papers spanning 11 years, the most striking thing wasn&#8217;t any single insight – it was the disagreement. Practitioners and researchers are looking at the same problem through completely different lenses and arriving at completely different answers.</p>
        <p className={styles.body}>The literature spreads across five distinct frames: technical controls, organizational agility, governance projects, behaviour change, and working environment reform. Meanwhile, sysadmins on Reddit converged on something none of the papers focused on.</p>

        <div className={styles.diagramSection}>
          <div className={styles.diagramTopGrid}>
            <div className={styles.diagramLeftCol}>
              <div className={styles.diagramColTitle}>REDDIT</div>
              <div className={`${styles.diagramCard} ${styles.diagramLeftCard}`}>
                <h3>Go through finance</h3>
                <p>Control the money</p>
              </div>
            </div>

            <div className={styles.diagramRightCol}>
              <div className={styles.diagramColTitle}>5 ACADEMIC PAPERS</div>
              <div className={styles.diagramRightStack}>
                <div className={styles.diagramSpine} />
                <div className={`${styles.diagramCard} ${styles.diagramPaperCard}`}>
                  <h4>Shadow IT &#8211; A View From Behind the Curtain</h4>
                  <p>Technical controls + clearer policy to limit unauthorised tool use.</p>
                </div>
                <div className={`${styles.diagramCard} ${styles.diagramPaperCard}`}>
                  <h4>Perceptions of IT Managers on Shadow IT</h4>
                  <p>Make IT more agile &#8211; deliver faster, align with business units</p>
                </div>
                <div className={`${styles.diagramCard} ${styles.diagramPaperCard}`}>
                  <h4>Shadow IT &#8211; A Systematic Literature Review</h4>
                  <p>Run a governance project &#8211; identify, evaluate, implement top-down</p>
                </div>
                <div className={`${styles.diagramCard} ${styles.diagramPaperCard}`}>
                  <h4>Who is the IT Department Anyway</h4>
                  <p>Communication + tailored training &#8211; treat it as a behaviour change problem</p>
                </div>
                <div className={`${styles.diagramCard} ${styles.diagramPaperCard} ${styles.diagramPaperCardLast}`}>
                  <h4>Understanding Shadow IT: IT Accessibility,<br />Work Overload and Employee Strain</h4>
                  <p>Fix the working environment &#8211; reduce overload and staff adequately.</p>
                </div>
              </div>
              <div className={styles.diagramRightArrow} />
            </div>
          </div>
          <div className={styles.diagramBottomLabel}>AFTER 11 YEARS OF RESEARCH</div>
          <div className={styles.diagramBottomCard}>
            <h2>No consensus on how to fix Shadow IT.</h2>
            <p>Six sources, six different answers &#8211; technical, organizational, cultural, financial.</p>
          </div>
        </div>

        <p className={styles.body}>Meanwhile, sysadmins on Reddit converged on something none of the papers focused on: <em>&#8220;I&#8217;ve found that the best way to control shadow IT is always through finance – if they can&#8217;t pay for it, they can&#8217;t use it.&#8221;</em></p>

        <div className={styles.finding}>
          <p className={styles.findingLabel}>What this means for design</p>
          <div className={styles.findingBody}>
            <span className={styles.findingTag}>[ ! ]</span>
            <p className={styles.findingText}>Shadow IT isn&#8217;t an IT problem &#8211; it&#8217;s a communication and trust problem between IT, finance, and the rest of the organisation.</p>
          </div>
        </div>
      </section>

      {/* 08 Next steps */}
      <section className={styles.section} id="cs-next">
        <p className={styles.sectionLabel}>08 &nbsp; What this opens up</p>
        <h2 className={styles.sectionTitle}>Where design could go next</h2>
        <p className={styles.body}>The research makes one thing clear: Shadow IT isn&#8217;t a problem design can fully solve. The literature points to organisational agility, culture change, working environment reform, and governance structures – all of which sit outside a designer&#8217;s scope. No interface fixes a company that&#8217;s understaffed, moves too slowly, or has a broken relationship between IT and the rest of the business.</p>
        <p className={styles.body}>But there is one area where design could make a meaningful difference – the approval and request flow that sits between employees, IT, and finance. Right now that flow is either broken or nonexistent. Reddit sysadmins identified this as the most actionable lever: if the official path were faster and less painful than the workaround, more people would use it. That&#8217;s a design problem worth investigating.</p>
        <p className={styles.body}>Getting there would mean starting with three groups of people:</p>

        <div className={styles.papers}>
          <div className={styles.paper}>
            <span className={styles.paperYear}>Who</span>
            <div>
              <div className={styles.paperTitle}>Sysadmins and IT managers</div>
              <p className={styles.paperDesc}>To understand what they&#8217;ve already tried, where current approval flows break down, and what &#8220;good enough&#8221; actually looks like from their side of the problem.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>Who</span>
            <div>
              <div className={styles.paperTitle}>Finance gatekeepers</div>
              <p className={styles.paperDesc}>To understand how SaaS spending visibility actually works (or doesn&#8217;t), what signals prompt intervention, and whether they&#8217;d want more involvement earlier in the process.</p>
            </div>
          </div>
          <div className={styles.paper}>
            <span className={styles.paperYear}>Who</span>
            <div>
              <div className={styles.paperTitle}>Employees who bypass IT</div>
              <p className={styles.paperDesc}>To understand the real friction in the official path – not just the stated reasons, but the moment-by-moment experience that makes a workaround feel faster than asking permission.</p>
            </div>
          </div>
        </div>

        <p className={styles.body}>The core question those interviews would need to answer is what the official request process would need to look like for employees to actually choose it over a workaround.</p>
      </section>

      {/* 09 Limitations */}
      <section className={styles.section} id="cs-limitations">
        <p className={styles.sectionLabel}>09 &nbsp; Limitations</p>
        <h2 className={styles.sectionTitle}>What this research can&#8217;t claim</h2>

        <div className={styles.limitationsList}>
          <div className={styles.limitationItem}>
            <strong>Reddit sampling bias.</strong> All 75 threads come from people frustrated enough to post publicly. Employees who quietly use workarounds without complaint – likely the majority – are invisible in this dataset.
          </div>
          <div className={styles.limitationItem}>
            <strong>No primary interviews.</strong> Every finding is secondhand. The reasons employees give for bypassing IT on Reddit may differ from what they&#8217;d say in a structured interview – or what they&#8217;d actually do in practice.
          </div>
          <div className={styles.limitationItem}>
            <strong>Literature spans 11 years.</strong> The oldest paper is from 2014. The tooling landscape – cloud adoption, SaaS proliferation, remote work – has shifted significantly. Some behavioural patterns may no longer hold.
          </div>
          <div className={styles.limitationItem}>
            <strong>Findings aren&#8217;t validated.</strong> The insight about finance as a leverage point came exclusively from Reddit. It hasn&#8217;t been tested with IT managers, finance teams, or employees directly. It&#8217;s a hypothesis for further research, not a confirmed conclusion.
          </div>
        </div>
      </section>

      {/* 10 Reflection */}
      <section className={styles.reflection} id="cs-reflection">
        <p className={styles.sectionLabel}>10 &nbsp; Reflection</p>
        <h2 className={styles.sectionTitle}>What I took from this</h2>
        <p className={styles.body}>This was my first self-directed research project – no brief, no framework, no team. The biggest thing it taught me wasn&#8217;t a finding; it was how to follow a thread. I started looking for billing pain and ended up in academic literature on organizational psychology. That kind of pivot only happens if you stay genuinely curious about what the data is actually saying, rather than confirming what you expected to find.</p>
        <p className={styles.body}>It also taught me the difference between a symptom and a root cause. Every billing complaint on Reddit turned out to be a symptom. Shadow IT was the cause. That shift in framing – from &#8220;what&#8217;s broken?&#8221; to &#8220;why does this keep happening?&#8221; – is the part of research I want to keep practising.</p>
      </section>
      </div>
    </PageLayout>
  );
}

export default CaseStudyPage;
