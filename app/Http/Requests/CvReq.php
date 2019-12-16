<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CvReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'info.name' => 'required|string|max:255',
            'info.email' => 'required|string|email',
            'info.number' => 'nullable|starts_with:01|numeric|min:11|max:13',
            'info.title' => 'nullable|string|max:255',
            'info.location' => 'nullable|max:255',
            'info.website' => 'nullable|url',
            'info.website2' => 'nullable|url',
            'info.summary' => 'nullable|max:8000',
        ];
    }
}
