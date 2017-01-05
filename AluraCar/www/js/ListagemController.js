angular.module('starter')
.controller('ListagemController', function($scope, CarroService){

	CarroService.obterCarros().then(function(dados){
		$scope.listCar = dados;
	});

	//$scope.listCar = [{
	//	nome : 'BMW 120i',
	//	preco: 7000
	//}];

  	//$scope.listCar = ['BMW 120i', 'ONIX 1.6', 'Fiesta 2.0'];

});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope){

	$scope.escolhido = angular.fromJson($stateParams.carro);

	$scope.listaAcessorios = [
		{
			nome: 'Freio ABS', preco : 800
		}
	];

	$scope.mudou = function(acessorio, isMarcado){
		
		if (isMarcado) {
			$scope.escolhido.preco = $scope.escolhido.preco + acessorio.preco; 
		}else{
			$scope.escolhido.preco = $scope.escolhido.preco - acessorio.preco; 
		}

	};
});

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope, 
	$ionicPopup, $state){

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);

	$scope.finalizarPedido = function(){
		$ionicPopup.alert({
			title : 'Parabéns',
			template : 'Você acaba de comprar um carro.'
		}).then(function(){
			$state.go('listCar');
		});
	}

});