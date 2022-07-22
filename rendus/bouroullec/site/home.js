window.onload = function() {
          hide();
        newNode2(0);
};



document.getElementsByClassName("changeButton")[0].addEventListener("click", function(){
    changeArray();
});

function start(){
    hide();
    newNode2(0);
}

function readFile(){
var fs = require("fs");
fs.readFile("inventory.txt", function(text){
    var textByLine = text.split("\n")
});
}

var myArray1 = ["Images/f1056_erb_bivouacexibition_2011_03.jpg",  "Images/f1059_erb_bivouacexibition_2011_06_a.jpg",  "Images/f1060_erb_bivouacexibition_2011_08.jpg",  "Images/f1065_erb_bivouacexibition_2011_16.jpg",  "Images/f1067_erb_bivouacexibition_2011_23.jpg",  "Images/f1068_erb_bivouacexibition_2011_32.jpg",  "Images/f1071_erb_bivouacexibition_2011_64_a.jpg",  "Images/f1087_erb_bivouacexhibition2_hdf_1.jpg",  "Images/f1088_erb_bivouacexhibition2_hdf_2.jpg",  "Images/f1089_erb_bivouacexhibition2_hdf_3.jpg",  "Images/f1090_erb_bivouacexhibition2_hdf_4.jpg",  "Images/f1092_erb_bivouacexhibition2_hdf_6.jpg",  "Images/f1094_erb_bivouacexhibition2_hdf_8.jpg",  "Images/f1095_erb_bivouacexhibition2_hdf_9.jpg",  "Images/f1096_erb_bivouacexhibition2_hdf_10.jpg",  "Images/f1097_erb_bivouacexhibition2_hdf_11.jpg",  "Images/f1112_erb_2012_album_vdm_hdf_8.jpg",  "Images/f1133_erb_2006_slowchairatmophere_hdf_1.jpg",  "Images/f1135_erb_2007_alcovesofahighback_hdf_9.jpg",  "Images/f1137_erb_2008_clouds_hdf_12.jpg",  "Images/f1144_erb_2011_losanges_hdf_4.jpg",  "Images/f1226_erb_2012_mca_hdf_01.jpg",  "Images/f1227_erb_2012_mca_hdf_03.jpg",  "Images/f1228_erb_2012_mca_hdf_04.jpg",  "Images/f1229_erb_2012_mca_hdf_06.jpg",  "Images/f1230_erb_2012_mca_hdf_05.jpg",  "Images/f1231_erb_2012_mca_hdf_02.jpg",  "Images/f1234_erb_2012_mca_hdf_08.jpg",  "Images/f1238_erb_2012_mca_hdf_13.jpg",  "Images/f1239_erb_2012_mca_hdf_14.jpg",  "Images/f1240_erb_2012_mca_hdf_15.jpg",  "Images/f1242_erb_2013_aw_designer_of_the_year_02_hdf.jpg",  "Images/f1249_erb_2013_aw_designer_of_the_year_09_hdf.jpg",  "Images/f1250_erb_2013_aw_designer_of_the_year_08_hdf.jpg",  "Images/f1253_erb_2013_aw_designer_of_the_year_12_hdf.jpg",  "Images/f1254_erb_2013_aw_designer_of_the_year_14_hdf.jpg",  "Images/f1313_erb_2013_flos_aim_01_hdf.jpg",  "Images/f1347_erb_2012_hay_copenhague_hdf_02.jpg",  "Images/f1348_erb_2013_vitra_alcoveplume_hdf_01.jpg",  "Images/f1349_erb_2013_vitra_alcoveplume_hdf_02.jpg",  "Images/f1351_erb_2013_vitra_alcoveplume_hdf_04.jpg",  "Images/f1352_erb_2013_vitra_alcoveplume_hdf_05.jpg",  "Images/f1355_erb_2012_hay_copenhague_hdf_03.jpg",  "Images/f1356_erb_2012_hay_copenhague_hdf_04.jpg",  "Images/f1357_erb_2012_hay_copenhague_hdf_05.jpg",  "Images/f1358_erb_2012_hay_copenhague_hdf_06.jpg",  "Images/f1359_erb_2012_hay_copenhague_hdf_07.jpg",  "Images/f1363_erb_2012_hay_copenhague_hdf_11.jpg",  "Images/f1364_erb_2012_hay_copenhague_hdf_12.jpg",  "Images/f1365_erb_2012_hay_copenhague_hdf_13.jpg",  "Images/f1366_erb_2012_hay_copenhague_hdf_14.jpg",  "Images/f1367_erb_2012_hay_copenhague_hdf_15.jpg",  "Images/f1368_erb_2012_hay_copenhague_hdf_16.jpg",  "Images/f1369_erb_2012_hay_copenhague_hdf_17.jpg",  "Images/f1370_erb_2012_hay_copenhague_hdf_18.jpg",  "Images/f1371_erb_2012_hay_copenhague_hdf_19.jpg",  "Images/f1372_erb_2012_hay_copenhague_hdf_20.jpg",  "Images/f1373_erb_2012_hay_copenhague_hdf_21.jpg",  "Images/f1374_erb_2012_hay_copenhague_hdf_22.jpg",  "Images/f1375_erb_2012_hay_copenhague_hdf_23.jpg",  "Images/f1376_erb_2012_hay_copenhague_hdf_24.jpg",  "Images/f1377_erb_2012_hay_copenhague_hdf_25.jpg",  "Images/f1378_erb_2012_hay_copenhague_hdf_26.jpg",  "Images/f1379_erb_2012_hay_copenhague_hdf_27.jpg",  "Images/f1380_erb_2012_hay_copenhague_hdf_28.jpg",  "Images/f1381_erb_2012_hay_copenhague_hdf_29.jpg",  "Images/f1383_erb_2012_hay_copenhague_hdf_30.jpg",  "Images/f1582_erb_2015_vitra_belleville_05_hdf.jpg",  "Images/f1606_erb_2015_cloud_vase_01_hdf.jpg",  "Images/f1607_erb_2015_cloud_vase_02_hdf.jpg",  "Images/f1611_erb_2015_cloud_vase_06_hdf.jpg",  "Images/f1613_erb_2015_cloud_vase_08_hdf.jpg",  "Images/f1614_erb_2015_cloud_vase_09_hdf.jpg",  "Images/f1615_erb_2015_cloud_vase_10_hdf.jpg",  "Images/f1618_erb_2015_cloud_vase_13_hdf.jpg",  "Images/f1621_erb_2015_jrp_drawings_limited_edition_03_hdf.jpg",  "Images/f1626_erb_2015_jrp_drawings_limited_edition_07_hdf.jpg",  "Images/f1628_erb_2015_jrp_drawings_limited_edition_09_hdf.jpg",  "Images/f2131_2016_bouroullec_portrait_by_asger_mortensen_01_hdf.jpg",  "Images/f2196_erb_2013_momentane_exhibition_01_hdf.jpg",  "Images/f2200_erb_2015_artek_kaari_01_hdf.jpg",  "Images/f2205_erb_2015_tel_aviv_museum_of_art_17_screens_01_hdf.jpg",  "Images/f2209_2016_bouroullec_rennes_17_screens_01_hdf.jpg",  "Images/f2213_erb_2017_artek_rivi_02_hdf.jpg",  "Images/f2214_erb_2017_artek_rivi_03_hdf.jpg",  "Images/f2216_erb_2017_artek_rivi_05_hdf.jpg",  "Images/f2217_erb_2017_artek_rivi_06_hdf.jpg",  "Images/f2219_erb_2017_artek_rivi_08_hdf.jpg",  "Images/f2221_erb_2017_artek_rivi_10_hdf.jpg",  "Images/f2231_erb_2017_magis_officina_05hdf.jpg",  "Images/f2234_erb_2017_magis_officina_08hdf.jpg",  "Images/f2235_erb_2017_magis_officina_09hdf.jpg",  "Images/f2236_erb_2017_magis_officina_10hdf.jpg",  "Images/f2253_erb_2017_mattiazzi_quindici_07_fabianfrinzel_hdf.jpg",  "Images/f2256_erb_2017_mattiazzi_quindici_10_fabianfrinzel_hdf.jpg",  "Images/f2265_erb_2017_aarhus_09_photokaareviemose_hdf.jpg",  "Images/f2269_erb_2017_aarhus_13_hdf.jpg",  "Images/f2270_erb_2017_aarhus_14_hdf.jpg",  "Images/f2278_erb_2017_magis_officina_01hdf.jpg",  "Images/f2280_erb_2017_magis_officina_03hdf.jpg",  "Images/f2281_erb_2017_magis_officina_04hdf.jpg",  "Images/f2284_erb_2017_magis_officina_07hdf.jpg",  "Images/f2289_erb_2017_vitra_softshell_v02_hdf.jpg",  "Images/f2291_erb_2017_vitra_softshell_v04_hdf.jpg",  "Images/f2292_erb_2017_vitra_softshell_v05_hdf.jpg",  "Images/f2316_erb_2017_danskina_semis09_hdf.jpg",  "Images/f2389_erb_2017_miami_nuagepromenade_paultahonstudiobouroullec_08_hdf.jpg",  "Images/f2400_erb_2017_miami_nuagepromenade_paultahonstudiobouroullec_19_hdf.jpg",  "Images/f2427_bouroullec_2018_wonderglass_alcova_hdf_05_photocredit_clairelavabre.jpg",  "Images/f2434_bouroullec_2018_wonderglass_alcova_hdf_12.jpg",  "Images/f2586_bouroullec_2019_vitra_vasesdecoupage_hdf_01_creditphoto_studiobouroullec.jpg",  "Images/f2587_bouroullec_2019_vitra_vasesdecoupage_hdf_02_creditphoto_studiobouroullec.jpg",  "Images/f2589_bouroullec_2019_vitra_vasesdecoupage_hdf_04_creditphoto_studiobouroullec.jpg",  "Images/f2590_bouroullec_2019_vitra_vasesdecoupage_hdf_05_creditphoto_studiobouroullec.jpg",  "Images/f2613_2019_flos_belt_rebouroullec_photocredit_studiobouroullec_03.jpg",  "Images/f2618_2019_flos_belt_rebouroullec_photocredit_studiobouroullec_05.jpg",  "Images/f2619_2019_flos_belt_rebouroullec_photocredit_studiobouroullec_06.jpg",  "Images/f2620_2019_flos_belt_rebouroullec_photocredit_studiobouroullec_07.jpg",  "Images/f2673_bouroullec_2012_bivouac_catalog_hdf_02.jpg",  "Images/f2676_bouroullec_2012_bivouac_catalog_hdf_05.jpg",  "Images/f2685_bouroullec_2012_bivouac_catalog_hdf_14.jpg",  "Images/f2686_bouroullec_2012_bivouac_catalog_hdf_15.jpg",  "Images/f2688_bouroullec_2012_bivouac_catalog_hdf_17.jpg",  "Images/f2690_bouroullec_2012_bivouac_catalog_hdf_19.jpg",  "Images/f478_bouroullecalcovesofa13hdf.jpg",  "Images/f479_bouroullecalcovesofa14hdf.jpg",  "Images/f481_bouroullecalcovesofa31hdf.jpg",  "Images/f556_bouroullec_alcove_sofa_high_hdf1.jpg",  "Images/f557_bouroullec_alcove_sofa_high_hdf2.jpg",  "Images/f558_bouroullec_alcove_sofa_high_hdf3.jpg",  "Images/f559_bouroullec_alcove_sofa_high_hdf4.jpg",  "Images/f560_bouroullec_alcove_sofa_high_hdf5.jpg",  "Images/f561_bouroullec_alcove_sofa_high_hdf6.jpg",  "Images/f563_bouroullec_alcove_sofa_high_hdf8.jpg",  "Images/f564_bouroullec_alcove_sofa_high_hdf9.jpg",  "Images/f586_bouroullec_alcove_loveseat_hdf1.jpg",  "Images/f587_bouroullec_alcove_loveseat_hdf2.jpg",  "Images/f589_bouroullec_alcove_loveseat_hdf4.jpg",  "Images/f704_bouroullec_clouds_2.jpg",  "Images/f712_bouroullec_clouds_9.jpg",  "Images/f718_bouroullec_clouds_15.jpg",  "Images/f719_bouroullec_clouds_16.jpg",  "Images/f721_bouroullec_clouds_18.jpg",  "Images/f722_bouroullec_clouds_19.jpg",  "Images/f833_erb_2009_camperstore_hdf_4.jpg",  "Images/f834_erb_2009_camperstore_hdf_5.jpg",  "Images/f835_erb_2009_camperstore_hdf_6.jpg",  "Images/f837_erb_2009_camperstore_hdf_8.jpg",  "Images/f915_erb_2010_appartement50_hdf_7.jpg",  "Images/f929_erb_2010_axor_hdf_7.jpg",  "Images/f933_erb_2010_axor_hdf_11.jpg",  "Images/f939_erb_2010_axor_hdf_17.jpg"];

