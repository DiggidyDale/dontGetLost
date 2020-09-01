const symbols = [
    "symbol1",
    "symbol2",
    "symbol3",
    "symbol4",
    "symbol5",
    "symbol6",
    "symbol7",
    "symbol8",
    "symbol9"
]

function showSymbols(numberOfSymbols) {
    this.hideSymbols();
    for (let i = 0; i < numberOfSymbols; i++) {
        document.getElementsByClassName(symbols[i])[0].classList.remove("invisible");
    }
}

function hideSymbols() {
    for (let symbol of symbols) {
        document.getElementsByClassName(symbol)[0].classList.remove("invisible");
        document.getElementsByClassName(symbol)[0].classList.add("invisible");
        document.getElementsByClassName(symbol)[0].classList.remove("bg-success")
    }
}

function updateSymbols() {
    this.showSymbols(document.getElementById("howManySymbols").value);

}

function createPuzzle() {
    let numberOfSymbols = document.getElementById("howManySymbols").value;
    let puzzle = []
    for (let symbolIndex = 0; symbolIndex < numberOfSymbols; symbolIndex++) {
        puzzle.push(new Icon(
            getFlower(symbolIndex),
            getCircle(symbolIndex),
            getShaded(symbolIndex)));
    }
    return puzzle;
}

function runPuzzle() {
    calculate(createPuzzle());
    return false;
}

function getFlower(symbolIndex) {
    return document.getElementsByClassName(symbols[symbolIndex])[0]
        .getElementsByClassName("flowerCheck")[0]
        .children[0].children.flowerCheck.checked;
}

function getCircle(symbolIndex) {
    return document.getElementsByClassName(symbols[symbolIndex])[0]
        .getElementsByClassName("circleCheck")[0]
        .children[0].children.circleCheck.checked;
}

function getShaded(symbolIndex) {
    return document.getElementsByClassName(symbols[symbolIndex])[0]
        .getElementsByClassName("shadedCheck")[0]
        .children[0].children.shadedCheck.checked;
}

function calculate(puzzle) {
    let flower = 0;
    let shaded = 0;
    let circle = 0;

    for (symbol of puzzle) {
        flower += symbol.isFlower() ? 1 : 0;
        shaded += symbol.isShaded() ? 1 : 0;
        circle += symbol.isCircle() ? 1 : 0;
    }
    console.log(flower);
    console.log(shaded);
    console.log(shaded);
    if (flower == 1 || flower == puzzle.length - 1) {
        if (flower == 1) {
            for (let i in puzzle) {
                if (puzzle[i].isFlower()) {
                    printOddOneOut(i, puzzle[i]);
                }
            }
        } else {
            if (flower == puzzle.length - 1) {
                for (let i in puzzle) {
                    if (!puzzle[i].isFlower()) {
                        printOddOneOut(i, puzzle[i]);
                    }
                }
            }
        }
    }
    if (shaded == 1 || shaded == (puzzle.length - 1)) {
        if (shaded == 1) {
            for (let i in puzzle) {
                if (puzzle[i].isShaded()) {
                    printOddOneOut(i, puzzle[i]);
                }
            }
        } else {
            if (shaded == (puzzle.length - 1)) {
                for (let i in puzzle) {
                    if (!puzzle[i].isShaded()) {
                        printOddOneOut(i, puzzle[i]);
                    }
                }
            }
        }
    }
    if (circle == 1 || circle == (puzzle.length - 1)) {
        if (circle == 1) {
            for (let i in puzzle) {
                if (puzzle[i].isCircle()) {
                    printOddOneOut(i, puzzle[i]);
                }
            }
        } else {
            if (circle == (puzzle.length - 1)) {
                for (let i in puzzle) {
                    if (!puzzle[i].isCircle()) {
                        printOddOneOut(i, puzzle[i]);
                    }
                }
            }
        }
    }

}

function printOddOneOut(number, icon) {
    document.getElementsByClassName(symbols[number])[0].classList.add("bg-success")
    console.log("Odd one out is :" + (number + 1));
    console.log(icon.print())
}