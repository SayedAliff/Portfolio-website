
'use client';
import Link from 'next/link';

interface HologramButtonProps {
    href: string;
    label: string;
    target?: string;
    rel?: string;
}

export default function HologramButton({ href, label, target = "_self", rel }: HologramButtonProps) {
    return (
        <Link 
            href={href}
            target={target}
            rel={rel}
            // Use the Tailwind btn structure combined with custom hologram class
            className="btn hologram flex items-center justify-center"
        >
            <span data-text={label}>{label}</span>
            <div className="scan-line"></div>
        </Link>
    );
}