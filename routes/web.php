<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TotaisController;
use GuzzleHttp\Client;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', function () {
   return  view('welcome');
});
Route::get('/totaisdodia', function () {
    $client = new Client();
    // URL da API externa
    $apiUrl = 'http://novope.mobile.rdlsistemas.com.br:8020/totaisdodia';

    // Credenciais de autenticação
    $username = 'RDL';
    $password = 'RDLS3rv3r';
    // Faça a requisição GET à API
    // Fazer a requisição com Authorization Basic
  
        $response = $client->get($apiUrl, [
            'headers' => [
                'Authorization' => 'Basic ' .base64_encode("$username:$password"),
                'Accept' => 'application/json',
                // Adicione outros cabeçalhos, se necessário
            ],
        ]);
    // Obtenha o corpo da resposta como uma string
    $data = $response->getBody()->getContents();

    // Converta os dados JSON para um array (opcional, dependendo do formato da resposta)
    $dataArray = json_decode($data, true);

    // Faça o que for necessário com os dados
   return  $dataArray;
});


