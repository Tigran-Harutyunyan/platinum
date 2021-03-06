(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhCAAQAAhjBCAAQBDAAAABjQAABkhDAAQhCAAAAhkgAguAAQAABSAuAAQAvAAAAhSQAAhSgvAAQguAAAABSg");
	this.shape.setTransform(70.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgzBhIAAgRIArAAIAAiYIgBAAIgBADIgIAIIgVAVIgLgMIArgsIARAAIAACwIAqAAIAAARg");
	this.shape_1.setTransform(54.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhCAAQAAhjBCAAQBDAAAABjQAABkhDAAQhCAAAAhkgAguAAQAABSAuAAQAvAAAAhSQAAhSgvAAQguAAAABSg");
	this.shape_2.setTransform(37.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ag+BiIgBgMQAAgkAxgiQAyghAAgaQgBgQgKgLQgLgKgSAAQgRAAgPAOQgIAGgEAHIgNgKQAGgKAHgHQATgSAaAAQAaABAQAQQAQAPAAAXQABAhgyAiQgxAhABAZIBZAAIAAgbIASAAIAAArg");
	this.shape_3.setTransform(18.8,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgpA0QgVgUAAggQAAggAUgUQATgUAcAAQAcAAAQATQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAPAVAAQARAAAOgJIALgIIAJAOQgIAHgGADQgQAKgWAAQgeAAgUgVgAgZgtQgOAMgDAUIBWAAQgBgVgLgLQgLgLgQAAQgRAAgNALg");
	this.shape_4.setTransform(-7.7,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgpA1QgVgUAAghQAAgeAVgVQAVgVAdAAQARAAAPAHQATAIAAAPIAAAQIgRAAIAAgLQAAgIgMgFQgKgFgMAAQgWAAgPAPQgPAQAAAYQAAAZAQAQQAPAPAWAAQAbAAATgTIAHAOQgVAWggAAQgeAAgVgUg");
	this.shape_5.setTransform(-24.9,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPASQgPAQAAAWIAAA0IAYAAIAAAPIhCAAIAAgPIAYAAIAAhlQAAgGgGAAIgTAAIAAgQIAaAAQARAAAAAQIAAAPIgBADIABAAQAEgMAMgLQASgOAVAAQAZAAALAOQAKANAAAbIAABIIAXAAIAAAPg");
	this.shape_6.setTransform(-43.6,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgfBhIAAgQIAYAAIAAhqIgZAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAVAAIAAAYg");
	this.shape_7.setTransform(-59.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgjBAQgQgJAAgPIAAgOIARAAIAAAKQAAAKAMAGQAKAEANAAQAOAAAJgFQAJgGAAgKQAAgLgLgHQgGgEgTgHQgWgIgHgGQgOgLAAgQQAAgSAPgKQAOgJASAAQARAAANAHQAQAHAAANIAAAQIgRAAIAAgKQAAgHgJgFQgIgEgMAAQgLAAgIAFQgJAFAAAKQAAAKALAHQAHAFAQAGQAVAHAKAGQAOALAAAQQAAASgOALQgPALgXAAQgUAAgPgJg");
	this.shape_8.setTransform(-72.4,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-10,155.2,20.1);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhCAAQAAhjBCAAQBDAAAABjQAABkhDAAQhCAAAAhkgAguAAQAABSAuAAQAvAAAAhSQAAhSgvAAQguAAAABSg");
	this.shape.setTransform(70.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgzBhIAAgRIArAAIAAiYIgBAAIgBADIgIAIIgVAVIgLgMIArgsIARAAIAACwIAqAAIAAARg");
	this.shape_1.setTransform(54.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhCAAQAAhjBCAAQBDAAAABjQAABkhDAAQhCAAAAhkgAguAAQAABSAuAAQAvAAAAhSQAAhSgvAAQguAAAABSg");
	this.shape_2.setTransform(37.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ag+BiIgBgMQAAgkAxgiQAyghAAgaQgBgQgKgLQgLgKgSAAQgRAAgPAOQgIAGgEAHIgNgKQAGgKAHgHQATgSAaAAQAaABAQAQQAQAPAAAXQABAhgyAiQgxAhABAZIBZAAIAAgbIASAAIAAArg");
	this.shape_3.setTransform(18.8,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgpA0QgVgUAAggQAAggAUgUQATgUAcAAQAcAAAQATQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAPAVAAQARAAAOgJIALgIIAJAOQgIAHgGADQgQAKgWAAQgeAAgUgVgAgZgtQgOAMgDAUIBWAAQgBgVgLgLQgLgLgQAAQgRAAgNALg");
	this.shape_4.setTransform(-7.7,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgpA1QgVgUAAghQAAgeAVgVQAVgVAdAAQARAAAPAHQATAIAAAPIAAAQIgRAAIAAgLQAAgIgMgFQgKgFgMAAQgWAAgPAPQgPAQAAAYQAAAZAQAQQAPAPAWAAQAbAAATgTIAHAOQgVAWggAAQgeAAgVgUg");
	this.shape_5.setTransform(-24.9,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPASQgPAQAAAWIAAA0IAYAAIAAAPIhCAAIAAgPIAYAAIAAhlQAAgGgGAAIgTAAIAAgQIAaAAQARAAAAAQIAAAPIgBADIABAAQAEgMAMgLQASgOAVAAQAZAAALAOQAKANAAAbIAABIIAXAAIAAAPg");
	this.shape_6.setTransform(-43.6,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgfBhIAAgQIAYAAIAAhqIgZAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAVAAIAAAYg");
	this.shape_7.setTransform(-59.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgjBAQgQgJAAgPIAAgOIARAAIAAAKQAAAKAMAGQAKAEANAAQAOAAAJgFQAJgGAAgKQAAgLgLgHQgGgEgTgHQgWgIgHgGQgOgLAAgQQAAgSAPgKQAOgJASAAQARAAANAHQAQAHAAANIAAAQIgRAAIAAgKQAAgHgJgFQgIgEgMAAQgLAAgIAFQgJAFAAAKQAAAKALAHQAHAFAQAGQAVAHAKAGQAOALAAAQQAAASgOALQgPALgXAAQgUAAgPgJg");
	this.shape_8.setTransform(-72.4,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-10,155.2,20.1);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape.setTransform(99.7,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_1.setTransform(-115.4,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ag8BZIAHgQIALAFQAOAFAMAAQAVAAANgKQAOgMAAgWIAAgXIAAAAQgOAZgdAAQgcAAgRgUQgRgUAAgeQAAggAQgTQARgTAbAAQAjAAALAZIAAAAIAAgCIAAgEQAAgQAQAAIAZAAIAAAQIgSAAQgGAAAAAGIAABxQAAAfgUAQQgSAOgbAAQgYAAgVgLgAgrhEQgLAOAAAZQAAAZANAOQAMAOAVAAQAoAAAAg1QAAg1grAAQgUAAgMAOg");
	this.shape_2.setTransform(232.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAXAAIAAhkQAAgGgGAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_3.setTransform(212.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_4.setTransform(197,-2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAgBZQgSAAgLgJQgSgMAAgfIAAhHIgZAAIAAgQIAaAAIAAgmIARAAIAAAmIAjAAIAAAQIgjAAIAABGQAAAlAfAAIAFgBIACAAIAAAQIgCABg");
	this.shape_5.setTransform(185.7,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAYAAIAAhkQAAgGgHAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_6.setTransform(170.1,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_7.setTransform(154.3,-2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgrBGIAAgQIAWAAIAAhkQAAgGgGAAIgTAAIAAgPIAaAAQARAAAAAPIAAARIgBADIABAAQAEgRALgJQAMgLAQAAIAFAAIACABIAAATIgCgBIgFAAQgVAAgMAVQgKASAAAWIAAArIAVAAIAAAQg");
	this.shape_8.setTransform(142.5,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhLBhIAAgQIAZAAIAAihIgZAAIAAgQIBXAAQAWAAALAGQAOAGAJAOQAIAOAAASQAAAUgJAPQgKAOgQAFQgNAEgQAAIgqAAIAAA9IAZAAIAAAQgAgeAEIAoAAQAOAAAJgEQAYgIAAgeQAAgagVgKQgJgFgRAAIgoAAg");
	this.shape_9.setTransform(126.1,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("Ag9BZIAIgQQAGAEAFABQAOAFAMAAQAVAAANgKQAOgMAAgWIABgXIgBAAQgOAZgdAAQgcAAgRgUQgQgUgBgeQABggAQgTQAQgTAcAAQAOAAANAGQANAHAFAMIAAAAIAAgCIAAgEQAAgQAQAAIAYAAIAAAQIgQAAQgHAAABAGIAABxQAAAfgVAQQgSAOgbAAQgZAAgVgLgAgrhEQgKAOgBAZQABAZAMAOQAMAOAUAAQApAAAAg1QAAg1grAAQgUAAgMAOg");
	this.shape_10.setTransform(72.6,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAXAAIAAAQIhBAAIAAgQIAXAAIAAhkQAAgGgGAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_11.setTransform(52.8,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgfBhIAAgQIAYAAIAAhqIgZAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgIhIIAAgYIAUAAIAAAYg");
	this.shape_12.setTransform(37,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgjBAQgQgKgBgOIAAgOIARAAIAAAKQAAAKANAFQAKAFANAAQAOAAAJgFQAJgHAAgKQAAgKgLgHQgFgEgUgHQgVgIgIgGQgOgLAAgQQAAgSAPgKQANgIATgBQAQABAOAGQAQAHAAANIAAARIgRAAIAAgLQAAgHgJgFQgIgEgMAAQgLgBgIAGQgJAFAAAJQAAALAKAHQAHAEARAGQAVAIAKAGQAOALAAARQAAARgOALQgOAKgYAAQgUABgPgJg");
	this.shape_13.setTransform(24,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgZAAIAAgQIArAAIAAB6IAYAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_14.setTransform(11.3,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAgBZQguAAAAg0IAAhHIgaAAIAAgQIAaAAIAAgmIARAAIAAAmIAjAAIAAAQIgjAAIAABGQAAAlAfAAIAFgBIABAAIAAAQIgCABg");
	this.shape_15.setTransform(0,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgrBGIAAgQIAVAAIAAhkQABgGgHAAIgSAAIAAgPIAaAAQARAAgBAPIAAARIAAADIAAAAQAFgRALgJQAMgLAQAAIAEAAIADABIAAATIgCgBIgFAAQgVAAgNAVQgJASAAAWIAAArIAUAAIAAAQg");
	this.shape_16.setTransform(-11.8,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgpA0QgVgVAAgfQAAggAUgVQATgSAcgBQAcABAQASQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAOAVAAQAQAAAPgHIALgJIAJAOIgOAKQgQAJgWAAQgeAAgUgUgAgZgtQgNAMgEAUIBWAAQgBgUgLgNQgLgKgQAAQgRAAgNALg");
	this.shape_17.setTransform(-27.3,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgJBFIgvh6IgTAAIAAgPIA6AAIAAAPIgUAAIAjBcIACAHIAAAEIABAAIAAgEIACgHIAjhcIgUAAIAAgPIA5AAIAAAPIgSAAIgvB6g");
	this.shape_18.setTransform(-44.6,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("Ag5BOQgQgUAAggQAAggASgUQARgUAcAAQATAAAPAOQAGAGAEAHIAAAAIAAgCIAAg9IgZAAIAAgQIArAAIAACsQAAAFAHAAIAPAAIAAAQIgXAAQgRAAAAgPIABgJIAAgCIAAAAQgEAIgGAHQgPAOgXAAQgcAAgQgUgAgogOQgNAOgBAaQAAAaANAPQAMAOATAAQATAAALgNQAOgOAAgcQAAgXgKgPQgMgQgVgBQgTAAgMAPg");
	this.shape_19.setTransform(-62.5,-2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAiBhIAAgQIAWAAIgTgyIhKAAIgSAyIAWAAIAAAQIg+AAIAAgQIAUAAIBCixIATAAIBCCxIAUAAIAAAQgAgCg/IgeBOIBBAAIgehOIgCgJIAAgEIgBAAg");
	this.shape_20.setTransform(-83,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAYAAIAAhkQAAgGgGAAIgTAAIAAgQIAaAAQARAAAAAQIAAAPIgBADIABAAQAEgMAMgKQASgPAVAAQAZAAALAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_21.setTransform(-146.7,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("Ag8BZIAHgQIALAFQAOAFAMAAQAVAAANgKQAOgMAAgWIAAgUIABgDIgBAAQgOAZgdAAQgcAAgRgUQgRgUAAgeQAAggAQgTQARgTAbAAQAPAAAMAGQAOAHAFAMIAAAAIAAgCIAAgEQAAgQAQAAIAZAAIAAAQIgRAAQgGAAAAAGIAABxQAAAfgVAQQgSAOgbAAQgYAAgVgLgAgqhEQgLAOAAAZQAAAZAMAOQAMAOAVAAQARAAALgMQAMgNAAgcQAAg1grAAQgUAAgLAOg");
	this.shape_22.setTransform(-166.4,2.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAVAAIAAAYg");
	this.shape_23.setTransform(-181.2,-2.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgjBAQgQgKAAgOIAAgOIARAAIAAAKQAAAKAMAFQAKAFANAAQAOAAAJgFQAJgHAAgKQAAgKgLgHQgGgEgTgHQgWgJgHgFQgOgLAAgQQAAgSAPgKQAOgIASgBQAQABAOAGQAQAHAAANIAAARIgRAAIAAgLQAAgHgJgFQgIgEgMAAQgLgBgIAGQgJAFAAAJQAAALALAHQAGAEARAGQAVAIAKAGQAOALAAARQAAARgOALQgPAKgXAAQgUABgPgJg");
	this.shape_24.setTransform(-194.3,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgpA0QgVgVAAgfQAAggAUgVQATgSAcgBQAcABAQASQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAOAVAAQAQAAAOgHIAMgJIAJAOIgOAKQgQAJgWAAQgeAAgUgUgAgZgtQgOAMgDAUIBWAAQgBgVgLgMQgLgKgQAAQgRAAgNALg");
	this.shape_25.setTransform(-210.4,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AhbBhIAAgQIAaAAIAAihIgaAAIAAgQIBSAAQAZAAAQAFQAcAJAQAYQAPAYAAAiQAAAkgQAYQgQAXgeAJQgOAFgYAAgAguBQIAkAAQAUAAAOgEQAWgHANgUQANgUgBgdQAAgcgMgUQgMgTgWgIQgNgEgWAAIgkAAg");
	this.shape_26.setTransform(-230.8,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-12.5,480,25.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFD5QgGAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAGAAIAxAAIAAiVIgxAAQgGAAgEgFQgFgEAAgGQAAgHAFgEQAEgFAGAAIAxAAIAAj/Ig+AAIAAAvQAAAGgEAFQgFAEgGAAQgGAAgFgEQgEgFAAgGIAAg/QAAgGAEgEQAFgFAGAAIFUAAQA2AAAjAmQAlAjAAA1IAABDQAAA0glAjQgkAlg1AAIiEAAIAACVIAzAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAgAh2DaIBHAAIAAiVIhHAAgACMh6IAABDQAAA0glAjIgGAGIASAAQAoAAAcgbQAcgbAAgnIAAhDQAAgogcgbQgbgcgpAAIgTAAQAsAmAAA5gAgRAmIAgAAQAmAAAdgbQAcgbAAgnIAAhDQAAgogdgbQgbgcgnAAIggAAgAh2AmIBHAAIAAj/IhHAAg");
	this.shape.setTransform(2.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Al8F9QieieAAjfQAAjeCeieQCeifDeAAQDfAACeCfQCeCeAADeQAADfieCeQieCfjfAAQjeAAieifgAlslsQiXCYAADUQAADWCXCXQCYCXDUAAQDWAACXiXQCXiXAAjWQAAjUiXiYQiYiXjVAAQjUAAiYCXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-53.9,107.9,107.9);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuChQgTAAgJgFQgHgFgJgOIhDh0QgEgIgGgDQgGgDgJAAIghAAIAAB/IAqAAIAAAbIh0AAIAAgbIApAAIAAkMIgpAAIAAgaIByAAIAAAaIgoAAIAAByIAvAAIBOhyIgfAAIAAgaIBkAAIAAAaIghAAIhZB+IAAABIAFADQAHAIAEAHIBBBvQAIAMARAAIAQAAIAAAbg");
	this.shape.setTransform(177.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABfChIi0j9IgFgNIgEgHIgBAAIABAIIAAAOIAADgIArAAIAAAbIh1AAIAAgbIArAAIAAkMIgrAAIAAgaIBJAAIC0D+IAHAMIADAHIABAAIgBgHIgBjwIgqAAIAAgaIB1AAIAAAaIgqAAIAAEng");
	this.shape_1.setTransform(139.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5ChIAAgbIAqAAIAAkMIgqAAIAAgaIBzAAIAAAaIgqAAIAAEMIAqAAIAAAbg");
	this.shape_2.setTransform(108.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUChIAAgbIAqAAIgSjdIABgXIgBAAIgHAWIhWC8IgdAAIhWi8IgEgOIgCgIIgCAAIABAJIAAAOIgRDdIApAAIAAAbIhzAAIAAgbIAqAAIAWkMIgrAAIAAgaIBOAAIBdDSIAFANIABAGIABAAIABgGIBjjfIBNAAIAAAaIgqAAIAVEMIAqAAIAAAbg");
	this.shape_3.setTransform(60.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8CXQgcgNgPgXQgUgbAAgwIAAixIgqAAIAAgaIB1AAIAAAaIgrAAIAACxQAAAlAPAVQAXAkA1AAQA3AAAXglQAOgXAAgjIAAiwIgqAAIAAgaIB0AAIAAAaIgqAAIAACxQAAAugVAeQgQAXgbAMQgaANgiAAQghAAgbgNg");
	this.shape_4.setTransform(17,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABgChIi0j9IgHgNIgDgHIgBAAIABAIIABAOIAADgIAqAAIAAAbIh1AAIAAgbIAqAAIAAkMIgqAAIAAgaIBKAAIC0D+IAJATIABAAIgBgHIAAjwIgrAAIAAgaIB1AAIAAAaIgrAAIAAEng");
	this.shape_5.setTransform(-23.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5ChIAAgbIAqAAIAAkMIgqAAIAAgaIBzAAIAAAaIgqAAIAAEMIAqAAIAAAbg");
	this.shape_6.setTransform(-54.5,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6ChIAAgbIArAAIAAkLIhaAAIAAA1IgdAAIAAhQIEOAAIAABQIgeAAIAAg1IhaAAIAAELIAqAAIAAAbg");
	this.shape_7.setTransform(-81.3,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5ChIAAgbIAlAAIgfhSIh9AAIgeBSIAlAAIAAAbIhnAAIAAgbIAgAAIBtkmIAjAAIBsEmIAhAAIAAAbgAgBh5IgDAPIgyCDIBsAAIgwiDIgEgPIgBgGIgBAAg");
	this.shape_8.setTransform(-113.7,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah0ChIAAgbIArAAIAAkLIgrAAIAAgbIB0AAIAAAbIgpAAIAAELICAAAIAAg2IAdAAIAABRg");
	this.shape_9.setTransform(-146.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah+ChIAAgbIAqAAIAAkMIgqAAIAAgaICSAAQAkAAATAJQAYALAOAWQAOAYAAAfQAAAhgQAZQgQAXgbAKQgSAGgdAAIhJAAIAABkIAqAAIAAAbgAg0AGIBFAAQAYAAAPgGQASgGALgRQAJgRABgXQgBgtghgRQgTgIgZAAIhFAAg");
	this.shape_10.setTransform(-178.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-16.4,382.5,32.8);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuChQgTAAgJgFQgHgFgJgOIhDh0QgEgIgGgDQgGgDgJAAIghAAIAAB/IAqAAIAAAbIh0AAIAAgbIApAAIAAkMIgpAAIAAgaIByAAIAAAaIgoAAIAAByIAvAAIBOhyIgfAAIAAgaIBkAAIAAAaIghAAIhZB+IAAABIAFADQAHAIAEAHIBBBvQAIAMARAAIAQAAIAAAbg");
	this.shape.setTransform(177.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABfChIi0j9IgFgNIgEgHIgBAAIABAIIAAAOIAADgIArAAIAAAbIh1AAIAAgbIArAAIAAkMIgrAAIAAgaIBJAAIC0D+IAHAMIADAHIABAAIgBgHIgBjwIgqAAIAAgaIB1AAIAAAaIgqAAIAAEng");
	this.shape_1.setTransform(139.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5ChIAAgbIAqAAIAAkMIgqAAIAAgaIBzAAIAAAaIgqAAIAAEMIAqAAIAAAbg");
	this.shape_2.setTransform(108.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUChIAAgbIAqAAIgSjdIABgXIgBAAIgHAWIhWC8IgdAAIhWi8IgEgOIgCgIIgCAAIABAJIAAAOIgRDdIApAAIAAAbIhzAAIAAgbIAqAAIAWkMIgrAAIAAgaIBOAAIBdDSIAFANIABAGIABAAIABgGIBjjfIBNAAIAAAaIgqAAIAVEMIAqAAIAAAbg");
	this.shape_3.setTransform(60.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8CXQgcgNgPgXQgUgbAAgwIAAixIgqAAIAAgaIB1AAIAAAaIgrAAIAACxQAAAlAPAVQAXAkA1AAQA3AAAXglQAOgXAAgjIAAiwIgqAAIAAgaIB0AAIAAAaIgqAAIAACxQAAAugVAeQgQAXgbAMQgaANgiAAQghAAgbgNg");
	this.shape_4.setTransform(17,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABgChIi0j9IgHgNIgDgHIgBAAIABAIIABAOIAADgIAqAAIAAAbIh1AAIAAgbIAqAAIAAkMIgqAAIAAgaIBKAAIC0D+IAJATIABAAIgBgHIAAjwIgrAAIAAgaIB1AAIAAAaIgrAAIAAEng");
	this.shape_5.setTransform(-23.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5ChIAAgbIAqAAIAAkMIgqAAIAAgaIBzAAIAAAaIgqAAIAAEMIAqAAIAAAbg");
	this.shape_6.setTransform(-54.5,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6ChIAAgbIArAAIAAkLIhaAAIAAA1IgdAAIAAhQIEOAAIAABQIgeAAIAAg1IhaAAIAAELIAqAAIAAAbg");
	this.shape_7.setTransform(-81.3,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5ChIAAgbIAlAAIgfhSIh9AAIgeBSIAlAAIAAAbIhnAAIAAgbIAgAAIBtkmIAjAAIBsEmIAhAAIAAAbgAgBh5IgDAPIgyCDIBsAAIgwiDIgEgPIgBgGIgBAAg");
	this.shape_8.setTransform(-113.7,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah0ChIAAgbIArAAIAAkLIgrAAIAAgbIB0AAIAAAbIgpAAIAAELICAAAIAAg2IAdAAIAABRg");
	this.shape_9.setTransform(-146.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah+ChIAAgbIAqAAIAAkMIgqAAIAAgaICSAAQAkAAATAJQAYALAOAWQAOAYAAAfQAAAhgQAZQgQAXgbAKQgSAGgdAAIhJAAIAABkIAqAAIAAAbgAg0AGIBFAAQAYAAAPgGQASgGALgRQAJgRABgXQgBgtghgRQgTgIgZAAIhFAAg");
	this.shape_10.setTransform(-178.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-16.4,382.5,32.8);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF995A").s().p("AgJCiIi+lIIAbAAICsErICtkrIAbAAIi+FIQgDAFgHAAQgGAAgDgFg");
	this.shape.setTransform(0,72.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF995A").s().p("ABZESIkxoSQgEgFAEgGQADgGAHAAIGlAAIAEAXImVAAIEuIMg");
	this.shape_1.setTransform(-80.5,-61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF995A").s().p("AhzESIEuoMImVAAIAEgXIGlAAQAHAAADAGQADAGgDAFIkyISg");
	this.shape_2.setTransform(80.6,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-88.8,204.9,177.7);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF995A").s().p("AgJCiIi+lIIAbAAICsErICtkrIAbAAIi+FIQgDAFgHAAQgGAAgDgFg");
	this.shape.setTransform(0,72.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF995A").s().p("ABZESIkxoSQgEgFAEgGQADgGAHAAIGlAAIAEAXImVAAIEuIMg");
	this.shape_1.setTransform(-80.5,-61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF995A").s().p("AhzESIEuoMImVAAIAEgXIGlAAQAHAAADAGQADAGgDAFIkyISg");
	this.shape_2.setTransform(80.6,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-88.8,204.9,177.7);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgJFWImOqxIAbAAIF8KUIF9qUIAbAAImOKxQgDAGgHAAQgGAAgDgGg");
	this.shape.setTransform(0,81.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhAFsIGWrAIrIAAIgDgXILfAAQAGAAAEAGQAEAGgEAGImZLFg");
	this.shape_1.setTransform(96.3,-79.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAmFsImZrFQgEgGAEgGQADgGAHAAILfAAIgDAXIrJAAIGXLAg");
	this.shape_2.setTransform(-96.2,-79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.6,-115.9,267.4,231.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape.setTransform(339.7,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_1.setTransform(124.6,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ag8BZIAHgQIALAFQAOAFAMAAQAVAAANgKQAOgMAAgWIAAgXIAAAAQgOAZgdAAQgcAAgRgUQgRgUAAgeQAAggAQgTQARgTAbAAQAjAAALAZIAAAAIAAgCIAAgEQAAgQAQAAIAZAAIAAAQIgSAAQgGAAAAAGIAABxQAAAfgUAQQgSAOgbAAQgYAAgVgLgAgrhEQgLAOAAAZQAAAZANAOQAMAOAVAAQAoAAAAg1QAAg1grAAQgUAAgMAOg");
	this.shape_2.setTransform(472.6,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAXAAIAAhkQAAgGgGAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_3.setTransform(452.8,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_4.setTransform(437,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAgBZQgSAAgLgJQgSgMAAgfIAAhHIgZAAIAAgQIAaAAIAAgmIARAAIAAAmIAjAAIAAAQIgjAAIAABGQAAAlAfAAIAFgBIACAAIAAAQIgCABg");
	this.shape_5.setTransform(425.7,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAYAAIAAhkQAAgGgHAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_6.setTransform(410.1,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_7.setTransform(394.3,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgrBGIAAgQIAWAAIAAhkQAAgGgGAAIgTAAIAAgPIAaAAQARAAAAAPIAAARIgBADIABAAQAEgRALgJQAMgLAQAAIAFAAIACABIAAATIgCgBIgFAAQgVAAgMAVQgKASAAAWIAAArIAVAAIAAAQg");
	this.shape_8.setTransform(382.5,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhLBhIAAgQIAZAAIAAihIgZAAIAAgQIBXAAQAWAAALAGQAOAGAJAOQAIAOAAASQAAAUgJAPQgKAOgQAFQgNAEgQAAIgqAAIAAA9IAZAAIAAAQgAgeAEIAoAAQAOAAAJgEQAYgIAAgeQAAgagVgKQgJgFgRAAIgoAAg");
	this.shape_9.setTransform(366.1,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("Ag9BZIAIgQQAGAEAFABQAOAFAMAAQAVAAANgKQAOgMAAgWIABgXIgBAAQgOAZgdAAQgcAAgRgUQgQgUgBgeQABggAQgTQAQgTAcAAQAOAAANAGQANAHAFAMIAAAAIAAgCIAAgEQAAgQAQAAIAYAAIAAAQIgQAAQgHAAABAGIAABxQAAAfgVAQQgSAOgbAAQgZAAgVgLgAgrhEQgKAOgBAZQABAZAMAOQAMAOAUAAQApAAAAg1QAAg1grAAQgUAAgMAOg");
	this.shape_10.setTransform(312.6,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAXAAIAAAQIhBAAIAAgQIAXAAIAAhkQAAgGgGAAIgSAAIAAgQIAaAAQARAAAAAQIgBAPIAAADIAAAAQAEgMANgKQARgPAWAAQAYAAAMAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_11.setTransform(292.8,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgfBhIAAgQIAYAAIAAhqIgZAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgIhIIAAgYIAUAAIAAAYg");
	this.shape_12.setTransform(277,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgjBAQgQgKgBgOIAAgOIARAAIAAAKQAAAKANAFQAKAFANAAQAOAAAJgFQAJgHAAgKQAAgKgLgHQgFgEgUgHQgVgIgIgGQgOgLAAgQQAAgSAPgKQANgIATgBQAQABAOAGQAQAHAAANIAAARIgRAAIAAgLQAAgHgJgFQgIgEgMAAQgLgBgIAGQgJAFAAAJQAAALAKAHQAHAEARAGQAVAIAKAGQAOALAAARQAAARgOALQgOAKgYAAQgUABgPgJg");
	this.shape_13.setTransform(264,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgZAAIAAgQIArAAIAAB6IAYAAIAAAQgAgJhIIAAgYIAUAAIAAAYg");
	this.shape_14.setTransform(251.3,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAgBZQguAAAAg0IAAhHIgaAAIAAgQIAaAAIAAgmIARAAIAAAmIAjAAIAAAQIgjAAIAABGQAAAlAfAAIAFgBIABAAIAAAQIgCABg");
	this.shape_15.setTransform(240,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgrBGIAAgQIAVAAIAAhkQABgGgHAAIgSAAIAAgPIAaAAQARAAgBAPIAAARIAAADIAAAAQAFgRALgJQAMgLAQAAIAEAAIADABIAAATIgCgBIgFAAQgVAAgNAVQgJASAAAWIAAArIAUAAIAAAQg");
	this.shape_16.setTransform(228.2,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgpA0QgVgVAAgfQAAggAUgVQATgSAcgBQAcABAQASQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAOAVAAQAQAAAPgHIALgJIAJAOIgOAKQgQAJgWAAQgeAAgUgUgAgZgtQgNAMgEAUIBWAAQgBgUgLgNQgLgKgQAAQgRAAgNALg");
	this.shape_17.setTransform(212.7,12.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgJBFIgvh6IgTAAIAAgPIA6AAIAAAPIgUAAIAjBcIACAHIAAAEIABAAIAAgEIACgHIAjhcIgUAAIAAgPIA5AAIAAAPIgSAAIgvB6g");
	this.shape_18.setTransform(195.4,12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("Ag5BOQgQgUAAggQAAggASgUQARgUAcAAQATAAAPAOQAGAGAEAHIAAAAIAAgCIAAg9IgZAAIAAgQIArAAIAACsQAAAFAHAAIAPAAIAAAQIgXAAQgRAAAAgPIABgJIAAgCIAAAAQgEAIgGAHQgPAOgXAAQgcAAgQgUgAgogOQgNAOgBAaQAAAaANAPQAMAOATAAQATAAALgNQAOgOAAgcQAAgXgKgPQgMgQgVgBQgTAAgMAPg");
	this.shape_19.setTransform(177.5,9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAiBhIAAgQIAWAAIgTgyIhKAAIgSAyIAWAAIAAAQIg+AAIAAgQIAUAAIBCixIATAAIBCCxIAUAAIAAAQgAgCg/IgeBOIBBAAIgehOIgCgJIAAgEIgBAAg");
	this.shape_20.setTransform(157,9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAqBHIAAhSQAAgUgFgJQgHgMgSAAQgWAAgPARQgPARAAAWIAAAzIAYAAIAAAQIhCAAIAAgQIAYAAIAAhkQAAgGgGAAIgTAAIAAgQIAaAAQARAAAAAQIAAAPIgBADIABAAQAEgMAMgKQASgPAVAAQAZAAALAOQAKANAAAbIAABHIAXAAIAAAQg");
	this.shape_21.setTransform(93.3,12.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("Ag8BZIAHgQIALAFQAOAFAMAAQAVAAANgKQAOgMAAgWIAAgUIABgDIgBAAQgOAZgdAAQgcAAgRgUQgRgUAAgeQAAggAQgTQARgTAbAAQAPAAAMAGQAOAHAFAMIAAAAIAAgCIAAgEQAAgQAQAAIAZAAIAAAQIgRAAQgGAAAAAGIAABxQAAAfgVAQQgSAOgbAAQgYAAgVgLgAgqhEQgLAOAAAZQAAAZAMAOQAMAOAVAAQARAAALgMQAMgNAAgcQAAg1grAAQgUAAgLAOg");
	this.shape_22.setTransform(73.6,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgfBhIAAgQIAXAAIAAhqIgYAAIAAgQIAqAAIAAB6IAXAAIAAAQgAgJhIIAAgYIAVAAIAAAYg");
	this.shape_23.setTransform(58.8,9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgjBAQgQgKAAgOIAAgOIARAAIAAAKQAAAKAMAFQAKAFANAAQAOAAAJgFQAJgHAAgKQAAgKgLgHQgGgEgTgHQgWgJgHgFQgOgLAAgQQAAgSAPgKQAOgIASgBQAQABAOAGQAQAHAAANIAAARIgRAAIAAgLQAAgHgJgFQgIgEgMAAQgLgBgIAGQgJAFAAAJQAAALALAHQAGAEARAGQAVAIAKAGQAOALAAARQAAARgOALQgPAKgXAAQgUABgPgJg");
	this.shape_24.setTransform(45.7,12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgpA0QgVgVAAgfQAAggAUgVQATgSAcgBQAcABAQASQAOASAAAbIAAAGIAAACIhqAAQABAaAQAPQAPAOAVAAQAQAAAOgHIAMgJIAJAOIgOAKQgQAJgWAAQgeAAgUgUgAgZgtQgOAMgDAUIBWAAQgBgVgLgMQgLgKgQAAQgRAAgNALg");
	this.shape_25.setTransform(29.6,12.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AhbBhIAAgQIAaAAIAAihIgaAAIAAgQIBSAAQAZAAAQAFQAcAJAQAYQAPAYAAAiQAAAkgQAYQgQAXgeAJQgOAFgYAAgAguBQIAkAAQAUAAAOgEQAWgHANgUQANgUgBgdQAAgcgMgUQgMgTgWgIQgNgEgWAAIgkAAg");
	this.shape_26.setTransform(9.2,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,25.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFD5QgGAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAGAAIAxAAIAAiVIgxAAQgGAAgEgFQgFgEAAgGQAAgHAFgEQAEgFAGAAIAxAAIAAj/Ig+AAIAAAvQAAAGgEAFQgFAEgGAAQgGAAgFgEQgEgFAAgGIAAg/QAAgGAEgEQAFgFAGAAIFUAAQA2AAAjAmQAlAjAAA1IAABDQAAA0glAjQgkAlg1AAIiEAAIAACVIAzAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAgAh2DaIBHAAIAAiVIhHAAgACMh6IAABDQAAA0glAjIgGAGIASAAQAoAAAcgbQAcgbAAgnIAAhDQAAgogcgbQgbgcgpAAIgTAAQAsAmAAA5gAgRAmIAgAAQAmAAAdgbQAcgbAAgnIAAhDQAAgogdgbQgbgcgnAAIggAAgAh2AmIBHAAIAAj/IhHAAg");
	this.shape.setTransform(56.2,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Al8F9QieieAAjfQAAjeCeieQCeifDeAAQDfAACeCfQCeCeAADeQAADfieCeQieCfjfAAQjeAAieifgAlslsQiXCYAADUQAADWCXCXQCYCXDUAAQDWAACXiXQCXiXAAjWQAAjUiXiYQiYiXjVAAQjUAAiYCXg");
	this.shape_1.setTransform(53.9,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.9,107.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(191.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382.5,32.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,20.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(240,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,25.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(191.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382.5,32.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.9,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.9,107.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(191.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382.5,32.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,20.1);


// stage content:
(lib.Logo_animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Triangle 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.5,171.4,1.307,1.307,5.2,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1.29,scaleY:1.29,rotation:4.5,y:173.7,alpha:0.129},2).to({regY:0,scaleX:1.18,scaleY:1.18,rotation:0,y:189,alpha:1},13).wait(54).to({startPosition:0},0).wait(1));

	// Triangle 2
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.6,178.5,1.581,1.581,-15,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(283.5,178.5,1.181,1.181,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_2}]},46).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true,scaleX:1.18,scaleY:1.18,rotation:0,x:283.5,alpha:1},17).wait(47));

	// P
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(283.6,63.8,1.181,1.181,0,0,0,54,54);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(283.6,63.8,1.181,1.181,0,0,0,54,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},38).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({_off:true,alpha:1},11).wait(39));

	// Platinum Ink
	this.instance_5 = new lib.Symbol4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(284.1,175.7,1.181,1.181,0,0,0,191.3,16.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(284.1,175.3,1.181,1.181,0,0,0,191.3,16.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol9("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(284.1,169.8,1.181,1.181,0,0,0,191.3,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},31).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},18).to({state:[{t:this.instance_7}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({_off:true,regY:16.5,y:175.3,alpha:1},4).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},4).to({_off:true,regY:16.4,y:169.8},18).wait(19));

	// Text
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(283.5,221.6,1.181,1.181,0,0,0,240,12.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(283.5,221.6,1.181,1.181,0,0,0,240,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},43).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9}]},22).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43).to({_off:false},0).to({_off:true,alpha:1},6).wait(23));

	// Since 2010
	this.instance_10 = new lib.Symbol3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(283.6,358.3,1.181,1.181,0,0,0,77.7,10.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Symbol8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(283.6,358.3,1.181,1.181,0,0,0,77.7,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},55).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({_off:true,alpha:1},5).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 566,
	height: 370,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;