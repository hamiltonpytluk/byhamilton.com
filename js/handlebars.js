(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['project.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    return "                        <i class=\"fa fa-lg fa-"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"></i>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<article class=\""
    + alias3(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"size","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"overlay\">\n        <a href=\"#/"
    + alias3(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n            <span class=\"vh\"></span>\n            <div class=\"blurb\">\n                <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n                <span>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </span>\n            </div>\n        </a>\n    </div>\n    <img src=\""
    + alias3(((helper = (helper = helpers.hero || (depth0 != null ? depth0.hero : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hero","hash":{},"data":data}) : helper)))
    + "\" />\n</article>\n";
},"useData":true});
templates['showcase.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    return "                    <i class=\"fa fa-"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"></i>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <li style=\"background-image: url("
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.picture : depth0)) != null ? stack1.value : stack1)) != null ? stack1.main : stack1)) != null ? stack1.url : stack1), depth0))
    + ")\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"showcase-overlay\">\n    <section class=\"showcase-popup\">\n        <div class=\"blurb\">\n            <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n            <span>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n            <div class=\"key\">\n                <ul>\n                    <li><i class=\"fa fa-paint-brush\"></i> Designed</li>\n                    <li><i class=\"fa fa-html5\"></i> Developed (HTML5/SASS)</li>\n                    <li><i class=\"fa fa-code\"></i> Used jQuery</li>\n                    <li><i class=\"fa fa-gears\"></i> Digital Producer</li>\n                    <li><i class=\"fa fa-search\"></i> SEO Optimized</li>\n                    <li><i class=\"fa fa-envelope\"></i> Email Campaign</li>\n                    <li><i class=\"fa fa-camera\"></i> Photography</li>\n                </ul>\n            </div>\n            <a target=\"_blank\" href=\""
    + alias3(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"site","hash":{},"data":data}) : helper)))
    + "\">View project</a>\n        </div>\n        <div class=\"images\">\n            <a class=\"previous\" href=\"#\"><i class=\"fa fa-4x fa-angle-left\"></i></a>\n            <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.gallery : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n            <a class=\"next\" href=\"#\"><i class=\"fa fa-4x fa-angle-right\"></i></a>\n        </div>\n    </section>\n</div>\n<div class=\"showcase-close\">\n    <a href=\"#/\"><i class=\"fa fa-2x fa-times\"></i></a>\n</div>";
},"useData":true});
})();