(function(global){
  'use strict';
  // 문제 1
  // 1~1000까지의 랜덤한 배열에서 빠져있는 하나의 수를 찾아라.

  var array = [];
  
  // 1~1000까지 랜덤으로 배열을 생성해주는 함수
  function setData(array, number) {
    for (var i = 0; i < 1000; i++) {
      array[i] = i + 1;
    }
  }
  // 배열을 섞어주는 함수
  function suffle(array){
    var j, x, i;
    for (i = array.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = array[i - 1];
      array[i - 1] = array[j];
      array[j] = x;
    }
  }

  // 배열에서 랜덤한 인덱스를 빼는 함수
  function subtractNumber(array){
    var randomNumber = Math.floor(Math.random() * 1000);
    console.log('빼는 수:', array[randomNumber]);
    array.splice(randomNumber, 1);
  }

  // 배열을 정렬해주는 함수
  function arraySort(array){
    if (array.length == 0) { 
      return []; 
    } 
      var standard = array[0];
      var left = [], right = []; 

      for (var i = 1, l = array.length; i < l; ++i) { 
        if (array[i] < standard) { 
          left.push(array[i]); 
        } else { 
          right.push(array[i]); 
        } 
      } 
    return arraySort(left).concat(standard, arraySort(right));
  }

  // 빠져있는 숫자를 찾는 함수
  function findMissingNumber(array) {
    for (var i = 0, l = array.length; i < l; i++) {
      if (array[i] !== (i + 1)) {
        console.log('빠져있는 값:', i + 1);
        break;
      }
    }
  }

  // 문제준비 단계 : 1000까지의 수를 생성 -> 랜덤한 수를 삭제 -> 배열 섞기
  console.group('1~1000까지의 랜덤한 배열에서 빠져있는 하나의 수를 찾아라.')
  setData(array);
  subtractNumber(array);
  suffle(array);

  // 문제해결 단계 : 무작위로 섞여있는 배열을 순서대로 정렬 -> 빠진 수를 찾기
  array = arraySort(array);
  findMissingNumber(array);
  console.log('문제 1의 배열:', array);
  console.groupEnd();
  

// --------------------------------------------------------------------------------------
  
  //문제 2 
  //1~1000까지의 배열에서 7이란 숫자가 들어가 있는 요소의 인덱스와 값을 찾아라.

  var array2 = []
  var findNumber = null;

  // 7이란 문자열을 찾는 함수
  function findSevenNumber(array) {
    for (var i = 0, l = array.length; i < l; i++) {
      if (array[i].indexOf('7') !== -1) {
        console.log('인덱스:', i, '값:', array[i]);
      }
    }
  }

  // 문제 준비 : 1~1000까지의 숫자를 생성
  console.group('1~1000까지의 배열에서 7이란 숫자가 들어가 있는 요소의 인덱스와 값을 찾아라.')
  setData(array2);

  // 문제 해결 : 배열에 들어있는 숫자를 문자열로 변환 -> '7'이란 문자를 가진 배열의 값과 인덱스를 찾기
  findNumber = array2.join().split(',');
  findSevenNumber(findNumber);
  console.log('문제 2의 배열', findNumber);
  console.groupEnd();

  // 문제를 풀기 시작한 시간 : 16:40
  // 문제를 다 푼 시간 : 18:40
}(window));