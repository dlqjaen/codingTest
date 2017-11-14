## Todait

>어떤 대상을 순서에 따라 배열한 것을 순열이라고 합니다. 예를 들어 3124는 숫자 1, 2, 3, 4로 만들 수 있는 순열 중 하나입니다. 이렇게 만들 수 있는 모든 순열을 숫자나 문자 순으로 늘어놓은 것을 사전식(lexicographic) 순서라고 합니다. 0, 1, 2로 만들 수 있는 사전식 순열은 다음과 같습니다. 012   021   102   120   201   210 그렇다면 0, 1, 2, 3, 4, 5, 6, 7, 8, 9로 만들 수 있는 사전식 순열에서 1,000,000번째는 무엇입니까?

> 추가 요구사항
> [a-t]로 만들 수 있는 사전식 순열에서 1,000,000번째는 무엇입니까?

### 문제풀이
1. 배열의 첫번째 값과 첫번째 값을 교환, 첫번째 값과 두번쨰 값을 교환, 첫번째 값과 세번째 값을 교환 ...
2. 사이클이 한 번 다 돌면 새로운 배열에 추가
3. 다음 사이클 실행
4. 모든 경우의 수가 box에 할당되면 얻고자 하는 번째의 수를 인덱스로 활용 한다.

```javascript
var arr = [0,1,2,3,4,5,6,7,8,9];
// a~t 까지의 경우의수가 너무 많아 스택오버플로우가 걸린다.
// var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];
var box = [];

var calculator = function(arr, increase, n, k){
    // increase의 값이 k와 같게 되면 box에 arr을 할당
    if(increase == k){
      // box배열에 들어가기 전 값 참조를 값 복사로 전환
      box.push(arr.slice());
      // 배열이 만들어지는 과정을 볼 수 있는 콘솔
      // console.log(arr,k);
      return;
    }
    // 재귀적으로 배열의 순서를 바꾸기위한 반복 실행
    for(var i = increase; i < n; i++){
      change(arr, i, increase);
      calculator(arr, increase+1, n, k);
      change(arr, i, increase);
    }
};
// 실질적으로 배열의 순서를 변경하는 함수
function change(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// 계산을 실행
calculator(arr, 0, arr.length, arr.length);
// 최종적으로  box에 있는 100만번째 요소를 출력
console.log(box[1000000].join(''));
```

* a~t까지의 경우의 수가 너무많아 웹페이지가 다운된다.
`a~c까지`로 지정하고 `console.log(box[4])`로 테스트 했을 때 `bca`로 작동하였다.