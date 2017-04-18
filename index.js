function getFirstSelector(selector){
var element = document.querySelector(selector)
return element
}

function nestedTarget(){
  var element = document.getElementById('nested').querySelector('.target')
  return element
}

function deepestChild(){
var element = document.getElementById('grand-node').querySelectorAll('div')
	for (let i = 0, l = element.length; i < l; i++){
		console.log(element[i])
		if (element[i] !== null) {
      var item = element[i]
      continue
    }
    }

return item
}

function increaseRankBy(n){
  var element = document.querySelectorAll('ul.ranked-list')

  for (let i = 0, l = element.length; i < l; i++){
    var item = element[i].innerHTML
    item = parseInt(item)
    element[i].innerHTML = (item + n).toString
  }
}
