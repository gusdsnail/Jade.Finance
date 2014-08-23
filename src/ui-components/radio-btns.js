app.directive("kRadioBtns", [function() {
	return {
		restrict: "E",
		replace: true,
		scope: {
			source: "=",
			index: "=?",
			name: "@"
		},
		template: '<div class="k-radio-btns"></div>',
		link: function(scope, elem, attrs) {

			function setIndex() {
				if(!isNaN(scope.index)) {
					$(elem.children()[scope.index])
						.toggleClass("k-radio-btn-selected")
						.toggleClass("k-radio-btn")
						;
					if(scope.index > 0) {

					}
				}

				$(this)
					.toggleClass("k-radio-btn-selected")
					.toggleClass("k-radio-btn")
					;
				scope.index = $(this).data("index");
			}

			if(attrs.width) {
				var btnWidth = attrs.width / scope.source.length;
			} else {
				var btnWidth = "auto";
			}

			for(var i = 0; i < scope.source.length; i++) {
				elem.append(jQuery("<a />", {
					text: scope.source[i],
					class: "k-radio-btn",
					data: {
						index: i
					},
					css: { width: btnWidth },
					click: setIndex
				}));
			}
		}
	}
}])
;