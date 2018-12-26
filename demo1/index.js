import * as Prism from 'prismjs'
const left = `
	${window.innerWidth/2 - 200}px
`
const text = `
/*
 * i think, maybe this is my first own coding try
 */
 body {
   transition: all 1s;
	 perspective: 1000px;
	 transform-style: preserve-3d;
 }
 #container {
   transition: all 1s;
   background: #000;
   color: #fff;
   width: 400px;
   height: auto;
   padding: 20px;
   transform: translateX(${left});
 }
`
const container = document.querySelector('#pre-container')
const createStyle = () => {
	let style = document.createElement('style')
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
	let styles = document.getElementsByTagName('style')
	return styles[styles.length - 1]
}

const loadContent = (str) => {
	let style = createStyle()
	let num = 0
	const func1 = () => {
		num++
		if (num <= str.length - 1) {
			setTimeout(() => {
				let word = str.substring(0, num)
				container.innerHTML = Prism.highlight(word, Prism.languages.css)
				style.innerHTML = word
				if (word == ',' || word == '.' || word == '*' || word == '}') {
					setTimeout(() => {
						func1()
					}, 300)
				} else {
					func1()
				}
			}, 16)
		}
	}
	func1()
}

loadContent(text)
