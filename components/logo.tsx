import Image from "next/image"

interface LogoProps {
    className?: string
    width?: number
    height?: number
}

export function Logo({ className, width = 32, height = 32 }: LogoProps) {
    return (
        <div className={`relative rounded-lg overflow-hidden ${className}`}>
            <Image
                src="/scaletio-logo.jpg"
                alt="Scaletio Logo"
                width={width}
                height={height}
                className="object-cover"
            />
        </div>
    )
}
