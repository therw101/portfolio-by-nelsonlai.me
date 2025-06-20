type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>

const Logo = (props: LogoProps) => {
  return (
    <img src='/images/avatar.png' alt='Rutchx' {...props} />
    // <svg
    //   version='1.0'
    //   xmlns='http://www.w3.org/2000/svg'
    //   width={32}
    //   height={32}
    //   viewBox='0 0 1280 1876'
    //   {...props}
    // >
    //   {/* <path
    //   d="M1005 2060 c-199 -45 -346 -136 -458 -283 -86 -113 -141 -229 -166
    //     -355 -29 -144 -5 -344 59 -481 141 -301 490 -513 802 -487 285 24 532 193 658
    //     450 46 94 66 164 82 294 28 216 -59 464 -222 632 -196 203 -486 291 -755 230z
    //     m360 -45 c33 -9 67 -17 75 -18 8 -1 17 -5 20 -8 3 -3 33 -20 67 -37 66 -33
    //     120 -70 176 -119 42 -37 147 -173 147 -190 0 -7 5 -13 11 -13 5 0 8 -4 4 -9
    //     -3 -5 1 -15 8 -23 7 -7 13 -15 14 -18 0 -3 8 -30 18 -60 11 -30 18 -61 16 -69
    //     -1 -7 1 -11 6 -8 10 7 12 -13 13 -153 1 -100 -3 -179 -10 -187 -2 -2 -3 -11
    //     -5 -20 -1 -10 -5 -27 -10 -38 -41 -100 -52 -134 -47 -139 3 -3 0 -6 -7 -6 -7
    //     0 -9 -4 -6 -10 3 -5 2 -10 -2 -10 -5 0 -17 -15 -28 -33 -10 -17 -24 -37 -29
    //     -43 -6 -7 -27 -32 -46 -57 -19 -24 -49 -55 -66 -68 -18 -13 -30 -28 -26 -34 3
    //     -5 2 -7 -2 -3 -5 4 -40 -13 -79 -38 -64 -39 -182 -87 -247 -98 -14 -3 -25 -5
    //     -25 -7 0 -6 -205 -4 -230 3 -16 4 -43 11 -60 14 -54 9 -190 70 -251 111 -127
    //     87 -250 235 -296 356 -11 28 -24 58 -30 65 -6 6 -8 12 -6 12 3 0 -1 26 -8 58
    //     -16 68 -18 239 -3 302 6 25 12 52 14 60 2 8 10 31 19 51 8 20 12 39 9 43 -4 3
    //     -1 6 5 6 7 0 12 5 12 11 0 26 113 189 163 235 66 61 107 95 107 89 0 -2 24 9
    //     53 27 68 40 114 57 217 79 99 22 248 19 345 -6z"
    //      fill='currentColor'
    //   /> */}
    // </svg>
  )
}

export { Logo }
