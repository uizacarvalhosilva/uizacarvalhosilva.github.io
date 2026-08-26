import { useState } from 'react'
import type { ImageAsset } from '../data/portfolio'

type Props = ImageAsset & { kind: 'profile' | 'logo' | 'education' | 'project'; className?: string }

export function ImagePlaceholder({ src, alt, fallback, kind, className = '' }: Props) {
  const [hasImage, setHasImage] = useState(true)
  return (
    <div className={`image-placeholder image-placeholder--${kind} ${className}`}>
      {hasImage && <img src={src} alt={alt} onError={() => setHasImage(false)} />}
      {!hasImage && <span>{fallback}</span>}
    </div>
  )
}
