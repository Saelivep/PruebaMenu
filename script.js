const $list = document.querySelectorAll('li');

function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}

$list.forEach(($li) => {
    $li.addEventListener(
        'mouseover',
        activeLink,
    );
});

