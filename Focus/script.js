var imageArray = [];
var imagePreload = [];
var pictureCount = $('#container img').length;
var imageIndex
var image = document.images[0];

function preload() {
    for (let i = 0; i < arguments.length; i++) {
        imagePreload[i] = new Image();
        imagePreload[i].src = preload.arguments[i]
        
    }
    console.log("preload");
}

preload(
    "./images/0000.jpg",
    "./images/0001.jpg",
    "./images/0002.jpg",
    "./images/0003.jpg",
    "./images/0004.jpg",
    "./images/0005.jpg",
    "./images/0006.jpg",
    "./images/0007.jpg",
    "./images/0008.jpg",
    "./images/0009.jpg",
    "./images/00010.jpg",
    "./images/00011.jpg",
    "./images/00012.jpg",
    "./images/00013.jpg",
    "./images/00014.jpg",
    "./images/00015.jpg",
    "./images/00016.jpg",
    "./images/00017.jpg",
    "./images/00018.jpg",
    "./images/00019.jpg",
    "./images/00020.jpg",
    "./images/00021.jpg",
    "./images/00022.jpg",
    "./images/00023.jpg",
    "./images/00024.jpg",
    "./images/00025.jpg",
    "./images/00026.jpg",
    "./images/00027.jpg",
    "./images/00028.jpg",
    "./images/00029.jpg",
    "./images/00030.jpg",
    "./images/00031.jpg",
    "./images/00032.jpg",
    "./images/00033.jpg",
    "./images/00034.jpg",
    "./images/00035.jpg",
    "./images/00036.jpg",
    "./images/00037.jpg",
    "./images/00038.jpg",
    "./images/00039.jpg",
    "./images/00040.jpg",
    "./images/00041.jpg",
    "./images/00042.jpg",
    "./images/00043.jpg",
    "./images/00044.jpg",
    "./images/00045.jpg",
    "./images/00046.jpg",
    "./images/00047.jpg",
    "./images/00048.jpg",
    "./images/00049.jpg",
    "./images/00050.jpg",
    "./images/00051.jpg",
    "./images/00052.jpg",
    "./images/00053.jpg",
    "./images/00054.jpg",
    "./images/00055.jpg",
    "./images/00056.jpg",
    "./images/00057.jpg",
    "./images/00058.jpg",
    "./images/00059.jpg",
    "./images/00060.jpg",
    "./images/00061.jpg",
    "./images/00062.jpg",
    "./images/00063.jpg",
    "./images/00064.jpg",
    "./images/00065.jpg",
    "./images/00066.jpg",
    "./images/00067.jpg",
    "./images/00068.jpg",
    "./images/00069.jpg",
    "./images/00070.jpg",
    "./images/00071.jpg",
    "./images/00072.jpg",
    "./images/00073.jpg",
    "./images/00074.jpg",
    "./images/00075.jpg",
    "./images/00076.jpg",
    "./images/00077.jpg",
    "./images/00078.jpg",
    "./images/00079.jpg",
    "./images/00080.jpg",
    "./images/00081.jpg",
    "./images/00082.jpg",
    "./images/00083.jpg",
    "./images/00084.jpg",
    "./images/00085.jpg",
    "./images/00086.jpg",
    "./images/00087.jpg",
    "./images/00088.jpg",
    "./images/00089.jpg",
    "./images/00090.jpg",
    "./images/00091.jpg",
    "./images/00092.jpg",
    "./images/00093.jpg",
    "./images/00094.jpg",
    "./images/00095.jpg",
    "./images/00096.jpg",
    "./images/00097.jpg",
    "./images/00098.jpg",
    "./images/00099.jpg",
    "./images/000100.jpg",
    "./images/000101.jpg",
    "./images/000102.jpg",
    "./images/000103.jpg",
    "./images/000104.jpg",
    "./images/000105.jpg",
    "./images/000106.jpg",
    "./images/000107.jpg",
    "./images/000108.jpg",
    "./images/000109.jpg",
    "./images/000110.jpg",
    "./images/000111.jpg",
    "./images/000112.jpg",
    "./images/000113.jpg",
    "./images/000114.jpg",
    "./images/000115.jpg",
    "./images/000116.jpg",
    "./images/000117.jpg",
    "./images/000118.jpg",
    "./images/000119.jpg",
    "./images/000120.jpg",
    "./images/000121.jpg",
    "./images/000122.jpg",
    "./images/000123.jpg",
    "./images/000124.jpg",
    "./images/000125.jpg",
    "./images/000126.jpg",
    "./images/000127.jpg",
    "./images/000128.jpg",
    "./images/000129.jpg",
    "./images/000130.jpg",
    "./images/000131.jpg",
    "./images/000132.jpg",
    "./images/000133.jpg",
    "./images/000134.jpg",
    "./images/000135.jpg",
    "./images/000136.jpg",
    "./images/000137.jpg",
    "./images/000138.jpg",
    "./images/000139.jpg",
    "./images/000140.jpg",
    "./images/000141.jpg",
    "./images/000142.jpg",
    "./images/000143.jpg",
    "./images/000144.jpg",
    "./images/000145.jpg",
    "./images/000146.jpg",
    "./images/000147.jpg",
    "./images/000148.jpg",
    "./images/000149.jpg",
    "./images/000150.jpg",
    "./images/000151.jpg",
    "./images/000152.jpg",
    "./images/000153.jpg",
    "./images/000154.jpg",
    "./images/000155.jpg",
    "./images/000156.jpg",
    "./images/000157.jpg",
    "./images/000158.jpg",
    "./images/000159.jpg",
    "./images/000160.jpg",
    "./images/000161.jpg",
    "./images/000162.jpg",
    "./images/000163.jpg",
    "./images/000164.jpg",
    "./images/000165.jpg",
    "./images/000166.jpg",
    "./images/000167.jpg",
    "./images/000168.jpg",
    "./images/000169.jpg",
    "./images/000170.jpg",
    "./images/000171.jpg",
    "./images/000172.jpg",
    "./images/000173.jpg",
    "./images/000174.jpg",
    "./images/000175.jpg",
    "./images/000176.jpg",
    "./images/000177.jpg",
    "./images/000178.jpg",
    "./images/000179.jpg",
    "./images/000180.jpg",
    "./images/000181.jpg",
    "./images/000182.jpg",
    "./images/000183.jpg",
    "./images/000184.jpg",
    "./images/000185.jpg",
    "./images/000186.jpg",
    "./images/000187.jpg",
    "./images/000188.jpg",
    "./images/000189.jpg",
    "./images/000190.jpg",
    "./images/000191.jpg",
    "./images/000192.jpg",
    "./images/000193.jpg",
    "./images/000194.jpg",
    "./images/000195.jpg",
    "./images/000196.jpg",
    "./images/000197.jpg",
    "./images/000198.jpg",
    "./images/000199.jpg",
    "./images/000200.jpg",
    "./images/000201.jpg",
    "./images/000202.jpg",
    "./images/000203.jpg",
    "./images/000204.jpg",
    "./images/000205.jpg",
    "./images/000206.jpg",
    "./images/000207.jpg",
    "./images/000208.jpg",
    "./images/000209.jpg",
    "./images/000210.jpg",
    "./images/000211.jpg",
    "./images/000212.jpg",
    "./images/000213.jpg",
    "./images/000214.jpg",
    "./images/000215.jpg",
    "./images/000216.jpg",
    "./images/000217.jpg",
    "./images/000218.jpg",
    "./images/000219.jpg",
    "./images/000220.jpg",
    "./images/000221.jpg",
    "./images/000222.jpg",
    "./images/000223.jpg",
    "./images/000224.jpg",
    "./images/000225.jpg",
    "./images/000226.jpg",
    "./images/000227.jpg",
    "./images/000228.jpg",
    "./images/000229.jpg",
    "./images/000230.jpg",
    "./images/000231.jpg",
    "./images/000232.jpg",
    "./images/000233.jpg",
    "./images/000234.jpg",
    "./images/000235.jpg",
    "./images/000236.jpg",
    "./images/000237.jpg",
    "./images/000238.jpg",
    "./images/000239.jpg",
    "./images/000240.jpg",
    "./images/000241.jpg",
    "./images/000242.jpg",
    "./images/000243.jpg",
    "./images/000244.jpg",
    "./images/000245.jpg",
    "./images/000246.jpg",
    "./images/000247.jpg",
    "./images/000248.jpg",
    "./images/000249.jpg",
    "./images/000250.jpg",
    
);






function loadImages() {
    for (let i = 0; i < 250; i++) {
        imageArray.push("./images/000"+i+".jpg");
    }
    
}


var animateSlider = document.getElementById('slider');





$("#slider").slider({
        value: 0,
        min: 0,
        max: 250,
        slide: handleSlideChange
    });



    function handleSlideChange(event,slider) {
        imageIndex = slider.value;
        $("#container img").attr("src",imageArray[imageIndex])
        $("#varDivText").text('Frame: '+ slider.value);
    }





    
