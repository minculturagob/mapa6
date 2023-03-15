var wms_layers = [];

var format_Valordelsuelopormt2enUsdpormanzana_0 = new ol.format.GeoJSON();
var features_Valordelsuelopormt2enUsdpormanzana_0 = format_Valordelsuelopormt2enUsdpormanzana_0.readFeatures(json_Valordelsuelopormt2enUsdpormanzana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valordelsuelopormt2enUsdpormanzana_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valordelsuelopormt2enUsdpormanzana_0.addFeatures(features_Valordelsuelopormt2enUsdpormanzana_0);
var lyr_Valordelsuelopormt2enUsdpormanzana_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valordelsuelopormt2enUsdpormanzana_0, 
                style: style_Valordelsuelopormt2enUsdpormanzana_0,
                interactive: true,
    title: 'Valor del suelo por mt2 (en Usd) por manzana<br />\
    <img src="styles/legend/Valordelsuelopormt2enUsdpormanzana_0_0.png" /> Menor a 1500<br />\
    <img src="styles/legend/Valordelsuelopormt2enUsdpormanzana_0_1.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Valordelsuelopormt2enUsdpormanzana_0_2.png" /> 2000 - 2500<br />\
    <img src="styles/legend/Valordelsuelopormt2enUsdpormanzana_0_3.png" /> 2500 - 3000<br />\
    <img src="styles/legend/Valordelsuelopormt2enUsdpormanzana_0_4.png" /> Mayor a 3000<br />'
        });
var format_Espacioculturalessegnvalordelsuelopormt2enUsd_1 = new ol.format.GeoJSON();
var features_Espacioculturalessegnvalordelsuelopormt2enUsd_1 = format_Espacioculturalessegnvalordelsuelopormt2enUsd_1.readFeatures(json_Espacioculturalessegnvalordelsuelopormt2enUsd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioculturalessegnvalordelsuelopormt2enUsd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioculturalessegnvalordelsuelopormt2enUsd_1.addFeatures(features_Espacioculturalessegnvalordelsuelopormt2enUsd_1);
var lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioculturalessegnvalordelsuelopormt2enUsd_1, 
                style: style_Espacioculturalessegnvalordelsuelopormt2enUsd_1,
                interactive: true,
    title: 'Espacio culturales según valor del suelo por mt2 (en Usd)<br />\
    <img src="styles/legend/Espacioculturalessegnvalordelsuelopormt2enUsd_1_0.png" /> Menor a 1500<br />\
    <img src="styles/legend/Espacioculturalessegnvalordelsuelopormt2enUsd_1_1.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Espacioculturalessegnvalordelsuelopormt2enUsd_1_2.png" /> 2000 - 2500<br />\
    <img src="styles/legend/Espacioculturalessegnvalordelsuelopormt2enUsd_1_3.png" /> 2500 - 3000<br />\
    <img src="styles/legend/Espacioculturalessegnvalordelsuelopormt2enUsd_1_4.png" /> Mayor a 3000<br />'
        });
var format_Accesibilidadalareddetransportepormanzana_2 = new ol.format.GeoJSON();
var features_Accesibilidadalareddetransportepormanzana_2 = format_Accesibilidadalareddetransportepormanzana_2.readFeatures(json_Accesibilidadalareddetransportepormanzana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadalareddetransportepormanzana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadalareddetransportepormanzana_2.addFeatures(features_Accesibilidadalareddetransportepormanzana_2);
var lyr_Accesibilidadalareddetransportepormanzana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadalareddetransportepormanzana_2, 
                style: style_Accesibilidadalareddetransportepormanzana_2,
                interactive: true,
    title: 'Accesibilidad a la red de transporte por manzana<br />\
    <img src="styles/legend/Accesibilidadalareddetransportepormanzana_2_0.png" /> Baja<br />\
    <img src="styles/legend/Accesibilidadalareddetransportepormanzana_2_1.png" /> Media<br />\
    <img src="styles/legend/Accesibilidadalareddetransportepormanzana_2_2.png" /> Alta<br />\
    <img src="styles/legend/Accesibilidadalareddetransportepormanzana_2_3.png" /> Muy alta<br />'
        });
