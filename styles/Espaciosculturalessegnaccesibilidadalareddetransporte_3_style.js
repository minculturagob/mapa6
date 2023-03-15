var size = 0;
var placement = 'point';
function categories_Espaciosculturalessegnaccesibilidadalareddetransporte_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Baja':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
             fill: new ol.style.Fill({color: 'rgba(253,230,228,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Media':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
             fill: new ol.style.Fill({color: 'rgba(240,194,201,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Alta':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
             fill: new ol.style.Fill({color: 'rgba(227,148,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muy alta':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
             fill: new ol.style.Fill({color: 'rgba(189,100,130,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Espaciosculturalessegnaccesibilidadalareddetransporte_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Accesibilidad");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Espaciosculturalessegnaccesibilidadalareddetransporte_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
