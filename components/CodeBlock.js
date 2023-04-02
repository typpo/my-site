import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ children, className }) => {
  const language = className?.replace(/language-/, '');

  if (children?.includes && !children.includes('\n')) {
    return (
      <code className={className}>
        <span>{children}</span>
      </code>
    );
  }

  return (
    <SyntaxHighlighter language={language} style={docco}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
