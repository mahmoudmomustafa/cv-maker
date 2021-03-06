<!doctype html>

<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CV</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #app {
            font-family: sans-serif;
        }

        h1,
        h3 {
            margin: 0;
        }

        h3 {
            font-weight: 400;
            padding-bottom: .3rem;
        }

        p {
            margin: 0
        }

        .text-xs {
            font-size: .8rem;
            border-left: 1px solid silver;
            padding: 0px 5px;
        }

        .link {
            color: #42abff;
        }

        fieldset {
            border: 0;
            border-top: 1px solid #d4d4d4;
            margin-top: 2.5rem;
            /* padding-top: 2rem; */
            overflow: auto;
            clear: both;
        }

        legend {
            width: auto;
            padding-right: 1rem;
            font-weight: 600;
            font-size: 1.3rem;
            /* margin-top: .2rem; */
            margin-left: -1rem;
            padding-left: 1rem;
        }

        .head {
            /* padding: 1rem; */
            margin: 1.5rem;
            margin-bottom: 0;
            overflow: auto;
            clear: both;
        }

        .data {
            float: left;
        }

        .date {
            float: right
        }

        .section {
            margin-top: .5rem;
            padding: 1rem
        }
    </style>
</head>

<body>
    <div id="app">
        <header>
            <h1 style="font-size:2.5rem">{{$cv->name}}</h1>
            <h3>{{$cv->title}}</h3>
            <div class="flex flex-row">
                @if ($cv->location)
                <span class="text-xs" style="border:0;padding-left:0">{{$cv->location}}</span>
                @endif
                @if ($cv->number)
                <span class="text-xs">0{{$cv->number}}</span>
                @endif
                @if ($cv->email)
                <span class="text-xs link">{{$cv->email}}</span>
                @endif
            </div>
            <div class="flex flex-row">
                @if ($cv->website)
                <span class="text-xs link" style="border:0;padding-left:0">{{$cv->website}}</span>
                @endif
                @if ($cv->website2)
                <span class="text-xs link">{{$cv->website2}}</span>
                @endif
            </div>
        </header>
        {{-- summary --}}
        @if ($cv->summary)
        <section>
            <fieldset>
                <legend>Summary</legend>
                <div class="head">{!!$cv->summary!!}</div>
            </fieldset>
        </section>
        @endif
        {{-- education --}}
        @if (!empty($educations) > 0)
        <section style="padding-top: .5rem">
            <fieldset>
                <legend style="padding-buttom:.3rem">Education</legend>
                @foreach ($educations as $education)
                <div class="section">
                    <div class="head">
                        <div class="data">
                            @if ($education->degree_name)
                            <h3>{{$education->degree_name}}</h3>
                            @endif
                            @if ($education->school_name)
                            <h3>{{$education->school_name}}</h3>
                            @endif
                            @if ($education->edu_des)
                            <div class="font-weight:100;font-size:smaller"><small>{!!$education->edu_des!!}</small>
                            </div>
                            @endif
                        </div>
                        @if ($education->edu_start || $education->edu_end)
                        <div class="date"><span>{{$education->edu_start}}</span> -
                            <span>{{$education->edu_end}}</span>
                        </div>
                        @endif
                    </div>
                </div>
                @endforeach
            </fieldset>
        </section>
        @endif
        {{-- experiencese --}}
        @if (!empty($experiences) > 0)
        <section style="padding-top: .5rem">
            <fieldset>
                <legend style="padding-buttom:.3rem">Experiences</legend>
                @foreach ($experiences as $experience)
                <div class="section">
                    <div class="head">
                        <div class="data">
                            @if ($experience->title)
                            <h3>{{$experience->title}}</h3>
                            @endif
                            @if ($experience->company)
                            <h3>{{$experience->company}}</h3>
                            @endif
                            @if ($experience->desc)
                            <div class="font-weight:100;font-size:.5rem">
                                <small> {!!$experience->desc!!}</small></div>
                            @endif
                        </div>
                        @if ($experience->start_date || $experience->end_date)
                        <div class="date"><span>{{$experience->start_date}}</span> -
                            <span>{{$experience->end_date}}</span>
                        </div>
                        @endif
                    </div>
                </div>
                @endforeach
            </fieldset>
        </section>
        @endif
        {{-- datasection --}}
        @if ($datedSections)
        @foreach ($datedSections as $datedSection)
        <section style="padding-top: .5rem">
            <fieldset>
                <legend style="padding-buttom:.3rem">{{$datedSection->datedHeading}}</legend>
                @foreach (DB::table('dateddata')->where('datedsection_id',$datedSection->id)->get() as $data)
                <div class="sectiona" style="padding:1rem">
                    <div class="heada" style="padding-buttom:.5rem;">
                        <div class="dataa">
                            @if ($data->datedTitle)
                            <h3 style="width:fit-content">{{$data->datedTitle}}</h3>
                            @endif
                            @if ($data->datedOrg)
                            <h3>{{$data->datedOrg}}</h3>
                            @endif
                            @if ($data->datedDesc)
                            <div style="width:80%">{!!$data->datedDesc!!}</div>
                            @endif
                        </div>
                        @if ($data->startDate || $data->endDate)
                        <div class="date">
                            <span>{{$data->startDate}}</span> -
                            <span>{{$data->endDate}}</span>
                        </div>
                        @endif
                    </div>
                </div>
                @endforeach
            </fieldset>
        </section>
        @endforeach
        @endif
        {{-- sections --}}
        @if ($cv->sections())
        @foreach ($sections as $section)
        <section style="padding-top:.5rem">
            <fieldset style="padding-buttom:0">
                <legend style="padding-buttom:.3rem">{{$section->secHeading}}</legend>
                <div class="head" style="padding-buttom:0">{!!$section->secDesc!!}</div>
            </fieldset>
        </section>
        @endforeach
        @endif
    </div>
</body>

</html>