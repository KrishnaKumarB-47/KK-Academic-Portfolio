import Link from 'next/link';

const layers = [
  { n: '01', title: 'Feature extraction', body: 'URL lexical / SSL / RDAP / DNS / redirects; email word and character frequencies; SMS TF-IDF (top 5,000 unigrams); QR decode to URL.' },
  { n: '02', title: 'ML inference engine', body: 'XGBoost for URL and email classification; Multinomial Naïve Bayes for SMS classification.' },
  { n: '03', title: 'SHAP explainability', body: 'TreeExplainer feature contributions for XGBoost URL/email predictions; SMS class probabilities feed risk scoring.' },
  { n: '04', title: 'Dynamic risk scoring', body: '0–100 hybrid Cyber Risk Score: 70% calibrated model probability plus bounded heuristic penalties / bonuses.' },
  { n: '05', title: 'LLM explanation', body: 'Groq-hosted LLM turns top SHAP features and risk score into a plain-language explanation.' },
  { n: '06', title: 'Threat intelligence', body: 'VirusTotal and AbuseIPDB signals, alongside SSL, RDAP, DNS and redirect-chain inspection.' },
  { n: '07', title: 'Dashboard & chatbot', body: 'Flask + SQLite / SQLAlchemy backend and vanilla HTML/CSS/JavaScript interface for results, risk gauge, explanations and follow-up questions.' },
];

export const metadata = {
  title: 'SentinelAI Case Study | Krishna Kumar B.',
  description: 'Case study based on the SentinelAI research paper: explainable multi-modal phishing and spam detection with hybrid cyber risk assessment.',
};

