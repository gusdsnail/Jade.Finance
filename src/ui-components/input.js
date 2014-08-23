app.directive("kInput", ["FormService", "$compile", function(FormService, $compile) {
	return {
		replace: true,
		restrict: "E",
		template: '<input class="form-control">',
		scope: {
			typeahead: "=",
			placeholder: "@"
		},
		link: function(scope, elem, attrs) {

			if(attrs.validation) {
				elem.bind("keypress", FormService[attrs.validation]);
			}

			if (attrs.textAlign) {
				elem.css("text-align", attrs.textAlign);
			}

			if(attrs.readonly) {
				elem.attr("tabindex", -1);
				elem.css("cursor", "default");
			}

			if(scope.typeahead) {
				var bloodhound = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					local: $.map(scope.typeahead, function (state) {
						return { value: state };
					})
				});
				bloodhound.initialize();

				$(elem).typeahead({}, { source: bloodhound.ttAdapter() })

				$(elem).attr("placeholder", attrs.placeholder);
			}

			if(attrs.rightAddon || attrs.leftAddon) {
				elem.wrap('<div class="input-group"></div>');
				elem = elem.parent();

				if(attrs.leftAddon) {
					elem.prepend(jQuery('<span />', {
						class: "input-group-addon",
						text: attrs.leftAddon,
						click: function() {
							$(this).next().focus();
						}
					}));
				}
				if(attrs.rightAddon) {
					elem.append(jQuery('<span />', {
						class: "input-group-addon",
						text: attrs.rightAddon,
						click: function() {
							$(this).prev().focus();
						}
					}));
				}
			}

			if(attrs.readonly) {
				elem.css("border", "none");
				elem.css("box-shadow", "none");
			}

			if (attrs.width) {
				elem.css("width", attrs.width);
			}
		}
	}
}])
;