var myArray2=["Red/.DS_Store.jpg",  "Red/f1071_erb_bivouacexibition_2011_64_a.jpg",  "Red/f1072_erb_2011_bivouacexhibition_66.jpg",  "Red/f1112_erb_2012_album_vdm_hdf_8.jpg",  "Red/f1142_erb_2011_piani_hdf_9.jpg",  "Red/f149_4bdblossominggp.jpg",  "Red/f2162_erb_2016_kreo_chaines_15_hdf.jpg",  "Red/f2163_erb_2016_kreo_chaines_16_hdf.jpg",  "Red/f2209_2016_bouroullec_rennes_17_screens_01_hdf.jpg",  "Red/f2438_bouroullec_2018_wonderglass_alcova_hdf_16_photocredit_clairelavabre.jpg",  "Red/f2439_bouroullec_2018_wonderglass_alcova_hdf_17_photocredit_clairelavabre.jpg",  "Red/f2440_bouroullec_2018_wonderglass_alcova_hdf_18_photocredit_clairelavabre.jpg",  "Red/f2441_bouroullec_2018_wonderglass_alcova_hdf_19_photocredit_clairelavabre.jpg",  "Red/f2442_bouroullec_nanimarquina_blur_hdf_01.jpg",  "Red/f2449_bouroullec_nanimarquina_blur_hdf_08.jpg",  "Red/f2450_bouroullec_nanimarquina_blur_hdf_09.jpg",  "Red/f2451_bouroullec_nanimarquina_blur_hdf_10.jpg",  "Red/f478_bouroullecalcovesofa13hdf.jpg",  "Red/f479_bouroullecalcovesofa14hdf.jpg",  "Red/f480_bouroullecalcovesofa28hdf.jpg",  "Red/f481_bouroullecalcovesofa31hdf.jpg",  "Red/f482_bouroullecalcovesofa32hdf.jpg",  "Red/f556_bouroullec_alcove_sofa_high_hdf1.jpg",  "Red/f557_bouroullec_alcove_sofa_high_hdf2.jpg",  "Red/f558_bouroullec_alcove_sofa_high_hdf3.jpg",  "Red/f560_bouroullec_alcove_sofa_high_hdf5.jpg",  "Red/f561_bouroullec_alcove_sofa_high_hdf6.jpg",  "Red/f563_bouroullec_alcove_sofa_high_hdf8.jpg",  "Red/f564_bouroullec_alcove_sofa_high_hdf9.jpg",  "Red/f703_bouroullec_clouds_1.jpg",  "Red/f704_bouroullec_clouds_2.jpg",  "Red/f711_bouroullec_clouds_8.jpg",  "Red/f712_bouroullec_clouds_9.jpg",  "Red/f830_erb_2009_camperstore_hdf_1.jpg",  "Red/f831_erb_2009_camperstore_hdf_2.jpg",  "Red/f832_erb_2009_camperstore_hdf_3.jpg",  "Red/f833_erb_2009_camperstore_hdf_4.jpg",  "Red/f834_erb_2009_camperstore_hdf_5.jpg",  "Red/f835_erb_2009_camperstore_hdf_6.jpg",  "Red/f836_erb_2009_camperstore_hdf_7.jpg",  "Red/f837_erb_2009_camperstore_hdf_8.jpg",  "Red/f838_erb_2009_camperstore_hdf_9.jpg",  "Red/f839_erb_2009_camperstore_hdf_10.jpg",  "Red/f840_erb_2009_camperstore_hdf_11.jpg",  "Red/f841_erb_2009_camperstore_hdf_12.jpg",  "Red/f842_erb_2009_camperstore_hdf_13.jpg",  "Red/f843_erb_2009_camperstore_hdf_14.jpg",  "Red/f95_4hdinside4.jpg"];

