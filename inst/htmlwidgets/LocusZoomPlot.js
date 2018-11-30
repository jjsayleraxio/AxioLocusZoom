HTMLWidgets.widget({

  name: 'LocusZoomPlot',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        var stateUrlMapping = {chr: "chrom", start: "start", end: "end"};
        var initialState = {chr: x.chr, start: x.start, end: x.end};
        
        //var apiBase = "https://portaldev.sph.umich.edu/api/v1/";
        var data_sources = new LocusZoom.DataSources()
          .add("assoc", ["AssociationLZ", {url: x.assoc_url, params: {analysis: x.assoc_analysis, id_field: x.assoc_id_field}}])
          .add("ld", ["LDLZ", { url: x.ld_url}])
          .add("gene", ["GeneLZ", { url: x.gene_url, params: {source: x.gene_source} }])
          .add("recomb", ["RecombLZ", { url: x.recomb_url, params: {source: x.recomb_source} }])
          .add("constraint", ["GeneConstraintLZ", { url: x.constraint_url }]);
        
        var layout = LocusZoom.Layouts.get("plot", "standard_association", {state: initialState});
        
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