var format_Espaciosculturalessegnaccesibilidadalareddetransporte_3 = new ol.format.GeoJSON();
var features_Espaciosculturalessegnaccesibilidadalareddetransporte_3 = format_Espaciosculturalessegnaccesibilidadalareddetransporte_3.readFeatures(json_Espaciosculturalessegnaccesibilidadalareddetransporte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosculturalessegnaccesibilidadalareddetransporte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosculturalessegnaccesibilidadalareddetransporte_3.addFeatures(features_Espaciosculturalessegnaccesibilidadalareddetransporte_3);
var lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosculturalessegnaccesibilidadalareddetransporte_3, 
                style: style_Espaciosculturalessegnaccesibilidadalareddetransporte_3,
                interactive: true,
    title: 'Espacios culturales según accesibilidad a la red de transporte<br />\
    <img src="styles/legend/Espaciosculturalessegnaccesibilidadalareddetransporte_3_0.png" /> Baja<br />\
    <img src="styles/legend/Espaciosculturalessegnaccesibilidadalareddetransporte_3_1.png" /> Media<br />\
    <img src="styles/legend/Espaciosculturalessegnaccesibilidadalareddetransporte_3_2.png" /> Alta<br />\
    <img src="styles/legend/Espaciosculturalessegnaccesibilidadalareddetransporte_3_3.png" /> Muy alta<br />'
        });
var format_Caminabilidadpormanzana_4 = new ol.format.GeoJSON();
var features_Caminabilidadpormanzana_4 = format_Caminabilidadpormanzana_4.readFeatures(json_Caminabilidadpormanzana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminabilidadpormanzana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminabilidadpormanzana_4.addFeatures(features_Caminabilidadpormanzana_4);
var lyr_Caminabilidadpormanzana_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caminabilidadpormanzana_4, 
                style: style_Caminabilidadpormanzana_4,
                interactive: true,
    title: 'Caminabilidad por manzana<br />\
    <img src="styles/legend/Caminabilidadpormanzana_4_0.png" /> Baja<br />\
    <img src="styles/legend/Caminabilidadpormanzana_4_1.png" /> Media<br />\
    <img src="styles/legend/Caminabilidadpormanzana_4_2.png" /> Alta<br />\
    <img src="styles/legend/Caminabilidadpormanzana_4_3.png" /> Muy alta<br />'
        });
var format_Espaciosculturalessegncaminabilidad_5 = new ol.format.GeoJSON();
var features_Espaciosculturalessegncaminabilidad_5 = format_Espaciosculturalessegncaminabilidad_5.readFeatures(json_Espaciosculturalessegncaminabilidad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosculturalessegncaminabilidad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosculturalessegncaminabilidad_5.addFeatures(features_Espaciosculturalessegncaminabilidad_5);
var lyr_Espaciosculturalessegncaminabilidad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosculturalessegncaminabilidad_5, 
                style: style_Espaciosculturalessegncaminabilidad_5,
                interactive: true,
    title: 'Espacios culturales según caminabilidad<br />\
    <img src="styles/legend/Espaciosculturalessegncaminabilidad_5_0.png" /> Baja<br />\
    <img src="styles/legend/Espaciosculturalessegncaminabilidad_5_1.png" /> Media<br />\
    <img src="styles/legend/Espaciosculturalessegncaminabilidad_5_2.png" /> Alta<br />\
    <img src="styles/legend/Espaciosculturalessegncaminabilidad_5_3.png" /> Muy alta<br />'
        });

        var lyr_MapaBase_6 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Espaciosculturales_7 = new ol.format.GeoJSON();
var features_Espaciosculturales_7 = format_Espaciosculturales_7.readFeatures(json_Espaciosculturales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosculturales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosculturales_7.addFeatures(features_Espaciosculturales_7);
var lyr_Espaciosculturales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosculturales_7, 
                style: style_Espaciosculturales_7,
                interactive: true,
                title: '<img src="styles/legend/Espaciosculturales_7.png" /> Espacios culturales'
            });
var group_Caminabilidad = new ol.layer.Group({
                                layers: [lyr_Caminabilidadpormanzana_4,lyr_Espaciosculturalessegncaminabilidad_5,],
                                title: "Caminabilidad"});
var group_Accesibilidadalareddetransporte = new ol.layer.Group({
                                layers: [lyr_Accesibilidadalareddetransportepormanzana_2,lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3,],
                                title: "Accesibilidad a la red de transporte"});
var group_Valordelsuelopormt2enUsd = new ol.layer.Group({
                                layers: [lyr_Valordelsuelopormt2enUsdpormanzana_0,lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1,],
                                title: "Valor del suelo por mt2 (en Usd)"});

