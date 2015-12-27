angular
	.module('Whatsapp')
	.directive('input', input);

function input(){
	return{
		restrict: 'E',
		scope:{
			'returnClose': '=',
			'onReturn': '&',
			'onFocus': '&',
			'onBlur': '&'
		},
		link: link
	};


	function link(scope, element, attrs){
		element.bind('focus', function(e){
			if (!scope.onFocus) return;

			$timeout(function(){
				scope.onFocus();
			});
		});

		element.bind('blur', function(e){
			if (!scope.onBlur) return;

			$timeout(function(){
				scope.onBlur();
			});
		});

		element.bind('keydown', function(e){
			if(e.which != 13) return;

			if(scope.returnClose){
				$timeout(function(){
					scope.onReturn();
				});
			}
		});
	}
}