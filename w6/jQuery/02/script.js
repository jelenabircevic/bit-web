$(function () {
    var title = $('<h3>Awesome gallery</h3>');
    $('div').prepend(title);
    console.log('title done');
});
var imgLinks = ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Solid_yellow.svg/768px-Solid_yellow.svg.png', 'https://wickes.scene7.com/is/image/travisperkins/largeNormal/Interior-Wood-Paint-Wickes-Exterior-Gloss-Paint-Oxford-Blue-750ml~O0814_214153_00?defaultImage=travisperkins/missing-product', 'https://pbs.twimg.com/profile_images/482101504963117056/rFbRXQ-q.png', 'http://www.solidbackgrounds.com/images/2048x2048/2048x2048-white-solid-color-background.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Solid_yellow.svg/768px-Solid_yellow.svg.png', 'https://wickes.scene7.com/is/image/travisperkins/largeNormal/Interior-Wood-Paint-Wickes-Exterior-Gloss-Paint-Oxford-Blue-750ml~O0814_214153_00?defaultImage=travisperkins/missing-product', 'https://pbs.twimg.com/profile_images/482101504963117056/rFbRXQ-q.png', 'http://www.solidbackgrounds.com/images/2048x2048/2048x2048-white-solid-color-background.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Solid_yellow.svg/768px-Solid_yellow.svg.png', 'https://wickes.scene7.com/is/image/travisperkins/largeNormal/Interior-Wood-Paint-Wickes-Exterior-Gloss-Paint-Oxford-Blue-750ml~O0814_214153_00?defaultImage=travisperkins/missing-product', 'https://pbs.twimg.com/profile_images/482101504963117056/rFbRXQ-q.png', 'http://www.solidbackgrounds.com/images/2048x2048/2048x2048-white-solid-color-background.jpg'];
imgLinks.forEach(function (element, index) {
    if (Math.random() > 0.5) {
        $('div').append('<img src="' + element + '" alt="i' + index + '">');
    } else {
        $('div').prepend('<img src="' + element + '" alt="i' + index + '">');
    }
});
$('img').css('float', 'left');
$('img').each(function (index, image) {
    var width = 100 + 300 * Math.random() + 'px';
    $(this).css('width', width);
    var height = 100 + 300 * Math.random() + 'px';
    $(this).css('height', height);
});
var bigger = false;
$('img').each(function (index, image) {
    var width = parseInt($(image).css('width'));
    // if (!bigger) {
    //     if (width > 200) {
    //         bigger = true;
    //         $(image).addClass('border');
    //     }
    // } else {
    //     if (width <= 200) {
    //         return
    //     } else {
    //         $(image).addClass('border');
    //     }
    // }
    if ( width > 200) {
        bigger = true;
        $(image).addClass('border');
    }
    else if (bigger) {
 
        return;
    }
})
console.log('gallery done');