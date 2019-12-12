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
            'info.name' => 'bail|alpha|max:255',
            'info.email' => 'email',
            'info.number' => 'numeric',
            'info.title' => 'alpha|max:100',
            'info.location' => 'alpha|max:100',
            'info.website' => 'url',
            'info.website2' => 'url',
            'info.summary' => 'max:800',
        ];
    }
}
