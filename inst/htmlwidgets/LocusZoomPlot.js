HTMLWidgets.widget({

  name: 'LocusZoomPlot',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        var data_sources, layout;
        var stateUrlMapping = {chr: "chrom", start: "start", end: "end"};
        if (!Object.keys(initialState).length) {
          initialState = {chr: x.chr, start: x.start, end: x.end};
        }

        data_sources = new LocusZoom.DataSources()
          .add("trait1", ["AssociationLZ", {url: x.assoc_url, params: {analysis: x.assoc_analysis, id_field: x.assoc_id_field}}]),
          // source 2 = v19 of GRCh37 (hg19?)
          .add("trait2", ["GeneLZ", { url: x.gene_url, params: {source: x.gene_source} }]);

        layout = {"state":initialState,"width":1088,"height":612,"responsive_resize":true,"min_region_scale":20000,"max_region_scale":1000000,"dashboard":{"components":[{"type":"title","title":"LocusZoom","subtitle":"Teva data test","position":"left","color":"gray"}]},"panels":[{"proportional_height":0.5,"id":"association","width":1088,"height":306,"min_width":400,"min_height":200,"proportional_width":1,"margin":{"top":35,"right":50,"bottom":40,"left":50},"inner_border":"rgb(210, 210, 210)","dashboard":{"components":[]},"axes":{"x":{"label":"Chromosome {{chr}} (Mb)","label_offset":32,"tick_format":"region","extent":"state","render":true,"label_function":null},"y":{"label":"-log10 p-value","label_offset":28,"render":true,"label_function":null}},"legend":{"orientation":"vertical","origin":{"x":55,"y":40},"hidden":true,"width":115.08906555175781,"height":215.6685791015625,"padding":5,"label_size":12},"interaction":{"drag_background_to_pan":true,"drag_x_ticks_to_scale":true,"drag_y1_ticks_to_scale":true,"drag_y2_ticks_to_scale":true,"scroll_to_zoom":true,"x_linked":true,"y_linked":false},"data_layers":[{"id":"significance","type":"orthogonal_line","orientation":"horizontal","offset":4.522,"style":{"stroke":"#D3D3D3","stroke-width":"3px","stroke-dasharray":"10px 10px"},"x_axis":{"axis":1,"decoupled":true},"y_axis":{"axis":1,"decoupled":true},"fields":[],"z_index":0},{"namespace":{"assoc":"trait1"},"id":"associationpvalues","type":"scatter","point_shape":{"scale_function":"if","field":"ld:isrefvar","parameters":{"field_value":1,"then":"diamond","else":"circle"}},"point_size":{"scale_function":"if","parameters":{"field_value":1,"then":80,"else":40}},"color":"#357ebd","fields":["trait1:variant","trait1:position","trait1:log_pvalue","trait1:log_pvalue|logtoscinotation","trait1:ref_allele"],"id_field":"trait1:variant","z_index":2,"x_axis":{"field":"trait1:position","axis":1},"y_axis":{"axis":1,"field":"trait1:log_pvalue","floor":0,"upper_buffer":0.1,"min_extent":[0,10]},"behaviors":{"onmouseover":[{"action":"set","status":"highlighted"}],"onmouseout":[{"action":"unset","status":"highlighted"}],"onclick":[{"action":"toggle","status":"selected","exclusive":true}],"onshiftclick":[{"action":"toggle","status":"selected"}]},"tooltip":{"namespace":{"assoc":"trait1"},"closable":true,"show":{"or":["highlighted","selected"]},"hide":{"and":["unhighlighted","unselected"]},"html":"{{trait1:variant}}<br>P Value: {{trait1:log_pvalue|logtoscinotation}}<br>Ref. Allele: {{trait1:ref_allele}}"},"tooltip_positioning":"horizontal","fill_opacity":1}],"title":{"text":"","style":{},"x":10,"y":22},"y_index":0,"origin":{"x":0,"y":0},"proportional_origin":{"x":0,"y":0},"background_click":"clear_selections","cliparea":{"height":231,"width":988,"origin":{"x":50,"y":35}}},{"proportional_height":0.5,"id":"genes","width":1427,"height":402,"min_width":400,"min_height":112.5,"proportional_width":1,"margin":{"top":20,"right":50,"bottom":20,"left":50},"axes":{"x":{"render":false},"y1":{"render":false},"y2":{"render":false}},"interaction":{"drag_background_to_pan":true,"scroll_to_zoom":true,"x_linked":true,"drag_x_ticks_to_scale":false,"drag_y1_ticks_to_scale":false,"drag_y2_ticks_to_scale":false,"y1_linked":false,"y2_linked":false},"dashboard":{"components":[{"type":"remove_panel","position":"right","color":"red","group_position":"end"},{"type":"move_panel_up","position":"right","group_position":"middle","color":"gray"},{"type":"move_panel_down","position":"right","group_position":"start","style":{"margin-left":"0.75em"},"color":"gray"},{"type":"resize_to_data","position":"right","color":"gray"}]},"data_layers":[{"namespace":{"gene":"trait2","gene":"transcripts"},"id":"genes","type":"genes","fields":["trait2:all"],"id_field":"gene_id","behaviors":{"onmouseover":[{"action":"set","status":"highlighted"}],"onmouseout":[{"action":"unset","status":"highlighted"}],"onclick":[{"action":"toggle","status":"selected","exclusive":true}],"onshiftclick":[{"action":"toggle","status":"selected"}]},"tooltip":{"closable":true,"show":{"or":["highlighted","selected"]},"hide":{"and":["unhighlighted","unselected"]},"html":"{{gene_name}} Gene ID: {{gene_id}} pLI = {{pLI}} More data on ExAC"},"stroke":"rgb(54, 54, 150)","color":"#363696","label_font_size":12,"label_exon_spacing":4,"exon_height":16,"bounding_box_padding":6,"track_vertical_spacing":10,"x_axis":{"axis":1},"y_axis":{"axis":1},"z_index":0}],"title":{"text":"","style":{},"x":10,"y":22},"y_index":1,"origin":{"x":0,"y":402},"proportional_origin":{"x":0,"y":0.5},"background_click":"clear_selections","cliparea":{"height":362,"width":1327,"origin":{"x":50,"y":20}},"legend":null}],"min_width":400,"min_height":400,"aspect_ratio":1.7777777777777777,"panel_boundaries":true,"mouse_guide":true};
        layout.dashboard = LocusZoom.Layouts.get("dashboard", "region_nav_plot");
        
        var plot = LocusZoom.populate(el, data_sources, layout);
        
        plot.layout.panels.forEach(function(panel){
            plot.panels[panel.id].addBasicLoader();
        });
        
        window.plot;

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
