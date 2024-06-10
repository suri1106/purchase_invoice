function onsubmitHandler() {
    validateForm();
    addrecord();
    return false;
}
function validateForm() {
    let Product = document.getElementById('Product');
    let qty = document.getElementById('quantity');
    let price = document.getElementById('price');
    if (Product.value == '') {
        Product.style.borderColor = 'red';
        return false;
    } else {
        Product.style.borderColor = '';
    }

    if (qty.value == '') {
        qty.style.borderColor = 'red';
        return false;
    } else {
        qty.style.borderColor = '';
    }
    if (price.value == '') {
        price.style.borderColor = 'red';
        return false;
    } else {
        price.style.borderColor = '';
    }
}
const product = {
    'Apple': 'KG',
    'Sugar': 'KG',
    'Milk': 'Liter',
    'Oil': 'Liter',
    'Orange': 'KG',
};

function UOM() {
    const productName = document.getElementById('Product').value;
    const uom = document.getElementById('uom');
    uom.value = product[productName];
}
function addrecord() {

    let Product = document.getElementById('Product').value;
    let qty = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let amount = qty * price;
    let uom = document.getElementById('uom').value;
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    if (Product == "" || qty == ""
        || price == "") {
        return false;
    }
    else {

        let table = document.getElementById('table');
        let rowcount = table.rows.length;
        td1.innerHTML = rowcount;
        td2.innerHTML = Product;
        td3.innerHTML = qty;
        td4.innerHTML = uom;
        td5.innerHTML = price;
        td6.innerHTML = amount;
        td7.innerHTML =
            `
            <img src="edit.png" class="edit"  onclick="update()" title="edit" alt="edit">
            &nbsp;
            <td> <img src="icon1.png" class="trash " title="delete" onclick="adelete(this)" alt=" trash ">

            `;

        document.getElementById('table').appendChild(tr);
        document.getElementById('myForm1').reset();
        return true;
    }
}

var Index;
var table = document.getElementById('table');

function update() {
    var up = document.getElementById('update');
    var add = document.getElementById('button');
    var can = document.getElementById('Cancel');
    up.style.display = 'block';
    add.style.display = 'none';

    up.style.position = "relative";
    up.style.top = "8px";
    up.style.left = '250px';
    can.style.position = "relative";
    can.style.bottom = "20px";
    can.style.left = "40px";
    can.innerText = 'Cancel';
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            Index = this.rowIndex;
            document.getElementById('Product').value = this.cells[1].innerHTML;
            document.getElementById('quantity').value = this.cells[2].innerHTML;
            document.getElementById('uom').value = this.cells[3].innerHTML;
            document.getElementById('price').value = this.cells[4].innerHTML;
        };
    }
}
function editrow(event) {
    event.preventDefault();
    validateForm();
    let Product = document.getElementById('Product').value;
    let qty = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let uom = document.getElementById('uom').value;

    if (Product == '' || qty == '' || price == '') {
        return false;
    }

    else {
        table.rows[Index].cells[1].innerHTML = Product;
        table.rows[Index].cells[2].innerHTML = qty;
        table.rows[Index].cells[3].innerHTML = uom;
        table.rows[Index].cells[4].innerHTML = price;
        table.rows[Index].cells[5].innerHTML = price * qty;
    }
    var up = document.getElementById('update');
    var add = document.getElementById('button');
    var can = document.getElementById('Cancel');
    up.style.display = 'none';
    add.style.display = 'block';
    can.innerText = 'Clear'
    add.style.position = "relative";
    add.style.top = "9px";
    add.style.left = "240px";
    // can.style.padding = "10px";
    document.getElementById('myForm1').reset();
}
function change() {
    var up = document.getElementById('update');
    var add = document.getElementById('button');
    var can = document.getElementById('Cancel');

    if (up.style.display == 'block') {
        up.style.display = 'none';
        add.style.display = 'block';
        add.style.position = "relative";
        add.style.top = "8px";
        add.style.left = "240px";
        can.innerText = 'Clear';
    }
}
function adelete(img) {
    let id = img.parentNode.parentNode.cells[1].innerText;
    if (confirm(` are you sure to remove the  product- ${id} ?`)) {
        let s = img.parentNode.parentNode;
        s.parentNode.removeChild(s);
        reset();
    }
}