var myArray3=["Blue/.DS_Store.jpg",  "Blue/f1089_erb_bivouacexhibition2_hdf_3.jpg",  "Blue/f1107_erb_2012_album_vdm_hdf_4.jpg",  "Blue/f1117_erb_2012_album_vdm_hdf_13.jpg",  "Blue/f1128_erb_2001_vasetv_hdf_1.jpg",  "Blue/f1137_erb_2008_clouds_hdf_12.jpg",  "Blue/f1234_erb_2012_mca_hdf_08.jpg",  "Blue/f1313_erb_2013_flos_aim_01_hdf.jpg",  "Blue/f148_3hddessinblossom.jpg",  "Blue/f2151_erb_2016_kreo_chaines_04_hdf.jpg",  "Blue/f2160_erb_2016_kreo_chaines_13_hdf.jpg",  "Blue/f2215_erb_2017_artek_rivi_04_hdf.jpg",  "Blue/f2216_erb_2017_artek_rivi_05_hdf.jpg",  "Blue/f2221_erb_2017_artek_rivi_10_hdf.jpg",  "Blue/f2223_erb_2017_artek_rivi_12_hdf.jpg",  "Blue/f2224_erb_2017_artek_rivi_13_hdf.jpg",  "Blue/f2225_erb_2017_artek_rivi_14_photo_zara_pfeifer01_hdf.jpg",  "Blue/f2274_erb_2017_danskina_dessin_03_hdf.jpg",  "Blue/f2276_erb_2017_danskina_dessin_05_hdf.jpg",  "Blue/f24_1hdmiyake.jpg",  "Blue/f2676_bouroullec_2012_bivouac_catalog_hdf_05.jpg",  "Blue/f287_bouroullecsusp+tablebasseauberginebells_2.jpg",  "Blue/f695_bouroullec_clouds.jpg",  "Blue/f713_bouroullec_clouds_10.jpg",  "Blue/f714_bouroullec_clouds_11.jpg",  "Blue/f715_bouroullec_clouds_12.jpg",  "Blue/f716_bouroullec_clouds_13.jpg",  "Blue/f718_bouroullec_clouds_15.jpg",  "Blue/f719_bouroullec_clouds_16.jpg",  "Blue/f720_bouroullec_clouds_17.jpg",  "Blue/f910_erb_2010_appartement50_hdf_1.jpg",  "Blue/f912_erb_2010_appartement50_hdf_4.jpg",  "Blue/f913_erb_2010_appartement50_hdf_5.jpg"]
var i = 0;
var x = 3000;
var y = 2000;
var width = window.innerWidth;
var height = window.innerHeight;
var posx;
var posy;
var previous;
var nextIndex;
var nextRIndex;
var nextLIndex;6
var nextTIndex;
var nextBIndex;
var prevIndex;
var myArr = myArray1;

