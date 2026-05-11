import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'markup' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter 
      language={language} 
      useInlineStyles={false}
      customStyle={{
        background: 'transparent',
        padding: '24px',
        paddingBottom: '48px',
        margin: 0,
        fontSize: '15px',
        lineHeight: '1.7',
        fontWeight: '500',
      }}
      wrapLongLines={true}
    >
      {code.trim()}
    </SyntaxHighlighter>
  )
}
