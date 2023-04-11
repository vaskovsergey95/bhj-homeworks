const interestCheck = [...document.querySelectorAll('.interest__check')];

interestCheck.forEach((check) => check.addEventListener('change', (e) => {
    let parent = e.target.closest('.interest');
    let children = [...parent.querySelectorAll('.interest__check')];

    if (!children[0].checked) {
        children.forEach(child => child.checked = false);
    } else {
        children.forEach(child => child.checked = true)
    }
}));