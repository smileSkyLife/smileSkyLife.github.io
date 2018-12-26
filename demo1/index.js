const text = `
/*
 * i think , maybe this is my first own coding try
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
   margin: auto;
   padding: 20px;
   transform: translate(100px, 200px) rotateX(-20deg) rotateY(32deg);
 }
`
const container = document.querySelector('#container')
const createStyle = () => {
	let style = document.createElement('style')
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
	let styles = document.getElementsByTagName('style')
	return styles[styles.length - 1]
}
const createSpan = (text) => {
	let span = document.createElement('span')
	span.innerText = text
	return span
}
const loadContent = (str) => {
	let style = createStyle()
	let num = 0
	const func1 = () => {
		num++
		if (num <= str.length - 1) {
			setTimeout(() => {
				container.appendChild(createSpan(str.substring(num, num+1)))
				style.innerHTML = str.substring(0, num)
				func1()
			}, 40)
		}
	}
	func1()
}

loadContent(text)
for (let i=0; i<text.length; i++) {
	console.log(text[i])
}
