var color = document.getElementsByClassName("color");
var info = document.getElementsByClassName('cv-info');
function changeColor(number) {
    var data = color[number].getAttribute('data-color');
    color[number].classList.add('active');
    for (var i = 0; i < color.length; i++) {
        if (i != number) {
            color[i].classList.remove('active');
        }
    }
    info[0].style.background = data;
}

// function change font family cv inner
function onchangeFont() {
    var inner = document.getElementById('cv-inner');
    var selected = document.getElementById('font-options').value;
    inner.style.fontFamily=selected;
}
// function changge language toolbar

function changeLanguage(lang){
    var mutilang = document.getElementsByClassName('language');
    for (var i = 0; i < mutilang.length; i++) {
        mutilang[i].classList.add('active');
        if (i != lang) {
            mutilang[i].classList.remove('active');
        }
    }
}
// change font size text cv
function changeFontSize(data){
    var size = data.getAttribute('data-size');
    var listtitle =document.querySelectorAll('.cv-title-content');
    var allsize = document.getElementsByClassName('fontsize');
    for(var i =0;i<allsize.length;i++){
        allsize[i].classList.add('active');
        if(allsize[i].getAttribute('data-size')!=size){
            allsize[i].classList.remove('active');
        }
    }
    if(size=='small'){
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.fontSize ="medium";
        }
    }else if(size=='normal'){
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.fontSize ="large";
        }
    }else{
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.fontSize ="x-large";
        }
    }
}
// change spacing text cv
function changeSpacing(data){
    var spacing = data.getAttribute('data-spacing');
    var lineheight = document.getElementsByClassName('line-height');
    var listtitle =document.querySelectorAll('.cv-title-content');
    for(var i =0;i<lineheight.length;i++){
        lineheight[i].classList.add('active');
        if(lineheight[i].getAttribute('data-spacing')!=spacing){
            lineheight[i].classList.remove('active');
        }
    }
    if(spacing=='small'){
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.lineHeight  ="20px";
        }
    }else if(spacing=='normal'){
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.lineHeight  ="30px";
        }
    }else{
        for(var j=0;j<listtitle.length;j++){
            listtitle[j].style.lineHeight  ="40px";
        }
    }
}
var hiddenTemp = true;
// change template function
function changeTemplateCV(data){
    var boxTemp = document.getElementById('boxTemp');
    var boxCV = document.getElementById('boxCV');
    hiddenTemp=!hiddenTemp;
    if(hiddenTemp){
        boxTemp.style.display="none";
        boxCV.style.display="flex";
    }else{
        boxTemp.style.display="flex";
        boxCV.style.display="none";
    }
}

function getPDF() {
    var doc = new jsPDF();
   
    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '.toolbar-save': function(element, renderer){
        return true;
      },
      '.controls': function(element, renderer){
        return true;
      }
    };
  
    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML($('#cv-inner').get(0), 15, 15, {
      'width': 170, 
      'elementHandlers': specialElementHandlers
    });
  
    doc.save('Generated.pdf');
  }
