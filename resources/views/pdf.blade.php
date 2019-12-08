<!doctype html>

<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
            margin-top: 1.5rem;
        }

        legend {
            width: auto;
            padding-right: 1rem;
            font-weight: 600;
            font-size: 1.3rem;
            margin-bottom: 2rem;
            margin-left: -1rem;
            padding-left: 1rem;
        }

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .head {
            overflow: auto
        }

        .data {
            float: left;
        }

        .date {
            float: right
        }
    </style>
</head>

<body>
    <div id="app">
        <header>
            <h1 style="font-size:2.8rem">{{$cv->name}}</h1>
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
                <p>{!!$cv->summary!!}</p>
            </fieldset>
        </section>
        @endif
        {{-- education --}}
        @if ($educations)
        <section>
            <fieldset>
                <legend>Education</legend>
                @foreach ($educations as $education)
                <div>
                    <div class="head">
                        <div class="data">
                            @if ($education->degree_name)
                            <h3>{{$education->degree_name}}</h3>
                            @endif
                            @if ($education->school_name)
                            <h3>{{$education->school_name}}</h3>
                            @endif
                            @if ($education->edu_des)
                            <p>{!!$education->edu_des!!}</p>
                            @endif
                        </div>
                        @if ($education->edu_start || $education->edu_end)
                        <div class="date"><span>{{$education->edu_start}}</span> - <span>{{$education->edu_end}}</span>
                        </div>
                        @endif
                    </div>
                </div>
                @endforeach
            </fieldset>
        </section>
        @endif
        {{-- experiencese --}}
        @if ($experiences)
        <section>
            <fieldset>
                <legend>Experiences</legend>
                @foreach ($experiences as $experience)
                <div>
                    <div class="head">
                        <div class="data">
                            @if ($experience->title)
                            <h3>{{$experience->title}}</h3>
                            @endif
                            @if ($experience->company)
                            <h3>{{$experience->company}}</h3>
                            @endif
                            @if ($experience->desc)
                            <p>{!!$experience->desc!!}</p>
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
        {{-- sections --}}
        @if ($sections)
        @foreach ($sections as $section)
        <section>
            <fieldset>
                <legend>{{$section->secHeading}}</legend>
                <p>{!!$section->secDesc!!}</p>
            </fieldset>
        </section>
        @endforeach
        @endif
    </div>
</body>

</html>