lyr_Valordelsuelopormt2enUsdpormanzana_0.setVisible(false);lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1.setVisible(false);lyr_Accesibilidadalareddetransportepormanzana_2.setVisible(false);lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3.setVisible(false);lyr_Caminabilidadpormanzana_4.setVisible(false);lyr_Espaciosculturalessegncaminabilidad_5.setVisible(true);lyr_MapaBase_6.setVisible(true);lyr_Espaciosculturales_7.setVisible(false);
var layersList = [lyr_MapaBase_6,group_Valordelsuelopormt2enUsd,group_Accesibilidadalareddetransporte,group_Caminabilidad,lyr_Espaciosculturales_7];
lyr_Valordelsuelopormt2enUsdpormanzana_0.set('fieldAliases', {'fid': 'fid', 'MANZANA': 'MANZANA', 'Vta_USD_22': 'Valor (Usd)', });
lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1.set('fieldAliases', {'fid': 'fid', 'ESTABLECIMIENTO': 'Nombre', 'Valor_m2': 'Valor (Usd)', });
lyr_Accesibilidadalareddetransportepormanzana_2.set('fieldAliases', {'fid': 'fid', 'MANZ': 'MANZ', 'PUNTAJE': 'PUNTAJE', 'Accesibilidad': 'Accesibilidad', });
lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3.set('fieldAliases', {'fid': 'fid', 'ESTABLECIMIENTO': 'Nombre', 'Accesibilidad': 'Accesibilidad', });
lyr_Caminabilidadpormanzana_4.set('fieldAliases', {'fid': 'fid', 'SM': 'SM', 'Caminabilidad': 'Caminabilidad', });
lyr_Espaciosculturalessegncaminabilidad_5.set('fieldAliases', {'fid': 'fid', 'ESTABLECIMIENTO': 'Nombre', 'Caminabilidad': 'Caminabilidad', });
lyr_Espaciosculturales_7.set('fieldAliases', {'fid': 'fid', 'ESTABLECIMIENTO': 'Nombre', });
lyr_Valordelsuelopormt2enUsdpormanzana_0.set('fieldImages', {'fid': 'Hidden', 'MANZANA': 'Hidden', 'Vta_USD_22': 'TextEdit', });
lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1.set('fieldImages', {'fid': 'Hidden', 'ESTABLECIMIENTO': 'TextEdit', 'Valor_m2': 'TextEdit', });
lyr_Accesibilidadalareddetransportepormanzana_2.set('fieldImages', {'fid': 'Hidden', 'MANZ': 'Hidden', 'PUNTAJE': 'Hidden', 'Accesibilidad': 'TextEdit', });
lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3.set('fieldImages', {'fid': 'Hidden', 'ESTABLECIMIENTO': 'TextEdit', 'Accesibilidad': 'TextEdit', });
lyr_Caminabilidadpormanzana_4.set('fieldImages', {'fid': 'Hidden', 'SM': 'Hidden', 'Caminabilidad': 'TextEdit', });
lyr_Espaciosculturalessegncaminabilidad_5.set('fieldImages', {'fid': 'Hidden', 'ESTABLECIMIENTO': 'TextEdit', 'Caminabilidad': 'TextEdit', });
lyr_Espaciosculturales_7.set('fieldImages', {'fid': 'Hidden', 'ESTABLECIMIENTO': 'TextEdit', });
lyr_Valordelsuelopormt2enUsdpormanzana_0.set('fieldLabels', {'Vta_USD_22': 'inline label', });
lyr_Espacioculturalessegnvalordelsuelopormt2enUsd_1.set('fieldLabels', {'ESTABLECIMIENTO': 'inline label', 'Valor_m2': 'inline label', });
lyr_Accesibilidadalareddetransportepormanzana_2.set('fieldLabels', {'Accesibilidad': 'inline label', });
lyr_Espaciosculturalessegnaccesibilidadalareddetransporte_3.set('fieldLabels', {'ESTABLECIMIENTO': 'inline label', 'Accesibilidad': 'inline label', });
lyr_Caminabilidadpormanzana_4.set('fieldLabels',  {'Caminabilidad': 'inline label', });
lyr_Espaciosculturalessegncaminabilidad_5.set('fieldLabels', {'ESTABLECIMIENTO': 'inline label', 'Caminabilidad': 'inline label', });
lyr_Espaciosculturales_7.set('fieldLabels', {'ESTABLECIMIENTO': 'inline label', });
lyr_Espaciosculturales_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});