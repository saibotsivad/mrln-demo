import { toBase64 } from '@/shared/strings.js'
import { getRandomInt } from '@/runtime/numbers.js'
import { multiply } from '@/lib/multiply.js'

console.log('app/browser/main.js', {
	multiply: multiply(getRandomInt(), getRandomInt()),
	string: toBase64('battery-horse-staple'),
})
