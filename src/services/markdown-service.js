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

  text = text
    .replace(/<Button\s+href="([^"]+)"[^>]*type="primary"[^>]*>([^<]+)<\/Button>/gi, '<a href="$1" class="group items-center font-proto-mono uppercase border-none active:bg-orange-600 bg-neutral-100 text-neutral-900 duration-300 transition px-5 py-2 md:px-6 md:py-4 rounded-md hover:bg-orange-600 hover:text-white h-[3rem] font-proto-mono text-sm leading-[1.3] font-medium text-sm whitespace-nowrap inline-block cursor-pointer">$2</a>')

  text = text
    .replace(/<Button\s+href="([^"]+)"[^>]*type="link"[^>]*>([^<]+)<\/Button>/gi, '<a href="$1" class="font-proto-mono w-fit text-base items-center !leading-[.75rem] bg-transparent border-none text-neutral-100 pb-1 relative after:content-[\'\'] after:absolute after:-bottom-[.1rem] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-150 hover:after:w-full after:bg-neutral-900 whitespace-nowrap flex gap-3 cursor-pointer group">$2<svg width="10" height="10" class="group-hover:translate-x-[.1rem] -translate-x-[.1rem] transition-transform relative top-1/2 rotate-45" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.32201 8.20812L7.31425 4.45914C7.31425 4.39704 7.29873 4.35047 7.26768 4.31943C7.22111 4.27285 7.15642 4.29096 7.07363 4.37376L3.40226 8.04512C3.20046 8.24693 2.96243 8.35043 2.68817 8.3556C2.41392 8.35043 2.17071 8.24176 1.95856 8.0296C1.76192 7.83297 1.6636 7.59494 1.6636 7.31551C1.6636 7.03608 1.76192 6.79805 1.95856 6.60142L5.58335 2.97662C5.66614 2.89383 5.68684 2.83173 5.64545 2.79034C5.6144 2.75929 5.56783 2.74376 5.50573 2.74376L1.78003 2.74376C1.51095 2.74376 1.2781 2.64545 1.08146 2.44881C0.88483 2.25218 0.7891 2.00639 0.794275 1.71144C0.804624 1.41131 0.910703 1.16034 1.11251 0.958533C1.30397 0.767074 1.53941 0.671344 1.81884 0.671344L8.16806 0.671344C8.49923 0.619598 8.79677 0.725677 9.06067 0.989581C9.27283 1.20174 9.37891 1.44753 9.37891 1.72696L9.38667 8.20812C9.38667 8.4772 9.278 8.72041 9.06067 8.93774C8.84851 9.1499 8.6079 9.25598 8.33882 9.25598C8.06974 9.24563 7.82912 9.13437 7.61696 8.92222C7.42033 8.72558 7.32201 8.48755 7.32201 8.20812Z" fill="#FE601F"/></svg></a>')

  text = text
    .replace(/<Button\s+href="([^"]+)"[^>]*type="secondary"[^>]*>([^<]+)<\/Button>/gi, '<a href="$1" class="group items-center h-fit bg-neutral-950 text-neutral-100 duration-300 transition rounded-md active:bg-neutral-900 border-1 border-[#353040] hover:bg-neutral-900 hover:text-orange-500 px-5 py-2 md:px-6 md:py-4 font-proto-mono text-sm leading-[1.5rem] whitespace-nowrap inline-block cursor-pointer">$2</a>')

  text = text
    .replace(/<Button\s+href="([^"]+)"(?![^>]*type="(primary|link|secondary)")[^>]*>([^<]+)<\/Button>/gi, '<a href="$1" class="font-proto-mono w-fit text-base items-center !leading-[.75rem] bg-transparent border-none text-neutral-100 pb-1 relative after:content-[\'\'] after:absolute after:-bottom-[.1rem] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-150 hover:after:w-full after:bg-neutral-900 whitespace-nowrap flex gap-3 cursor-pointer group">$3<svg width="10" height="10" class="group-hover:translate-x-[.1rem] -translate-x-[.1rem] transition-transform relative top-1/2 rotate-45" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.32201 8.20812L7.31425 4.45914C7.31425 4.39704 7.29873 4.35047 7.26768 4.31943C7.22111 4.27285 7.15642 4.29096 7.07363 4.37376L3.40226 8.04512C3.20046 8.24693 2.96243 8.35043 2.68817 8.3556C2.41392 8.35043 2.17071 8.24176 1.95856 8.0296C1.76192 7.83297 1.6636 7.59494 1.6636 7.31551C1.6636 7.03608 1.76192 6.79805 1.95856 6.60142L5.58335 2.97662C5.66614 2.89383 5.68684 2.83173 5.64545 2.79034C5.6144 2.75929 5.56783 2.74376 5.50573 2.74376L1.78003 2.74376C1.51095 2.74376 1.2781 2.64545 1.08146 2.44881C0.88483 2.25218 0.7891 2.00639 0.794275 1.71144C0.804624 1.41131 0.910703 1.16034 1.11251 0.958533C1.30397 0.767074 1.53941 0.671344 1.81884 0.671344L8.16806 0.671344C8.49923 0.619598 8.79677 0.725677 9.06067 0.989581C9.27283 1.20174 9.37891 1.44753 9.37891 1.72696L9.38667 8.20812C9.38667 8.4772 9.278 8.72041 9.06067 8.93774C8.84851 9.1499 8.6079 9.25598 8.33882 9.25598C8.06974 9.24563 7.82912 9.13437 7.61696 8.92222C7.42033 8.72558 7.32201 8.48755 7.32201 8.20812Z" fill="#FE601F"/></svg></a>')

  text = text
    .replace(/<Divider\s*\/?>/gi, '<div class="w-full h-[2px] bg-neutral-900 my-4"></div>')
  
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
