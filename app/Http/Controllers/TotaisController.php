<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class TotaisController extends Controller
{
    public function index(){
            $client = new Client();

            // Faça a requisição GET à API
            $response = $client->get($apiUrl);

            // Obtenha o corpo da resposta como uma string
            $data = $response->getBody()->getContents();

            // Converta os dados JSON para um array (opcional, dependendo do formato da resposta)
            $dataArray = json_decode($data, true);

            // Faça o que for necessário com os dados
           return  dd($dataArray);

    }
}
