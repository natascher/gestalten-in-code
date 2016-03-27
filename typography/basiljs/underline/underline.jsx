﻿#includepath "~/Documents/;%USERPROFILE%Documents"; // eslint-disable-line#include "basiljs/bundle/basil.js";// eslint-disable-line// simple sketch showing the usage of some primitive formsvar pw = 200;var ph = 200;var top = 20;var right = 20;var bottom = 30;var left  = 20;var pt = 24;function draw(){  b.clear(b.doc()); // clear the current document  b.units(b.MM); // we want to print. use MM intead of default pixels  var doc = b.doc(); // a reference to the current document  // set some preferneces of the document for better handling  doc.documentPreferences.properties = {pageWidth:pw,pageHeight:ph};  doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;  // ----------  // main code goes here   b.margins(top, right, bottom, left);   var txt = 'I am the architect, not the builder.';  var textFrame = b.text(txt,top,left,b.width - (right + left),b.height - (bottom + top));textFrame.paragraphs[0].pointSize = pt;textFrame.paragraphs[0].justification = Justification.CENTER_ALIGN;textFrame.textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;  b.characters(textFrame, function(character, loopCount){    if(loopCount%2 == 1){    character.fillColor = doc.swatches[2];    character.underline = true;    character.underlineColor = doc.swatches[3];    character.underlineOffset = -pt/2;    character.underlineWeight = pt+ b.random(-5,5);    character.baselineShift = b.random(pt,-pt);    character.tracking =  b.random(100);    }  });  // ----------  var fname = File($.fileName).parent.fsName + '/' + ($.fileName.split('/')[$.fileName.split('/').length - 1]).split('.')[0] + '.indd'; // b.println(fname);  doc.save(fname, false, 'basil', true);  b.savePNG('out.png');}b.go();