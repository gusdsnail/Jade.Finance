app.directive("kToolbar", ["$window", function($window) {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		templateUrl: "/ui-components/toolbar.html",
		link: function(scope, elem, attrs) {

			angular.element($window).bind("scroll", function() {
				if($window.pageYOffset > 10) {
					elem.addClass("toolbar-bottom");
				} else if(elem.hasClass("toolbar-bottom")) {
					elem.removeClass("toolbar-bottom");
				}
			});

		}
	}
}])
;