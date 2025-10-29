export const parseMarkdown = (markdown) => {
  if (!markdown) return ''
  
  let text = markdown
  
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
  
  text = text
    .replace(/\\#/g, '#')
    .replace(/\\\*/g, '*')
    .replace(/\\_/g, '_')
    .replace(/\\-/g, '-')
    .replace(/\\\[/g, '[')
    .replace(/\\\]/g, ']')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
  
  text = text
    .replace(/^######\s+(.*$)/gim, '<h6 class="font-sora display-6 mb-2">$1</h6>')
    .replace(/^#####\s+(.*$)/gim, '<h5 class="font-sora display-5 mb-3">$1</h5>')
    .replace(/^####\s+(.*$)/gim, '<h4 class="font-sora display-4 mb-4">$1</h4>')
    .replace(/^###\s+(.*$)/gim, '<h3 class="font-sora display-3 mb-5">$1</h3>')
    .replace(/^##\s+(.*$)/gim, '<h2 class="font-sora display-2 mb-6">$1</h2>')
    .replace(/^#\s+(.*$)/gim, '<h1 class="font-sora display-1 mb-8">$1</h1>')
  
  text = text
    .replace(/^\s*[-*+]\s+(.+$)/gim, '<li class="font-sora">$1</li>')
  
  text = text
    .replace(/^\s*\d+\.\s+(.+$)/gim, '<li class="font-sora">$1</li>')
  
  text = text
    .replace(/(<li.*?<\/li>)/gs, (match) => {
      return '<ul class="font-sora mb-4 list-disc pl-6">' + match + '</ul>'
    })
  
  text = text
    .replace(/\*\*\*([^*\n]+(?:\n[^*\n]*)*?)\*\*\*/gs, '<strong class="font-sora"><em class="font-sora">$1</em></strong>')
    .replace(/___([^_\n]+(?:\n[^_\n]*)*?)___/gs, '<strong class="font-sora"><em class="font-sora">$1</em></strong>')
    .replace(/\*\*([^*\n]+(?:\n[^*\n]*)*?)\*\*/gs, '<strong class="font-sora">$1</strong>')
    .replace(/__([^_\n]+(?:\n[^_\n]*)*?)__/gs, '<strong class="font-sora">$1</strong>')
    .replace(/\*([^*\n]+(?:\n[^*\n]*)*?)\*/gs, '<em class="font-sora">$1</em>')
    .replace(/_([^_\n]+(?:\n[^_\n]*)*?)_/gs, '<em class="font-sora">$1</em>')
  
  text = text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="font-sora underline transition-colors text-orange-500 hover:text-orange-600" href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  
  const blocks = text.split(/\n\s*\n/)
  
  const processedBlocks = blocks.map(block => {
    if (!block.trim()) return ''
    
    if (block.match(/^<(h[1-6]|ul|ol|li)/)) {
      return block.replace(/\n/g, ' ').trim()
    }
    
    return '<p class="font-sora mb-4">' + block.replace(/\n/g, '<br>').trim() + '</p>'
  })
  
  return processedBlocks
    .filter(block => block.trim())
    .join('\n')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim()
}
