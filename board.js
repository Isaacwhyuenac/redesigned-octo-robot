var board
var boardWithMine

function createBoard() {
  console.log(`createBoard()`)
  const cols = document.getElementById(`height`).value
  const rows = document.getElementById(`width`).value
  const numMines = document.getElementById(`numMines`).value

  console.log(`cols rows`, cols, rows)
  board = init2DBoardArray(rows, cols)

  draw2DBoard(rows, cols)

  insertMinesOnInit(rows, cols, numMines)

  return board
}

function init2DBoardArray(rows, cols) {
  const arr = new Array(cols)

  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}


function draw2DBoard(rows, cols) {
  var boardHtml ="<table id=\"squareBoardTable\" class=\"boardTable\" unselectable=\"on\">"

  for (var i = 0; i < cols; i++) {
    boardHtml += `<tr id=\"squareBoardTable_col${i}\">`

    for (var j =0; j < rows; j++) {
      boardHtml += `<td class=\"squareBoardTable_cell\" id=\"squareBoardTable_row${j}\" onclick=\"onCellClick(${i}, ${j})\"/></td>`
    }

    boardHtml += "</tr>"
  }

console.log(`draw2DBoard`,boardHtml )
  document.getElementById(`board`).innerHTML = boardHtml
}

function insertMinesOnInit(rows, cols, numMines) {
  var minesPlanted = 0
  boardWithMine = board

  while (minesPlanted < numMines) {
    const posY = Math.floor(Math.random(cols))
    const posX = Math.floor(Math.random(rows))

    if (boardWithMine[posY][posX] !== true) {
      boardWithMine[posY][posX] = true
      minesPlanted++
    }
  }
}


