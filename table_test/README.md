## Table-test

> 좌측 상단부터 1 부터 100까지의 숫자가 표시되는 가로 10칸, 세로 10칸의 테이블에서 표시되는 숫자가 3 의 배수일 경우 숫자 대신 ‘삐’ 가 표시되고, 4 의 배수일 경우 ‘뽀’ 가 표시되고,3과 4모두의 배수일 경우 ‘빱’ 이 표시되는 웹 화면을 제작 하시오.

### 문제풀이

1. 1~100까지의 수를 돌며 3, 4, 12,의 배수에 해당하는 숫자를 찾는다.
2. 찾은 수를 각각 알맞는 글자로 변환 후 배열에 할당다(해당하지 않는 수는 바로 배열에 할당한다.)
3. 다시 배열을 돌며 10개 단위로 열을 나눈다.

```javascript
var table = document.querySelector('.table-wrapper');
var element = [];
var sum = ''
for (var number = 1; number < 101; number++) {
  if(number%3 === 0 && number%12 !== 0){
    element.push('<td>삐</td>');
  } else if(number%4 === 0 && number%12 !== 0){
    element.push('<td>뽀</td>');
  } else if(number%12 === 0){
    element.push('<td>빱</td>');
  } else {
    element.push('<td>'+number+'</td>');
  }
  // console.log(element);
}
for (var i = 0; i < element.length; i++) {
  if(i === 0){
    sum = '<tr>' + element[i]
  } else if(i%10 === 0){
    sum = sum + '</tr><tr>' + element[i]
  } else if(i === element.length-1){
    sum = sum + element[i] + '</tr>'
  } else{
    sum = sum + element[i];
  }
  console.log(sum);
}
table.innerHTML = sum;
```