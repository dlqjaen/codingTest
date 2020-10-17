// 최대 힙
var heap = [10, 9, 8, 7, 6, 5, 4, 3, 2]

function heapInsert (data) {
  heap.push(data)

  var dataIndex = heap.length - 1
  var parentIndex = Math.floor((dataIndex - 1) / 2)

  while (heap[parentIndex] < data) {
   [heap[parentIndex], heap[dataIndex]] = [heap[dataIndex], heap[parentIndex]]
    dataIndex = parentIndex
    parentIndex = Math.floor((dataIndex - 1) / 2)
  }
}

function heapDelete () {
  var lastIndex = heap.length - 1;
  [heap[lastIndex], heap[0]] = [heap[0], heap[lastIndex]]

  heap.pop()
  lastIndex--
  var dataIndex = 0

  while (dataIndex < lastIndex) {
    var leftChild = ((dataIndex * 2) + 1)
    var rightChild = ((dataIndex * 2) + 2)

    if (leftChild >= lastIndex) {
      break
    } else if (rightChild >= lastIndex)  {
      if (heap[dataIndex] < heap[leftChild]) {
        [heap[dataIndex], heap[leftChild]] = [heap[leftChild], heap[dataIndex]]
        dataIndex = leftChild
      } else {
        break
      }
      if(heap[dataIndex] < heap[leftChild] && heap[dataIndex] < heap[rightChild]) {
        if(heap[leftChild] > heap[rightChild]) {
          [heap[dataIndex], heap[leftChild]] = heap[leftChild], heap[dataIndex]
          dataIndex = leftChild;
        } else {
          [heap[dataIndex], heap[rightChild]] = heap[rightChild], heap[dataIndex]
          dataIndex = rightChild;
        }
      }
      else if(heap[dataIndex] < heap[leftChild]) {
        [heap[dataIndex], heap[leftChild]] = heap[leftChild], heap[dataIndex]
        dataIndex = leftChild;
      } else if(heap[dataIndex] < heap[rightChild]) {
        [heap[dataIndex], heap[rightChild]] = heap[rightChild], heap[dataIndex]
        dataIndex = rightChild;
      } else {
        break;
      }
    }
  }
}

// 최소 힙
heapInsert(8)

// heapDelete()
heap