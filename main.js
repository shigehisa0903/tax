'use strict';

function tax_result() {

    const cos_price = parseInt(prompt('金額を入力'));
    const cos_tax = parseInt(prompt('税率を入力'));

    const getTax = (price, tax) => {
        return Math.round(price * (tax / 100));
    }

    let tax = getTax(cos_price, cos_tax);


    if (Number.isFinite(tax)) {
        function writeTax() {
            document.write(`
                <div class="text">
                    <p>税率${cos_tax}%の時、${cos_price}円の消費税は${tax}円です</p>
                </div>
            `);
        }

        writeTax();
    }else {
        document.write('<p>数字を入力</p>');
    }
    
    window.addEventListener('load', () => {
        p.classList.add('fadeIn');
    })
}

tax_result();
