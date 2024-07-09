<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Client Routes
|--------------------------------------------------------------------------
|
| Route related to the client application test
|
*/

Route::get('products/{slug}', function ($slug) {
  if ($slug !== 'fall-limited-edition-sneakers') {
    return response()->json([
      'data' => null,
      'msg' => 'Item not found.'
    ], 404);
  }
  return response()->json([
    'data' => [
      'id' => '1',
      'name' => 'Fall Limited Edition Sneakers',
      'description' => 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
      'price' => [
        'full' => 250,
        'discounted' => 125
      ],
      'discount' => [
        'type' => 'percent',
        'amount' => 50
      ],
      'images' => [
        '/images/image-product-1.jpg',
        '/images/image-product-2.jpg',
        '/images/image-product-3.jpg',
        '/images/image-product-4.jpg',
      ]
    ]
  ]);
});
