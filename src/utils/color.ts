import Color from 'color'

// /**
//  * 16进制颜色值转RGB
//  * @param hex
//  * @returns {string | null} 'r, g, b'
//  */
// export function hex2rgb(hex: string): string | null {
//   const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
//   return result
//     ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
//     : null
// }

export function hex2rgb(color: string) {
  return Color(color).rgb().array().toString()
}

export function lighten(color: string) {
  return Color(color).lighten(.1).rgb().array().toString()
}