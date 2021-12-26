"use strict"
let web = prompt("Выберите тип сайта:\r\n1-Интернет-представительства  1001руб\r\n2-Веб-сервисы  1002руб\r\n3-Информационные услуги 1003руб","Введите вариант ответа(цифру)")
let design = prompt("Выберите тип дизайн:\r\n1-По шаблону  1001руб\r\n2-Уникальный дизайн  1002руб","Введите вариант ответа(цифру)")
let Adaptability = prompt("Выберите адаптивность\r\n1-Адаптивность под ПК  1001руб\r\n2-Адаптивность под телефоны  1000руб\r\n3-Адаптивность подо всё 2000руб","Введите вариант ответа(цифру)")
let calc = {
	typeWebsite: web,
	typeDesign: design,
	typeAdaptability: Adaptability,
	}
let a=[]
a.push(web,design,Adaptability)
console.log(a)
let sum=0
if (a[0]=='1'){
	sum+=1001
}
if (a[0]=='2'){
	sum+=1002
}
if (a[0]=='3'){
	sum+=1003
}
if (a[1]=='1'){
	sum+=1001
}
if (a[1]=='2'){
	sum+=1002
}
if (a[2]=='1'){
	sum+=1001
}
if (a[2]=='2'){
	sum+=1000
}
if (a[2]=='3'){
	sum+=2000
}
alert(sum)