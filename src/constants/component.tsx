import Image from "next/image"

export const DotDot = ({
  color = "#0B50FF",
  className,
}: {
  color?: string
  className?: string
}) => {
  return (
    <svg
      width="100"
      height="72"
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="3.48047" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="3.48047" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="40.8711" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="40.8711" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="78.2598" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="78.2598" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="3.48047" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="3.48047" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="40.8711" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="40.8711" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="78.2598" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="78.2598" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="22.1758" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="22.1758" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="59.5664" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="59.5664" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="96.9551" cy="3.03033" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="96.9551" cy="46.8148" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="22.1758" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="22.1758" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="59.5664" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="59.5664" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="96.9551" cy="24.9224" rx="2.5" ry="2.62469" fill={color} />
      <ellipse cx="96.9551" cy="68.7066" rx="2.5" ry="2.62469" fill={color} />
    </svg>
  )
}

export const Elipses = () => {
  return (
    <>
      <svg
        className="absolute"
        width="116"
        height="123"
        viewBox="0 0 116 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="23" r="99" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="23" r="79" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="23" r="59" stroke="white" strokeWidth="2" />
      </svg>
      <svg
        className="absolute right-0"
        width="93"
        height="200"
        viewBox="0 0 93 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="99" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="100" r="79" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="100" r="59" stroke="white" strokeWidth="2" />
      </svg>
      <svg
        className="absolute bottom-0 w-full"
        height="209"
        viewBox="0 0 1415 209"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1414 411C1414 523.989 1335.16 626.469 1207.28 700.756C1079.42 775.029 902.726 821 707.5 821C512.274 821 335.579 775.029 207.724 700.756C79.8447 626.469 1 523.989 1 411C1 298.011 79.8447 195.531 207.724 121.244C335.579 46.9708 512.274 1 707.5 1C902.726 1 1079.42 46.9708 1207.28 121.244C1335.16 195.531 1414 298.011 1414 411Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M1352 451C1352 555.99 1280.03 651.218 1163.28 720.254C1046.56 789.276 885.24 832 707 832C528.76 832 367.442 789.276 250.718 720.254C133.972 651.218 62 555.99 62 451C62 346.01 133.972 250.782 250.718 181.746C367.442 112.724 528.76 70 707 70C885.24 70 1046.56 112.724 1163.28 181.746C1280.03 250.782 1352 346.01 1352 451Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M1280 504C1280 609.047 1216.02 704.273 1112.33 773.282C1008.64 842.287 865.336 885 707 885C548.664 885 405.363 842.287 301.675 773.282C197.98 704.273 134 609.047 134 504C134 398.953 197.98 303.727 301.675 234.718C405.363 165.713 548.664 123 707 123C865.336 123 1008.64 165.713 1112.33 234.718C1216.02 303.727 1280 398.953 1280 504Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </>
  )
}

export const ToolkitCTA = () => {
  return (
    <>
      <Image
        className="absolute -top-12 h-28 w-32 -rotate-12 md:top-96 md:h-56 md:w-64 lg:top-80 lg:h-72 lg:w-80"
        src="/layanan/toolkit-2.png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute -top-20 right-0 h-40 w-40 -scale-x-100 md:top-96 md:h-64 md:w-64 lg:top-64 lg:h-96 lg:w-96"
        src="/layanan/toolkit-4.png"
        alt=""
        width={800}
        height={800}
      />
    </>
  )
}

export const Circle = ({
  className,
  stroke,
}: {
  className?: string
  stroke?: string
}) => {
  return (
    <svg
      className={className}
      width="116"
      height="123"
      viewBox="0 0 116 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="23" r="99" stroke={stroke} strokeWidth="2" />
      <circle cx="16" cy="23" r="79" stroke={stroke} strokeWidth="2" />
      <circle cx="16" cy="23" r="59" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export const Elipse = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="93"
      height="200"
      viewBox="0 0 93 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="99" stroke="white" strokeWidth="2" />
      <circle cx="100" cy="100" r="79" stroke="white" strokeWidth="2" />
      <circle cx="100" cy="100" r="59" stroke="white" strokeWidth="2" />
    </svg>
  )
}
