import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={atomDark}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        fontSize: 'inherit',
        lineHeight: 'inherit'
      }}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  )
}
