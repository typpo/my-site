import * as React from 'react';

import Head from 'next/head';

import styles from './LlmTools.module.css';

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={styles.tooltipContainer}
    >
      {children}
      {showTooltip && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = React.useState('all-data');

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setActiveTab(hash);
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash.replace('#', '') || 'all-data');
    };

    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const handleTabClick = (tab) => {
    if (typeof window !== 'undefined') {
      window.location.hash = tab;
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content="Spreadsheet of LLM evaluation tools designed to test and improve language model prompts." />
        <meta property="og:title" content="LLM eval tools spreadsheet" />
        <meta property="og:image" content="/images/llm-tools.png" />
        <meta property="og:description" content="A spreadsheet of LLM evaluation tools for testing models and improving prompts." />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="LLM eval tools spreadsheet" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LLM eval tools spreadsheet" />
        <meta property="twitter:description" content="Spreadsheet of LLM evaluation tools for testing models and improving prompts." />
        <meta property="twitter:image" content="/images/llm-tools.png" />
        <meta property="twitter:image:alt" content="LLM eval tools spreadsheet" />
      </Head>
      <div className={styles.container}>
        <h1>LLM evaluation tools</h1>
        <p>A collection of LLM evaluation tools for testing models and improving prompts. Submit new tools <a rel="noreferer noopener" href="https://airtable.com/appVr5xALHf6UbPc6/pag8n9Sa2di3l6XDm/form">here</a>.</p>
        <div className={styles.tabs}>
          <button
            onClick={() => handleTabClick('all-data')}
            className={activeTab === 'all-data' ? styles.active : ''}
          >
            All
          </button>
          <Tooltip text="Only open-source eval tools (including SDK, UI, and backend)">
            <button
              onClick={() => handleTabClick('open-source')}
              className={activeTab === 'open-source' ? styles.active : ''}
            >
              Open Source
            </button>
          </Tooltip>
          <Tooltip text="Only commercial eval tools">
            <button
              onClick={() => handleTabClick('commercial')}
              className={activeTab === 'commercial' ? styles.active : ''}
            >
              Commercial
            </button>
          </Tooltip>
          <Tooltip text="Tools that offer a visual interface">
            <button
              onClick={() => handleTabClick('has-ui')}
              className={activeTab === 'has-ui' ? styles.active : ''}
            >
              Has UI
            </button>
          </Tooltip>
          <Tooltip text="Tools that offer an SDK for integration">
            <button
              onClick={() => handleTabClick('has-sdk')}
              className={activeTab === 'has-sdk' ? styles.active : ''}
            >
              Has SDK
            </button>
          </Tooltip>
        </div>
        <div className={styles.tabContent}>
          {activeTab === 'all-data' && (
            <iframe
              src="https://airtable.com/embed/appVr5xALHf6UbPc6/shr1TTFFtKKX18lL3?backgroundColor=gray&viewControls=on"
              width="100%"
              height="1000"
            ></iframe>
          )}
          {activeTab === 'open-source' && (
            <iframe
              src="https://airtable.com/embed/appVr5xALHf6UbPc6/shrC4UBIwIeNxKzjy?backgroundColor=gray&viewControls=on"
              width="100%"
              height="1000"
            ></iframe>
          )}
          {activeTab === 'commercial' && (
            <iframe
              src="https://airtable.com/embed/appVr5xALHf6UbPc6/shrh1bOaNBsGWd3dx?backgroundColor=gray&viewControls=on"
              width="100%"
              height="1000"
            ></iframe>
          )}
          {activeTab === 'has-ui' && (
            <iframe
              src="https://airtable.com/embed/appVr5xALHf6UbPc6/shrw49SH5JQ1rWD4A?backgroundColor=gray&viewControls=on"
              width="100%"
              height="1000"
            ></iframe>
          )}
          {activeTab === 'has-sdk' && (
            <iframe
              src="https://airtable.com/embed/appVr5xALHf6UbPc6/shrSCk744yrg9ez66?backgroundColor=gray&viewControls=on"
              width="100%"
              height="1000"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
