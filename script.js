var check = document.getElementById('check');
var btn = document.getElementById('but');
var sel = document.getElementById('sel');
var inc = document.getElementById('inc');
var hand = document.getElementById('hand');
var exp = document.getElementById('exp');
var idk = 0;
var counter = [0, 0];
btn.addEventListener('click', function () {
    check.classList.remove('fa-check');
    check.classList.add('fa-check-double');
});
var text = document.getElementById('budget');
var val = document.getElementById('val');
var list_arr = document.querySelectorAll('table');
var expense_arr = [];
var income_arr = [];
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var month = months[d.getMonth()];
document.getElementById('month').textContent = month;
var income = 0;
var expense = 0;
btn.addEventListener('click', function () {

    if (!(text.value === "")) {
        if (sel.value === "1") {
            expense_arr.push([++idk, text.value, parseInt(val.value)]);
            expense += parseInt(val.value);
            exp.textContent = '-' + expense + '.00';
        } else if (sel.value === "0") {
            income_arr.push([++idk, text.value, parseInt(val.value)]);
            income += parseInt(val.value);
            inc.textContent = '+ ' + income + '.00';
        }
        hand.textContent = income - expense + '.00';
    }

});

function deleteChildren() {
    var temp = 0;
    var tempid = parseInt(this.parentElement.parentElement.parentElement.id);
    var ekkaur = this.parentElement.lastElementChild;
    if (tempid === 0) {
        for (var i = 0; i < income_arr.length; i++) {
            if (ekkaur.textContent == income_arr[i][0]) {
                temp = income_arr[i][2];
                income_arr.splice(i, 1);
                break;
            }
        }
        income -= temp;
        inc.textContent = '+' + income + '.00';
    } else if (tempid === 1) {
        for (var i = 0; i < expense_arr.length; i++) {
            if (ekkaur.textContent == expense_arr[i][0]) {
                temp = expense_arr[i][2];
                expense_arr.splice(i, 1);
                break;
            }
        }
        expense -= temp;
        exp.textContent = '+' + expense + '.00';
    }
    --counter[tempid];
    this.parentElement.remove();
    hand.textContent = income - expense + '.00';
}
btn.addEventListener('click', function () {
    if (text.value != '') {
        var tr = list_arr[parseInt(sel.value)].insertRow(counter[parseInt(sel.value)]++);
        var td = [tr.insertCell(0), tr.insertCell(1), tr.insertCell(2), tr.insertCell(3)];
        td[1].innerHTML = text.value;
        td[2].innerHTML = val.value + '.00';
        td[3].textContent = idk;
        td[3].style.display = 'none';
        var i = document.createElement('i');
        i.setAttribute('class', 'fas fa-minus-circle');
        td[0].setAttribute('class', 'cancel');
        td[0].appendChild(i);
        td[0].addEventListener('click', deleteChildren, false);
    }
});
btn.addEventListener('click', function () {
    text.value = '';
    val.value = '';
    setTimeout(() => {
        check.classList.remove('fa-check-double');
        check.classList.add('fa-check');
    }, 500);
});