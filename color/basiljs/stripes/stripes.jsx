﻿/* eslint-disable */#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";// simple sketch showing the usage of some primitive formsvar w = 10; // we use this for easier calculationfunction draw(){  b.clear(b.doc()); // clear the current document  b.units(b.MM); // we want to print. use MM intead of default pixels  b.rectMode(b.CORNER); // draw rects from the center  b.ellipseMode(b.CENTER); // draw ellipses from the center  var doc = b.doc(); // a reference to the current document  // set some preferneces of the document for better handling  doc.documentPreferences.properties = {pageWidth:200,pageHeight:50};  doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;  var step = 2;  b.noStroke();  for(var x = 0; x < b.width; x += step){    var red = Math.random() * 10;    var green = Math.random() * 255;    var blue = Math.random() * 255;    var c = b.color(red,green,blue);    b.fill(c);    b.rect(x, 0, step, b.height);  }  var fname = File($.fileName).parent.fsName + '/' + ($.fileName.split('/')[$.fileName.split('/').length - 1]).split('.')[0] + '.indd'; // b.println(fname);  doc.save(fname, false, 'basil', true);  b.savePNG('out.png');}b.go();