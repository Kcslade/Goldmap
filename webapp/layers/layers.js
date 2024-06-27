var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GeologicalIndicatorsofgold_1 = new ol.format.GeoJSON();
var features_GeologicalIndicatorsofgold_1 = format_GeologicalIndicatorsofgold_1.readFeatures(json_GeologicalIndicatorsofgold_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologicalIndicatorsofgold_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeologicalIndicatorsofgold_1.addFeatures(features_GeologicalIndicatorsofgold_1);
var lyr_GeologicalIndicatorsofgold_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_GeologicalIndicatorsofgold_1, 
                radius: 6 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                opacity: 0.5,
                shadow: 250,
                title: 'Geological Indicators of gold'
            });
var format_GeochemicalIndicatorsofgold_2 = new ol.format.GeoJSON();
var features_GeochemicalIndicatorsofgold_2 = format_GeochemicalIndicatorsofgold_2.readFeatures(json_GeochemicalIndicatorsofgold_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeochemicalIndicatorsofgold_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeochemicalIndicatorsofgold_2.addFeatures(features_GeochemicalIndicatorsofgold_2);
var lyr_GeochemicalIndicatorsofgold_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_GeochemicalIndicatorsofgold_2, 
                radius: 10 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                opacity: 0.5,
                shadow: 250,
                title: 'Geochemical Indicators of gold'
            });
var format_USMiningActivity_3 = new ol.format.GeoJSON();
var features_USMiningActivity_3 = format_USMiningActivity_3.readFeatures(json_USMiningActivity_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USMiningActivity_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USMiningActivity_3.addFeatures(features_USMiningActivity_3);
var lyr_USMiningActivity_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_USMiningActivity_3, 
                radius: 20 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                opacity: 0.5,
                shadow: 250,
                title: 'US Mining Activity'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_GeologicalIndicatorsofgold_1.setVisible(true);lyr_GeochemicalIndicatorsofgold_2.setVisible(true);lyr_USMiningActivity_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_GeologicalIndicatorsofgold_1,lyr_GeochemicalIndicatorsofgold_2,lyr_USMiningActivity_3];
