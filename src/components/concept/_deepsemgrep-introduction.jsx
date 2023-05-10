
export default function DeepsemgrepIntroduction({shlyapa}) {
  return (<>
      Go beyond {shlyapa} single file analysis to detect vulnerabilities across files and functions, using Semgrep Pro Engine. By design, Semgrep open-source software (OSS) Engine can only analyze interactions within a single function. This limited scope makes Semgrep OSS fast and easy to integrate into developer workflows. Semgrep Pro Engine gives security teams the option to tradeoff speed for better results and deeper analysis.

      Semgrep Pro Engine includes interfile analysis and interprocedural analysis, which finds vulnerabilities that aren't detectable with Semgrep OSS. By analyzing interactions across files and across functions, Semgrep Pro Engine can reduce noise, uncover new vulnerabilities, and make results easier to understand. Build trust with your developers by only showing them high-confidence results that are easy to fix.

      Semgrep Pro Engine is a proprietary extension of Semgrep OSS. Just like Semgrep OSS, Semgrep Pro Engine runs on raw source code and it doesn't require compiled code for its analysis.
    </>)
};