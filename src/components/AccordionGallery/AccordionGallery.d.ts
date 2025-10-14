export interface GalleryItem {
  title: string
  description: string
  backgroundImage?: string
  videoSrc?: string
  videoPoster?: string
  overlaySrc?: string
  overlayClass?: string
}

export interface SwitcherGalleryProps {
  accentTitle?: string
  mainTitle?: string
  accentColor?: string
  mainTitleColor?: string
  items: GalleryItem[]
  padding?: string
  galleryHeight?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showProgress?: boolean
}

declare const SwitcherGallery: {
  new (): {
    $props: SwitcherGalleryProps
  }
}

export default SwitcherGallery
