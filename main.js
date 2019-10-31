// setTimeout(() => {
$(function () {
    let number = 3000;
    let pixel = 500;
    setInterval(() => {
        $("html, body").animate({ scrollTop: pixel }, 3000);
        pixel += 500;
    }, 10000);
});


