var wms_layers = [];

var format_arajeo_0 = new ol.format.GeoJSON();
var features_arajeo_0 = format_arajeo_0.readFeatures(json_arajeo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arajeo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arajeo_0.addFeatures(features_arajeo_0);
var lyr_arajeo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arajeo_0, 
                style: style_arajeo_0,
                popuplayertitle: 'arajeo',
                interactive: true,
                title: '<img src="styles/legend/arajeo_0.png" /> arajeo'
            });
var format_gba_buildings2_1 = new ol.format.GeoJSON();
var features_gba_buildings2_1 = format_gba_buildings2_1.readFeatures(json_gba_buildings2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gba_buildings2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gba_buildings2_1.addFeatures(features_gba_buildings2_1);
var lyr_gba_buildings2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gba_buildings2_1, 
                style: style_gba_buildings2_1,
                popuplayertitle: 'gba_buildings (2)',
                interactive: false,
                title: '<img src="styles/legend/gba_buildings2_1.png" /> gba_buildings (2)'
            });

lyr_arajeo_0.setVisible(true);lyr_gba_buildings2_1.setVisible(true);
var layersList = [lyr_arajeo_0,lyr_gba_buildings2_1];
lyr_arajeo_0.set('fieldAliases', {'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', });
lyr_gba_buildings2_1.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_arajeo_0.set('fieldImages', {'Ward_Name': 'TextEdit', 'Ward_No': 'Range', });
lyr_gba_buildings2_1.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_arajeo_0.set('fieldLabels', {'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', });
lyr_gba_buildings2_1.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_gba_buildings2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});