function changeArray(){
    if(myArr==myArray1){
    var prevArray=myArr;
    myArr=myArray2;
    var j=i;
    myArr[1]=prevArray[i];
    i=1;
    }
    else if (myArr==myArray2){
    var prevArray=myArr;
    myArr=myArray3;
    var j=i;
    myArr[1]=prevArray[i];
    i=1;
    } else{
    var prevArray=myArr;
    myArr=myArray1;
    var j=i;
    myArr[1]=prevArray[i];
    i=1;
    }
    debugger;
  var temp, item, a;
    //get the template element:
    temp = document.getElementsByTagName("template")[0];
    //get the DIV element from the template:
    item = temp.content.querySelector("div");
    //for each item in the array:
    //Create a new node, based on the template:
    a = document.importNode(item, true);
    //Add data from the array:
    a.style.position = "absolute";
    a.style.left = x + 'px';
    a.style.top = y + 'px';
    nextRIndex = (i + 1);
    if (prevIndex != 2) { // Not going right.
        a.querySelector("#rightImage").src = myArr[nextRIndex];
    } else { //Going right, no left image.
        a.querySelector("#rightImage").src = prevArray[previousB];
        a.querySelector("#rightImage").style.opacity = 1;
        a.querySelector("#rightImage").style.filter = "grayscale(0%)";
        //$("#leftImage").css("display", "none");
    }
    // if(prevIndex == 1){
    //   a.querySelector("#leftImage").style.display=none;
    // }
    nextLIndex = (i + 2);
    if (prevIndex != 1) { //Not going left.
        a.querySelector("#leftImage").src = myArr[nextLIndex];
    } else { // Going left, no right image.
        a.querySelector("#leftImage").src = prevArray[previousB];
        a.querySelector("#leftImage").style.opacity = 1;
         a.querySelector("#leftImage").style.filter = "grayscale(0%)";
    }
    nextBIndex = (i + 3);
    if (prevIndex != 3) { //Not going bottom.
        a.querySelector("#bottomImage").src = myArr[nextBIndex];
    } else { //going bottom, no top image.
        a.querySelector("#bottomImage").src = prevArray[previousB];
        a.querySelector("#bottomImage").style.opacity = 1;
         a.querySelector("#bottomImage").style.filter = "grayscale(0%)";
    }
    nextTIndex = (i + 4) % 18;
    if (prevIndex != 4) { //Not going top.
        a.querySelector("#topImage").src = myArr[nextTIndex];
    } else { // going top, no bottom image.
        a.querySelector("#topImage").src = prevArray[previousB];
        a.querySelector("#topImage").style.opacity = 1;
         a.querySelector("#topImage").style.filter = "grayscale(0%)";
    }
    //append the new node wherever you like:
    debugger;
    a.querySelector("#mainImage").src = myArr[i];
    document.body.insertBefore(a, document.header);
    previous=i;
    makeNodes();

}

