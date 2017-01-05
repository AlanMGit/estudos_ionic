angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('listCar');

	$stateProvider
		.state('listCar', {
			url:'/listCar',
			templateUrl : 'templates/ListCar.html',
			controller: 'ListagemController'
		})
		.state('carroescolhido', {
			url:'/carroescolhido/:carro',
			templateUrl : 'templates/carroescolhido.html',
			controller: 'CarroEscolhidoController'	
		})
		.state('finalizarpedido', {
			url:'/finalizarpedido/:carro',
			templateUrl : 'templates/finalizarpedido.html',
			controller: 'FinalizarPedidoController'	
		});
})