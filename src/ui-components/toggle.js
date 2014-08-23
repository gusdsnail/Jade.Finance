app.directive("kToggle", [function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/ui-components/toggle.html",
		scope: {
			name: "@",
			value: "="
		},
		link: function (scope, elem, attrs) {
			elem.bind("click", function() {
				elem.toggleClass("k-toggle-checked");
				scope.value = !scope.value;
			});

		}
	}
}])
;