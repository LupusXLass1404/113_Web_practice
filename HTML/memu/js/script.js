let itemsId = document.getElementById('items');
let costId = document.getElementById('cost');
let costTotal = 0;

let itemsInfo = '';
function itemsPrint() {
    items.forEach(ele => {
        itemsInfo += `
        <div class="item">
            <div class="img" style="background-image: url(./images/${ele.name}.jpg)";></div>
            <div class="info">
                <p>
                    <label for="">${ele.name}</label>
                </p>
                <p class="depiction">
                    ${ele.depiction}
                </p>
                <p class="depiction">
                $ ${ele.cost}
                </p>
            </div>
            <div>
                <input class="inputNum" type="number" value="0" min="0" data-cost="${ele.cost}">
            </div>
        </div>
        `;
    });
    itemsId.innerHTML = itemsInfo;
}

function total(inputClass) {
    let costTotal = 0;
    inputClass.forEach(ele => {
        let valuesNum = ele.value;
        let itemCost = ele.getAttribute('data-cost');
        console.log(valuesNum);
        console.log(itemCost);
        costTotal += itemCost * valuesNum;
    })
    costId.innerHTML = costTotal;
}

// 初始化
function into() {
    itemsPrint();

    let inputClass = [...document.querySelectorAll('.inputNum')]
    inputClass.forEach(input => {
        input.addEventListener('input', function () {
            total(inputClass);
        });
    })
}

into();