function makeLine(x, y){

}


function move() {
    x = x + width;
    y = y + height;
}

function moveRight() {
    x = x + 0.5*width;
}

function moveLeft() {
    x = x - 0.5*width;
}

function moveTop() {
    y = y - 0.45*height;
}

function moveBottom() {
    y = y + 0.45*height;
}


function hide() {
    $("#top, #right, #left, #bottom").fadeOut();
}

function makeNodes() {
    posx = x - 2*width/7;
    posy = y - 2*height/6;

    window.scrollTo({
        top: posy,
        left: posx,
        behavior: 'smooth'
    });

    document.querySelectorAll("#none").forEach((item) => {
        item.addEventListener("click", function () {
            hide();
            newNode2(0)
        });
    });
    document.querySelectorAll("#right").forEach((item) => {
        item.addEventListener("click", function () {
            hide();
            newNode2(1)
        });
    });
    document.querySelectorAll("#left").forEach((item) => {
        item.addEventListener("click", function () {
            hide();
            newNode2(2)
        });
    });
    document.querySelectorAll("#top").forEach((item) => {
        item.addEventListener("click", function () {
            hide();
            newNode2(3)
        });
    });
    document.querySelectorAll("#bottom").forEach((item) => {
        item.addEventListener("click", function () {
            hide();
            newNode2(4)
        });
    });

}

