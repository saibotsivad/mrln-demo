import { saveJson } from '@/runtime/save-json.js'
import { makeBig } from '@/lib/make-big.js'
import { toBase64 } from '@/shared/strings.js'
import { makeSmall } from '@/lib/deeper/strings.js'

saveJson('./example.json', {
	big: makeBig('bar'),
	small: makeSmall('BIZ'),
	secret: toBase64('battery-horse-staple'),
})
	.then(json => {
		console.log('app/server/main.js', json)
	})
	.catch(error => {
		console.error('error from app/server/main.js', error)
	})

