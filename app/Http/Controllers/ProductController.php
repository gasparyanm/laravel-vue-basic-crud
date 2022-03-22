<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreUpdateRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\JsonResponse;
use App\Models\Product;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductController extends Controller
{
    public function index(): ResourceCollection
    {
        return ProductResource::collection(Product::all());
    }

    public function store(ProductStoreUpdateRequest $request): JsonResponse
    {
        Product::create($request->validated());

        return response()->json('Product created!');
    }

    public function show(Product $product): ProductResource
    {
        return new ProductResource($product);
    }

    public function update(ProductStoreUpdateRequest $request, Product $product): JsonResponse
    {
        $product->update($request->validated());

        return response()->json('Product updated!');
    }

    public function destroy(Product $product): JsonResponse
    {
        $product->delete();

        return response()->json('Product deleted!');
    }
}