function newNode2(direction) {
    var temp, item, a;
    //get the template element:
    temp = document.getElementsByTagName("template")[0];
    //get the DIV element from the template:
    item = temp.content.querySelector("div");
    //for each item in the array:
    //Create a new node, based on the template:
    a = document.importNode(item, true);
    //Add data from the array:
    switch (direction) {
        case 0: //Going Nowhere.
            move();
            prevIndex = 0;
            break;
        case 1: //Going right
            i = nextRIndex;
            moveRight();
            prevIndex = 1;
            break;
        case 2: // Going Left
            i = nextLIndex;
            moveLeft();
            prevIndex = 2;
            break;
        case 3: // Going top
            i = nextTIndex;
            moveTop();
            prevIndex = 3;
            break;
        case 4: // Going bottom
            i = nextBIndex;
            moveBottom();
            prevIndex = 4;
            break;
    }

    a.style.position = "absolute";
    a.style.left = x + 'px';
    a.style.top = y + 'px';
    nextRIndex = (i + 1);
    if (prevIndex != 2) { // Not going right.
        a.querySelector("#rightImage").src = myArr[nextRIndex];
    } else { //Going right, no left image.
        a.querySelector("#rightImage").src = myArr[previous];
        a.querySelector("#rightImage").style.opacity = 1;
        a.querySelector("#rightImage").style.filter = "grayscale(0%)";
        //$("#leftImage").css("display", "none");
    }
    // if(prevIndex == 1){
    //   a.querySelector("#leftImage").style.display=none;
    // }
    nextLIndex = (i + 2);
    if (prevIndex != 1) { //Not going left.
        a.querySelector("#leftImage").src = myArr[nextLIndex];
    } else { // Going left, no right image.
        a.querySelector("#leftImage").src = myArr[previous];
        a.querySelector("#leftImage").style.opacity = 1;
         a.querySelector("#leftImage").style.filter = "grayscale(0%)";
    }
    nextBIndex = (i + 3);
    if (prevIndex != 3) { //Not going bottom.
        a.querySelector("#bottomImage").src = myArr[nextBIndex];
    } else { //going bottom, no top image.
        a.querySelector("#bottomImage").src = myArr[previous];
        a.querySelector("#bottomImage").style.opacity = 1;
         a.querySelector("#bottomImage").style.filter = "grayscale(0%)";
    }
    nextTIndex = (i + 4) % 18;
    if (prevIndex != 4) { //Not going top.
        a.querySelector("#topImage").src = myArr[nextTIndex];
    } else { // going top, no bottom image.
        a.querySelector("#topImage").src = myArr[previous];
        a.querySelector("#topImage").style.opacity = 1;
         a.querySelector("#topImage").style.filter = "grayscale(0%)";
    }
    a.querySelector("#mainImage").src = myArr[i];
    //append the new node wherever you like:
    document.body.insertBefore(a, document.header);
    previousB = previous;
    previous=i;
    makeNodes();
}
//
// function newNode(){
//   var temp, item, a;
//   //get the template element:
//   temp = document.getElementsByTagName("template")[0];
//   //get the DIV element from the template:
//   item = temp.content.querySelector("div");
//   //for each item in the array:
//     //Create a new node, based on the template:
//     a = document.importNode(item, true);
//     //Add data from the array:
//     nextLIndex=(i+1)%18;
//     a.querySelector("#leftImage").src=myArr[nextLIndex];
//     nextRIndex=(i+2)%18;
//     a.querySelector("#rightImage").src=myArr[nextRIndex];
//     nextTIndex=(i+3)%18;
//     a.querySelector("#topImage").src=myArr[nextTIndex];
//     nextBIndex=(i+4)%18;
//     a.querySelector("#bottomImage").src=myArr[nextBIndex];
//     a.querySelector("#mainImage").src=myArr[(i%18)];
//     //append the new node wherever you like:
//     document.body.appendChild(a);
//     a.style.position = "absolute";
//     x=x+600;
//     y=y+400;
//     a.style.left = x+'px';
//     a.style.top = y+'px';
//     i++;
//     makeNodes();
// }
