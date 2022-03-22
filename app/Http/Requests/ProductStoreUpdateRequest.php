<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:100'],
            'amount' => ['required', 'numeric', 'between:0,999999.99'],
            'description' => ['required', 'string', 'min:3', 'max: 500'],
            'quantity' => ['required', 'numeric', 'min:1'],
        ];
    }
}