export default function SentinelAIPage() {
  return <main className="site">
    <header className="topbar"><Link className="brand" href="/#home">KK<span>.</span></Link><nav aria-label="Case study navigation"><Link href="/#projects">Projects</Link><a href="#architecture">Architecture</a><a href="#evaluation">Evaluation</a><a href="#limitations">Limitations</a></nav><Link className="theme" href="/#contact">Contact</Link></header>
    <section className="case-hero wrap">
      <p className="section-kicker">CASE STUDY · AI & CYBERSECURITY</p>
      <p className="eyebrow">RESEARCH PAPER-BASED OVERVIEW</p>
      <h1>Sentinel<span>AI</span></h1>
      <h2>An Explainable AI Framework for Intelligent Phishing Detection and Cyber Risk Assessment</h2>
      <p className="case-lead">A multi-modal framework described in the supplied paper that combines phishing URL detection, email and SMS spam classification, QR-code URL analysis, explainability, threat-intelligence signals and a hybrid cyber risk score.</p>
      <div className="case-meta"><span><b>Application stack</b> Flask · Python · SQLite · SQLAlchemy · HTML/CSS/JS</span><span><b>Models</b> XGBoost · Multinomial Naïve Bayes</span><span><b>Interpretability</b> SHAP · Groq-hosted LLM</span></div>
    </section>

    <section className="section wrap"><div className="section-heading"><div><p className="section-kicker">01 / PROBLEM</p><h2>One workflow for multiple social-engineering channels.</h2></div><p className="section-desc">The paper frames phishing, email spam, SMS smishing and malicious QR codes as related attack surfaces that benefit from detection plus understandable explanations.</p></div>
      <div className="case-two-col"><article className="case-panel"><p className="case-label">PROBLEM</p><h3>Detection alone is not enough.</h3><p>Opaque model verdicts can be difficult for non-expert users and analysts to trust. Static signals can also miss changing phishing infrastructure.</p></article><article className="case-panel"><p className="case-label">DESIGN GOAL</p><h3>Explain, score, and corroborate.</h3><p>Combine modality-specific classifiers with SHAP explanations, a bounded risk-score formula and external threat-intelligence checks.</p></article></div>
    </section>

    <section className="section wrap" id="architecture"><div className="section-heading"><div><p className="section-kicker">02 / SYSTEM ARCHITECTURE</p><h2>A seven-layer analysis pipeline.</h2></div><p className="section-desc">Reconstructed from the architecture description and diagram in the paper, pages 2–3. Layer order below follows the paper's numbered pipeline.</p></div>
      <div className="architecture-flow"><div className="arch-input"><span>INPUT LAYER</span><strong>URL · Email · SMS text · QR-code image</strong></div><div className="arch-connector">↓</div>{layers.map((layer) => <div className="arch-layer" key={layer.n}><div className="arch-num">{layer.n}</div><div><h3>{layer.title}</h3><p>{layer.body}</p></div><div className="arch-arrow">↓</div></div>)}<div className="arch-output"><span>OUTPUT</span><strong>Classification · Explanation · Risk score · Dashboard / chatbot</strong></div></div>
      <p className="figure-caption">Architecture summary recreated for this portfolio from the supplied SentinelAI paper. This is a conceptual flow diagram, not a code-level deployment topology.</p>
    </section>

    <section className="section wrap"><div className="section-heading"><div><p className="section-kicker">03 / METHODOLOGY</p><h2>Different models for different inputs.</h2></div><p className="section-desc">The paper compares candidate algorithms and chooses a classifier per channel rather than forcing one model across all modalities.</p></div>
      <div className="method-grid"><article><span>URL</span><h3>XGBoost</h3><p>PhiUSIIL dataset with 235,795 samples and 54 listed features. The paper reports an 80/20 split and stratified plus domain-grouped cross-validation.</p></article><article><span>EMAIL</span><h3>XGBoost</h3><p>Spambase dataset with 4,601 samples and 57 word/character-frequency features.</p></article><article><span>SMS</span><h3>Multinomial Naïve Bayes</h3><p>SMS Spam Collection with 5,572 messages, represented using TF-IDF over the top 5,000 unigrams. The paper also describes a configurable threshold.</p></article><article><span>QR CODE</span><h3>Decode → URL pipeline</h3><p>QR codes are decoded to URLs and then routed through the URL analysis path, according to the system description.</p></article></div>
    </section>

    <section className="section wrap" id="evaluation"><div className="section-heading"><div><p className="section-kicker">04 / REPORTED RESULTS</p><h2>Benchmark metrics, with context.</h2></div><p className="section-desc">Values below are transcribed from the supplied paper's results section. They are benchmark-specific and should not be presented as proven real-world detection rates.</p></div>
      <div className="results-grid"><article><p className="result-label">URL · PhiUSIIL</p><strong>100.00%</strong><span>Reported held-out accuracy for XGBoost</span><small>99.9965% stratified CV; 99.996% domain-grouped CV reported.</small></article><article><p className="result-label">EMAIL · Spambase</p><strong>94.68%</strong><span>Reported XGBoost accuracy</span><small>93.24% F1-score; 4.30% false-positive rate.</small></article><article><p className="result-label">SMS · SMS Spam Collection</p><strong>89.61%</strong><span>Reported MNB F1-score</span><small>97.40% accuracy; recall reported as 83.89% at the default operating point.</small></article><article><p className="result-label">LLM EXPLANATIONS</p><strong>94.5%</strong><span>Reported top-3 SHAP citation faithfulness</span><small>Paper also reports consistency 0.932 and analyst ratings on a 1–5 scale.</small></article></div>
      <div className="case-note"><strong>Interpretation caution</strong><p>The paper itself notes that perfect URL benchmark performance warrants scrutiny. Its checks address several leakage concerns but do not establish robustness against real-world noise, concept drift or adversarial evasion. The paper describes adversarial testing and sensitivity analysis as future work.</p></div>
    </section>

    <section className="section wrap" id="limitations"><div className="section-heading"><div><p className="section-kicker">05 / LIMITATIONS & NEXT STEPS</p><h2>Clear claims make stronger research.</h2></div><p className="section-desc">A good case study should show not only reported performance, but also where evidence ends and further validation begins.</p></div>
      <div className="case-two-col"><article className="case-panel"><p className="case-label">LIMITATIONS STATED IN PAPER</p><ul><li>Real-world robustness against adversarial evasion is not established.</li><li>The email benchmark is described as dated and relatively small.</li><li>SMS recall can be improved; threshold changes trade recall against false positives.</li><li>The explanation-rating study used a small panel and sample.</li><li>Risk-score weights are design parameters; sensitivity analysis is future work.</li></ul></article><article className="case-panel"><p className="case-label">FUTURE WORK IN PAPER</p><ul><li>Evaluate modern phishing and synthetic datasets.</li><li>Conduct adversarial robustness testing.</li><li>Study risk-score weight and threshold sensitivity.</li><li>Explore transformer-based models to improve SMS recall.</li><li>Consider Gmail / Outlook integration and federated learning.</li></ul></article></div>
    </section>

    <section className="contact-wrap wrap"><div className="contact-panel"><div><p className="section-kicker">06 / PROJECT LINKS</p><h2>Explore the work.</h2><p>For questions about the case study or its technical approach, feel free to get in touch.</p></div><div className="contact-links"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnakumarb2005%40gmail.com&su=Portfolio%20enquiry" target="_blank" rel="noreferrer">Email <span>Contact ↗</span></a><a href="https://github.com/KrishnaKumarB-47" target="_blank" rel="noreferrer">GitHub <span>View profile ↗</span></a><Link href="/#projects">Back to portfolio <span>All projects ↗</span></Link></div></div></section>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} Krishna Kumar B.</span><span>SentinelAI case study · based on supplied paper</span><Link href="/#home">Portfolio home ↑</Link></footer>
  </main>;
}
